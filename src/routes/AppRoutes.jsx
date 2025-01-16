import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "@layouts/mainLayout/MainLayout";
import Header from "@components/header/Header";

import Authentication from "@pages/authentication/Authentication";
const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes với MainLayout */}
      <Route path="/" element={<MainLayout></MainLayout>} />

      <Route
        path="/authentication"
        element={
          <MainLayout>
            <Authentication />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
