import React from "react";
import { Card, Tag, Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import State from "@utils/State";
import scss from "./JobCard.module.scss";
import jobspostApi from "@api/jobspostApi";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    switch (job?.status) {
      case State.JobPost.PENDING:
        setStatus({ text: "Chờ xác nhận", color: "blue" });
        break;
      case State.JobPost.WORKING:
        setStatus({ text: "Đang làm", color: "success" });
        break;
      case State.JobPost.EDITING:
        setStatus({ text: "Đang chỉnh sửa", color: "warning" });
        break;
      case State.JobPost.PUBLISHED:
        setStatus({ text: "Đang đăng", color: "purple" });
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
            onClick={() => navigate(`/jobpostdetail/${job.id}`)}
          >
            {job?.title ?? "Không xác định"}
          </p>
          <div className={scss.budgetContainer}>
            <span className={scss.bold}>Ngân sách: </span>
            <span className={scss.text}>
              {job.budget?.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              }) ?? "Không xác định"}
            </span>
          </div>
          <div className={scss.datePostedContainer}>
            <span className={scss.bold}>Ngày đăng: </span>
            <span className={scss.text}>
              {dayjs(job?.datePosted).format("DD/MM/YYYY") ?? "Không xác định"}
            </span>
          </div>
        </Col>
        <Col span={4}>
          <div className={scss.statusContainer}>
            <Tag className={scss.tag} color={status?.color}>
              {status?.text}
            </Tag>
            {job?.status === State.JobPost.WORKING && (
              <Button
                className={scss.button}
                onClick={() => navigate(`/jobpostdetail/${job.id}`)}
              >
                Xem chi tiết
              </Button>
            )}
            {job?.status === State.JobPost.EDITING && (
              <Button
                type="primary"
                onClick={() => navigate(`/jobpost/edit/${job?.id}`)}
              >
                Chỉnh sửa
              </Button>
            )}
            {job?.status === State.JobPost.PUBLISHED && (
              <Button
                type="primary"
                onClick={() => navigate(`/applies/jobpost/${job.id}`)}
              >
                Danh sách ứng tuyển
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default JobCard;
