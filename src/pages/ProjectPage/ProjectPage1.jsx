import scss from "./ProjectPage1.module.scss";
import { Input, Checkbox, Row, Col } from "antd";

const { TextArea } = Input;

function ProjectPage1() {
  return (
    <div className={scss.container}>
      {/* Thanh chia đôi với border */}
      <div className={scss.mainContent}>
        {/* Bên trái chiếm 7 phần */}
        <div className={scss.leftColumn}>
          <h3>Tổng quan dự án</h3>
          <h5 className={scss.title}>Tiêu đề dự án</h5>
          <Input placeholder="Nhập tiêu đề dự án" size="large" />
          <h5 className={scss.title}>Mô tả dự án</h5>
          <TextArea
            showCount
            maxLength={10000}
            placeholder="Nhập mô tả dự án"
            style={{
              height: 120,
              resize: "none",
            }}
          />

          <h5 className={scss.title}>Ngôn ngữ sử dụng</h5>
          <Checkbox.Group
            style={{
              width: "100%",
            }}
          >
            <Row>
              <Col span={8}>
                <Checkbox value="VN">Tiếng Việt</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="EN">English</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="FR">Français</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="EL">Ελληνικά</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="ES">Español</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="DE">Deutsch</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="IT">Italiano</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="PT">Português</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="RU">Русский</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="JA">日本語</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="ZH">中文 (简体)</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="KO">한국어</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="HI">हिन्दी</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="AR">العربية</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="HE">עברית</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="TR">Türkçe</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="TH">ไทย</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="ID">Bahasa Indonesia</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="PL">Polski</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="SV">Svenska</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="FI">Suomi</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="DA">Dansk</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="NO">Norsk</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="HU">Magyar</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="NL">Nederlands</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>

          <button className="btn btn-link text-success mb-3">
            + Thêm ngôn ngữ
          </button>
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
}

export default ProjectPage1;
