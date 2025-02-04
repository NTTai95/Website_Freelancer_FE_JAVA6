import React, { useState } from "react";
import styles from "./ProjectPage4.module.scss"; // Import đúng file SCSS
import Stepper from "@components/iu/stepper/stepper";
import ProjectPage1 from "@pages/ProjectPage/ProjectPage1";
import ProjectPage2 from "@pages/ProjectPage/ProjectPage2";
import ProjectPage3 from "@pages/ProjectPage/ProjectPage3";
import ProjectPage4 from "@pages/ProjectPage/ProjectPage4";
import ProjectPage5 from "@pages/ProjectPage/ProjectPage5";

const ProjectPage = () => {
  const [currentStep, setCurrentStep] = useState(3); // Bước hiện tại là bước 4
  const stepsData = [
    {
      title: "Tổng quan",
      content: <ProjectPage1 />,
    },
    {
      title: "Ngân sách & lĩnh vực",
      content: <ProjectPage2 />,
    },
    {
      title: "Dữ liệu",
      content: <ProjectPage3 />,
    },
    {
      title: "Yêu cầu",
      content: <ProjectPage4 />,
    },
    {
      title: "Tóm tắt",
      content: <ProjectPage5 />,
    },
  ];

  return (
    <div className="container">
      <Stepper steps={stepsData} />
      </div>
  );
};

export default ProjectPage;
