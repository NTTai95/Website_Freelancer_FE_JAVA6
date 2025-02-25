import CardAbout from "@components/card/card";
import scss from "./about.module.scss";
import { Row, Col, Image, Button } from "antd";
import React from "react";
import {
  CustomerServiceFilled,
  CarryOutFilled,
  FundFilled,
  PieChartFilled,
} from "@ant-design/icons";

const arrays = [
  {
    fullName: "Nguyễn Tấn Tài ",
    description: "Người lap trinh",
  },
  {
    fullName: "Nguyễn Thị Ngọc Nghi ",
    description: "Người lap trinh",
  },
  {
    fullName: "Nguyễn Long Nhi ",
    description: "Người lap trinh",
  },
  {
    fullName: "Trần Minh Tiến",
    description: "Người lap trinh",
  },
  {
    fullName: "Ngô Gia Huy",
    description: "Người lap trinh",
  },
  {
    fullName: "Nguyễn Khách Duy",
    description: "Người lap trinh",
  },
];
function About() {
  return (
    <div>
      {" "}
      <div className={"container"}>
        <p
          className={
            "elegant-text text-center text-danger fs-5 mt-4 " + scss.title
          }
        >
          Thành viên sáng lập công ty
        </p>
        <Row gutter={16}>
          {arrays.map((item, index) => (
            <Col key={index} className={scss.div1} span={8}>
              <CardAbout
                image="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                context={item.fullName}
                context1={item.description}
              />
            </Col>
          ))}
        </Row>
        <div className={scss.cardimg}>
          <img src="src/assets/images/img_about.webp" />
          <div className={scss.cardAbsolute}>
            <div className={scss.cardBody}>
              <p className={scss.title}>
                Freelancer – Kết nối nhanh, việc làm chất, thu nhập minh bạch!
              </p>
              <p className={scss.description}>
                Tìm kiếm cơ hội, làm chủ thời gian, nhận thanh toán an toàn –
                tất cả có tại Freelancer!
              </p>
            </div>
          </div>
        </div>

        <div className={scss.card}>
          <Row>
            <Col span={10}>
              <div className={scss.cardContent}>
                <p className={scss.title}>Về Chúng Tôi</p>
                <div className={scss.item}>
                  <PieChartFilled className={scss.icon} />
                  <div className={scss.context}>
                    <p className={scss.title2}>Tìm việc nhanh chóng</p>
                    <p className={scss.text}>
                      Không cần chờ đợi! Tìm việc làm phù hợp với kỹ năng của
                      bạn chỉ trong vài cú click. Kết nối ngay với nhà tuyển
                      dụng và bắt đầu hành trình mới của bạn hôm nay!
                    </p>
                  </div>
                </div>
                <div className={scss.item}>
                  <PieChartFilled className={scss.icon} />
                  <div className={scss.context}>
                    <p className={scss.title2}>Dòng tiền minh bạch</p>
                    <p className={scss.text}>
                      Mọi giao dịch đều rõ ràng, đảm bảo thanh toán công bằng và
                      đúng hạn. Hệ thống quản lý dòng tiền thông minh giúp bạn
                      yên tâm làm việc mà không lo rủi ro tài chính!
                    </p>
                  </div>
                </div>
                <div className={scss.item}>
                  <PieChartFilled className={scss.icon} />
                  <div className={scss.context}>
                    <p className={scss.title2}>
                      Bảo vệ quyền lợi Freelancer – Hợp tác chuyên nghiệp
                    </p>
                    <p className={scss.text}>
                      Chúng tôi cam kết xây dựng một môi trường làm việc công
                      bằng, minh bạch. Từ hợp đồng thông minh đến chính sách đảm
                      bảo thanh toán, bạn hoàn toàn yên tâm khi nhận dự án và
                      tập trung phát triển sự nghiệp của mình.
                    </p>
                  </div>
                </div>
                <div className={scss.item}>
                  <PieChartFilled className={scss.icon} />
                  <div className={scss.context}>
                    <p className={scss.title2}>
                      Nâng tầm sự nghiệp Freelancer với công nghệ AI
                    </p>
                    <p className={scss.text}>
                      Với hệ thống đề xuất công việc thông minh, đánh giá kỹ
                      năng chuẩn xác, chúng tôi giúp bạn dễ dàng tìm kiếm cơ hội
                      phù hợp nhất. Chỉ cần đăng ký, tạo hồ sơ – các dự án chất
                      lượng sẽ tự động tìm đến bạn!
                    </p>
                  </div>
                </div>
                <Button className={scss.btn}>Xem Thêm</Button>
              </div>
            </Col>
            <Col span={14}>
              <div className={scss.cardImg}>
                <img src="src/assets/images/header2.jpg" alt="image" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default About;
