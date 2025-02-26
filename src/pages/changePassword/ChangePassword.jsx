import { useState } from "react";
import scss from "./ChangePassword.module.scss";
import { Button, Input, notification } from "antd";
import accountApi from "@api/accountApi";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false); 

  const loginedUser = JSON.parse(sessionStorage.getItem("logined"));
  const userId = loginedUser ? loginedUser.id : null;
 console.log(loginedUser);
  const handleChangePassword = async () => {
    if (!userId) {
      notification.error({
        message: "Lỗi",
        description: "Không tìm thấy ID tài khoản!",
        placement: "topRight",
      });
      return;
    }

    if (!currentPassword.trim()) {
      notification.warning({
        message: "Lỗi",
        description: "Vui lòng nhập mật khẩu hiện tại!",
        placement: "topRight",
      });
      return;
    }

    if (newPassword.length < 6) {
      notification.warning({
        message: "Mật khẩu yếu",
        description: "Mật khẩu mới phải có ít nhất 6 ký tự!",
        placement: "topRight",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      notification.warning({
        message: "Lỗi xác nhận mật khẩu",
        description: "Mật khẩu mới và xác nhận mật khẩu không khớp!",
        placement: "topRight",
      });
      return;
    }

    try {
      setLoading(true);
      await accountApi.update(userId, {
        currentPassword,
        newPassword,
      });

      notification.success({
        message: "Thành công",
        description: "Đổi mật khẩu thành công!",
        placement: "topRight",
      });

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      notification.error({
        message: "Lỗi",
        description: error.response?.data?.message || "Đổi mật khẩu thất bại!",
        placement: "topRight",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={scss.container}>
      <h2 className={scss.title}>Đổi mật khẩu</h2>
      <div className={scss.inputGroup}>
        <label className={scss.label}>Mật khẩu hiện tại</label>
        <Input.Password
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className={scss.input}
        />
      </div>
      <div className={scss.inputGroup}>
        <label className={scss.label}>Mật khẩu mới</label>
        <Input.Password
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className={scss.input}
        />
      </div>
      <div className={scss.inputGroup}>
        <label className={scss.label}>Xác nhận mật khẩu mới</label>
        <Input.Password
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={scss.input}
        />
      </div>
      <Button
        type="submit"
        onClick={handleChangePassword}
        className={scss.button}
        loading={loading} 
        disabled={loading} 
      >
        Đổi mật khẩu
      </Button>
    </div>
  );
};

export default ChangePassword;
