import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "@layouts/mainLayout/MainLayout";
import PostDetail from "@pages/postdetail/PostDetail";

import Authentication from "@pages/authentication/Authentication";
import About from "@pages/about/about";
import Home from "@pages/home/home";
import JobListing from "@components/recruitmentList/JobListing";
import Sidebar from "@pages/skills/Sidebar";
import SkillTable from "@pages/skills/SkillTable";
import EmployeeTable from "@pages/employeeTable/EmployeeTable";
import ProjectPage from "../pages/ProjectPage/ProjectPage";
import ForgotPassword from "@pages/ForgotPassword/ForgotPassword";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes với MainLayout */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/login"
        element={
          <MainLayout>
            <Authentication isLogin={true} />
          </MainLayout>
        }
      />

      <Route
        path="/register"
        element={
          <MainLayout>
            <Authentication isLogin={false} />
          </MainLayout>
        }
      />

      <Route
        path="/about"
        element={
          <MainLayout>
            <About />
          </MainLayout>
        }
      />
      <Route
        path="/joblisting"
        element={
          <MainLayout>
            <JobListing />
          </MainLayout>
        }
      />
      <Route
        path="/postdetail"
        element={
          <MainLayout>
            <PostDetail />
          </MainLayout>
        }
      />
      <Route
        path="/ProjectPage"
        element={
          <MainLayout>
            <ProjectPage />
          </MainLayout>
        }
      />
      <Route
        path="/admin/skills"
        element={
          <AdminLayout>
            <SkillTable />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/employetable"
        element={
          <AdminLayout>
            <EmployeeTable />
          </AdminLayout>
        }
      />
      <Route
        path="/forgotpassword"
        element={
          <MainLayout>
            <ForgotPassword />
          </MainLayout>
        }
      />
      {/* <Route
        path="/admin/dashboard"
        element={
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        }
      /> */}
    </Routes>
  );
};

export default AppRoutes;
