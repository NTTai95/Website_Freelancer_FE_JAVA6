import CardAbout from "@components/card/card";
import scss from "./about.module.scss"
import { Row, Col, Image, Button } from "antd"
import React from "react";
import AboutItem from "../../components/card/aboutItem";

function About() {
    return (<> <div className={'container'}>
        <p className={"elegant-text text-center text-danger fs-5 mt-4 " + scss.title} >
            Thành viên sáng lập công ty</p>
        <Row >
            {Array.from({ length: 6 }).map((_, index) => (
                <Col key={index} className={scss.div1} span={8}>
                    <CardAbout
                        image="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        context={`Nội dung thẻ ${index + 1}`}
                        context1={`Chi tiết thẻ ${index + 1}`}
                    />
                </Col>
            ))}
        </Row>
        <div>
            <img src='src/assets/images/img_about.webp' className="w-100 mt-2">
            </img>
        </div>

        <div className="row">
            <div className="col-6">
                <img src='src/assets/images/img_about2.jpg' className="mt-4"></img>
            </div>

            <div className="col-6">
               <AboutItem/>
            </div>

        </div>

    </div>
    </>);

}

export default About;