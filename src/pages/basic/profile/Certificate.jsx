import React, { useState } from 'react';
import { Form, Input, Button, Card, DatePicker, Collapse, Tooltip } from 'antd';
import { DeleteOutlined, PlusOutlined, CaretRightOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import dayjs from 'dayjs';

const { Panel } = Collapse;

const StyledCard = styled(Card)`
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transform: translateY(-2px);
  }

  .ant-card-head {
    border-bottom: 1px solid #f0f0f0;
    padding: 0 24px;
    min-height: 48px;
    background: #fafafa;
    border-radius: 12px 12px 0 0;
  }

  .ant-collapse {
    border: none;
    background: none;
  }

  .ant-collapse-item {
    border-bottom: none;
  }

  .ant-collapse-header {
    padding: 12px 16px !important;
    background: #fafafa;
    border-radius: 8px !important;
    margin-bottom: 8px;
    
    &:hover {
      background: #f0f0f0;
    }
  }

  .ant-collapse-content {
    border-top: none;
    background: white;
  }

  .certificate-form-item {
    margin-bottom: 24px;
    padding: 16px;
    background: #fafafa;
    border-radius: 8px;
    position: relative;
    
    &:hover {
      background: #f5f5f5;
    }

    .delete-button {
      position: absolute;
      top: 16px;
      right: 16px;
      opacity: 0;
      transition: opacity 0.3s;
    }

    &:hover .delete-button {
      opacity: 1;
    }
  }
`;

const Certificate = ({ form, certificates = [], onRemove }) => {
  const [expandedSections, setExpandedSections] = useState(['0']);

  return (
    <StyledCard 
      title="Chứng chỉ" 
      className="mb-4"
      extra={
        <Button
          type="primary"
          ghost
          icon={<PlusOutlined />}
          onClick={() => {
            const newCertificates = form.getFieldValue('certificates') || [];
            const newIndex = newCertificates.length;
            form.setFieldsValue({
              certificates: [...newCertificates, {}]
            });
            setExpandedSections([String(newIndex)]);
          }}
        >
          Thêm chứng chỉ
        </Button>
      }
    >
      <Form.List name="certificates">
        {(fields, { add, remove }) => (
          <Collapse
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            activeKey={expandedSections}
            onChange={(keys) => setExpandedSections(keys)}
            defaultActiveKey={['0']}
          >
            {fields.map((field, index) => (
              <Panel
                header={
                  form.getFieldValue(['certificates', index, 'name']) || 
                  `Chứng chỉ ${index + 1}`
                }
                key={String(index)}
                className="certificate-form-item"
              >
                <Form.Item
                  {...field}
                  label="Tên chứng chỉ"
                  name={[field.name, 'name']}
                  rules={[{ required: true, message: 'Vui lòng nhập tên chứng chỉ' }]}
                >
                  <Input placeholder="VD: AWS Solutions Architect" />
                </Form.Item>

                <Form.Item
                  {...field}
                  label="Tổ chức cấp"
                  name={[field.name, 'organization']}
                  rules={[{ required: true, message: 'Vui lòng nhập tổ chức cấp' }]}
                >
                  <Input placeholder="VD: Amazon Web Services" />
                </Form.Item>

                <Form.Item
                  {...field}
                  label="Ngày cấp"
                  name={[field.name, 'dateReceived']}
                  rules={[{ required: true, message: 'Vui lòng chọn ngày cấp' }]}
                  getValueProps={(i) => ({ value: i ? dayjs(i) : undefined })}
                >
                  <DatePicker 
                    style={{ width: '100%' }} 
                    format="DD/MM/YYYY"
                    placeholder="Chọn ngày cấp"
                  />
                </Form.Item>

                <Form.Item
                  {...field}
                  label="Mô tả"
                  name={[field.name, 'description']}
                >
                  <Input.TextArea 
                    placeholder="Mô tả thêm về chứng chỉ của bạn"
                    rows={4}
                  />
                </Form.Item>

                <Tooltip title="Xóa">
                  <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    className="delete-button"
                    onClick={() => {
                      remove(field.name);
                      onRemove && onRemove(field.name);
                    }}
                  />
                </Tooltip>
              </Panel>
            ))}
          </Collapse>
        )}
      </Form.List>
    </StyledCard>
  );
};

export default Certificate; 