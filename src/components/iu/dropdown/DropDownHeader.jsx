import React from "react";
import { Menu, Dropdown } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import scss from "./DropDownHeader.module.scss";

const DropDownHeader = ({ menuItems, label }) => {
  const navigate = useNavigate();

  const menu = (
    <Menu>
      {menuItems.map((item, index) => (
        <Menu.Item key={index} onClick={() => navigate(item.link)}>
          {item.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <span className={scss.title}>
        {label} <CaretDownOutlined />
      </span>
    </Dropdown>
  );
};

export default DropDownHeader;
