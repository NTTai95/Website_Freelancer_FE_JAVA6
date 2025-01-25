
import scss from "./PostDetail";
import { ClockCircleOutlined, DollarOutlined, UserSwitchOutlined  } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { Tag } from "antd";
import { Button, Flex } from "antd";
import { Input } from "antd";
import { Rate } from 'antd';
function PostDetail() {
  return (
    <div className="container">
      <div className="row">
        {/* Cột trái (9 phần) */}
        <div className="col-lg-9">
          <h3>Cần Tuyển Nhân Viên Kiểm Tra Chất Lượng Cho Website</h3>
          <div className={scss.ThongTin + " d-flex"}>
            <div className="me-3">
              <ClockCircleOutlined
                style={{ fontSize: "25px", marginRight: "10px" }}
              />
              <span className="text-secondary">Đăng cách đây 7 giờ trước</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faMapPin}
                style={{ fontSize: "25px", marginRight: "10px" }}
              />
              <span className="text-secondary">Đăng cách đây 7 giờ trước</span>
            </div>
          </div>
          <hr />
          <div className="text">
            <p>
              Chúng tôi đang tìm kiếm một Manual QA Tester siêng năng và chú
              trọng đến chi tiết để tham gia nhóm kiểm thử di động và web của
              chúng tôi...
            </p>
          </div>
          <hr />
          <div className={scss.ThongTin + " d-flex"}>
            <div className="me-5">
            <DollarOutlined style={{ fontSize: "25px", marginRight: "10px" }} />
              <span>$5.00</span>
              <p>Giá cố định</p>
            </div>
            <div>
            <UserSwitchOutlined style={{ fontSize: "25px", marginRight: "10px" }} />
              <span>Mức độ đầu vào</span>
              <p>Tôi đang cần tìm kiếm những người làm việc tự do với mức giá thất nhất</p>
            </div>
          </div>
          <hr />
          <div className={scss.LoaiDuAn + " d-flex"} style={{ gap: "1rem" }}>
            <h5>Loại dự án:</h5>
            <p>dự án một lần</p>
          </div>
          <hr />
          <div className={scss.KyNang}>
            <h5>Kỹ năng và Chuyên môn</h5>
            <Tag>Bug Report</Tag>
            <Tag>Functional Testing</Tag>
            <Tag>Manual Testing</Tag>
            <Tag>Jira</Tag>
            <Tag>Quality Assurance</Tag>
            <Tag>Web Testing</Tag>
            <Tag>Test Case Design</Tag>
          </div>
          <hr />
          <div className={scss.HoatDong}>
            <h5>Hoạt động trong công việc này</h5>
            <p>
              Đề xuất: 20-50
              <br />
              Lần xem cuối cùng của khách hàng: 5 giờ trước
              <br />
              Phỏng vấn: 1<br />
              Lời mời đã gửi: 1<br />
              Lời mời chưa được phản hồi: 1
            </p>
            <h4>Nâng cấp tư cách thành viên của bạn để xem phạm vi giá thầu</h4>
          </div>
        </div>

        {/* Đường phân cách dọc */}
        {/* <div className="col-auto">
          <hr
            style={{
              height: "100%",
              width: "1px",
              backgroundColor: "black",
              border: "none",
            }}
          />
        </div> */}

        {/* Cột phải (3 phần) */}
        <div className="col-lg-3 border-start">
          <div
            className={scss.Button}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Button type="primary" style={{ marginBottom: "10px" }}>
              Nộp đơn ngay
            </Button>
            <Button>Yêu thích công việc</Button>
            <br />
          </div>
          <div className={scss.KhachHang}>
            <h5>Về khách hàng</h5>
            <p>
              Phương thức thanh toán đã được xác minh Số điện thoại đã được xác
              minh
            </p>
            <Rate />
            <p>
              2 việc làm đã đăng <br />
              Tỷ lệ tuyển dụng 50%, 1 việc làm mở
              <br />
              1 thuê, 1 hoạt động <br />
              Thành viên từ 15 tháng 1 năm 2025
            </p>
          </div>
          <div className={scss.Link}>
            <h5>Liên kết việc làm</h5>
            <Input placeholder="Link" />
            <a href="#" style={{ color: "green", textDecoration: "none" }}>
              Sao chép liên kết
            </a>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1763404726867!2d105.75622517479356!3d10.002288390103253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a089c81e8f59f9%3A0x1146a9aed97ccaf9!2sFREELANCE%20PHOTOGRAPHY!5e0!3m2!1svi!2s!4v1737465606358!5m2!1svi!2s"
              
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
