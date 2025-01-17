import React, { useEffect, useState } from "react";
import { Col, Row, Button, ConfigProvider, Checkbox } from "antd";
import scss from "./Authentication.module.scss";
import FlInputText from "../../components/iu/input/FlInputText";
import FlInputPassword from "../../components/iu/input/FlInputPassword";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { motion } from "motion/react";
import { s } from "motion/react-client";

function Authentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const [check, setCheck] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(showLogin ? "Đăng nhập" : "Đăng ký");
    }, 1000);

    return () => clearTimeout(timeout);
  }, [showLogin]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Row>
          <Col span={16} offset={4}>
            <Row className={scss.card}>
              <Col
                span={12}
                style={{
                  order: showLogin ? 1 : 2,
                  zIndex: 0,
                }}
              >
                <motion.div
                  className={scss.formLogin}
                  key={showLogin ? "login" : "register"}
                  initial={{ x: showLogin ? "100%" : "-100%" }}
                  animate={{
                    x: showLogin
                      ? ["100%", "105%", "0%"]
                      : ["-100%", "-105%", "0%"],
                    transition: {
                      duration: 2,
                      ease: [0.4, 0, 0.6, 1],
                      times: [0, 0.2, 0.8],
                    },
                  }}
                >
                  <div className={scss["base"]}>
                    <div className={scss["title"]}>
                      <motion.h4
                        animate={{
                          x: showLogin
                            ? ["0%", "20%", "0%"]
                            : ["0%", "-20%", "0%"],
                        }}
                        transition={{ duration: 1 }}
                      >
                        {text.toUpperCase()}
                      </motion.h4>
                    </div>
                    <form autoComplete="off">
                      <motion.div
                        className={scss.mb15px}
                        key={showLogin ? "login" : "register"}
                        initial={{ display: showLogin ? "block" : "none" }}
                        animate={{
                          display: showLogin ? "none" : "block",
                          x: showLogin
                            ? ["0%", "20%", "0%"]
                            : ["0%", "-20%", "0%"],
                        }}
                        transition={{
                          display: {
                            duration: 0,
                            delay: 1,
                          },
                          x: {
                            duration: 1,
                            delay: 0.1,
                          },
                        }}
                      >
                        <FlInputText
                          label="Họ tên"
                          value={email}
                          icon={<UserOutlined />}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </motion.div>
                      <motion.div
                        className={scss.mb15px}
                        animate={{
                          x: showLogin
                            ? ["0%", "20%", "0%"]
                            : ["0%", "-20%", "0%"],
                        }}
                        transition={{ duration: 1, delay: 0.2 }}
                      >
                        <FlInputText
                          label="Email"
                          value={email}
                          icon={<MailOutlined />}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </motion.div>
                      <motion.div
                        className={scss.mb15px}
                        animate={{
                          x: showLogin
                            ? ["0%", "20%", "0%"]
                            : ["0%", "-20%", "0%"],
                        }}
                        transition={{ duration: 1, delay: 0.3 }}
                      >
                        <FlInputPassword
                          label="Mật khẩu"
                          value={password}
                          icon={<LockOutlined />}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </motion.div>
                      <motion.div
                        className={scss.mb15px}
                        key={showLogin ? "login" : "register"}
                        initial={{ display: showLogin ? "block" : "none" }}
                        animate={{
                          display: showLogin ? "none" : "block",
                          x: showLogin
                            ? ["0%", "20%", "0%"]
                            : ["0%", "-20%", "0%"],
                        }}
                        transition={{
                          display: {
                            duration: 0,
                            delay: 1,
                          },
                          x: {
                            duration: 1,
                            delay: 0.4,
                          },
                        }}
                      >
                        <FlInputPassword
                          label="Xác nhận mật khẩu"
                          value={password}
                          icon={<LockOutlined />}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </motion.div>
                    </form>
                    <motion.div
                      className={scss["text-right"] + " " + scss.mb30px}
                      initial={{ display: showLogin ? "none" : "flex" }}
                      animate={{ display: showLogin ? "flex" : "none" }}
                      transition={{ duration: 0, delay: 1 }}
                    >
                      <a href="#">Quên mật khẩu?</a>
                    </motion.div>
                    <motion.div
                      className={scss.mb30px}
                      initial={{ display: showLogin ? "block" : "none" }}
                      animate={{ display: showLogin ? "none" : "block" }}
                      transition={{ duration: 0, delay: 1 }}
                    >
                      <Checkbox onChange={check}>
                        Đồng ý với <a href="#">điều khoản</a> và
                        <a href="#"> chính sách</a>.
                      </Checkbox>
                    </motion.div>
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
                        <b>{text}</b>
                      </Button>
                    </ConfigProvider>
                  </div>
                </motion.div>
              </Col>
              <Col
                span={12}
                style={{
                  order: showLogin ? 2 : 1,
                  zIndex: 1,
                }}
              >
                <motion.div
                  className={scss.bgLogin}
                  key={showLogin ? "login" : "register"}
                  initial={{ x: showLogin ? "-100%" : "100%" }}
                  animate={{
                    x: showLogin
                      ? ["-100%", "-105%", "0%"]
                      : ["100%", "105%", "0%"],
                    transition: {
                      duration: 2,
                      ease: [0.4, 0, 0.6, 1],
                      times: [0, 0.2, 0.8],
                    },
                  }}
                >
                  <div className={scss.logo}><img src={"src/assets/images/logo.png"}></img></div>
                  <div className={scss.welcome}><h3>Tham gia cũng với chúng tôi</h3></div>
                  <div className={scss.bg1}>
                  </div>
                  <Button style={{zIndex: 100}} onClick={() => setShowLogin(!showLogin)}>
                      Đăng ký
                    </Button>
                </motion.div>
              </Col>
            </Row>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
}

export default Authentication;
