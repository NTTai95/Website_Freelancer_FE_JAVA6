import React from "react";
import { Card, Tag, Row, Col } from "antd";
import { useEffect, useState } from "react";
import jobspostApi from "@api/jobspostApi";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import State from "@utils/State";
import scss from "./CardApplies.module.scss";

const CardApplies = ({ apply }) => {
  const [jobPost, setJobPost] = useState(null);
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);

  const fetchJobPost = async () => {
    try {
      const response = await jobspostApi.getById(apply.jobPostId);
      setJobPost(response.data);
    } catch (error) {
      console.error("Error fetching job post:", error);
    }
  };

  useEffect(() => {
    fetchJobPost();

    switch (apply.status) {
      case State.Apply.PENDING:
        setStatus({ text: "Chờ xác nhận", color: "blue" });
        break;
      case State.Apply.WORKING:
        setStatus({ text: "Đang làm", color: "success" });
        break;
      default:
        setStatus({ text: "Không xác định" });
    }
  }, []);

  return (
    <Card className={scss.card} loading={!jobPost}>
      <Row>
        <Col span={20}>
          <p
            className={scss.title}
            onClick={() => navigate(`/jobpostdetail/${jobPost?.id}`)}
          >
            {jobPost?.title}
          </p>
          <div className={scss.budgetContainer}>
            <span className={scss.bold}>Ngân sách: </span>
            <span className={scss.text}>{jobPost?.budget?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
          </div>
          <div className={scss.dateCraetedContainer}>
            <span className={scss.bold}>Ngày nộp: </span>
            <span className={scss.text}>
              {dayjs(apply?.dateCreated).format("DD/MM/YYYY hh:mm")}
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

export default CardApplies;
