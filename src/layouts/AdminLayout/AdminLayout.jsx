import React from "react";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import {Row, Col } from 'antd';
import MenuAdmin from "@components/menu/MenuAdmin";
import scss from "./AdminLayout.module.scss";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Row className={scss["container-main"]}>
        <Col span={4}>
          <MenuAdmin></MenuAdmin>
        </Col>
        <Col span={20}>{children}</Col>
      </Row>
      <Footer />
    </>
  );
};

export default AdminLayout;
