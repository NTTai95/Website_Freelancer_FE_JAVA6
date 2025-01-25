import scss from "./SkillForm";
import { Button, Input } from "antd";
import {
  HomeOutlined,
  TagsOutlined,
  UserOutlined,
  SnippetsOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

function SkillForm() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div>
          <div className="mb-3">
            <HomeOutlined /> / <span>Kỹ năng</span>
          </div>
          <div className="Form">
            <p style={{ fontWeight: "bold" }}>Tên kỹ năng</p>
            <Input type="text" />

            <p style={{ fontWeight: "bold" }}>Mô tả</p>
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

export default SkillForm;
