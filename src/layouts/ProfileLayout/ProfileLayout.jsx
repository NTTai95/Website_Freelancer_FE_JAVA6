import React, { useState, useEffect } from "react";
import { Row, Col, Card, Menu, Skeleton, Button, Image } from "antd";
import { useNavigate } from "react-router-dom";
import profileApi from "../../api/profileApi";
import moment from "moment/moment";
import {
  UserOutlined,
  ApartmentOutlined,
  BarChartOutlined,
  RetweetOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import MenuItem from "antd/es/menu/MenuItem";

const ProfileLayout = ({ children, active }) => {
  const [profile, setProfile] = useState(null);
  const nagivate = useNavigate();

  useEffect(() => {
    const logined = JSON.parse(sessionStorage.getItem("logined"));
    if (logined) {
      if (logined.type) {
        nagivate("/404");
      } else {
        profileApi.getByAccountId(logined.id).then((response) => {
          if (response.status == 200) {
            setProfile(response.data);
          }
        });
      }
    }
  }, []);

  function handleLogout() {
    sessionStorage.removeItem("logined");
    nagivate("/home");
    window.location.reload();
  }

  return (
    <div className="container">
      <Row>
        <Col span={6} className={"container border-end"}>
          <Card
            className="overflow-hidden"
            hoverable
            cover={
              profile?.freelancer?.avatar ? (
                <Image
                  src={profile?.freelancer?.avatar}
                  alt="Cloudinary Image"
                />
              ) : (
                <Skeleton.Image
                  style={{ width: "100%", height: "200px" }}
                  active
                ></Skeleton.Image>
              )
            }
          >
            <Skeleton active loading={!profile}>
              <div>
                <b>Họ tên: </b>
                <span>{profile?.fullName}</span>
              </div>
              <div>
                <b>Ngày sinh: </b>
                <span>
                  {profile?.birthday
                    ? moment(profile.birthday).format("DD/MM/YYYY")
                    : "Chưa có"}
                </span>
              </div>
              <div>
                <b>Email: </b>
                <span>{profile?.account?.email}</span>
              </div>
              <div>
                <b>Di động: </b>
                <span>{profile?.phone}</span>
              </div>
            </Skeleton>
            <Button className="mt-3 w-100" type="primary">
              Chỉnh sửa
            </Button>
          </Card>
          <Menu
            mode="inline"
            defaultSelectedKeys={active}
            style={{ height: "100%", borderRight: 0, marginTop: "20px" }}
          >
            <Menu.Item
              key="freelancer"
              icon={<UserOutlined />}
              onClick={() => nagivate("/profile/freelancer")}
            >
              Freelancer
            </Menu.Item>
            <Menu.Item
              key="recruiters"
              icon={<ApartmentOutlined />}
              onClick={() => nagivate("/profile/recruiters")}
            >
              Nhà tuyển dụng
            </Menu.Item>
            <Menu.Item
              key="statistic"
              icon={<BarChartOutlined />}
              onClick={() => nagivate("/profile/statistic")}
            >
              Thống kê
            </Menu.Item>
            <Menu.Divider></Menu.Divider>
            <MenuItem
              key="change-password"
              icon={<RetweetOutlined />}
              onClick={() => nagivate("/change-password")}
            >
              Đổi mật khẩu
            </MenuItem>
            <Menu.Item
              key="logout"
              icon={<LogoutOutlined />}
              onClick={() => handleLogout()}
            >
              Đăng xuất
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={18} className={"container"}>
          {children}
        </Col>
      </Row>
    </div>
  );
};

export default ProfileLayout;
