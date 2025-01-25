import {
  UserOutlined,
  HomeOutlined,
  TagsOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { Menu } from "antd";

function MenuAdmin() {
  const items = [
    {
      key: "home",
      label: "Trang chủ",
      icon: <HomeOutlined />,
    },
    {
      key: "skills",
      label: "Kỹ năng",
      icon: <TagsOutlined />,
    },
    {
      key: "staff",
      label: "Nhân viên",
      icon: <UserOutlined />,
    },
    {
      key: "report",
      label: "Báo cáo",
      icon: <NotificationOutlined />,
      children: [
        {
          key: "freelacner",
          label: "Từ Freelancer",
        },
        {
          key: "recruitment",
          label: "Từ nhà tuyển dụng",
        },
      ],
    },
  ];

  return (
    <Menu
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
}

export default MenuAdmin;
