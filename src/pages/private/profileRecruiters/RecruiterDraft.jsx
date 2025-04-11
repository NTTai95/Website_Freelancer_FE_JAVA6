import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import jobspostApi from "@api/jobspostApi";
import authenticationApi from "@api/authenticationApi";

const RecruiterDraft = () => {
  const [jobs, setJobs] = useState(null);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      if (!token) return;

      try {
        const res = await authenticationApi.isStaff();
        const id = res.data.id;
        const draftRes = await jobspostApi.getDraftByAccountId(id);
        setJobs(draftRes.data.content);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu bài đăng nháp:", error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <>
      {jobs && jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <div>Hiện tại không có bài đăng nháp nào!</div>
      )}
    </>
  );
};

export default RecruiterDraft;
