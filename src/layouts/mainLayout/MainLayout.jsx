import React, { useEffect, useState } from "react";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import scss from "./mainLayout.module.scss";
import { FloatButton, Tooltip } from "antd";
import { RetweetOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import authenticationApi from "@api/authenticationApi";
import { use } from "react";

const MainLayout = ({ children }) => {
  const navgate = useNavigate();
  const token = sessionStorage.getItem("token");
  const [isStaff, setIsStaff] = useState(false);

  const checkIsStaff = async () => {
    const res = await authenticationApi.isStaff();
    setIsStaff(res.data.isStaff);
  };

  useEffect(() => {
    if (token) {
      checkIsStaff();
    }
  }, []);

  return (
    <div>
      <Header />
      <main className={scss["container-main"]}>{children}</main>
      <div className={scss["float-button"]}>
        {token && isStaff && (
          <Tooltip title="Chuyển sang giao diện admin">
            <FloatButton
              icon={<RetweetOutlined />}
              onClick={() => navgate("/admin/dashboard")}
            />
          </Tooltip>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
