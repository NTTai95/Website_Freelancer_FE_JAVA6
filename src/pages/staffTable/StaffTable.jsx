import React, { useEffect, useState } from "react";
import scss from "./StaffTable.module.scss";
import { Breadcrumb, Button, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import staffApi from "../../api/staffApi";

const StaffTable = () => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const columns = [
    {
      title: "Họ tên",
      dataIndex: "fullName",
      sorter: (a, b) => a.fullName.length - b.fullName.length,
    },
    {
      title: "Ngày sinh",
      dataIndex: "birthday",
      sorter: (a, b) => new Date(a.birthday) - new Date(b.birthday),
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
        <a href="" onClick={() => navigate(`/admin/staff/edit/${record.key}`)}>
          Chỉnh sửa
        </a>
      ),
    },
  ];

  const [data, setData] = useState();

  useEffect(() => {
    staffApi.getAll().then((res) => {
      setData(
        res.data.map((staff) => {
          return {
            fullName: staff.fullName,
            birthday: formatDate(staff.birthday),
            email: staff.account.email,
            phone: staff.phone,
            status: staff.status ? "Hoạt động" : "Vô hiệu hóa",
          };
        })
      );
    });
  }, []);

  return (
    <div className={`${scss.employeeTable} p-3`}>
      <Button
        className={"mb-3 float-end"}
        type="primary"
        onClick={() => navigate("/admin/staff/add")}
        size="large"
      >
        Thêm nhân viên
      </Button>
      <Table
        columns={columns}
        dataSource={data}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
      />
    </div>
  );
};

export default StaffTable;
