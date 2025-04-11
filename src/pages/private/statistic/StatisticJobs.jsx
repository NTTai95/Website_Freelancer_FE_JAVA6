// tạo 1 trang thống kê công việc đã hoàn thành của freelancer
import React, { useState, useEffect } from "react";
import { Card, Row, Col, Statistic, Spin } from "antd";
import {
  CheckCircleOutlined,
  FormOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import applyApi from "@api/applyApi";
import jobPostApi from "@api/jobspostApi";
import historyTransactionApi from "@api/historyTransactionApi";
import profileApi from "@api/profileApi";
import walletApi from "@api/walletApi";
import freelancerApi from "@api/freelancerApi";
import recruterApi from "@api/recruiterApi";
import authenticationApi from "@api/authenticationApi";

function StatisticJobs() {
  const [completedJobs, setCompletedJobs] = useState(null);
  const [totalJobs, setTotalJobs] = useState(null);
  const [totalMoney, setTotalMoney] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const token = sessionStorage.getItem("token");

  const fetchJobsData = async () => {
    setIsLoading(true);
    try {
      if (!token) return;

      const res = await authenticationApi.isStaff();
      const id = res.data.id;
      const profileID = await profileApi.getByAccountId(id);

      const [freelancer, recruiter] = await Promise.all([
        freelancerApi.getByAccountId(id),
        recruterApi.getByAccountId(id),
      ]);

      let wallet = null;
      try {
        const walletResponse = await walletApi.getByProfileId(
          profileID.data.id
        );
        wallet = walletResponse.data;
      } catch (error) {
        if (error.response?.status === 404) {
          console.warn("Không tìm thấy ví cho profile này");
        } else {
          throw error;
        }
      }

      const [response, responseR] = await Promise.all([
        applyApi.getTotalCompletedJobsByFreelancer(freelancer.data.id),
        jobPostApi.getTotalByRecruiter(recruiter.data.id),
      ]);

      setCompletedJobs(response.data);
      setTotalJobs(responseR.data);

      if (wallet) {
        try {
          const totalEarnedResponse =
            await historyTransactionApi.getTotalEarnedByWalletID(wallet.id);
          setTotalMoney(totalEarnedResponse.data);
        } catch (error) {
          console.log(error);
          setTotalMoney(0);
        }
      } else {
        setTotalMoney(0);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobsData();
  }, []);

  return (
    <Spin spinning={isLoading}>
      <div className="statistics-jobs">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card>
              <Row gutter={16}>
                <Col span={8}>
                  <Statistic
                    title="Công việc đã hoàn thành"
                    value={completedJobs}
                    prefix={<CheckCircleOutlined />}
                  />
                </Col>
                <Col span={8}>
                  <Statistic
                    title="Công việc đã đăng"
                    value={totalJobs}
                    prefix={<FormOutlined />}
                  />
                </Col>
                <Col span={8}>
                  <Statistic
                    title="Tổng thu nhập"
                    value={totalMoney}
                    prefix={<DollarOutlined />}
                    precision={2}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </Spin>
  );
}

export default StatisticJobs;
