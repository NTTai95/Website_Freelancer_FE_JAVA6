import React from "react";
import { Card, Tag, Row, Col, Input } from "antd";
import { useEffect, useState } from "react";
import jobspostApi from "@api/jobspostApi";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import State from "@utils/State";
import scss from "./CardApplies.module.scss";
import productApi from "../../api/productApi";




const CardApplies = ({ apply }) => {
  const [jobPost, setJobPost] = useState(null);
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);



  const fetchJobPost = async () => {
    try {
      const response = await jobspostApi.getById(apply.jobPostId);
      setJobPost(response.data);
      console.log("jobPost", response.data);
    } catch (error) {
      console.error("Error fetching job post:", error);
    }
  };

  useEffect(() => {
    fetchJobPost();

    switch (apply.status) {
      case State.Apply.PENDING:
        setStatus({ text: "Chờ xác nhận", color: "blue" });
        break;
      case State.Apply.WORKING:
        setStatus({ text: "Đang làm", color: "success" });
        break;
      default:
        setStatus({ text: "Không xác định" });
    }
  }, []);

  const onSubmit = async (value, _e, info) => {
    const product = await productApi.create({ link: value ,jobPostId: apply?.jobPostId});
    await jobspostApi.updateProduct(apply?.jobPostId,product?.data?.id)
    window.location.reload();
    console.log(info?.source, value);
  }

  return (
    <Card className={scss.card} loading={!jobPost}>
      <Row>
        <Col span={18}>
          <p
            className={scss.title}
            onClick={() => navigate(`/jobpostdetail/${jobPost?.id}`)}
          >
            {jobPost?.title}
          </p>
          <div className={scss.budgetContainer}>
            <span className={scss.bold}>Ngân sách: </span>
            <span className={scss.text}>
              {jobPost?.budget?.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          </div>
          <div className={scss.dateCraetedContainer}>
            <span className={scss.bold}>Ngày nộp: </span>
            <span className={scss.text}>
              {dayjs(apply?.dateCreated).format("DD/MM/YYYY hh:mm")}
            </span>
          </div>
        </Col>
        <Col span={6}>
          <Tag className={scss.tag} color={status?.color}>
            {status?.text}
          </Tag>
          {apply?.status === State.Apply.WORKING && !jobPost?.productId && (
    
            <Input.Search enterButton="Nộp" className="mt-3" onSearch={onSubmit}>
            </Input.Search>
          )}
        </Col>
      </Row>
    </Card>
  );
};

export default CardApplies;
