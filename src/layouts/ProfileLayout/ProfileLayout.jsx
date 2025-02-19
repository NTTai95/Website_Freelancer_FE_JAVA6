import React, { useState, useEffect } from "react";
import { Row, Col, Menu, Skeleton } from "antd";
import { useNavigate } from "react-router-dom";
import profileApi from "../../api/profileApi";
import {
  UserOutlined,
  ApartmentOutlined,
  BarChartOutlined,
  RetweetOutlined,
  LogoutOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import MenuItem from "antd/es/menu/MenuItem";
import CardUpLoadImage from "@components/card/CardUploadImage";

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
    <div>
      <Row>
        <Col span={6} className={"container border-end"}>
          {profile ? (
            <CardUpLoadImage profile={profile}></CardUpLoadImage>
          ) : (
            <Skeleton.Image
              className={"w-100"}
              style={{ height: "250px" }}
            ></Skeleton.Image>
          )}

          <Menu
            mode="inline"
            selectedKeys={[active]}
            style={{ height: "100%", borderRight: 0, marginTop: "20px" }}
          >
            <Menu.Item
              key="profile"
              icon={<IdcardOutlined />}
              onClick={() => nagivate("/profile")}
            >
              Thông tin
            </Menu.Item>
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
