import scss from "./ProjectPage2.module.scss";
import {
  InputNumber,
  Form,
  Button,
  Row,
  Col,
  Typography,
  Checkbox,
} from "antd";
import { useEffect, useState } from "react";
import skillApi from "@api/skillApi";

function ProjectPage2() {
  const { Title } = Typography;
  //tạo biến skills và lấy dữ liệu Skills từ api
  const [skills, setSkills] = useState([]);

  const fetchSkills = async () => {
    try {
      const res = await skillApi.getAll();
      setSkills(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div className={scss.container}>
      <Row gutter={24}>
        <Col span={17} className={scss.colLeft}>
          <Title className={scss.title3} level={3}>
            Ngân sách và lĩnh vực
          </Title>
          <Title className={scss.title5} level={5}>
            Ngân sách dự án
          </Title>
          <Form.Item name="budget">
            <InputNumber
              addonAfter="₫"
              placeholder="VD: 100.000"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
          <Title className={scss.title5} level={5}>
            Lĩnh vực tuyển dụng
          </Title>
          <div className={scss.CheckboxGroup}>
            <Row>
              <Form.Item name="skills">
                <Checkbox.Group style={{ width: "100%" }}>
                  <Row>
                    {skills.map((skill) => (
                      <Col span={6} key={skill.id}>
                        <Checkbox className={scss.Checkbox} value={skill.id}>{skill.name}</Checkbox>
                      </Col>
                    ))}
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </Row>
          </div>
        </Col>
        <Col span={7} className={scss.colRight}>
          <Title className={scss.title5} level={4}>
            Mẹo nếu bạn gặp khó khăn
          </Title>
          <div>
            <Title className={scss.title5} level={5}>
              Ngân sách dự án
            </Title>
            <Typography.Paragraph className={scss.text} type="secondary">
              Khoản chi phí bạn sẽ chi trả cho freelancer làm dự án này.
            </Typography.Paragraph>
            <Title className={scss.title5} level={5}>
              Lĩnh vực tuyển dụng
            </Title>
            <Typography.Paragraph className={scss.text} type="secondary">
              Các lĩnh vực yêu cầu freelancer phải đáp ứng được.
            </Typography.Paragraph>
            <Typography.Link className={scss.link} href="#" type="success">
              Video từng bước về cách tạo dự án
            </Typography.Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default ProjectPage2;
