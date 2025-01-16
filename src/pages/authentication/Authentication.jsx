import React, { useEffect, useState } from "react";
import { Col, Row, Button, ConfigProvider } from "antd";
import scss from "./Authentication.module.scss";
import FlInputText from "../../components/iu/input/FlInputText";
import FlInputPassword from "../../components/iu/input/FlInputPassword";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

function Authentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Row>
        <Col span={12} offset={6}>
          <Row className={scss.card}>
            <Col className={scss["formAuthentication"]} span={12}>
              <div className={scss.formLogin}>
                <div className={scss["title"]}>
                  <h4>ĐĂNG NHẬP</h4>
                </div>
                <form autoComplete="off">
                  <div className={scss.mb40px}>
                    <FlInputText
                      label="Email"
                      value={email}
                      icon={<MailOutlined />}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className={scss.mb10px}>
                    <FlInputPassword
                      label="Password"
                      value={password}
                      icon={<LockOutlined />}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </form>
                <div className={scss["text-right"] + " " + scss.mb30px}>
                  <a href="#">Quên mật khẩu?</a>
                </div>
                <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        colorPrimary: "#5BC795",
                        colorPrimaryHover: "#48A77A",
                        colorPrimaryActive: "#3C8E6B",
                        borderRadius: 0,
                      },
                    },
                  }}
                >
                  <Button color="Primary" variant="solid" block>
                    <b>Đăng nhập</b>
                  </Button>
                </ConfigProvider>
              </div>
            </Col>
            <Col span={12}>Đăng ký</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Authentication;
