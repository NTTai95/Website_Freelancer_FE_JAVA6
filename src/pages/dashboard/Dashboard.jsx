// import { CarFilled, CoffeeOutlined, RadiusUpleftOutlined } from '@ant-design/icons';
import scss from './Dashboard.module.scss'
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Chart from "react-apexcharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faPenToSquare, faCommentDollar } from "@fortawesome/free-solid-svg-icons";
import { Table } from 'antd'


function Dashboard() {
    const navigator = useNavigate();

    const currentMonth = new Date().toLocaleString("default", { month: "long" }).toLowerCase();
    const currentYear = new Date().getFullYear();

    const [series] = useState([
        {
            name: "Doanh thu",
            data: [82300000, 58200000, 49700000, 68200000, 72700000, 61560000, 67300000, 65200000, 57230000, 56200000, 58300000, 66905000],
        },
    ]);


    const [chartOptions] = useState({
        chart: {
            id: "bar-chart",
        },
        xaxis: {
            categories: ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"],
        },
        yaxis: {
            labels: {
                formatter: (value) => value.toLocaleString("vi-VN", { style: "currency", currency: "VND" }),
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
            title: 'Số thứ tự',
            dataIndex: 'index',
            key: 'index',
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Tổng số bài đăng',
            dataIndex: 'totalProject',
            key: 'totalProject',
        },
    ];

    const data = [
        {
            index: '1',
            name: 'Lê Quốc Anh',
            totalProject: 52,
        },
        {
            index: '2',
            name: 'Ngô Gia Huy',
            totalProject: 46,
        },
        {
            index: '3',
            name: 'Trần Quốc Trung',
            totalProject: 52,
        },
        {
            index: '4',
            name: 'Nguyễn Thị Anh',
            totalProject: 46,
        },
    ];

    const columnsFreelance = [
        {
            title: 'Số thứ tự',
            dataIndex: 'index',
            key: 'index',
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Tổng dự án đã thực hiện',
            dataIndex: 'totalProject',
            key: 'totalProject',
        },
    ];

    const dataFreelance = [
        {
            index: '1',
            name: 'Nguyễn Tấn Tài',
            totalProject: 52,
        },
        {
            index: '2',
            name: 'Nguyễn Thị Ngọc Nghi',
            totalProject: 46,
        },
        {
            index: '3',
            name: 'Nguyễn Long Nhi',
            totalProject: 37,
        },
        {
            index: '4',
            name: 'Lê Tâm Anh',
            totalProject: 18,
        },
    ];

    return (<div className="d-flex">
        <div className="container mt-4">
            <div className="row">
                <div className="col-4">
                    <div className={"card rounded-0 " + scss["border-top-3"]}
                    >
                        <div className="card-body text-center">
                            <h5>
                                Tổng số người dùng <span className="text-success">{currentMonth}</span>
                            </h5>
                            <div className="d-flex align-items-center justify-content-center mt-3">
                                <FontAwesomeIcon icon={faUsers} size="xl" beatFade />
                                <h5 className="card-text ms-2">7903</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className={"card rounded-0 " + scss["border-top-3"]}
                    >
                        <div className="card-body text-center">
                            <h5>
                                Tổng số bài đăng <span className="text-success">{currentMonth}</span>
                            </h5>
                            <div className="d-flex align-items-center justify-content-center mt-3">
                                <FontAwesomeIcon icon={faPenToSquare} size="xl" beatFade />
                                <h5 className="card-text ms-2">8700</h5>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-4">
                    <div className={"card rounded-0 " + scss["border-top-3"]} >
                        <div className="card-body text-center">
                            <h5>Tổng số giao dịch </h5>
                            <div className="d-flex align-items-center justify-content-center mt-3">
                                <FontAwesomeIcon icon={faCommentDollar} size="xl" beatFade />
                                <h5 className="card-text ms-2">7566</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Biểu đồ */}
            <div className="row mt-3 p-2">
                {/* Biểu đồ tròn */}
                <div className="col-6 p-3">
                    <div className="card d-flex align-items-center rounded-0">
                        <h3 className="text-center my-3">Thống kê tiến độ công việc</h3>
                        <Chart options={pieOptions} series={pieSeries} type="pie" width="470px" />
                    </div>
                </div>

                {/* Biểu đồ miền */}
                <div className="col-6 p-3">
                    <div className="h-100 card rounded-0">
                        <h3 className="text-center mt-3">Thống kê doanh thu năm {currentYear}</h3>
                        <Chart options={chartOptions} series={series} type="area" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <h3 className="text-center">Xếp hạng Freelancer</h3>
                    <Table
                        columns={columnsFreelance}
                        dataSource={dataFreelance}
                        pagination={false}
                    />
                </div>
                <div className="col-6">
                    <h3 className="text-center">Xếp hạng Nhà tuyển dụng</h3>
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                    /></div>
            </div>
        </div>
    </div>);
}

export default Dashboard;
