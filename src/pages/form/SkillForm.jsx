import scss from "./SkillForm.module.scss";
import { Button, Form, Input, notification } from "antd";
import { useState } from "react";
import { motion } from "motion/react";

function SkillForm() {
  const [api, contextHolder] = notification.useNotification();
  const onFinish = (values) => {
    api["success"]({
      message: "Thêm kỹ năng thành công!",
      description: (
        <div>
          <b>Tên kỹ năng:</b> <span>{values.name}</span>
          <br />
          <b>Mô tả:</b> <span>{values.description}</span>
        </div>
      ),
      showProgress: true,
    });
  };

  return (
    <motion.div
      className={scss["container-form"]}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {contextHolder}
      <Form
        layout="vertical"
        name="basic"
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          label={<b>Tên kỹ năng</b>}
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập tên kỹ năng!" }]}
        >
          <div>
            <p className={scss["text-help"]}>
              Hãy nhập tên kỹ năng một cách ngắn gọn và rõ ràng.
            </p>
            <Input type="text" placeholder="Tên hiển thị kỹ năng..." />
          </div>
        </Form.Item>
        <Form.Item
          label={<b>Mô tả</b>}
          name="description"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mô tả!",
            },
          ]}
        >
          <div>
            <p className={scss["text-help"]}>
              Hãy nhập tên kỹ năng một cách ngắn gọn và rõ ràng.
            </p>
            <Input.TextArea
              rows={5}
              placeholder="Mô tả chi tiết về kỹ năng..."
              showCount
              maxLength={10000}
            />
          </div>
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Thêm kỹ năng
          </Button>
        </Form.Item>
      </Form>
    </motion.div>
  );
}

export default SkillForm;
