import React from "react";
import { Menu, Dropdown, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import scss from "./DropDownHeader.module.scss";

const DropDownLogined = ({ staff }) => {
  const navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("logined");
    navigate("/home");
    window.location.reload();
  }

  const menu = (
    <Menu>
      <Menu.Item onClick={() => navigate("/admin/profile")}>Trang cá nhân</Menu.Item>
      <Menu.Divider></Menu.Divider>
      <Menu.Item>Đổi mật khẩu</Menu.Item>
      <Menu.Item onClick={() => handleLogout()}>Đăng xuất</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <div className={"d-flex align-items-center " + scss["cursor-pointer"]}>
        <span className={scss.fullName}>{staff.fullName}</span>
        <Avatar size={40} icon={<UserOutlined />} />
      </div>
    </Dropdown>
  );
};

export default DropDownLogined;
