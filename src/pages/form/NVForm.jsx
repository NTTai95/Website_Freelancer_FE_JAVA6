import { Button } from "antd";
import {
  HomeOutlined,
  TagsOutlined,
  UserOutlined,
  SnippetsOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

function NVForm() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-lg-2 d-flex flex-column border-end p-3"
          style={{
            alignItems: "flex-start",
            gap: "12px",
          }}
        >
          <h5>
            <HomeOutlined /> Trang chủ
          </h5>
          <h5>
            <TagsOutlined /> Kỹ năng
          </h5>
          <h5>
            <UserOutlined /> Quản lý
          </h5>
          <h5>
            <SnippetsOutlined /> Báo cáo <CaretDownOutlined />
          </h5>
          <div>
            <h4>Từ FreeLancer</h4>
            <h4>Từ nhà tuyển dụng</h4>
          </div>
        </div>
        <div className="col-lg-10 p-4">
          <div className="mb-3">
            <HomeOutlined /> / <span>Nhân viên</span>
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>Tên nhân viên</p>
            <input
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                width: "100%",
              }} type="text"/>
              <p style={{ fontWeight: "bold" }}>Tuổi</p>
            <input
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                width: "100%",
              }} type="text"/>
              <p style={{ fontWeight: "bold" }}>Vai trò</p>
            <input
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                width: "100%",
              }} type="text"/>
              <p style={{ fontWeight: "bold" }}>Email</p>
            <input
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                width: "100%",
              }} type="text"/>
              <p style={{ fontWeight: "bold" }}>Số điện thoại</p>
            <input
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                width: "100%",
              }} type="text"/>
              <p style={{ fontWeight: "bold" }}>Mô tả</p>
              <textarea
              style={{
                borderRadius: "8px",
                border: "1px solid #ccc",
                padding: "8px",
                width: "100%",
                boxSizing: "border-box",
              }}
              rows="4"
            ></textarea>
            <Button type="primary">Thêm</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NVForm;
