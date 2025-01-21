import React from "react";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import scss from "./mainLayout.module.scss";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={scss["container-main"]}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
