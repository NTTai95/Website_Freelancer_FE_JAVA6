import React from "react";
import "/src/assets/styles/jobCard.css";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { Tag } from "antd";
const JobCard = ({ title, budget, datePosted, description }) => {
  const navigate = useNavigate();

  return (
    <div className="card mb-4 border-0 shadow-sm job-card">
      <div className="row g-0">
        <div className="col-md-12">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/postdetail")}
                className="card-title mb-2 text-primary"
              >
                {title}
              </h5>
              <p className="card-text text-muted mb-2">
                <i className="fas fa-building me-2 text-secondary"></i>
                <strong>
                  Ngân sách:{" "}
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(budget)}
                  /Giờ
                </strong>
              </p>
              <p className="card-text text-muted mb-3">
                <i className="fas fa-clock me-2 text-secondary"></i>
                <strong>Mô tả:</strong> {description}
              </p>
              <p className="card-text text-muted mb-3">
                <i className="fas fa-clock me-2 text-secondary"></i>
                <strong>Ngày đăng: </strong>
                {dayjs(datePosted).format("HH:mm DD/MM/YYYY")}
              </p>

              <Tag>Bug Report</Tag>
              <Tag>Test Case Design</Tag>
              <Tag>Jira</Tag>
            </div>

            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-outline-primary btn-sm shadow-sm apply-btn">
                Yêu thích
              </button>
              <button className="btn btn-primary btn-sm shadow-sm apply-btn">
                Ứng tuyển
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
