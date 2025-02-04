import CardHome from "@components/card/home";
import scss from "./home.module.scss";
import { Row, Col, Divider, Card } from "antd";
import { StarOutlined } from "@ant-design/icons";
import { BookOutlined } from "@ant-design/icons";
import { CheckCircleOutlined } from "@ant-design/icons";
import { AppstoreAddOutlined } from "@ant-design/icons";
import { Button, Carousel } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import FancyText from "@carefully-coded/react-text-gradient";
function Home() {
  return (
    <>
      <div className="position-relative">
        <Carousel className={scss.banner} arrows autoplay infinite={true}>
          <div>
            <video className={scss.video} autoPlay loop muted playsInline>
              <source src="src/assets/video/banner.mp4" type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ video.
            </video>
          </div>
          <div>
            <img src="src/assets/images/v.jpg" />
          </div>
          <div>
            <img src="src/assets/images/v.jpg" />
          </div>
          <div>
            <img src="src/assets/images/v.jpg" />
          </div>
        </Carousel>
        <div className={scss["context-banner"]}>
          <div className={scss["container-banner"]}>
            <FancyText
              className={scss.logo}
              gradient={{ from: "#cb5eee", to: "#4be1ec", type: "linear" }}
              animateTo={{ from: "#4be1ec", to: "#cb5eee" }}
              animateDuration={1500}
            >
              FREELANCER
            </FancyText>
            <h3>
              Chào mừng đến với{" "}
              <span className={scss.highlight}>Freelancer</span> Nền tảng kết
              nối <span className={scss.highlight}>chuyên gia</span> và
              <span className={scss.highlight}> doanh nghiệp</span> hàng đầu. Dù
              bạn là freelancer tìm kiếm cơ hội mới hay nhà tuyển dụng muốn hợp
              tác với những tài năng xuất sắc, chúng tôi mang đến một không gian{" "}
              <span className={scss.highlight}>chuyên nghiệp, linh hoạt</span>{" "}
              và <span className={scss.highlight}>hiệu quả</span>. <br />
              Hãy bắt đầu hành trình của bạn ngay hôm nay và tạo dựng dấu ấn
              mạnh mẽ trong lĩnh vực của mình!
            </h3>
          </div>
        </div>
      </div>
      <div className={"container mt-5 "+ scss["view"]}>
        <div className={scss.card}>
          <Row>
            <Col span={10}>
              <h2 style={{ color: "#FF6666" }}>Bộ Doanh Nghiệp</h2>
              <br />
              <h3 style={{ color: "#FFFFCC" }}>
                Đây là cách mà những công ty tốt tìm được những người đồng hành
                tốt.
              </h3>
              <br />
              <h6 style={{ color: "white" }}>
                Tiếp cận nhóm 1% nhân tài hàng đầu trên Upwork và toàn bộ bộ
                công cụ quản lý lực lượng lao động kết hợp. Đây chính là cách
                đổi mới hoạt động ngày nay.
              </h6>
              <br />
              <p style={{ color: "white" }}>
                {" "}
                <BookOutlined
                  style={{ color: "#99FF00", marginRight: "5px" }}
                />{" "}
                Tiếp cận nhân tài chuyên môn để lấp đầy những khoảng trống về kỹ
                năng của bạn.
              </p>
              <p style={{ color: "white" }}>
                {" "}
                <CheckCircleOutlined
                  style={{ color: "#99FF00", marginRight: "5px" }}
                />
                Kiểm soát quy trình làm việc của bạn: tuyển dụng, phân loại và
                trả lương cho nhân tài của bạn.
              </p>
              <p style={{ color: "white" }}>
                {" "}
                <AppstoreAddOutlined
                  style={{ color: "#99FF00", marginRight: "5px" }}
                />
                Hợp tác với Upwork để nhận hỗ trợ toàn diện từ đầu đến cuối.
              </p>
              <Button
                type="primary"
                style={{
                  width: "40%",
                  height: "40px",
                  backgroundColor: "#33FF00",
                  color: "black",
                }}
              >
                Xem Thêm
              </Button>
            </Col>
            <Col span={14}>
              <img
                src="src/assets/images/ft7.jpg"
                alt=""
                style={{ width: "100%", float: "left" }}
              />
            </Col>
          </Row>
        </div>

        <div style={{ marginBottom: "20px" }} className={scss.clients}>
          <Row>
            <Col span={24}>
              <img
                src="src/assets/images/contain4.jpg"
                alt=""
                style={{
                  width: "100%",
                  position: "absolute",
                  zIndex: -1,
                  height: "700px",
                  objectFit: "cover",
                }}
              />
              <h2
                style={{
                  color: "white",
                  paddingLeft: "10px",
                  paddingTop: "30px",
                }}
              >
                Dành Cho Khách Hàng
              </h2>
              <br />
              <h1 style={{ color: "white", paddingLeft: "10px" }}>
                Tìm Kiếm Nhân Tài Theo Cách Của Bạn
              </h1>
              <br />
              <h5 style={{ color: "white", paddingLeft: "10px" }}>
                Làm việc với mạng lưới chuyên gia độc lập lớn nhất <br /> và
                hoàn thành công việc – từ những nhiệm vụ <br />
                nhanh chóng đến những sự chuyển đổi lớn.
              </h5>
            </Col>
            <Col
              span={7}
              style={{
                backgroundColor: "#33FF00",
                margin: "20px",
                borderRadius: "5px",
                marginTop: "250px",
                paddingLeft: "10px",
              }}
            >
              {" "}
              <h4>
                <strong>Đăng việc làm </strong>
              </h4>
              <br />
              <Button type="link" Flex>
                {" "}
                <h5>
                  Thị trường tài năng
                  <CaretRightOutlined />
                </h5>
              </Button>
            </Col>
            <Col
              span={7}
              style={{
                backgroundColor: "#33FF00",
                margin: "20px",
                borderRadius: "5px",
                marginTop: "250px",
                paddingLeft: "10px",
              }}
            >
              {" "}
              <h4>
                <strong> Mua dự án </strong>
              </h4>
              <br />
              <Button type="link" Flex>
                {" "}
                <h5>
                  Danh mục dự án
                  <CaretRightOutlined />
                </h5>{" "}
              </Button>
            </Col>
            <Col
              span={7}
              style={{
                backgroundColor: "#33FF00",
                margin: "20px",
                borderRadius: "5px",
                marginTop: "250px",
                paddingLeft: "10px",
              }}
            >
              {" "}
              <h4>
                <strong> Lời khuyên từ các ngành </strong>
              </h4>
              <br />
              <Button type="link" Flex>
                <h5>
                  Tư vấn
                  <CaretRightOutlined />
                </h5>
              </Button>
            </Col>
          </Row>
        </div>

        <div style={{ marginTop: "100px" }} className={scss.talent}>
          <Row>
            <Col span={12}>
              <img
                src="src/assets/images/contain3.jpg"
                alt=""
                style={{ width: "100%", float: "left", height: "450px" }}
              />
            </Col>

            <Col
              span={12}
              style={{
                backgroundColor: "#00CCFF",
                paddingLeft: "20px",
                paddingTop: "10px",
              }}
            >
              <h2 style={{ color: "#FFCC00" }}>Dành Cho Nhân Tài</h2>
              <br />
              <h3 style={{ color: "#FFFFCC" }}>Tìm công việc tuyệt vời</h3>
              <br />
              <h6 style={{ color: "white" }}>
                Gặp gỡ những khách hàng mà bạn mong muốn được hợp tác và đưa sự
                nghiệp hoặc doanh nghiệp của bạn lên tầm cao mới.
              </h6>
              <br />
              <hr />
              <p style={{ color: "white" }}>
                {" "}
                <BookOutlined
                  style={{ color: "#99FF00", marginRight: "5px" }}
                />
                Tìm kiếm công việc từ những ngành nghề và dự án đang mở.
              </p>
              <p style={{ color: "white" }}>
                {" "}
                <CheckCircleOutlined
                  style={{ color: "#99FF00", marginRight: "5px" }}
                />
                Kiểm soát quy trình làm việc của bạn: tuyển dụng, phân loại và
                trả lương cho nhân tài của bạn.
              </p>
              <Button
                type="primary"
                style={{
                  width: "40%",
                  height: "40px",
                  backgroundColor: "#33FF00",
                  color: "black",
                }}
              >
                Tìm kiếm cơ hội
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Home;
