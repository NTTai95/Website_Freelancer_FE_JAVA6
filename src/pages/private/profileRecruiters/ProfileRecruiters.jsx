import RecruiterInfo from "./RecruitersInfo";
import RecruiterJobs from "./RecruiterJobs";
//import RecruiterHistory from "./RecruiterHistory";
import scss from "./RecruiterInfo.module.scss";
import { Tabs } from "antd";
import recruiterApi from "@api/recruiterApi";
import profileApi from "@api/profileApi";
import { useEffect, useState } from "react";
import RecruiterFormAdd from "./RecruiterFormAdd";
import RecruiterDraft from "./RecruiterDraft";
import RecruiterHistory from "./RecruiterHistory";
import authenticationApi from "@api/authenticationApi";

function ProfileRecruiters() {
  const [recruiter, setRecruiter] = useState(null);
  const token = sessionStorage.getItem("token");

  const checkRecruiterId = async () => {
    try {
      if (!token) return;

      const res = await authenticationApi.isStaff();
      const { id } = res.data;
      const resRecruiter = await recruiterApi.getByAccountId(id);
      setRecruiter(resRecruiter?.data);
    } catch (error) {
      console.error("Error checking recruiter:", error);
    }
  };

  useEffect(() => {
    checkRecruiterId();
  }, []);

  const items = [
    {
      key: "1",
      label: "Thông tin cá nhân",
      children: <RecruiterInfo />,
    },
    {
      key: "2",
      label: "Công việc đã đăng",
      children: <RecruiterJobs recruiter={recruiter} />,
    },
    {
      key: "3",
      label: "Bản nháp",
      children: <RecruiterDraft />,
    },
    {
      key: "4",
      label: "Lịch sử làm việc",
      children: <RecruiterHistory />,
    },
  ];

  const onFinish = async (values) => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) return;

      const res = await authenticationApi.isStaff();
      const { id } = res.data;

      const resProfile = await profileApi.getByAccountId(id);
      const recruiterDTO = {
        profileId: resProfile.data.id,
        introduce: values.introduce,
        company: values.company,
      };

      await recruiterApi.add(recruiterDTO);
      checkRecruiterId();
    } catch (error) {
      console.error("Error creating recruiter:", error);
    }
  };

  return (
    <div className={scss.container}>
      {recruiter ? (
        <Tabs className={scss.barlow} defaultActiveKey="1" items={items} />
      ) : (
        <RecruiterFormAdd onFinish={onFinish} />
      )}
    </div>
  );
}

export default ProfileRecruiters;
