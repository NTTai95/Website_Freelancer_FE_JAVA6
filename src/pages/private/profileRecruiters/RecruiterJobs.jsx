import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import jobspostApi from "@api/jobspostApi";
import authenticationApi from "@api/authenticationApi";
const RecruiterJobs = () => {
  const [jobs, setJobs] = useState(null);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const fetchJobs = async () => {
      if (!token) return;

      try {
        const res = await authenticationApi.isStaff();
        const id = res.data.id;
        const data = await jobspostApi.getActiveByAccountId(id);
        setJobs(data.data.content);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu công việc:", error);
      }
    };

    fetchJobs();
  }, [token]);

  return (
    <>
      {jobs && jobs?.length > 0 ? (
        // jobs?.map((apply) => <JobCard apply={apply} />)
        jobs?.map((job) => <JobCard key={job?.id} job={job} />)
      ) : (
        <div>Hiện tại không có công việc nào!</div>
      )}
    </>
  );
};

export default RecruiterJobs;
