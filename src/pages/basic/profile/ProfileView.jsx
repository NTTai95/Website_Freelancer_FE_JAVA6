import React from 'react';
import { Card, Typography, Row, Col, Tag, Timeline } from 'antd';
import { BookOutlined, TrophyOutlined, CalendarOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Title, Text } = Typography;

const StyledCard = styled(Card)`
  margin-bottom: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);

  .ant-card-head {
    border-bottom: 1px solid #f0f0f0;
    padding: 16px 24px;
    background: #fafafa;
    border-radius: 12px 12px 0 0;
  }

  .section-title {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #1890ff;
    margin-bottom: 24px;
    
    .anticon {
      font-size: 24px;
    }
  }

  .education-item, .certificate-item {
    padding: 16px;
    background: #fafafa;
    border-radius: 8px;
    margin-bottom: 16px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
  }

  .gpa-tag {
    background: #1890ff;
    color: white;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 16px;
    font-size: 14px;
  }

  .date-tag {
    background: #f0f0f0;
    color: #666;
    padding: 4px 12px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    gap: 4px;
    width: fit-content;
  }
`;

const ProfileView = ({ profile }) => {
  const formatGPA = (gpa) => {
    if (!gpa && gpa !== 0) return null;
    return Number(gpa).toFixed(1);
  };

  return (
    <div>
      {/* Học vấn */}
      <StyledCard>
        <div className="section-title">
          <BookOutlined />
          <Title level={4} style={{ margin: 0 }}>Học vấn</Title>
        </div>
        {profile?.academicInfos?.map((edu, index) => (
          <div key={index} className="education-item">
            <Row justify="space-between" align="middle">
              <Col>
                <Title level={5} style={{ margin: 0 }}>{edu.schoolName}</Title>
              </Col>
              <Col>
                {edu.gpa !== undefined && edu.gpa !== null && (
                  <span className="gpa-tag">
                    GPA: {formatGPA(edu.gpa)}
                  </span>
                )}
              </Col>
            </Row>
            <Text type="secondary" style={{ fontSize: '16px', display: 'block', marginTop: '8px' }}>
              {edu.major}
            </Text>
            {edu.description && (
              <Text style={{ display: 'block', marginTop: '12px' }}>
                {edu.description}
              </Text>
            )}
          </div>
        ))}
      </StyledCard>

      {/* Chứng chỉ */}
      <StyledCard>
        <div className="section-title">
          <TrophyOutlined />
          <Title level={4} style={{ margin: 0 }}>Chứng chỉ</Title>
        </div>
        {profile?.certificates?.map((cert, index) => (
          <div key={index} className="certificate-item">
            <Row justify="space-between" align="middle">
              <Col>
                <Title level={5} style={{ margin: 0 }}>{cert.name}</Title>
              </Col>
              <Col>
                <div className="date-tag">
                  <CalendarOutlined />
                  {new Date(cert.dateReceived).toLocaleDateString('vi-VN')}
                </div>
              </Col>
            </Row>
            <Text type="secondary" style={{ fontSize: '16px', display: 'block', marginTop: '8px' }}>
              {cert.organization}
            </Text>
            {cert.description && (
              <Text style={{ display: 'block', marginTop: '12px' }}>
                {cert.description}
              </Text>
            )}
          </div>
        ))}
      </StyledCard>
    </div>
  );
};

export default ProfileView; 