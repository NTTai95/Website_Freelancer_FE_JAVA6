import React, { useEffect, useState, useRef } from "react";
import scss from "./StaffTable.module.scss";
import { Button, Table, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
import staffApi from "../../api/staffApi";
import { SearchOutlined } from "@ant-design/icons";
import SearchTable from "@components/iu/input/SearchTable";

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
      ...SearchTable("fullName")
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
      ...SearchTable("email")
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      ...SearchTable("phone")
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (text, record) => (
        <a href="" onClick={() => navigate(`/admin/staff/edit/${record.id}`)}>
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
            id: staff.id,
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
        loading={!data || data.length === 0}
        onChange={(e) => {
          window.scrollTo(0, 0);
        }}
        showSorterTooltip={false}
      />
    </div>
  );
};

export default StaffTable;
