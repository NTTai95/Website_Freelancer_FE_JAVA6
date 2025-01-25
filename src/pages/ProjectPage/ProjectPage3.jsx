import scss from "./ProjectPage3.module.scss";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

const { Dragger } = Upload;

function ProjectPage3() {
  const props = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className={scss.container}>
      {/* Thanh chia đôi với border */}
      <div className={scss.mainContent}>
        {/* Bên trái chiếm 7 phần */}
        <div className={scss.leftColumn}>
          <h3>Dữ liệu dự án</h3>
          <h5 className="mt-5">Hình ảnh dự án</h5>
          <Dragger className={scss.dragger} {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Nhấn vào để tải hình ảnh lên</p>
            <p className="ant-upload-hint">
              Tải lên file hình ảnh và tối đa 10MB
            </p>
          </Dragger>

          <h5 className="mt-5">Tài liệu dự án</h5>
          <Dragger className={scss.dragger} {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Nhấn vào để tải lên file</p>
            <p className="ant-upload-hint">Tải lên file và tối đa 100MB</p>
          </Dragger>
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

export default ProjectPage3;
