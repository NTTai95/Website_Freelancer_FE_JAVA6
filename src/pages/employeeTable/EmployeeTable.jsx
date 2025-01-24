import React, { useState } from "react";
import styles from "./EmployeeTable.module.scss"; // Import SCSS module
import { FaFilter } from "react-icons/fa"; // Import filter icon
import { Pagination } from "react-bootstrap"; // Import Bootstrap Pagination component

const EmployeeTable = () => {
  const employees = [
    {
      id: 1,
      name: "John Doe",
      position: "Developer",
      department: "IT",
      email: "john.doe@example.com",
      joinDate: "2020-05-10",
      salary: 1500,
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Designer",
      department: "Marketing",
      email: "jane.smith@example.com",
      joinDate: "2021-07-15",
      salary: 1200,
    },
    {
      id: 3,
      name: "Alice Brown",
      position: "Manager",
      department: "HR",
      email: "alice.brown@example.com",
      joinDate: "2019-03-20",
      salary: 2000,
    },
    {
      id: 4,
      name: "Alice Brown",
      position: "Manager",
      department: "HR",
      email: "alice.brown@example.com",
      joinDate: "2019-03-20",
      salary: 2000,
    },
    {
      id: 5,
      name: "Alice Brown",
      position: "Manager",
      department: "HR",
      email: "alice.brown@example.com",
      joinDate: "2019-03-20",
      salary: 2000,
    },
    {
      id: 6,
      name: "Alice Brown",
      position: "Manager",
      department: "HR",
      email: "alice.brown@example.com",
      joinDate: "2019-03-20",
      salary: 2000,
    },
    {
      id: 7,
      name: "Alice Brown",
      position: "Manager",
      department: "HR",
      email: "alice.brown@example.com",
      joinDate: "2019-03-20",
      salary: 2000,
    },{
      id: 8,
      name: "Alice Brown",
      position: "Manager",
      department: "HR",
      email: "alice.brown@example.com",
      joinDate: "2019-03-20",
      salary: 2000,
    },{
      id: 9,
      name: "Alice Brown",
      position: "Manager",
      department: "HR",
      email: "alice.brown@example.com",
      joinDate: "2019-03-20",
      salary: 2000,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const indexOfLastEmployee = currentPage * itemsPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const emptyRows = Array.from(
    { length: itemsPerPage - currentEmployees.length },
    (_, index) => (
      <tr key={`empty-${index}`}>
        <td colSpan="8" style={{ height: "50px" }}></td>
      </tr>
    )
  );

  return (
    <div className={`${styles.employeeTable} p-3`}>
      <div className="table-container">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Mã nhân viên</th>
              <th className={styles.filterHeader}>
                Tên nhân viên
                <FaFilter className={`${styles.filterIcon} ms-2`} />
              </th>
              <th>Vị trí</th>
              <th className={styles.filterHeader}>
                Phòng ban
                <FaFilter className={`${styles.filterIcon} ms-2`} />
              </th>
              <th>Email</th>
              <th>Ngày tham gia</th>
              <th className={styles.filterHeader}>
                Lương
                <FaFilter className={`${styles.filterIcon} ms-2`} />
              </th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.department}</td>
                <td>{employee.email}</td>
                <td>{employee.joinDate}</td>
                <td>{employee.salary} USD</td>
                <td className={styles.actionButtons}>
                  <button
                    className="btn btn-link"
                    style={{ textDecoration: "none" }}
                  >
                    Chỉnh sửa
                  </button>
                  <button className="btn btn-danger">Xóa</button>
                </td>
              </tr>
            ))}
            {emptyRows}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <button className="btn btn-success">+ Thêm nhân viên</button>
        <Pagination>
          <Pagination.Prev
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
          />
          {[...Array(Math.ceil(employees.length / itemsPerPage))].map(
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
              currentPage < Math.ceil(employees.length / itemsPerPage) &&
              paginate(currentPage + 1)
            }
          />
        </Pagination>
      </div>
    </div>
  );
};

export default EmployeeTable;
