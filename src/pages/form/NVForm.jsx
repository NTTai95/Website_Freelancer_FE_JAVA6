import {
  HomeOutlined,
  TagsOutlined,
  UserOutlined,
  SnippetsOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

import { Input, Button } from "antd";

function NVForm() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div>
          <div className="mb-3">
            <HomeOutlined /> / <span>Nhân viên</span>
          </div>
          <div>
            <p>
              <strong>Tên nhân viên</strong>
            </p>
            <Input type="text" />

            <p>
              <strong>Tuổi</strong>
            </p>
            <Input type="text" />

            <p>
              <strong>Vai trò</strong>
            </p>
            <Input type="text" />

            <p>
              <strong>Email</strong>
            </p>
            <Input type="text" />

            <p>
              <strong>Số điện thoại</strong>
            </p>
            <Input type="text" />

            <p>
              <strong>Mô tả</strong>
            </p>
            <Input.TextArea rows={4} />

            <Button type="primary" style={{ marginTop: "10px" }}>
              Thêm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NVForm;
