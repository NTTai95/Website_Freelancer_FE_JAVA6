import React, { useState } from "react";
import Stepper from "@components/iu/stepper/stepper";
import ProjectPage1 from "@pages/ProjectPage/ProjectPage1";
import ProjectPage2 from "@pages/ProjectPage/ProjectPage2";
import ProjectPage3 from "@pages/ProjectPage/ProjectPage3";
import ProjectPage4 from "@pages/ProjectPage/ProjectPage4";
import ProjectPage5 from "@pages/ProjectPage/ProjectPage5";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const { mode, id } = useParams();
  const post = (values) => {};
  const save = (values) => {
    console.log(values);
  };

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
      title: "Thời gian",
      content: <ProjectPage3 />,
    },
  ];
  return (
    <div className="container">
      <Stepper post={post} save={save} steps={stepsData} />
    </div>
  );
};

export default ProjectPage;
