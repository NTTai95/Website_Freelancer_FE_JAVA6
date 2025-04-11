import React, { useState, useEffect } from "react";
import { Row, Col, Menu, Skeleton } from "antd";
import { useNavigate } from "react-router-dom";
import profileApi from "@api/profileApi";
import authenticationApi from "@api/authenticationApi"; // bạn đã quên import dòng này
import {
  UserOutlined,
  ApartmentOutlined,
  BarChartOutlined,
  RetweetOutlined,
  LogoutOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import CardUpLoadImage from "@components/card/CardUploadImage";

const ProfileLayout = ({ children, active }) => {
  const [profile, setProfile] = useState(null);
  const [isStaff, setIsStaff] = useState(null); // ban đầu là null để phân biệt chưa load
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const res = await authenticationApi.isStaff();
        const { isStaff, id } = res.data;
        setIsStaff(isStaff);

        if (isStaff) {
          navigate("/404");
        } else {
          const profileRes = await profileApi.getByAccountId(id);
          if (profileRes.status === 200) {
            setProfile(profileRes.data);
          }
        }
      } catch (error) {
        console.error("Error loading profile:", error);
      }
    };

    fetchData();
  }, [token, navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("logined");
    navigate("/home");
    window.location.reload();
  };

  const menuItems = [
    {
      key: "profile",
      icon: <IdcardOutlined />,
      label: "Thông tin",
      onClick: () => navigate("/profile"),
    },
    {
      key: "freelancer",
      icon: <UserOutlined />,
      label: "Freelancer",
      onClick: () => navigate("/profile/freelancer"),
    },
    {
      key: "recruiters",
      icon: <ApartmentOutlined />,
      label: "Nhà tuyển dụng",
      onClick: () => navigate("/profile/recruiters"),
    },
    {
      key: "statistic",
      icon: <BarChartOutlined />,
      label: "Thống kê",
      onClick: () => navigate("/profile/statistic"),
    },
    {
      type: "divider",
    },
    {
      key: "changePassword",
      icon: <RetweetOutlined />,
      label: "Đổi mật khẩu",
      onClick: () => navigate("/changePassword"),
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Đăng xuất",
      onClick: handleLogout,
    },
  ];

  // Hiển thị loading trong lúc kiểm tra
  if (isStaff === null) {
    return (
      <div className="container p-5">
        <Skeleton active />
      </div>
    );
  }

  return (
    <div>
      <Row>
        <Col span={6} className="container border-end">
          {profile ? (
            <CardUpLoadImage profile={profile} />
          ) : (
            <Skeleton.Image className="w-100" style={{ height: "250px" }} />
          )}

          <Menu
            mode="inline"
            selectedKeys={[active]}
            style={{ height: "100%", borderRight: 0, marginTop: "20px" }}
            items={menuItems}
          />
        </Col>
        <Col span={18} className="container">
          {children}
        </Col>
      </Row>
    </div>
  );
};

export default ProfileLayout;
