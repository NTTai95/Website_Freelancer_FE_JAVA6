import React from "react";
import { FaEye } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./ProjectPage5.module.scss";

const ProjectPage5 = () => {
  return (
    <div className={styles.container}>
      {/* Thanh tiến trình nằm trên đầu trang */}
      <div className={styles.progressBar}>
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
            className={`${styles.step} ${
              index < 4
                ? styles.completed
                : index === 4
                ? styles.active
                : index === 5
                ? styles.whiteStep // Đặt màu trắng cho ô 6
                : ""
            }`}
          >
            <div
              className={`${styles.circle} ${
                index <= 4 ? styles.completedCircle : ""
              }`}
            >
              {index + 1}
            </div>
            <div className={styles.label}>{step}</div>
            {index < 5 && <div className={styles.border} />}
          </div>
        ))}
      </div>

      {/* Nội dung chính */}
      <div className={styles.mainContent}>
        {/* Cột trái */}
        <div className={styles.leftColumn}>
          {/* Phần 1 */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3>Tóm tắt dự án</h3>
              <button className={styles.previewButton}>
                <FaEye className={styles.icon} />
                Xem trước dự án
              </button>
            </div>
            <p>Giải thích ngắn gọn về những điểm nổi bật của bạn và dự án.</p>
            <textarea
              placeholder="VD: Bạn sẽ nhận được một thiết kế logo chuyên nghiệp giúp nâng tầm công ty của bạn..."
              maxLength="1200"
              rows="6"
            ></textarea>
          </div>

          {/* Phần 2 */}
          <div className={styles.section}>
            <h3>Các câu hỏi thường gặp (tuỳ chọn)</h3>
            <p>
              Viết câu trả lời cho các câu hỏi thường gặp mà khách hàng của bạn
              có thể hỏi. Thêm tối đa 5 câu hỏi.
            </p>
            <button className={styles.addButton}>+ Thêm câu hỏi</button>
          </div>

          {/* Phần hành động */}
          <div className={styles.actions}>
            <button className={styles.backButton}>Quay lại</button>
            <div>
              <button className={styles.saveButton}>Lưu & Sửa</button>
              <button className={styles.saveButton}>Lưu & Tiếp tục</button>
            </div>
          </div>
        </div>

        {/* Cột phải */}
        <div className={styles.rightColumn}>
          <div className={styles.details}>
            <h4>Chi tiết dự án</h4>
            <ul>
              <li className="checkmark">
                Thêm chi tiết về sản phẩm của bạn và lý do tại sao khách hàng
                nên hợp tác với bạn.
              </li>
              <li>
                Cho khách hàng tiềm năng thấy các bước bạn thực hiện để hoàn
                thành dự án.
              </li>
              <li>
                Giải quyết các câu hỏi thường gặp của khách hàng để tiết kiệm
                thời gian trao đổi.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage5;
