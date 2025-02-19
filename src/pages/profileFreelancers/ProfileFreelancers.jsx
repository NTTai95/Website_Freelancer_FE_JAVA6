import FreelancerInfo from "./FreelancerInfo";
import { Tabs } from 'antd';

function ProfileFreelancers() {
  const items = [
    {
      key: '1',
      label: 'Thông tin cá nhân',
      children: <FreelancerInfo />,
    },
    {
      key: '2',
      label: 'Danh sách ứng tuyển',
      children: 'Content of Tab Pane 2',
    }
  ];

  return (
    <Tabs
    defaultActiveKey="1"
    items={items}
  />
  );
}

export default ProfileFreelancers;
