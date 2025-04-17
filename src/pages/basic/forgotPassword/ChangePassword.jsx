import React, { useEffect, useState } from "react";
import { Form, Input, Button, Card, message, Statistic } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import formValidator from "@utils/formValidator";
import { useParams, useNavigate } from "react-router-dom";
import forgotPasswordApi from "@api/forgotPasswordApi";

const ChangePassword = () => {
  const [form] = Form.useForm();
  const parmas = useParams();
  const [messageApi, contextHolder] = message.useMessage();
  const [deadline, setDeadline] = React.useState(0);
  const { token } = parmas;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const fetchDateCreated = async () => {
    try {
      const res = await forgotPasswordApi.getDateCreatedByToken(token);
      const dateCreated = new Date(res.data);

      const mili15m = 15 * 60 * 1000;

      const milicountDown = Date.now() + (mili15m - (Date.now() - dateCreated));

      setDeadline(milicountDown);
    } catch (error) {
      console.error("Error fetching date created:", error);
      navigate("/404");
    }
  };

  useEffect(() => {
    if (!token) {
      return navigate("/404");
    }
    fetchDateCreated();
    
    // Lấy email từ sessionStorage nếu có
    const savedEmail = sessionStorage.getItem("resetPasswordEmail");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const onFinish = async (values) => {
    try {
      const res = await forgotPasswordApi.changePassword(
        token,
        values.newPassword
      );
      messageApi.open({
        type: "success",
        content: res.data,
      });
      setTimeout(() => {
        // Xóa email khỏi sessionStorage sau khi đổi mật khẩu thành công
        sessionStorage.removeItem("resetPasswordEmail");
        navigate("/login");
      }, 2000);
    } catch (error) {
      messageApi.open({
        type: "error",
        content: error.response.data,
      });
    }
  };

  return (
    <div className={"container w-25 pt-5"}>
      {contextHolder}
      <Card
        title={
          <div className={"d-flex justify-content-between align-items-center"}>
            <span className={"fs-5"}>Đổi mật khẩu</span>
            <Statistic.Countdown
              format="mm:ss"
              value={deadline}
            ></Statistic.Countdown>
          </div>
        }
        className={"shadow-lg mt-4"}
      >
        {email && (
          <div className="mb-3">
            <label className="form-label">Email</label>
            <Input 
              prefix={<MailOutlined />}
              value={email}
              disabled
              className="mb-3"
            />
          </div>
        )}
        
        <Form
          form={form}
          name="change_password"
          onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            name="newPassword"
            label="Mật khẩu mới"
            rules={formValidator.password()}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="VD: 12345678"
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Xác nhận mật khẩu"
            dependencies={["newPassword"]}
            rules={[
              {
                required: true,
                message: "Vui lòng xác nhận mật khẩu!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (value && getFieldValue("newPassword") != value) {
                    return Promise.reject("Mật khẩu không khớp!");
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="VD: 12345678"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Đổi mật khẩu
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ChangePassword;
