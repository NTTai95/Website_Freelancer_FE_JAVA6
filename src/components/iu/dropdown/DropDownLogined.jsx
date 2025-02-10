import React from "react";
import { Menu, Dropdown, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import scss from "./DropDownHeader.module.scss";

const DropDownLogined = ({ profile }) => {
  const navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("logined");
    navigate("/home");
    window.location.reload();
  }

  const items = [
    {
      key: "profile",
      label: "Thông tin",
      onClick: () => navigate("/profile"),
    },
    {
      type: "divider",
    },
    {
      key: "profileFreelancer",
      label: "Freelancer",
      onClick: () => navigate("/profile/freelancer"),
    },
    {
      key: "profileRecruiter",
      label: "Nhà tuyển dụng",
      onClick: () => navigate("#"),
    },
    {
      type: "divider",
    },
    {
      key: "changePassword",
      label: "Đổi mật khẩu",
      onClick: () => navigate("#"),
    },
    {
      key: "logout",
      label: "Đăng xuất",
      onClick: () => handleLogout(),
    },
  ];

  console.log(profile);

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <div className={"d-flex align-items-center " + scss["cursor-pointer"]}>
        <span className={scss.fullName}>{profile.fullName}</span>
        {profile?.avatar ? (
          <Avatar size={40} src={profile.avatar} className={"border"} />
        ) : (
          <Avatar size={40} icon={<UserOutlined />} />
        )}
      </div>
    </Dropdown>
  );
};

export default DropDownLogined;
