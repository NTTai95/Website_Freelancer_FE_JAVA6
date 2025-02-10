import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "@layouts/mainLayout/MainLayout";
import PostDetail from "@pages/postdetail/PostDetail";
import Authentication from "@pages/authentication/Authentication";
import About from "@pages/about/about";
import Home from "@pages/home/home";
import JobListing from "@components/recruitmentList/JobListing";
import SkillTable from "@pages/skills/SkillTable";
import StaffTable from "@pages/StaffTable/StaffTable";
import ProjectPage from "@pages/ProjectPage/ProjectPage";
import ForgotPassword from "@pages/ForgotPassword/ForgotPassword";
import AdminLayout from "@layouts/AdminLayout/AdminLayout";

import Dashboard from "../pages/dashboard/Dashboard";
import SkillForm from "../pages/form/SkillForm";
import StaffForm from "../pages/form/StaffForm";
import ProfileFreelancers from "@pages/profileFreelancers/ProfileFreelancers";
import Profile from "@pages/profile/Profile";
import ProfileLayout from "../layouts/ProfileLayout/ProfileLayout";
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
        path="/home"
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
        path="/admin/skills/:mode/:id?"
        element={
          <AdminLayout active="skills" breadcrumb="Kỹ năng">
            <SkillForm />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/skills"
        element={
          <AdminLayout active="skills" breadcrumb="Kỹ năng">
            <SkillTable />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/staff"
        element={
          <AdminLayout active="staff" breadcrumb="Nhân viên">
            <StaffTable />
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
      <Route
        path="/admin/dashboard"
        element={
          <AdminLayout active="home">
            <Dashboard />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/staff/:mode/:id?"
        element={
          <AdminLayout active="staff" breadcrumb="Nhân viên">
            <StaffForm />
          </AdminLayout>
        }
      />
      <Route
        path="/profile/freelancer"
        element={
          <MainLayout>
            <ProfileLayout active="freelancer">
              <ProfileFreelancers />
            </ProfileLayout>
          </MainLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <MainLayout>
            <ProfileLayout active="profile">
              <Profile />
            </ProfileLayout>
          </MainLayout>
        }
      />
      {/* <Route
        path="/admin/employee/:mode"
        element={
          <MainLayout>
            <ProfileFreelancers/>
          </MainLayout>
        }
      /> */}
    </Routes>
  );
};

export default AppRoutes;
