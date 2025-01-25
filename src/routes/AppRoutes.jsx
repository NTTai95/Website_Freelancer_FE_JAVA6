import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "@layouts/mainLayout/MainLayout";
import PostDetail from "@pages/postdetail/PostDetail";
import Header from "@components/header/Header";
import Home from "@pages/home/Home";

import Authentication from "@pages/authentication/Authentication";
import About from "@pages/about/about";
import JobListing from "@components/recruitmentList/JobListing";
import ProjectPage4 from "@components/ProjectPage/ProjectPage4";
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
        path="/ProjectPage4"
        element={
          <MainLayout>
            <ProjectPage4 />
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
    </Routes>
  );
};

export default AppRoutes;
