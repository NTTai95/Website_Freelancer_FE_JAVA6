import scss from "./SkillForm.module.scss";
import { Button, Form, Input, notification, Spin } from "antd";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import skillApi from "../../api/skillApi";
import { useParams } from "react-router-dom";

function SkillForm() {
  const { mode, id } = useParams();

  const [messageApi, contextHolder] = notification.useNotification();
  const [callAping, setCallAping] = useState(false);

  const [initialValues, setInitialValues] = useState({
    id: "",
    name: "",
    description: "",
  });

  useEffect(() => {
    if (mode === "edit" && id) {
      setCallAping(true);
      skillApi.getById(id).then((response) => {
        setInitialValues(response.data);
        setCallAping(false);
      }).catch(() => {
        messageApi["error"]({
          message: "Không tìm thấy kỹ năng!",
        });
        setCallAping(false);
      });
    }

    
  }, [mode, id]);
  

  const onFinish = (values) => {
    setCallAping(true);
    const skill = {
      id: id ? id : null, // Nếu có id, sử dụng id, nếu không thì tạo mới
      name: values.name,
      description: values.description,
    };
  
    const apiCall = mode === "edit" ? skillApi.update(id, skill) : skillApi.add(skill);
  
    apiCall
      .then(() => {
        messageApi["success"]({
          message: mode === "edit" ? "Cập nhật kỹ năng thành công!" : "Thêm kỹ năng thành công!",
          showProgress: true,
        });
        setCallAping(false);
      })
      .catch(() => {
        messageApi["error"]({
          message: "Có lỗi xảy ra!",
        });
        setCallAping(false);
      });
  };
  

  function handleReset(){
    setInitialValues({
      id: "",
      name: "",
      description: "",
    });
  }

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
          onFinish={onFinish}
          initialValues={initialValues}
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
              <Input
                value={initialValues.name}
                onChange={(e) =>
                  setInitialValues({ ...initialValues, name: e.target.value })
                }
                type="text"
                placeholder="Tên hiển thị kỹ năng..."
              />
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
                value={initialValues.description}
                onChange={(e) =>
                  setInitialValues({
                    ...initialValues,
                    description: e.target.value,
                  })
                }
              />
            </div>
          </Form.Item>
          <Form.Item label={null} className="d-flex justify-content-end">
            <Button type="primary" htmlType="submit">
              {mode === "add" ? "Thêm" : "Cập nhật"} kỹ năng
            </Button>
            <Button className={"ms-3"} type="default" htmlType="reset" onClick={() => handleReset()}>
              đặt lại
            </Button>
          </Form.Item>
        </Form>
      </motion.div>
    </Spin>
  );
}

export default SkillForm;