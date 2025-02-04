import scss from "./ProjectPage2.module.scss";
import { InputNumber, Select, Checkbox } from "antd";

function ProjectPage2() {
  const selectAfter = (
    <Select
      defaultValue="VND"
      style={{
        width: 60,
      }}
    >
      <Option value="VND">₫</Option>
      <Option value="USD">$</Option>
      <Option value="EUR">€</Option>
      <Option value="GBP">£</Option>
      <Option value="CNY">¥</Option>
    </Select>
  );

  return (
    <div className={scss.container}>
      {/* Thanh chia đôi với border */}
      <div className={scss.mainContent}>
        {/* Bên trái chiếm 7 phần */}
        <div className={scss.leftColumn}>
            <h3>Ngân sách và lĩnh vực</h3>
          <h5 className={scss.title}>Ngân sách dự án</h5>
          <InputNumber
            addonAfter={selectAfter}
            defaultValue={100000}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
          />
          <h5 className={scss.title}>Lĩnh vực tuyển dụng</h5>
          <div className={scss.CheckboxGroup}>
            <Checkbox>Java</Checkbox>
            <Checkbox>Website design</Checkbox>
            <Checkbox>Copy writing</Checkbox>
            <Checkbox>Graphic design</Checkbox>
            <Checkbox>Manager project</Checkbox>
          </div>

          <button className="btn btn-link text-success mb-3">
            + Thêm lĩnh vực tuyển dụng
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
export default ProjectPage2;
