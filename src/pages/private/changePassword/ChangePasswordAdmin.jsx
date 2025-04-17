import { useEffect, useState } from "react";
import { Button, Input, Form, Typography, Card, Divider, message } from "antd";
import FancyText from "@carefully-coded/react-text-gradient";
import scss from "./ChangePasswordAdmin.module.scss";
import formValidator from "@utils/formValidator";
import accountApi from "@api/accountApi";
import authenticationApi from "@api/authenticationApi";

const { Title, Text } = Typography;

const ChangePasswordAdmin = () => {
  const [account, setAccount] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Đổi mật khẩu thành công!",
    });
  };
  const error = (text) => {
    messageApi.open({
      type: "error",
      content: text,
    });
  };
  const fetchAccount = async () => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) return;
      const res = await authenticationApi.isStaff();
      const { id } = res.data;
      const resAccount = await accountApi.getById(id);
      setAccount(resAccount.data);
    } catch (error) {
      console.error("Error fetching account data:", error);
    }
  };
  useEffect(() => {
    fetchAccount();
  }, []);

  const onFinish = async (values) => {
    console.log(values);
    console.log(account);
    if (!account || !account.id) {
      error("Không tìm thấy thông tin tài khoản!");
      return;
    }
    
    const checkPassword = await accountApi.checkPassword(
      account.id,
      values.oldPassword
    );
    if (checkPassword.data === false) {
      error("Mật khẩu cũ không đúng!");
      return;
    }
    try {
      const res = await accountApi.changePassword(
        account.id,
        values.newPassword
      );
      if (res.status === 200) {
        success();
      }
    } catch (error) {
      error(error.response.data);
      console.log(error);
    }
  };

  return (
    <div className={scss.container}>
      {contextHolder}
      <Card
        className={scss.card}
        bordered={false}
        style={{
          maxWidth: 450,
          width: "100%",
          margin: "-100px auto 0",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <div className={scss.divlogo}>
          <FancyText
            className={scss.logo}
            gradient={{ from: "#cb5eee", to: "#4be1ec", type: "linear" }}
            animateTo={{ from: "#4be1ec", to: "#cb5eee" }}
            animateDuration={1500}
          >
            FREELANCER
          </FancyText>
        </div>
        <Title level={3} style={{ textAlign: "center", margin: "0 0 24px" }}>
          Đổi mật khẩu
        </Title>
        <Divider style={{ margin: "0 0 24px" }} />
        <Form name="changePassword" layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email">
            <Input
              value={account?.email || ""}
              size="large"
              disabled
            />
          </Form.Item>
          <Form.Item
            name="oldPassword"
            label="Mật khẩu cũ"
            rules={[{ required: true, message: `Vui lòng nhập mật khẩu cũ` }]}
          >
            <Input.Password size="large" placeholder="Nhập mật khẩu cũ" />
          </Form.Item>

          <Form.Item 
            name="newPassword" 
            label="Mật khẩu mới"
            rules={formValidator.password()}
          >
            <Input.Password size="large" placeholder="Nhập mật khẩu mới" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Xác nhận mật khẩu mới"
            dependencies={["newPassword"]}
            rules={[
              { required: true, message: "Vui lòng xác nhận mật khẩu!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Mật khẩu không khớp!"));
                },
              }),
            ]}
          >
            <Input.Password size="large" placeholder="Xác nhận mật khẩu" />
          </Form.Item>

          <Form.Item style={{ marginTop: 32 }}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              style={{
                height: 45,
                borderRadius: 6,
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              Xác nhận
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ChangePasswordAdmin;
