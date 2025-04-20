import React, { useState } from 'react';
import { Form, Input, Button, Card, InputNumber, Collapse, Tooltip } from 'antd';
import { DeleteOutlined, PlusOutlined, CaretRightOutlined } from '@ant-design/icons';
import styled from 'styled-components';

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

  .academic-form-item {
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

const StyledInputNumber = styled(InputNumber)`
  width: 100%;
  .ant-input-number-handler-wrap {
    opacity: 1;
  }
`;

const AcademicInfo = ({ form, academicInfos = [], onRemove }) => {
  const [expandedSections, setExpandedSections] = useState(['0']);

  const validateGPA = (_, value) => {
    if (value === null || value === undefined) {
      return Promise.reject('Vui lòng nhập GPA');
    }
    if (value < 0 || value > 4) {
      return Promise.reject('GPA phải nằm trong khoảng từ 0 đến 4');
    }
    return Promise.resolve();
  };

  return (
    <StyledCard 
      title="Học vấn" 
      className="mb-4"
      extra={
        <Button
          type="primary"
          ghost
          icon={<PlusOutlined />}
          onClick={() => {
            const newAcademics = form.getFieldValue('academicInfos') || [];
            const newIndex = newAcademics.length;
            form.setFieldsValue({
              academicInfos: [...newAcademics, {}]
            });
            setExpandedSections([String(newIndex)]);
          }}
        >
          Thêm học vấn
        </Button>
      }
    >
      <Form.List name="academicInfos">
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
                  form.getFieldValue(['academicInfos', index, 'schoolName']) || 
                  `Học vấn ${index + 1}`
                }
                key={String(index)}
                className="academic-form-item"
              >
                <Form.Item
                  {...field}
                  label="Tên trường"
                  name={[field.name, 'schoolName']}
                  rules={[{ required: true, message: 'Vui lòng nhập tên trường' }]}
                >
                  <Input placeholder="VD: Đại học FPT" />
                </Form.Item>

                <Form.Item
                  {...field}
                  label="Chuyên ngành"
                  name={[field.name, 'major']}
                  rules={[{ required: true, message: 'Vui lòng nhập chuyên ngành' }]}
                >
                  <Input placeholder="VD: Công nghệ phần mềm" />
                </Form.Item>

                <Form.Item
                  {...field}
                  label="GPA"
                  name={[field.name, 'gpa']}
                  rules={[{ validator: validateGPA }]}
                >
                  <StyledInputNumber
                    placeholder="VD: 3.5"
                    min={0}
                    max={4}
                    step={0.1}
                    precision={1}
                    formatter={value => value}
                    parser={value => value}
                  />
                </Form.Item>

                <Form.Item
                  {...field}
                  label="Giới thiệu"
                  name={[field.name, 'description']}
                >
                  <Input.TextArea 
                    placeholder="Mô tả thêm về quá trình học tập của bạn"
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

export default AcademicInfo; 