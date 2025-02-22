import { useState, useEffect } from "react";
import skillApi from "@api/skillApi";
import languageApi from "@api/languageApi";
import freelancerApi from "@api/freelancerApi";
import profileApi from "@api/profileApi";
import scss from "./Freelancer.module.scss";
import {
  Row,
  Col, Avatar, Typography, List, Card
} from "antd";


const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A1", "#A133FF"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];


const Freelancer = () => {
  const [freelancer, setFreelancer] = useState(null);
  const [skills, setSkills] = useState(['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Python']);
  const [languages, setLanguages] = useState(['Tiếng Anh']);
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const logined = JSON.parse(sessionStorage.getItem("logined"));
      if (!logined) return;

      // Get profile data
      const profileRes = await profileApi.getByAccountId(logined.id);
      if (profileRes.status === 200) {
        setProfile(profileRes.data);
      }

      // Get freelancer data
      const resFreelancer = await freelancerApi.getByAccountId(logined.id);
      setFreelancer(resFreelancer.data);

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={scss.freelancerprofile}>
      <div className={scss.container}>
        <Row>
          <Col span={8}>
            <Card className={scss.leftSection}>
              <div className="row" style={{ background: randomColor, padding: '5px' }}> <Avatar size={150} src={profile?.image || ""} /></div>
              <h2>Nguyễn Văn A</h2>
              <p>Năm sinh: 1999</p>
              <p>Ngày vào: 19-02-2025</p>
              <p>Số điện thoại: 0901234567</p>
            </Card>
          </Col>
          <Col span={16}>
            <Card className={scss.introduction}>
              <Typography.Title level={3}>Giới thiệu</Typography.Title>
              <Typography.Paragraph>
                {freelancer?.introduction || "Chưa có thông tin giới thiệu"}
              </Typography.Paragraph>
            </Card>

            <Card className={scss.skillsLanguages}>
              <Typography.Title level={3}>Kĩ năng</Typography.Title>
              <List
                dataSource={skills}
                renderItem={(skill) => (
                  <List.Item>{skill}</List.Item>
                )}
              />
            </Card>
            <Card>
              <Typography.Title level={3}>Ngôn ngữ</Typography.Title>
              <List
                dataSource={languages}
                renderItem={(language) => (
                  <List.Item>{language}</List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>);};
export default Freelancer;