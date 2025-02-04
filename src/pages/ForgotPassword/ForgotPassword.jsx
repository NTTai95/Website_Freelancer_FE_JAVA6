import React from "react";
import { useNavigate } from "react-router-dom";
import {Input} from "antd"
import {MailOutlined} from "@ant-design/icons"

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-light p-3 p-md-4 p-xl-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-11">
            <div className="card border-light-subtle shadow-sm">
              <div className="row g-0">
                <div className="col-6 d-flex justify-content-center">
                  <img
                    className="img-fluid rounded-start w-75"
                    loading="lazy"
                    src="src/assets/gif/forgotPassword.gif"
                    alt="Welcome back you've been missed!"
                  />
                </div>
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                  <div className="col-12 col-lg-11 col-xl-10">
                    <div className="card-body p-3 p-md-4 p-xl-5">
                      <div className="row">
                        <div className="col-12">
                          <div className="mb-5">
                            <div className="text-center mb-4">
                              <h1 className="fw-bold">FREELANCER</h1>
                            </div>
                            <h2 className="h4 text-center">Quên mật khẩu!</h2>
                            <h3 className="fs-6 fw-normal text-secondary text-center m-0">
                              Cung cấp địa chỉ email được liên kết với tài khoản
                              của bạn để khôi phục mật khẩu.
                            </h3>
                          </div>
                        </div>
                      </div>
                      <form action="#!">
                        <div className="row gy-3 overflow-hidden">
                          <div className="col-12">
                            <div className="form-floating mb-3">
                            <Input size="large" placeholder="Email" prefix={<MailOutlined />}/>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-grid">
                              <button
                                className="btn btn-dark btn-lg"
                                type="submit"
                              >
                                Gửi yêu cầu
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="row">
                        <div className="col-12">
                          <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                            <a
                              href="#!"
                              onClick={() => navigate("/login")}
                              className="link-secondary text-decoration-none"
                            >
                              Đăng nhập
                            </a>
                            <a
                              href="#!"
                              onClick={() => navigate("/register")}
                              className="link-secondary text-decoration-none"
                            >
                              Đăng ký
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
