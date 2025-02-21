import React, { useEffect } from "react";
import Stepper from "@components/iu/stepper/stepper";
import ProjectPage1 from "@pages/ProjectPage/ProjectPage1";
import ProjectPage2 from "@pages/ProjectPage/ProjectPage2";
import ProjectPage3 from "@pages/ProjectPage/ProjectPage3";
import { useParams, useNavigate } from "react-router-dom";
import State from "@utils/State";
import jobspostApi from "@api/jobspostApi";
import recruiterApi from "@api/recruiterApi";
import { useState } from "react";
import dayjs from "dayjs";
import { Alert, message } from "antd";
import scss from "./ProjectPage.module.scss";

const ProjectPage = () => {
  const { mode, id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState(null);
  const [recruiter, setRecruiter] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();

  const checkMyJobPost = async () => {
    let found = false;
    recruiter?.jobPostIds.forEach(async (jobPostId) => {
      if (jobPostId == id) {
        const status = await jobspostApi.getStatusById(id);
        if (status.data === State.JobPost.EDITING) {
          found = true;
        }
      }
    });

    if (!found && recruiter) {
      navigate("/404");
    }
  };

  const save = async (values) => {
    if (mode === "edit") {
      await jobspostApi.update(id, values);
      message &&
        messageApi.open({
          type: "success",
          content: "Thông tin đã được lưu!",
        });
    } else {
      const formatData = {
        ...values,
        recruiterId: recruiter.id,
      };

      const res = await jobspostApi.add(formatData);
      navigate(`/jobpost/edit/${res.data.id}`);
    }
  };

  const post = async (values) => {
    save(values);
    try {
      const res = await jobspostApi.post(id);
      if (res.status === 200) {
        messageApi.open({
          type: "success",
          content: res.data,
        });
        navigate("/jobpost");
      }
    } catch (error) {
      if (error.status === 422) {
        messageApi.open({
          type: "warning",
          content: error.response.data,
        });
      } else {
        messageApi.open({
          type: "error",
          content: error.response.data,
        });
      }
    }
  };

  const fetchJobPost = async () => {
    const res = await jobspostApi.getById(id);
    const formatData = {
      ...res.data,
      ...(res.data.startDate && { startDate: dayjs(res.data.startDate) }),
      ...(res.data.endDate && { endDate: dayjs(res.data.endDate) }),
    };

    setInitialValues(formatData);
  };

  const fetchRecruiter = async () => {
    const logined = JSON.parse(localStorage.getItem("logined"));
    const resRecruiter = await recruiterApi.getByAccountId(logined.id);
    setRecruiter(resRecruiter.data);
  };

  useEffect(() => {
    fetchRecruiter();
    if (id) {
      checkMyJobPost();
      fetchJobPost();
    }
  }, [id]);

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
      {contextHolder}
      <Alert
        className={scss.alert}
        message="Bài đăng sẽ không được đăng nếu chưa điền đầy đủ thông tin!"
        type="info"
        showIcon
      />
      <Stepper
        post={post}
        save={save}
        steps={stepsData}
        initialValues={initialValues}
      />
    </div>
  );
};

export default ProjectPage;
