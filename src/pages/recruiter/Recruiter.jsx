import { Tag, Divider, Row, Col, Card, Avatar, Typography } from "antd";
import profileApi from '@api/profileApi'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Image } from "antd";
import RecruiterApi from "../../api/recruiterApi";
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A1", "#A133FF"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
function Recruiter() {
  const [profile, setProfile] = useState(null);
  const [recruiters, setRecruiters] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const logined = JSON.parse(sessionStorage.getItem("logined"));
    if (logined) {
      if (logined.type) {
        navigate("/404");
      } else {
        profileApi.getByAccountId(logined.id).then((response) => {
          if (response.status == 200) {
            setProfile(response.data);
          }
          RecruiterApi.getByAccountId(logined.id).then((res) => {
            if (res.status == 200) {
              setRecruiters(res.data);
            }
          });
        })
      }
    }
  }, []);
  return (
    <div className="container">
      <Row>
        <Col span={8}>
          <Card>
            <Image
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <h2>{profile?.recruiter?.companyName}</h2>
            <p>Email: {profile?.email}</p>
            <p>Số điện thoại: {profile?.phone}</p>
          </Card>
        </Col>
        <Col span={16}>
          <Card>
            <Typography.Title level={3}>Giới thiệu</Typography.Title>
            <Typography.Paragraph>
              {profile?.recruiter?.description || "Chưa có thông tin giới thiệu"}
            </Typography.Paragraph>
          </Card>
          <Card>
            <Typography.Title level={3}>Số lượng công việc đã đăng: 10</Typography.Title>
            <Typography.Title level={3}>Số lượng Freelancer đã thuê: 7 </Typography.Title>
          </Card>
          <Card>
            <Typography.Title level={3}>Ngôn ngữ có thể giao tiếp</Typography.Title>
            <div>
              <Tag className="fs-6 p-1" color="purple">Tiếng Anh</Tag>
              <Tag className="fs-6 p-1" color="cyan">Tiếng Việt</Tag>
              <Tag className="fs-6 p-1" color="red">Tiếng Đức</Tag>
              <Tag className="fs-6 p-1" color="gold">Tiếng Hàn</Tag>
            </div>
          </Card>
          <Card>
            <Typography.Title level={3}>Kỹ năng yêu cầu cho công việc</Typography.Title>
            <div>
              <Tag className="fs-6 p-1" bordered={false} color="processing">Java</Tag>
              <Tag className="fs-6 p-1" bordered={false} color="gold">React</Tag>
              <Tag className="fs-6 p-1" bordered={false} color="magenta">NodeJS</Tag>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default Recruiter;
