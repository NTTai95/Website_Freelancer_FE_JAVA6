import React, { useState } from "react";
import styles from "./ProjectPage4.module.scss"; // Import đúng file SCSS

const ProjectPage4 = () => {
  const [currentStep, setCurrentStep] = useState(3); // Bước hiện tại là bước 4

  return (
    <div className={styles.container}>
      {/* Thanh tiến trình nằm trên đầu trang */}
      <div className={styles.progressBar}>
  {["Tổng quan", "Định giá", "Thực hiện", "Quy trình", "Mở số", "Đánh giá"].map(
    (step, index) => (
      <div
        key={index}
        className={`${styles.step} ${
          index < currentStep
            ? styles.completed
            : index === currentStep
            ? styles.active
            : styles.incomplete
        }`}
      >
        <div
          className={`${styles.circle} ${
            index < currentStep
              ? styles.completedCircle
              : index === currentStep
              ? styles.activeCircle
              : styles.incompleteCircle
          }`}
        >
          {index + 1}
        </div>
        <div className={styles.label}>{step}</div> {/* Thay "Bước {index + 1}" bằng tên bước */}
        {index < 5 && <div className={styles.border} />}
      </div>
    )
  )}
</div>


      {/* Thanh chia đôi với border */}
      <div className={styles.mainContent}>
        {/* Bên trái chiếm 7 phần */}
        <div className={styles.leftColumn}>
          <h5 className={styles.title}>Yêu cầu và các bước</h5>
          <p className={styles.textMuted}>Thông tin bạn cần từ khách hàng</p>
          <form className="bg-light p-4 rounded">
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

            <div className="form-check">
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

          {/* Phần hành động */}
          <div className={styles.actions}>
            <button className={styles.backButton}>Quay lại</button>
            <div>
              <button className={styles.saveButton}>Lưu & Sửa</button>
              <button className={styles.saveButton}>Lưu & Tiếp tục</button>
            </div>
          </div>
        </div>

        {/* Bên phải chiếm 3 phần */}
        <div className="col-4">
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
