import React from "react";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import { Row, Col } from "antd";
import MenuAdmin from "@components/menu/MenuAdmin";
import scss from "./AdminLayout.module.scss";
import { FloatButton, Tooltip } from "antd";
import { RetweetOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const navgate = useNavigate();
  return (
    <>
      <Header />
      <Row className={scss["container-main"]}>
        <Col span={4}>
          <MenuAdmin></MenuAdmin>
        </Col>
        <Col span={20}>{children}</Col>
      </Row>
      <div className={scss["float-button"]}>
        <Tooltip title="Chuyển đổi sang giao diện của người dùng">
          <FloatButton
            type="primary"
            icon={<RetweetOutlined />}
            onClick={() => navgate("/")}
          />
        </Tooltip>
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
