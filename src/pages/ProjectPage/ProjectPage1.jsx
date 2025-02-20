import scss from "./ProjectPage1.module.scss";
import { Input, Row, Col, Typography, Form } from "antd";

function ProjectPage1() {
  const { Title, Paragraph, Link } = Typography;

  return (
    <div className={scss.container}>
      <Row gutter={24}>
        <Col span={17} className={scss.colLeft}>
          <Title className={scss.title3} level={3}>
            Tổng quan dự án
          </Title>
          <Title className={scss.title5} level={5}>
            Tiêu đề dự án
          </Title>
          <Form.Item name="title">
            <Input placeholder="Nhập tiêu đề dự án" size="large" />
          </Form.Item>
          <Title className={scss.title5} level={5}>
            Mô tả dự án
          </Title>
          <Form.Item name="description" rules={[{ required: true, message: "Vui lòng nhập mô tả dự án" }]}>
            <Input.TextArea
              className={scss.description}
              showCount
              maxLength={10000}
              rows={7}
              placeholder="Nhập mô tả dự án"
            />
          </Form.Item>
        </Col>
        <Col span={7} className={scss.colRight}>
          <Title className={scss.title5} level={4}>
            Mẹo nếu bạn gặp khó khăn
          </Title>
          <div>
            <Title className={scss.title5} level={5}>
              Yêu cầu dự án
            </Title>
            <Paragraph className={scss.text} type="secondary">
              Ngắn gọn vấn đề, khó khăn bạn gặp phải là gì? cần được hỗ trợ
              những gì?
            </Paragraph>
            <Title className={scss.title5} level={5}>
              Mô tả dự án
            </Title>
            <Paragraph className={scss.text} type="secondary">
              Mô tả chi tiết đầy đủ về vấn đề, khó khăn bạn gặp phải và cần được
              hỗ trợ những gì?
            </Paragraph>
            <Link className={scss.link} href="#" type="success">
              Video từng bước về cách tạo dự án
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ProjectPage1;
