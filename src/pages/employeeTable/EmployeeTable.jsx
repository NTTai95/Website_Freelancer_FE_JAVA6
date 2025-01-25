import React, { useState } from "react";
import styles from "./EmployeeTable.module.scss"; // Import SCSS module
import { Breadcrumb, Button, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

const EmployeeTable = () => {
  const navigate = useNavigate();

  const columns = [
    {
      title: "Họ tên",
      dataIndex: "fullName",
      sorter: (a, b) => a.fullName.length - b.fullName.length,
    },
    {
      title: "Tuổi",
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <a
          href=""
          onClick={() => navigate(`/admin/employee/edit/${record.key}`)}
        >
          Chỉnh sửa
        </a>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      fullName: "Nguyễn Văn An",
      age: 25,
      email: "nguyenvanan@example.com",
      phone: "0987654321",
      status: "Đang làm việc",
    },
    {
      key: "2",
      fullName: "Trần Thị Bích",
      age: 30,
      email: "tranthibich@example.com",
      phone: "0912345678",
      status: "Đã nghỉ việc",
    },
    {
      key: "3",
      fullName: "Phạm Minh Huy",
      age: 28,
      email: "phamminhhuy@example.com",
      phone: "0934567890",
      status: "Đang làm việc",
    },
    {
      key: "4",
      fullName: "Lê Thị Thanh",
      age: 26,
      email: "lethithanh@example.com",
      phone: "0976543210",
      status: "Đang làm việc",
    },
    {
      key: "5",
      fullName: "Hoàng Văn Khánh",
      age: 32,
      email: "hoangvankhanh@example.com",
      phone: "0908765432",
      status: "Đã nghỉ việc",
    },
    {
      key: "6",
      fullName: "Ngô Thị Hạnh",
      age: 29,
      email: "ngothihanh@example.com",
      phone: "0912987654",
      status: "Đang làm việc",
    },
    {
      key: "7",
      fullName: "Võ Minh Tâm",
      age: 27,
      email: "vominhtam@example.com",
      phone: "0945678901",
      status: "Đang làm việc",
    },
    {
      key: "8",
      fullName: "Đỗ Thị Ngọc",
      age: 24,
      email: "dothingoc@example.com",
      phone: "0923456789",
      status: "Đã nghỉ việc",
    },
    {
      key: "9",
      fullName: "Bùi Văn Nam",
      age: 33,
      email: "buivannam@example.com",
      phone: "0981234567",
      status: "Đang làm việc",
    },
    {
      key: "10",
      fullName: "Đinh Thị Tuyết",
      age: 31,
      email: "dinhthituyet@example.com",
      phone: "0912345678",
      status: "Đã nghỉ việc",
    },
    {
      key: "11",
      fullName: "Nguyễn Thị Lan",
      age: 22,
      email: "nguyenthilan@example.com",
      phone: "0934567891",
      status: "Đang làm việc",
    },
    {
      key: "12",
      fullName: "Trương Văn Quang",
      age: 35,
      email: "truongvanquang@example.com",
      phone: "0909123456",
      status: "Đã nghỉ việc",
    },
    {
      key: "13",
      fullName: "Phan Thị Hà",
      age: 29,
      email: "phanthiha@example.com",
      phone: "0912349876",
      status: "Đang làm việc",
    },
    {
      key: "14",
      fullName: "Lý Minh Khang",
      age: 26,
      email: "lyminhkhang@example.com",
      phone: "0987654322",
      status: "Đang làm việc",
    },
    {
      key: "15",
      fullName: "Hồ Văn Hùng",
      age: 28,
      email: "hovanhung@example.com",
      phone: "0908765433",
      status: "Đang làm việc",
    },
    {
      key: "16",
      fullName: "Trần Thị Hương",
      age: 30,
      email: "tranthihoanghuong@example.com",
      phone: "0912345643",
      status: "Đã nghỉ việc",
    },
    {
      key: "17",
      fullName: "Nguyễn Văn Thắng",
      age: 34,
      email: "nguyenvanthang@example.com",
      phone: "0934564321",
      status: "Đang làm việc",
    },
    {
      key: "18",
      fullName: "Phạm Thị Mai",
      age: 27,
      email: "phamthimai@example.com",
      phone: "0976541234",
      status: "Đang làm việc",
    },
    {
      key: "19",
      fullName: "Trần Minh Hải",
      age: 25,
      email: "tranminhhai@example.com",
      phone: "0909123465",
      status: "Đang làm việc",
    },
    {
      key: "20",
      fullName: "Vũ Thị Yến",
      age: 32,
      email: "vuthiyen@example.com",
      phone: "0923456123",
      status: "Đã nghỉ việc",
    },
  ];

  return (
    <div className={`${styles.employeeTable} p-3`}>
      <Breadcrumb
        className={styles.breadcrumb}
        items={[
          {
            href: "",
            title: <HomeOutlined />,
          },
          {
            href: "/admin/employee",
            title: "Nhân viên",
          }
        ]}
      />

      <Table
        columns={columns}
        dataSource={data}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
      />
      <Button
        type="primary"
        onClick={() => navigate("/admin/employee/add")}
        size="large"
      >
        Thêm nhân viên
      </Button>
    </div>
  );
};

export default EmployeeTable;
