import React, { useState } from "react";
import styles from "../skills/SkillTable.module.scss";
import { useNavigate } from "react-router-dom";
import { Table, Button, Breadcrumb, Tooltip } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { motion, AnimatePresence, delay } from "framer-motion";

const SkillTable = () => {
  const navigate = useNavigate();

  const [hoveredRow, setHoveredRow] = useState(null);

  const data = [
    {
      key: "1",
      name: "Lập trình JavaScript",
      description:
        "Khả năng viết mã JavaScript hiệu quả và tối ưu hóa hiệu suất của ứng dụng web.",
    },
    {
      key: "2",
      name: "Thiết kế UI/UX",
      description:
        "Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. ",
    },
    {
      key: "3",
      name: "Quản lý dự án",
      description:
        "Lập kế hoạch, phân công công việc và giám sát tiến độ dự án một cách hiệu quả.",
    },
    {
      key: "4",
      name: "Lập trình JavaScript",
      description:
        "Khả năng viết mã JavaScript hiệu quả và tối ưu hóa hiệu suất của ứng dụng web.",
    },
    {
      key: "5",
      name: "Thiết kế UI/UX",
      description:
        "Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. ",
    },
    {
      key: "6",
      name: "Quản lý dự án",
      description:
        "Lập kế hoạch, phân công công việc và giám sát tiến độ dự án một cách hiệu quả.",
    },
  ];

  const columns = [
    {
      title: "Tên kỹ năng & Mô tả",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div
          onMouseEnter={() => setHoveredRow(record.key)}
          onMouseLeave={() => setHoveredRow(null)}
          style={{ cursor: "pointer" }}
        >
          <b>{text}</b>
          <br />
          <AnimatePresence>
            <motion.p
              className={styles.description}
              initial={{ maxHeight: 0, opacity: 0 }}
              animate={{
                maxHeight: hoveredRow === record.key ? 200 : 24,
                opacity: hoveredRow === record.key ? 1 : 0.7,
                whiteSpace: hoveredRow === record.key ? "normal" : "nowrap",
              }}
              exit={{ maxHeight: 24, opacity: 0.7 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                whiteSpace: { delay: hoveredRow ? 0 : 0.8 },
              }}
            >
              {record.description}
            </motion.p>
          </AnimatePresence>
        </div>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      render: () => (
        <a href="" onClick={() => navigate("/admin/skill/edit")}>
          Chỉnh sửa
        </a>
      ),
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
          },
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

export default SkillTable;
