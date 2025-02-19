import FreelancerInfo from "./FreelancerInfo";
import FreelancerApplies from "./FreelancerApplies";
import scss from "./FreelancerInfo.module.scss";
import { Tabs } from "antd";

function ProfileFreelancers() {
  const items = [
    {
      key: "1",
      label: "Thông tin cá nhân",
      children: <FreelancerInfo />,
    },
    {
      key: "2",
      label: "Danh sách ứng tuyển",
      children: <FreelancerApplies />,
    },
    {
      key: "3",
      label: "Lịch sử làm việc",
      children: "Lịch sử làm việc",
    },
  ];

  return (
    <div className={scss.container}>
      <Tabs className={scss.barlow} defaultActiveKey="1" items={items} />
    </div>
  );
}

export default ProfileFreelancers;
