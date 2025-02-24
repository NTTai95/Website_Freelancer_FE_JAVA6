import React from "react";
import { Card, Tag, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import State from "@utils/State";
import scss from "./JobCard.module.scss";
import jobspostApi from "@api/jobspostApi";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);
  const [jobPost, setJobPost] = useState(null);

  const fetchJobPost = async () => {
    try {
      const response = await jobspostApi.getByAccountId(job.RecruiterId);
      setJobPost(response.data);
      console.log("jobPost", response.data);
    } catch (error) {
      console.error("Error fetching job post:", error);
    }
  };

  useEffect(() => {
    fetchJobPost();

    switch (job.status) {
      case State.JobPost.PENDING:
        setStatus({ text: "Chờ xác nhận", color: "blue" });
        break;
      case State.JobPost.WORKING:
        setStatus({ text: "Đang làm", color: "success" });
        break;
      default:
        setStatus({ text: "Không xác định" });
    }
  }, []);
  return (
    <Card className={scss.card} loading={!job}>
      <Row>
        <Col span={20}>
          <p
            className={scss.title}
            onClick={() => navigate(`/jobpostdetail/${jobPost.id}`)}
          >
            {job.title}
          </p>
          <div className={scss.budgetContainer}>
            <span className={scss.bold}>Ngân sách: </span>
            <span className={scss.text}>
              {job.budget?.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          </div>
          <div className={scss.datePostedContainer}>
            <span className={scss.bold}>Ngày đăng: </span>
            <span className={scss.text}>
              {dayjs(job.datePosted).format("DD/MM/YYYY")}
            </span>
          </div>
        </Col>
        <Col span={4}>
          <Tag className={scss.tag} color={status?.color}>
            {status?.text}
          </Tag>
        </Col>
      </Row>
    </Card>
  );
};

export default JobCard;
