import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import SidebarFilter from "./SidebarFilter";
import { Pagination, Skeleton } from "antd";
import jobspostApi from "../../api/jobspostApi";

const JobPost = () => {
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

  const [jobs, setJobs] = useState(null);

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const fetchData = async () => {
    const res = await jobspostApi.getPage({
      page: pagination.current,
      size: pagination.pageSize,
    });

    const { content, totalElements } = res.data;

    setJobs(content);
    setPagination((prev) => ({
      ...prev,
      total: totalElements,
    }));
  };

  useEffect(() => {
    fetchData();
  }, [pagination.current, pagination.pageSize]);

  const handlePageChange = (page, pageSize) => {
    setPagination((prev) => ({
      ...prev,
      current: page,
      pageSize: pageSize,
    }));
    window.scrollTo(0, 0);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <aside className="col-md-3">
          {Object.keys(filters).map((key) => (
            <SidebarFilter key={key} title={key} options={filters[key]} />
          ))}
        </aside>

        <div className="col-9">
          {jobs && jobs.map((job, index) => <JobCard key={index} job={job} />)}
          {jobs && (
            <Pagination
              pageSize={pagination.pageSize}
              align="end"
              current={pagination.current}
              total={pagination.total}
              onChange={handlePageChange}
            />
          )}
          {(!jobs || jobs?.length == 0) && (
            <div>
              {Array.from({ length: 10 }).map((_, index) => (
                <Skeleton
                  avatar
                  key={index}
                  active={true}
                  paragraph={{
                    rows: 4,
                  }}
                />
              ))}
              <Skeleton.Input className={"ms-auto d-block"} active={true} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobPost;
