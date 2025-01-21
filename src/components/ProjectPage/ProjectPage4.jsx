import React, { useState } from "react";
import "/src/assets/styles/ProjectPage4.css";

const ProjectPage4 = () => {
  const [currentStep, setCurrentStep] = useState(3); // Bước hiện tại là bước 4

  return (
    <div className="container mt-5">
      {/* Thanh tiến trình */}
      <div className="progress-bar-custom mb-4">
        {[
          "Tổng quan",
          "Định giá",
          "Thực hiện",
          "Quy trình",
          "Mở số",
          "Đánh giá",
        ].map((step, index) => (
          <div
            key={index}
            className={`step ${index <= currentStep ? "completed" : ""} ${
              index === currentStep ? "active" : ""
            }`}
          >
            <div
              className={`circle ${
                index <= currentStep ? "completed-circle" : ""
              }`}
            >
              <span>{index + 1}</span>
            </div>
            <div
              className={`label ${
                index <= currentStep ? "completed-label" : ""
              }`}
            >
              {step}
            </div>
            {index < 5 && (
              <div
                className={`line ${
                  index < currentStep ? "completed-line" : ""
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Thanh chia đôi với border */}
      <div className="row border-separator mb-4">
        {/* Yêu cầu */}
        <div className="col-lg-6 left-section">
          <h5 className="mb-3">Yêu cầu và các bước</h5>
          <p className="text-muted">Thông tin bạn cần từ khách hàng</p>
          <form className="bg-light p-4 rounded">
            {/* Textarea để nhập yêu cầu */}
            <div className="mb-3">
              <label htmlFor="request" className="form-label">
                Yêu cầu từ khách hàng
              </label>
              <textarea
                className="form-control"
                id="request"
                name="request"
                rows="3"
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="require-response"
                name="requireResponse"
              />
              <label className="form-check-label" htmlFor="require-response">
                Khách hàng cần trả lời trước khi tôi có thể bắt đầu làm việc.
              </label>
            </div>
          </form>

          <button className="btn btn-link text-success mb-3">
            + Thêm một yêu cầu
          </button>

          <h5 className="mt-5">
            Các bước bạn sẽ thực hiện để hoàn thành dự án
          </h5>
          <div className="p-4 bg-light rounded">
            <form>
              {/* Phần nhập tiêu đề bước 1 */}
              <div className="mb-3">
                <label htmlFor="stepTitle" className="form-label">
                  Tiêu đề bước 1
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="stepTitle"
                  name="stepTitle"
                />
              </div>

              {/* Phần nhập mô tả */}
              <div className="mb-3">
                <label htmlFor="stepDescription" className="form-label">
                  Mô tả (tùy chọn)
                </label>
                <textarea
                  className="form-control"
                  id="stepDescription"
                  name="stepDescription"
                  rows="3"
                ></textarea>
              </div>
            </form>
          </div>

          <button className="btn btn-link text-success">
            + Thêm một yêu cầu
          </button>
          {/* Nút điều hướng */}
          <div className="d-flex justify-content-between align-items-center mt-4">
            {/* Nút Quay lại */}
            <button className="btn btn-outline-secondary">Quay lại</button>

            {/* Hai nút bên phải */}
            <div>
              <button className="btn btn-outline-success me-2">
                Lưu & Thoát
              </button>
              <button className="btn btn-success">Lưu & Tiếp tục</button>
            </div>
          </div>
        </div>

        {/* Mẹo nếu bạn gặp khó khăn */}
        <div className="col-lg-6 right-section">
          <h5 className="mb-3">Mẹo nếu bạn gặp khó khăn</h5>
          <div className="bg-light p-3 rounded">
            <h6 className="mb-3">Yêu cầu</h6>
            <p className="text-muted">
              Giải thích bạn đang gặp khó khăn gì? Cần hỗ trợ gì?
            </p>
            <h6 className="mb-3">Bước</h6>
            <p className="text-muted">
              Đề xuất cách thực hiện từng bước để hoàn thành dự án.
            </p>
            <a href="#" className="text-success">
              Video từng bước về cách tạo dự án
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage4;
