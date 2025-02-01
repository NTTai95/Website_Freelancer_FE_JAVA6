import scss from "./SkillForm.module.scss";
import {
  Button,
  Col,
  Row,
  Form,
  Input,
  Radio,
  DatePicker,
  ConfigProvider,
  Checkbox,
  notification,
} from "antd";
import { useState } from "react";
import viVN from "antd/locale/vi_VN";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import { motion } from "motion/react";

dayjs.locale("vi");
function SkillForm() {
  const [form] = Form.useForm();

  const [api, contextHolder] = notification.useNotification();

  const permissions = [
    { label: "Duyệt báo cáo", value: 1 },
    { label: "Giải quyết báo cáo", value: 2 },
    { label: "Trả lời báo cáo", value: 3 },
    { label: "Quản lý kỹ năng", value: 4 },
  ];

  const onFinish = (values) => {
    api["success"]({
      message: "Thêm nhân viên thành công!",
      description: (
        <div>
          <b>Tên nhân viên:</b> <span>{values.name}</span>
          <br />
          <b>Ngày sinh:</b>
          <span>{dayjs(values.birthday).format("DD/MM/YYYY")}</span>
          <br />
          <b>Giới tính:</b> <span>{values.isMale ? "Nam" : "Nữ"}</span>
          <br />
          <b>Email:</b> <span>{values.email}</span>
          <br />
          <b>Số điện thoại:</b> <span>{values.phone}</span>
          <br />
          <b>Trạng thái:</b>{" "}
          <span>{values.status == "working" ? "Làm việc" : "Nghĩ việc"}</span>
          <br />
          <b>Chức vụ:</b>{" "}
          <ul>
            {values.permissions.map((permissionValue) => {
              // Tìm `label` tương ứng với `value`
              const permission = permissions.find(
                (perm) => perm.value === permissionValue
              );
              return (
                <li key={permissionValue}>
                  {permission ? permission.label : ""}
                </li>
              );
            })}
          </ul>
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
        form={form}
        onFinish={onFinish}
      >
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label={<b>Tên nhân viên</b>}
              name="name"
              rules={[
                { required: true, message: "Vui lòng nhập tên nhân viên!" },
              ]}
            >
              <Input type="text" placeholder="VD: Nguyễn Văn A" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label={<b>Ngày sinh</b>}
              name="birthday"
              required
              rules={[
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value)
                      return Promise.reject("Vui lòng chọn ngày sinh!");

                    const today = dayjs();
                    const age = today.diff(value, "year");

                    if (value.isAfter(today, "day")) {
                      return Promise.reject("Ngày sinh không hợp lệ!");
                    }

                    if (age < 18) {
                      return Promise.reject(
                        "Nhân viên phải từ 18 tuổi trở lên!"
                      );
                    }

                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <ConfigProvider locale={viVN}>
                <DatePicker
                  style={{ width: "100%" }}
                  format="DD/MM/YYYY"
                  placeholder="VD: 01/01/2000"
                  onChange={(e) => form.setFieldValue("birthday", e)}
                />
              </ConfigProvider>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label={<b>Giới tính</b>}
              rules={[
                { required: true, message: "Vui lòng nhập tên nhân viên!" },
              ]}
              name="isMale"
              initialValue={true}
            >
              <Radio.Group>
                <Radio value={true}> Nam </Radio>
                <Radio value={false}> Nữ </Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label={<b>Email</b>}
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập email!" },
                {
                  type: "email",
                  message: "Email không đúng định dạng!",
                },
              ]}
            >
              <Input placeholder="VD: example@gmail.com" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={<b>Số điện thoại</b>}
              name="phone"
              required
              rules={[
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value)
                      return Promise.reject("Vui lòng nhập số điện thoại!");

                    if (!/^[0-9]+$/.test(value))
                      return Promise.reject("Số điện thoại không hợp lệ!");

                    if (value.length !== 10)
                      return Promise.reject("Số điện thoại phải có 10 chữ số!");

                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <Input type="text" placeholder="VD: 099999999" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label={<b>Trạng thái</b>}
          name="status"
          initialValue={"working"}
        >
          <Radio.Group>
            <Radio value="working"> Làm việc </Radio>
            <Radio value="notWorking"> Nghĩ việc </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label={<b>Chức vụ</b>} name="permissions">
          <Checkbox.Group options={permissions}></Checkbox.Group>
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Thêm nhân viên
          </Button>
        </Form.Item>
      </Form>
    </motion.div>
  );
}

export default SkillForm;
