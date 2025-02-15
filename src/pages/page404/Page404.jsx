import scss from "./page404.module.scss";
import { Button } from "antd";
import { LeftCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Page404() {
  const navigate = useNavigate();

  return (
    <div className={scss.container}>
      <div className={scss.img}>
        <img src="src/assets/gif/404.gif" />
      </div>
      <Button type="primary" className={scss.btn} onClick={() => navigate("/")}>
        <LeftCircleOutlined /> Quay lại trang chủ
      </Button>
    </div>
  );
}

export default Page404;
