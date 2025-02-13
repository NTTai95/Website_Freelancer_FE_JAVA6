import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import SidebarFilter from "./SidebarFilter";
import accountApi from "../../api/accountApi";
import { Pagination } from "antd";
import jobspostApi from "../../api/jobspostApi";

const JobListing = () => {
  const filters = {
    "Ngày đăng": [
      "Trong vòng 1 giờ",
      "Trong vòng 24 giờ",
      "Trong vòng 7 ngày",
      "Trong vòng 14 ngày",
      "Trong vòng 30 ngày",
    ],
    "Danh mục": [
      "Digital & Creative",
      "Kế toán",
      "Ngân hàng",
      "Mới tốt nghiệp",
      "IT Contractor",
    ],
    "Kinh nghiệm": ["Tất cả", "1 năm", "3 năm", "5 năm", "Trên 5 năm"],
    Lương: ["Tất cả", "2 triệu", "4 triệu", "6 triệu", "Trên 8 triệu"],
    "Cấp bậc": [
      "Tất cả",
      "Nhân viên",
      "Trưởng nhóm",
      "Trưởng/Phó phòng",
      "Giám đốc",
    ],
    "Hình thức công việc": ["Toàn thời gian", "Bán thời gian", "Thực tập"],
  };

  const [jobs, setJobs] = useState([]);

  const [accounts, setAccounts] = useState([]);

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const fetchData = async () => {
    await jobspostApi
      .getAll({ page: pagination.current, size: pagination.pageSize })
      .then((response) => {
        console.log(response.data);
        setJobs(response.data.content);
        setPagination((prev) => ({
          ...prev,
          total: response.data.totalElements,
        }));
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="mb-5 text-center">Danh sách công việc</h1>

      <div className="row">
        <aside className="col-md-3">
          {Object.keys(filters).map((key) => (
            <SidebarFilter key={key} title={key} options={filters[key]} />
          ))}
        </aside>

        <main className="col-md-9">
          <Pagination
            pageSize={pagination.pageSize}
            align="end"
            defaultCurrent={pagination.current}
            total={pagination.total}
          />
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
          {accounts.map((account) => {
            return (
              <div>
                <p>Id: {account.id}</p>
                <p>Email: {account.email}</p>
                <p>Password: {account.password}</p>
                <p>Type: {account.type ? "admin" : "staff"}</p>
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default JobListing;
