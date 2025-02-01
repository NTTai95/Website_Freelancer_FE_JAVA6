import React, { useState, useEffect, useRef } from "react";
import scss from "./SkillTable.module.scss";
import { useNavigate } from "react-router-dom";
import { Table, Button, Breadcrumb, Tooltip, Input, Space } from "antd";
import { HomeOutlined, UserOutlined, SearchOutlined } from "@ant-design/icons";
import { motion, AnimatePresence, delay } from "framer-motion";
import Highlighter from "react-highlight-words";
import accountApi from "@api/accountApi";

const SkillTable = () => {
  const navigate = useNavigate();
  const [hoveredRow, setHoveredRow] = useState(null);

  const [searchText, setSearchText] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm) => {
    confirm();
    setSearchText(selectedKeys[0]);
  };
  const handleReset = (clearFilters, confirm) => {
    setSearchText("");
    clearFilters();
    confirm();
  };

  const getColumnSearchName = () => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Tìm kiếm...`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Tìm kiếm
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters, confirm)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Đặt lại
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      (record.name + record.description)
        .toLowerCase()
        .includes(value.toLowerCase()),
  });

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
    {
      key: "7",
      name: "Lập trình JavaScript",
      description:
        "Khả năng viết mã JavaScript hiệu quả và tối ưu hóa hiệu suất của ứng dụng web.",
    },
    {
      key: "8",
      name: "Thiết kế UI/UX",
      description:
        "Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. ",
    },
    {
      key: "9",
      name: "Quản lý dự án",
      description:
        "Lập kế hoạch, phân công công việc và giám sát tiến độ dự án một cách hiệu quả.",
    },
    {
      key: "10",
      name: "Lập trình JavaScript",
      description:
        "Khả năng viết mã JavaScript hiệu quả và tối ưu hóa hiệu suất của ứng dụng web.",
    },
    {
      key: "11",
      name: "Thiết kế UI/UX",
      description:
        "Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. ",
    },
    {
      key: "12",
      name: "Quản lý dự án",
      description:
        "Lập kế hoạch, phân công công việc và giám sát tiến độ dự án một cách hiệu quả.",
    },
    {
      key: "13",
      name: "Lập trình JavaScript",
      description:
        "Khả năng viết mã JavaScript hiệu quả và tối ưu hóa hiệu suất của ứng dụng web.",
    },
    {
      key: "14",
      name: "Thiết kế UI/UX",
      description:
        "Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. ",
    },
    {
      key: "15",
      name: "Quản lý dự án",
      description:
        "Lập kế hoạch, phân công công việc và giám sát tiến độ dự án một cách hiệu quả.",
    },
    {
      key: "16",
      name: "Lập trình JavaScript",
      description:
        "Khả năng viết mã JavaScript hiệu quả và tối ưu hóa hiệu suất của ứng dụng web.",
    },
    {
      key: "17",
      name: "Thiết kế UI/UX",
      description:
        "Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. ",
    },
    {
      key: "18",
      name: "Quản lý dự án",
      description:
        "Lập kế hoạch, phân công công việc và giám sát tiến độ dự án một cách hiệu quả.",
    },
    {
      key: "19",
      name: "Lập trình JavaScript",
      description:
        "Khả năng viết mã JavaScript hiệu quả và tối ưu hóa hiệu suất của ứng dụng web.",
    },
    {
      key: "20",
      name: "Thiết kế UI/UX",
      description:
        "Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. ",
    },
    {
      key: "21",
      name: "Quản lý dự án",
      description:
        "Lập kế hoạch, phân công công việc và giám sát tiến độ dự án một cách hiệu quả.",
    },
    {
      key: "22",
      name: "Lập trình JavaScript",
      description:
        "Khả năng viết mã JavaScript hiệu quả và tối ưu hóa hiệu suất của ứng dụng web.",
    },
    {
      key: "23",
      name: "Thiết kế UI/UX",
      description:
        "Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. Thiết kế giao diện người dùng thân thiện, trải nghiệm người dùng mượt mà và tối ưu trên mọi thiết bị. ",
    },
    {
      key: "24",
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
      ...getColumnSearchName(),
      render: (text, record) => (
        <div
          onMouseEnter={() => setHoveredRow(record.key)}
          onMouseLeave={() => setHoveredRow(null)}
        >
          <b>
            <Highlighter
              highlightStyle={{
                backgroundColor: "#94dffa",
                padding: 0,
              }}
              searchWords={[searchText]}
              autoEscape
              textToHighlight={text ? text.toString() : ""}
            ></Highlighter>
          </b>
          <br />
          <AnimatePresence>
            <motion.p
              className={scss.description}
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
              <Highlighter
                highlightStyle={{
                  backgroundColor: "#94dffa",
                  padding: 0,
                }}
                searchWords={[searchText]}
                autoEscape
                textToHighlight={
                  record.description ? record.description.toString() : ""
                }
              ></Highlighter>
            </motion.p>
          </AnimatePresence>
        </div>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (record) => (
        <a href="" onClick={() => navigate("/admin/skills/edit/" + record.key)}>
          Chỉnh sửa
        </a>
      ),
    },
  ];

  return (
    <div className={`${scss.employeeTable} p-3`}>
      <Button
      className={"mb-3 float-end"}
        type="primary"
        onClick={() => navigate("/admin/skills/add")}
        size="large"
      >
        Thêm kỹ năng
      </Button>
      <Table
        columns={columns}
        dataSource={data}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
        onChange={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
};

export default SkillTable;
