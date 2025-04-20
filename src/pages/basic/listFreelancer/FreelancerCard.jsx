import React from "react";
import { Card, Avatar } from "antd";
import scss from "./FreelancerCard.module.scss";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

const FreelancerCard = ({ profile, profileData }) => {
  const navigate = useNavigate();
  
  return (
    <Card 
      onClick={() => navigate(`/freelancers/${profile?.id}`)} 
      hoverable 
      className={scss.card}
    >
      <div className={scss.containerAvatar}>
        <Avatar 
          className={scss.avatar} 
          size={80} 
          icon={!profileData?.avatar && <UserOutlined />}
          src={profileData?.avatar} 
        />
      </div>
      <p className={scss.fullName}>{profileData?.fullName || "Chưa cập nhật"}</p>
      <p className={scss.birthday}>
        Tham gia: {profileData?.joinDate ? dayjs(profileData?.joinDate).format("DD/MM/YYYY") : "Chưa cập nhật"}
      </p>
      <p className={scss.introduce}>
        {profile?.introduce || "Chưa có giới thiệu"}
      </p>
    </Card>
  );
};

export default FreelancerCard;
