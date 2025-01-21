import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "@layouts/mainLayout/MainLayout";
import Header from "@components/header/Header";
import Home from "@components/home/Home";

import Authentication from "@pages/authentication/Authentication";
import About from "@pages/about/about";
import JobListing from "@components/recruitmentList/JobListing";
import ProjectPage4 from "@components/ProjectPage/ProjectPage4";
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

      <Route
        path="/about"
        element={
          <MainLayout>
            <About />
          </MainLayout>
        }
      />
      <Route
        path="/JobListing"
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
        path="/home"
        element={
          <MainLayout>
            <Home/>
          </MainLayout>
        }
      />

      
    </Routes>
  );
};

export default AppRoutes;
