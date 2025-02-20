import scss from "./ProjectPage3.module.scss";
import { Row, Col, Typography, Form, DatePicker } from "antd";

const { Title, Paragraph, Link } = Typography;

function ProjectPage3() {
  return (
    <div className={scss.container}>
      <Row gutter={24}>
        <Col span={17} className={scss.colLeft}>
          <Title className={scss.title3} level={3}>
            Thời lượng dự án
          </Title>
          <Title className={scss.title5} level={5}>
            Ngày bắt đầu dự án
          </Title>
          <Form.Item name="startDate">
            <DatePicker />
          </Form.Item>
          <Title className={scss.title5} level={5}>
            Ngày kết thúc dự án
          </Title>
          <Form.Item name="endDate">
            <DatePicker />
          </Form.Item>
          <div>
            <Paragraph className={scss.text} type="secondary">
              Bài đăng của bạn đã sẵn sàng để đăng. Khi nhấn nút đăng mọi người
              sẽ nhìn thấy bài đăng của bạn
            </Paragraph>
          </div>
        </Col>

        <Col span={7} className={scss.colRight}>
          <Title className={scss.title5} level={4}>
            Mẹo nếu bạn gặp khó khăn
          </Title>
          <div>
            <Title className={scss.title5} level={5}>
              Ngày bắt đầu
            </Title>
            <Paragraph className={scss.text} type="secondary">
              Ngày dự kiến mà bạn phải bắt đầu dự án của mình.
            </Paragraph>
            <Title className={scss.title5} level={5}>
              Ngày kết thúc
            </Title>
            <Paragraph className={scss.text} type="secondary">
              Ngày dự kiến dự án của bạn được hoàn thành và trả tiền cho
              freelancer.
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

export default ProjectPage3;
