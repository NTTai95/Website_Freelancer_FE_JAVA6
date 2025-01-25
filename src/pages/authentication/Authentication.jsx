import React, { useEffect, useState } from "react";
import { Col, Row, Button, ConfigProvider, Checkbox } from "antd";
import scss from "./Authentication.module.scss";
import FlInputText from "../../components/iu/input/FlInputText";
import FlInputPassword from "../../components/iu/input/FlInputPassword";
import ButtonChat from "../../components/iu/button/ButtonChat";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { delay, motion } from "motion/react";
import { s, tr } from "motion/react-client";

function Authentication({isLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(isLogin);
  const [check, setCheck] = useState(false);
  const [text, setText] = useState("");
  const [imgGif, setImgGif] = useState("");

  useEffect(() => {
    const textTimeout = setTimeout(() => {
      setText(showLogin ? "Đăng nhập" : "Đăng ký");
    }, 1000);

    const gifTimeoutI = setTimeout(() => {
      setImgGif(
        showLogin
          ? "src/assets/gif/3dfreelancerEdit2.gif"
          : "src/assets/gif/3dfreelancerEdit.gif"
      );
    }, 1000);

    const gifTimeout = setTimeout(() => {
      setImgGif(
        showLogin
          ? "src/assets/gif/3dfreelancerEdit.gif"
          : "src/assets/gif/3dfreelancerEdit2.gif"
      );
    }, 4000);

    return () => {
      clearTimeout(textTimeout);
      clearTimeout(gifTimeout);
      clearTimeout(gifTimeoutI);
    };
  }, [showLogin]);

  function handleLogin() {

  }

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
                      <Checkbox className={scss.checkbox} onChange={check}>
                        Đồng ý với <a href="#">điều khoản</a> và
                        <a href="#"> chính sách</a>
                      </Checkbox>
                    </motion.div>
                    <ConfigProvider
                      theme={{
                        components: {
                          Button: {
                            colorPrimary: "#1493e2",
                            colorPrimaryHover: "#1493e2",
                            colorPrimaryActive: "#1493e2",
                            borderRadius: 5,
                          },
                        },
                      }}
                    >
                      <Button
                        className={scss.btnAuthentication}
                        color="Primary"
                        variant="solid"
                        onClick={handleLogin()}
                        block
                      >
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
                  <div className={scss.logo}>
                    <span>FREELANCER</span>
                  </div>
                  <motion.div
                    className={scss.welcome}
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 2 ,delay: 0.35}}
                  >
                    <span>
                      {showLogin
                        ? "Xin chào! Vui lòng đăng nhập để truy cập tài khoản của bạn và tiếp tục công việc."
                        : "Chào mừng bạn đến với chúng tôi! Đăng ký ngay để khám phá và tận dụng mọi cơ hội."}
                    </span>
                  </motion.div>
                  <motion.div
                    className={scss.buttonChat}
                    animate={{
                      rotateZ: 360,
                      transition: {
                        duration: 0.65,
                      },
                    }}
                  >
                    <ButtonChat
                      text={showLogin ? "Đăng ký" : "Đăng nhập"}
                      onClick={() => setShowLogin(!showLogin)}
                    ></ButtonChat>
                  </motion.div>
                  <motion.div
                    className={scss.gif}
                    initial={
                      showLogin
                        ? {
                            x: "50%",
                            opacity: 0,
                            transition: { duration: 1, delay: 0.8 },
                          }
                        : { x: "0%", opacity: 1, transition: { duration: 1 } }
                    }
                    animate={
                      showLogin
                        ? {
                            x: "0%",
                            opacity: 1,
                            transition: { duration: 1, delay: 0.8 },
                          }
                        : {
                            x: "50%",
                            opacity: 0,
                            display: "none",
                            transition: {
                              duration: 1,
                              display: {
                                delay: 1,
                              },
                            },
                          }
                    }
                  >
                    <img
                      className={scss.img1}
                      src="src/assets/gif/FreelacerEdit.gif"
                    />
                  </motion.div>
                  <motion.div
                    className={scss.gif}
                    initial={
                      showLogin ? { opacity: 1 } : { opacity: 0, x: "-50%" }
                    }
                    animate={
                      showLogin
                        ? {
                            opacity: 0,
                            x: "-50%",
                            display: "none",
                            transition: { duration: 1, display: { delay: 1 } },
                          }
                        : {
                            opacity: 1,
                            x: "0%",
                            transition: { duration: 1, delay: 0.8 },
                          }
                    }
                  >
                    <img className={scss.img2} src={imgGif} />
                  </motion.div>
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
