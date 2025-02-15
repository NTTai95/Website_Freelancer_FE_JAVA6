import scss from "./PostDetail";
import {
  ClockCircleOutlined,
  TransactionOutlined,
  UserSwitchOutlined,
  PhoneOutlined,
  BankOutlined,
  GoogleOutlined,
  CommentOutlined,
  HeartOutlined,

} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { Tag } from "antd";
import { Button, Flex } from "antd";
import { Input } from "antd";
import { Rate } from "antd";
function PostDetail() {
  return (
    <div className="container">
      <div className="row">
        {/* Cột trái (9 phần) */}
        <div className="col-lg-9">
          <h2>Cần Tuyển Nhân Viên Kiểm Tra Chất Lượng Cho Website</h2>
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
              <span className="text-secondary">Ninh Kiều, Cần Thơ</span>
            </div>
          </div>
          <hr />
          <div className="text">
            <h5>Mô tả</h5>
            <p>
              Chúng tôi đang tìm kiếm một Manual QA Tester siêng năng và chú
              trọng đến chi tiết để tham gia nhóm kiểm thử di động và web của
              chúng tôi
            </p>
          </div>
          <hr />
          <h5>Ngân sách</h5>
          <div className={scss.ThongTin + " d-flex"}>
            <div className="me-5">
              <TransactionOutlined
                style={{ fontSize: "25px", marginRight: "10px" }}
              />
              <span>100.000đ/Giờ</span>
              <p>Có thể thương lượng</p>
            </div>
            <div>
              <UserSwitchOutlined
                style={{ fontSize: "25px", marginRight: "10px" }}
              />
              <span>Yêu cầu</span>
              <p>
                Tôi đang cần tìm kiếm những người làm việc tự do với mức giá
                thấp nhất
              </p>
            </div>
          </div>
          <hr />
          <div className="text">
            <h5>Mô tả công việc</h5>
            <p>
              <strong>Kiểm tra chức năng:</strong> Đánh giá các tính năng trên
              website (đăng ký, đăng nhập, tìm kiếm, giỏ hàng, thanh toán, v.v.)
              để đảm bảo chúng hoạt động đúng.
            </p>
            <p>
              <strong>Kiểm tra giao diện (UI/UX):</strong> Đánh giá trải nghiệm
              người dùng, bố cục, màu sắc, font chữ, độ tương thích với các
              thiết bị (mobile, tablet, desktop).
            </p>
            <p>
              <strong>Kiểm tra hiệu suất:</strong> Xác định tốc độ tải trang,
              khả năng phản hồi của website dưới tải cao, kiểm tra các yếu tố
              tối ưu hóa tốc độ.
            </p>
            <p>
              <strong>Kiểm tra bảo mật:</strong> Kiểm tra lỗi bảo mật như lỗ
              hổng XSS, SQL Injection, kiểm tra bảo mật đăng nhập, bảo vệ dữ
              liệu người dùng.
            </p>
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
              Thời gian: bất cứ khi nào
              <br />
              Yêu cầu: hoàn thành tốt công việc được giao đúng hạn
              <br />
              Độ tuổi: 18 tuổi trở lên <br />
              Phỏng vấn: 3<br />
              Lời mời đã gửi: 1<br />
              Lời mời chưa được phản hồi: 1
            </p>
            <h4>Hãy liên hệ với chúng tôi nếu bạn thấy phù hợp với công việc</h4>
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
            <Button><HeartOutlined />Yêu thích công việc</Button>
            <br />
          </div>
          <div className={scss.KhachHang}>
            <h5>Về khách hàng</h5>
            <p>
              Phương thức thanh toán đã được xác minh Số điện thoại đã được xác
              minh
            </p>
            <Rate /> 5.0  <CommentOutlined /> 2
            <p>
              2 việc làm đã đăng <br />
              Tỷ lệ tuyển dụng 100% <br />
              Tỉ lệ thuê lại 100%
              <br />
              Đúng hạn 100%<br />
              <PhoneOutlined /> 0999999999 <br />
              <GoogleOutlined /> freelancer@gmail.com <br />
              <BankOutlined /> Ninh Kiều, Cần Thơ
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
