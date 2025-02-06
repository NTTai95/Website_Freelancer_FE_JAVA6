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
  Skeleton,
  Tooltip,
  Spin,
} from "antd";
import {
  EyeTwoTone,
  EyeInvisibleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";
import viVN from "antd/locale/vi_VN";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import { motion } from "motion/react";
import permissionApi from "../../api/permissionApi";
import checkApi from "../../api/checkApi";
import staffApi from "../../api/staffApi";
import { useParams } from "react-router-dom";
import utc from "dayjs/plugin/utc";
import moment from "moment/moment";

dayjs.extend(utc);
dayjs.locale("vi");
function SkillForm() {
  const [form] = Form.useForm();

  const { mode, id } = useParams();

  const [api, contextHolder] = notification.useNotification();

  const [errorEmailLoading, setErrorEmailLoading] = useState(false);
  const [errorPhoneLoading, setErrorPhoneLoading] = useState(false);

  const [permissions, setPermissions] = useState([]);

  const [callAping, setCallAping] = useState(false);

  const [initialValues, setInitialValues] = useState({
    id: "",
    fullName: "",
    birthday: null,
    email: "",
    phone: "",
    status: "working",
    permissions: [],
  });

  useEffect(() => {
    permissionApi.getAll().then((response) => {
      if (response.status == 200) {
        setPermissions(response.data);
      }
    });

    if (mode === "edit" && id) {
      setCallAping(true);
      staffApi.getById(id).then((response) => {
        if (response.status == 200) {
          const data = response.data;
          console.log(data);
          setInitialValues({
            id: data.id,
            fullName: data.fullName,
            birthday: dayjs(data.birthday),
            email: data?.account?.email,
            phone: data.phone,
            status: data.status,
            permissions: data.permissions.map((item) => item.id),
          });

          form.setFieldsValue({
            id: data.id,
            fullName: data.fullName,
            birthday: dayjs(data.birthday),
            email: data?.account?.email,
            password: data?.account.password,
            phone: data.phone,
            status: data.status ? "working" : "notWorking",
            permissions: data.permissions.map((item) => item.id),
          });

          setCallAping(false);
        }
      });
    }
  }, []);

  const checkEmailExists = async (email) => {
    setErrorEmailLoading(true);
    const response = await checkApi.checkEmailExists(email);
    setErrorEmailLoading(false);
    if (response.status == 200 && response.data) {
      return true;
    }

    return false;
  };

  const checkPhoneExists = async (phone) => {
    setErrorPhoneLoading(true);
    const response = await checkApi.checkPhoneExists(phone);
    setErrorPhoneLoading(false);

    if (response.status === 200 && response.data) {
      return true;
    }
    return false;
  };

  const onFinish = (values) => {
    setCallAping(true);
    if (mode === "edit" && id) {
      staffApi
        .update(id, {
          ...values,
          status: values.status === "working" ? true : false,
        })
        .then(() => {
          setCallAping(false);
          api["success"]({
            message: "cập nhập nhân viên thành công!",
            showProgress: true,
          });
        })
        .catch(() => {
          setCallAping(false);
          api["error"]({
            message: "cập nhật nhân viên không thành công!",
            showProgress: true,
          });
        });
    } else {
      staffApi
        .add({ ...values, status: values.status === "working" ? true : false })
        .then(() => {
          setCallAping(false);
          api["success"]({
            message: "Thêm nhân viên thành công!",
            showProgress: true,
          });
        })
        .catch(() => {
          setCallAping(false);
          api["error"]({
            message: "Thêm nhân viên không thành cônng!",
            showProgress: true,
          });
        });
    }
  };

  return (
    <Spin spinning={callAping}>
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
          initialValues={initialValues}
          onFinish={onFinish}
        >
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                label={<b>Tên nhân viên</b>}
                name="fullName"
                rules={[
                  { required: true, message: "Vui lòng nhập tên nhân viên!" },
                ]}
              >
                <Input type="text" placeholder="VD: Nguyễn Văn A" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <ConfigProvider locale={viVN}>
                <Form.Item
                  label={<b>Ngày sinh</b>}
                  name="birthday"
                  required
                  rules={[
                    () => ({
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
                  <DatePicker
                    style={{ width: "100%" }}
                    format="DD/MM/YYYY"
                    placeholder="VD: 01/01/2000"
                  />
                </Form.Item>
              </ConfigProvider>
            </Col>
            <Col span={8}>
              <Form.Item
                label={<b>Số điện thoại</b>}
                name="phone"
                help={
                  errorPhoneLoading ? (
                    <Spin indicator={<LoadingOutlined spin />} size="small" />
                  ) : null
                }
                required
                rules={[
                  () => ({
                    async validator(_, value) {
                      if (!value)
                        return Promise.reject("Vui lòng nhập số điện thoại!");
                      else if (!/^[0-9]+$/.test(value))
                        return Promise.reject("Số điện thoại không hợp lệ!");
                      else if (value.length !== 10)
                        return Promise.reject(
                          "Số điện thoại phải có 10 chữ số!"
                        );
                      else if (
                        (await checkPhoneExists(value)) &&
                        value !== initialValues.phone
                      )
                        return Promise.reject("Số điện thoại đã được sử dụng!");

                      return Promise.resolve();
                    },
                  }),
                ]}
              >
                <Input type="text" placeholder="VD: 099999999" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label={<b>Email</b>}
                name="email"
                help={
                  errorEmailLoading ? (
                    <Spin indicator={<LoadingOutlined spin />} size="small" />
                  ) : null
                }
                rules={[
                  () => ({
                    async validator(_, value) {
                      if (!value) return Promise.reject("Vui lòng nhập email!");
                      else if (
                        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                          value
                        )
                      )
                        return Promise.reject("Email không đúng định dạng!");
                      else if (
                        (await checkEmailExists(value)) &&
                        value !== initialValues.email
                      )
                        return Promise.reject("Email đã được sử dụng!");

                      return Promise.resolve();
                    },
                  }),
                ]}
              >
                <Input placeholder="VD: example@gmail.com" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<b>Mật khẩu</b>}
                name="password"
                required
                rules={[
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value)
                        return Promise.reject("Vui lòng nhập mật khẩu!");
                      else if (value.length < 8)
                        return Promise.reject("Mật khẩu tối thiểu 8 kí tự!");
                      else if (value.length > 50)
                        return Promise.reject("Mật khẩu tối đa 50 kí tự!");

                      return Promise.resolve();
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="VD: 12345678"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label={<b>Trạng thái</b>} required name="status">
            <Radio.Group>
              <Radio value="working"> Làm việc </Radio>
              <Radio value="notWorking"> Nghĩ việc </Radio>
            </Radio.Group>
          </Form.Item>
          <Skeleton
            paragraph={{ rows: 1 }}
            active
            loading={!permissions.length}
          >
            <Form.Item label={<b>Chức vụ</b>} name="permissions">
              <Checkbox.Group>
                {permissions.map((permission) => (
                  <Tooltip key={permission.id} title={permission.description}>
                    <Checkbox value={permission.id}>{permission.name}</Checkbox>
                  </Tooltip>
                ))}
              </Checkbox.Group>
            </Form.Item>
          </Skeleton>
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              {mode === "edit" ? "Cập nhật" : "Thêm"} nhân viên
            </Button>
          </Form.Item>
        </Form>
      </motion.div>
    </Spin>
  );
}

export default SkillForm;
