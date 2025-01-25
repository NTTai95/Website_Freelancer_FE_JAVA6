import {
  UserOutlined,
  HomeOutlined,
  TagsOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function MenuAdmin() {
  const navgate = useNavigate();

  const items = [
    {
      key: "home",
      label: "Trang chủ",
      icon: <HomeOutlined />,
      onClick: () => {
        navgate("/admin/dashboard");
      },
    },
    {
      key: "skills",
      label: "Kỹ năng",
      icon: <TagsOutlined />,
      onClick: () => {
        navgate("/admin/skills");
      },
    },
    {
      key: "staff",
      label: "Nhân viên",
      icon: <UserOutlined />,
      onClick: () => {
        navgate("/admin/staff");
      },
    },
    {
      key: "report",
      label: "Báo cáo",
      icon: <NotificationOutlined />,
      children: [
        {
          key: "freelacner",
          label: "Từ Freelancer",
          onClick: () => {
            navgate("/admin/report/freelancer");
          },
          disabled: true,
        },
        {
          key: "recruitment",
          label: "Từ nhà tuyển dụng",
          onClick: () => {
            navgate("/admin/report/recruitment");
          },
          disabled: true,
        },
      ],
    },
  ];

  return <Menu defaultSelectedKeys={["home"]} mode="inline" items={items} />;
}

export default MenuAdmin;
