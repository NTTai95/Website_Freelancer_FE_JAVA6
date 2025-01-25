import React, { useState } from "react";
import styles from "../skills/SkillTable.module.scss";
import { FaFilter } from "react-icons/fa";
import { Dropdown, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SkillTable = () => {
  const navgate = useNavigate();

  const skills = [
    {
      id: 1,
      name: "Java",
      description: "Java is a popular programming language.",
    },
    {
      id: 2,
      name: "React",
      description: "React is a library for building UIs.",
    },
    { id: 3, name: "Copywriting", description: "Crafting persuasive content." },
    {
      id: 4,
      name: "Copy & Paste",
      description: "The basic skill of every coder.",
    },
    {
      id: 5,
      name: "Array Programming",
      description: "Programming with arrays.",
    },
    {
      id: 6,
      name: "Python",
      description: "Python is known for its simplicity.",
    },
    { id: 7, name: "Node.js", description: "Server-side JavaScript runtime." },
    { id: 8, name: "JavaScript", description: "The language of the web." },
    { id: 9, name: "CSS", description: "Styling web pages beautifully." },
    { id: 10, name: "HTML", description: "The structure of the web." },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Tính chỉ số các phần tử cần hiển thị
  const indexOfLastSkill = currentPage * itemsPerPage;
  const indexOfFirstSkill = indexOfLastSkill - itemsPerPage;
  const currentSkills = skills.slice(indexOfFirstSkill, indexOfLastSkill);

  // Tạo các hàng trống nếu dữ liệu không đủ
  const emptyRowsCount = itemsPerPage - currentSkills.length;
  const emptyRows = Array.from({ length: emptyRowsCount }, (_, index) => (
    <tr key={`empty-${index}`} className={styles.emptyRow}>
      <td colSpan="2"></td>
    </tr>
  ));

  // Hàm chuyển trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={`${styles.skillTable} p-3`}>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Tên kỹ năng / Mô tả</th>
            <th>
              <Dropdown>
                <Dropdown.Toggle variant="link" id="dropdown-custom-components">
                  <FaFilter size={18} className={`${styles.filterIcon} ms-2`} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1">Lọc theo tên</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Lọc theo mô tả</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Lọc theo độ dài</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentSkills.map((skill) => (
            <tr key={skill.id}>
              <td>
                <strong>{skill.name}</strong>
                <p>{skill.description}</p>
              </td>
              <td>
                <button onClick={() => navgate(`/admin/skills/edit`)} className="btn btn-link">Chỉnh sửa</button>
              </td>
            </tr>
          ))}
          {emptyRows}
        </tbody>
      </table>

      {/* Nút thêm kỹ năng và pagination */}
      <div className="d-flex justify-content-between align-items-center">
        <button onClick={() => navgate("/admin/skills/add")} className="btn btn-success">+ Thêm kỹ năng</button>
        <Pagination>
          <Pagination.Prev
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
          />
          {[...Array(Math.ceil(skills.length / itemsPerPage))].map(
            (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            )
          )}
          <Pagination.Next
            onClick={() =>
              currentPage < Math.ceil(skills.length / itemsPerPage) &&
              paginate(currentPage + 1)
            }
          />
        </Pagination>
      </div>
    </div>
  );
};

export default SkillTable;
