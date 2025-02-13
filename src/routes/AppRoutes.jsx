import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

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

import Dashboard from "@pages/dashboard/Dashboard";
import SkillForm from "@pages/form/SkillForm";
import StaffForm from "@pages/form/StaffForm";
import ProfileFreelancers from "@pages/profileFreelancers/ProfileFreelancers";
import Profile from "@pages/profile/Profile";
import ProfileLayout from "@layouts/ProfileLayout/ProfileLayout";
import LanguageTable from "@pages/language/LanguageTable";
import LanguageForm from "@pages/language/LanguageForm";
import Page404 from "@pages/page404/Page404";
const AppRoutes = () => {
  return (
    <Routes>
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
        path="/projectpage"
        element={
          <MainLayout>
            <ProjectPage />
          </MainLayout>
        }
      />
      <Route
        path="/admin/skills/:mode/:id?"
        element={
          <PrivateRoute
            requireStaff={true}
            element={
              <AdminLayout active="skills" breadcrumb="Kỹ năng">
                <SkillForm />
              </AdminLayout>
            }
          />
        }
      />
      <Route
        path="/admin/skills"
        element={
          <PrivateRoute
            requireStaff={true}
            element={
              <AdminLayout active="skills" breadcrumb="Kỹ năng">
                <SkillTable />
              </AdminLayout>
            }
          />
        }
      />
      <Route
        path="/admin/staff"
        element={
          <PrivateRoute
            requireStaff={true}
            element={
              <AdminLayout active="staff" breadcrumb="Nhân viên">
                <StaffTable />
              </AdminLayout>
            }
          />
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
          <PrivateRoute
            requireStaff={true}
            element={
              <AdminLayout active="home">
                <Dashboard />
              </AdminLayout>
            }
          />
        }
      />
      <Route
        path="/admin/staff/:mode/:id?"
        element={
          <PrivateRoute
            requireStaff={true}
            element={
              <AdminLayout active="staff" breadcrumb="Nhân viên">
                <StaffForm />
              </AdminLayout>
            }
          />
        }
      />
      <Route
        path="/profile/freelancer"
        element={
          <PrivateRoute
            element={
              <MainLayout>
                <ProfileLayout active="freelancer">
                  <ProfileFreelancers />
                </ProfileLayout>
              </MainLayout>
            }
          />
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
      <Route
        path="/profile/recruiters"
        element={
          <MainLayout>
            <ProfileLayout active="recruiters">
              <ProfileRecruiters />
            </ProfileLayout>
          </MainLayout>
        }
      />
      <Route
        path="/admin/languages"
        element={
          <PrivateRoute
            element={
              <AdminLayout active="languages" breadcrumb="Ngôn ngữ">
                <LanguageTable />
              </AdminLayout>
            }
          />
        }
      />
      <Route
        path="/admin/languages/:mode/:id?"
        element={
          <PrivateRoute
            element={
              <AdminLayout active="languages" breadcrumb="Ngôn ngữ">
                <LanguageForm />
              </AdminLayout>
            }
          />
        }
      />
      <Route
        path="/404"
        element={
          <MainLayout>
            <Page404 />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
