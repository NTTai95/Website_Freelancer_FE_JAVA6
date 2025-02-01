// import { CarFilled, CoffeeOutlined, RadiusUpleftOutlined } from '@ant-design/icons';
import scss from "./Dashboard.module.scss";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faPenToSquare,
  faCommentDollar,
} from "@fortawesome/free-solid-svg-icons";
import { Table, Button, Statistic } from "antd";
import CountUp from "react-countup";
import { motion } from "motion/react";
import Leaderboard from "@components/iu/leaderboard/Leaderboard";

function Dashboard() {
  const navigator = useNavigate();

  const formatter = (value) => <CountUp start={0} end={value} separator="," />;

  const [totalChange, setTotalChange] = useState(7895);
  const [totalPost, setTotalPost] = useState(5695);
  const [totalUser, setTotalUser] = useState(10895);

  const currentMonth = new Date()
    .toLocaleString("default", { month: "long" })
    .toLowerCase();
  const currentYear = new Date().getFullYear();

  const [series] = useState([
    {
      name: "Doanh thu",
      data: [
        82300000, 58200000, 49700000, 68200000, 72700000, 61560000, 67300000,
        65200000, 57230000, 56200000, 58300000, 66905000,
      ],
    },
  ]);

  const [chartOptions] = useState({
    chart: {
      id: "bar-chart",
    },
    xaxis: {
      categories: [
        "T1",
        "T2",
        "T3",
        "T4",
        "T5",
        "T6",
        "T7",
        "T8",
        "T9",
        "T10",
        "T11",
        "T12",
      ],
    },
    yaxis: {
      labels: {
        formatter: (value) =>
          value.toLocaleString("vi-VN", { style: "currency", currency: "VND" }),
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 5,
    },
  });

  const [pieSeries] = useState([65, 30, 5]);

  const [pieOptions] = useState({
    chart: {
      type: "pie",
    },
    tooltip: {
      enabled: true,
    },
    legend: {
      position: "bottom",
    },
    labels: ["Hoàn thành", "Đang thực hiện", "Chờ duyệt "],
    dataLabels: {
      enabled: true,
      formatter: (val) => `${Math.round(val)} %`,
    },
  });

  const columns = [
    {
      title: "Xếp hạng",
      dataIndex: "rank",
      key: "rank",
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tổng bài tuyển dụng",
      dataIndex: "total",
      key: "total",
    },
  ];

  const columnsFreelancer = [
    {
      title: "Xếp hạng",
      dataIndex: "rank",
      key: "rank",
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tổng dự án",
      dataIndex: "total",
      key: "total",
    },
  ];

  const dataFreelance = [
    {
      rank: "1",
      name: "Lê Quốc Anh",
      total: 52,
    },
    {
      rank: "2",
      name: "Ngô Gia Huy",
      total: 46,
    },
    {
      rank: "3",
      name: "Trần Quốc Trung",
      total: 52,
    },
    {
      rank: "4",
      name: "Nguyễn Thị Anh",
      total: 46,
    },
  ];

  const data = [
    {
      rank: "1",
      name: "Lê Quốc Anh",
      total: 52,
    },
    {
      rank: "2",
      name: "Ngô Gia Huy",
      total: 46,
    },
    {
      rank: "3",
      name: "Trần Quốc Trung",
      total: 52,
    },
    {
      rank: "4",
      name: "Nguyễn Thị Anh",
      total: 46,
    },
    {
      rank: "5",
      name: "Lê Quốc Anh",
      total: 52,
    },
    {
      rank: "6",
      name: "Ngô Gia Huy",
      total: 46,
    },
    {
      rank: "7",
      name: "Trần Quốc Trung",
      total: 52,
    },
    {
      rank: "8",
      name: "Nguyễn Thị Anh",
      total: 46,
    },
    {
      rank: "9",
      name: "Trần Quốc Trung",
      total: 52,
    },
    {
      rank: "10",
      name: "Nguyễn Thị Anh",
      total: 46,
    },
  ];

  return (
    <div className="d-flex">
      <div className="container mt-4">
        <div className="row">
          <motion.div
            className="col-4"
            animate={{ opacity: [0, 1], y: [-50, 0] }}
            transition={{ duration: 0.5 }}
          >
            <div className={"card rounded-0 " + scss["border-top-3"]}>
              <div className="card-body text-center">
                <h5>Tổng số người dùng</h5>
                <div className="d-flex align-items-center justify-content-center mt-1">
                  <FontAwesomeIcon
                    className={"me-2"}
                    icon={faUsers}
                    size="xl"
                    beatFade
                  />
                  <Statistic value={totalUser} formatter={formatter} />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="col-4"
            animate={{ opacity: [0, 1], y: [-50, 0] }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={"card rounded-0 " + scss["border-top-3"]}>
              <div className="card-body text-center">
                <h5>
                  Tổng số bài đăng{" "}
                  <span className="text-info">{currentMonth}</span>
                </h5>
                <div className="d-flex align-items-center justify-content-center mt-1">
                  <FontAwesomeIcon
                    className={"me-2"}
                    icon={faPenToSquare}
                    size="xl"
                    beatFade
                  />
                  <Statistic value={totalPost} formatter={formatter} />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="col-4"
            animate={{ opacity: [0, 1], y: [-50, 0] }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={"card rounded-0 " + scss["border-top-3"]}>
              <div className="card-body text-center">
                <h5>Tổng số giao dịch </h5>
                <div className="d-flex align-items-center justify-content-center mt-1">
                  <FontAwesomeIcon
                    className={"me-2"}
                    icon={faCommentDollar}
                    size="xl"
                    beatFade
                  />
                  <Statistic value={totalChange} formatter={formatter} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Biểu đồ */}
        <div className="row my-4">
          {/* Biểu đồ tròn */}
          <motion.div
            className="col-6"
            animate={{ opacity: [0, 1], y: [100, 0] }}
            transition={{ duration: 0.7 }}
          >
            <div className="card d-flex align-items-center rounded-0">
              <h3 className="text-center my-3">Thống kê tiến độ công việc</h3>
              <Chart
                options={pieOptions}
                series={pieSeries}
                type="pie"
                width="470px"
              />
            </div>
          </motion.div>

          {/* Biểu đồ miền */}
          <motion.div
            className="col-6"
            animate={{ opacity: [0, 1], y: [100, 0] }}
            transition={{ duration: 0.7 }}
          >
            <div className="h-100 card rounded-0">
              <h3 className="text-center mt-3">
                Thống kê doanh thu năm {currentYear}
              </h3>
              <Chart options={chartOptions} series={series} type="area" />
            </div>
          </motion.div>
        </div>
        <div className={"card py-5 rounded-0 "}>
          <div className="row">
            <div className="col-6 px-5">
              <Leaderboard
                title="Freelancer nổi bật"
                columns={columnsFreelancer}
                data={data}
              />
            </div>
            <div className="col-6 px-5">
              <Leaderboard
                title="Nhà tuyển dụng nổi bật"
                columns={columns}
                data={data}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
