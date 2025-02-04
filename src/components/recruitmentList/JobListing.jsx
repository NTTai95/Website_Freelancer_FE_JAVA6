import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import SidebarFilter from "./SidebarFilter";

const JobListing = () => {
  const [isScrollVisible, setIsScrollVisible] = useState(false);

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
    "Lương": ["Tất cả", "2 triệu", "4 triệu", "6 triệu", "Trên 8 triệu"],
    "Cấp bậc": [
      "Tất cả",
      "Nhân viên",
      "Trưởng nhóm",
      "Trưởng/Phó phòng",
      "Giám đốc",
    ],
    "Hình thức công việc": ["Toàn thời gian", "Bán thời gian", "Thực tập"],
  };

  const jobs = [
    {
      title: "Thiết kế Web, Thiết kế đồ họa, UI/UX Designer & Nghệ thuật",
      company: "Web Themes Ltd",
      location: "Candlebriar Drive, Portland, NY 13679",
      time: "3 phút trước",
      type: "Toàn thời gian",
      description: "Chịu trách nhiệm thiết kế giao diện người dùng và giải pháp web sáng tạo.",
    },
    {
      title: "PHP Developer, Team of PHP & IT Co",
      company: "PHP Solutions",
      location: "Rogers Street, Cincinnati, OH 45202",
      time: "5 phút trước",
      type: "Toàn thời gian",
      description: "Phát triển ứng dụng PHP và duy trì cơ sở hạ tầng CNTT.",
    },
    {
      title: "Website Developer & Software Developer",
      company: "Code Valley Ltd",
      location: "Carolina Avenue, Richland, TX 78978",
      time: "5 phút trước",
      type: "Toàn thời gian",
      description: "Xây dựng và cải tiến các trang web, đảm bảo chức năng hoạt động trơn tru.",
    },
    {
      title: "Thiết kế Web, Thiết kế đồ họa, UI/UX Designer & Nghệ thuật",
      company: "Web Themes Ltd",
      location: "Candlebriar Drive, Portland, NY 13679",
      time: "3 phút trước",
      type: "Toàn thời gian",
      description: "Chịu trách nhiệm thiết kế giao diện người dùng và giải pháp web sáng tạo.",
    },
    {
      title: "PHP Developer, Team of PHP & IT Co",
      company: "PHP Solutions",
      location: "Rogers Street, Cincinnati, OH 45202",
      time: "5 phút trước",
      type: "Toàn thời gian",
      description: "Phát triển ứng dụng PHP và duy trì cơ sở hạ tầng CNTT.",
    },
    {
      title: "Website Developer & Software Developer",
      company: "Code Valley Ltd",
      location: "Carolina Avenue, Richland, TX 78978",
      time: "5 phút trước",
      type: "Toàn thời gian",
      description: "Xây dựng và cải tiến các trang web, đảm bảo chức năng hoạt động trơn tru.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrollVisible(true);
      } else {
        setIsScrollVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
          <div className="d-flex justify-content-between align-items-center mb-3">
            <p>Hiển thị kết quả 0-20</p>

            
            <div>
              <label htmlFor="results-select" className="mr-2">
                Hiển thị:
              </label>
              <select id="results-select" className="form-select">
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="200">200</option>
              </select>
            </div>
          </div>
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </main>
      </div>

      
      {isScrollVisible && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary position-fixed"
          style={{
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
            borderRadius: "50%",
            padding: "10px 20px",
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default JobListing;
