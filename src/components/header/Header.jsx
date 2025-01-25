import { Col, Row, Button, Input, Select, ConfigProvider } from "antd";
import scss from "./Header.module.scss";
import DropDownHeader from "@components/iu/dropdown/DropDownHeader";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

function Header() {
  const navigate = useNavigate();
  const menuItemsFindWork = [
    { name: "Tìm việc", link: "/joblisting" },
    // { name: "Công việc đã lưu", link: "/saved-jobs" },
  ];

  const menuItemsRecruitment = [
    // { name: "Freelacner", link: "/find-jobs" },
    { name: "Tạo bài tuyển dụng", link: "/ProjectPage" },
  ];

  const menuItemsHelp = [
    { name: "Giới thiệu", link: "/about" },
    { name: "Dashboard", link: "/Dashboard" },
  ];

  const selectAfter = (
    <Select defaultValue="Tuyển dụng">
      <Option value="tuyendung">tuyển dụng</Option>
      <Option value="freelancer">Freelancer</Option>
      <Option value="skills">kỹ năng</Option>
    </Select>
  );

  return (
    <Row className={scss.header}>
      <Col className={scss.col1} span={5}>
        <span className={scss["cusros-pointer"]} onClick={() => navigate("/")}>FREELANCER</span>
      </Col>
      <Col className={scss.col2} span={8}>
        <span className={scss.link} onClick={() => navigate("/")}>
          Trang chủ
        </span>
        <DropDownHeader menuItems={menuItemsFindWork} label="Tìm việc" />
        <DropDownHeader menuItems={menuItemsRecruitment} label="Tuyển dụng" />
        <DropDownHeader menuItems={menuItemsHelp} label="Trợ giúp" />
      </Col>
      <Col className={scss.col3} span={6}>
          <Input
          className={scss.search}
            addonAfter={selectAfter}
            placeholder="Tìm kiếm..."
            size="large"
          />
      </Col>
      <Col className={scss.col4} span={5}>
        <Button className={scss.button} color="primary" variant="outlined" onClick={() => navigate("/login")}>
          Đăng nhập
        </Button>
        <Button className={scss.button} color="primary" variant="solid" onClick={() => navigate("/register")}>
          Đăng ký
        </Button>
      </Col>
    </Row>
  );
}

export default Header;
