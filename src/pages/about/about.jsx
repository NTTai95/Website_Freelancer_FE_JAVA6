import CardAbout from "@components/card/card";
import scss from "./about.module.scss"
import { Row, Col } from "antd"

function About() {
    return (<> <div className={scss.Container}>

        <h1 style={{ textAlign: 'center' }}>Kết Nối Đúng Người, Đúng Công Việc</h1>
        <h5 style={{ textAlign: 'center' }}>Tăng hiệu quả tuyển dụng - Tiết kiệm ngân sách</h5>
        <Row >
            {Array.from({ length: 6 }).map((_, index) => (
                <Col key={index} className={scss.div1} span={8}>
                    <CardAbout
                        image={`src/assets/images/img1.jpg`}
                        context={`Nội dung thẻ ${index + 1}`}
                        context1={`Chi tiết thẻ ${index + 1}`}
                    />
                </Col>
            ))}

        </Row>

        <div className={scss.div2} >
            <Row>
                <Col className={scss.Column1} span={12}>
                    <h3 >Đội ngũ chuyên nghiệp</h3>
                </Col>
                <Col span={12}>
                    <img src="src/assets/images/img1.jpg" />
                </Col>
            </Row>

            <hr />
            <Row>
                <Col span={12}>
                    <img src="src/assets/images/img1.jpg" />
                </Col>
                <Col className={scss.Column1} span={12}>
                    <h3>Đội ngũ chuyên nghiệp</h3>
                </Col>
            </Row>

            <hr />
            <Row>
                <Col className={scss.Column1} span={12}>
                    <h3 >Đội ngũ chuyên nghiệp</h3>
                </Col>
                <Col span={12}>
                    <img src="src/assets/images/img1.jpg" />
                </Col>
            </Row>
        </div>
    </div>
    </>);

}

export default About;