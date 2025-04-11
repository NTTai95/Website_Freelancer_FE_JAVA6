import { Form, Input, Button, Alert } from "antd";
import scss from "./RecruiterInfo.module.scss";
import skillApi from "@api/skillApi";
import formValidator from "@utils/formValidator";

const RecruiterFormAdd = ({ onFinish }) => {
    const [form] = Form.useForm();

    return (
        <div>
            <Alert
                message="Thêm thông tin nhà tuyển dụng"
                description="Hãy thêm thông tin công ty của bạn để thu hút ứng viên."
                type="info"
                showIcon
            />
            <Form className={scss.form} layout="vertical" form={form} onFinish={onFinish}>
                <Form.Item
                    name="name"
                    label={<p className={scss.title}>Tên công ty</p>}
                    className={scss.part}
                    rules={formValidator.companyName()}
                >
                    <Input size="large" className={scss.barlow} placeholder="Nhập tên công ty..." />
                </Form.Item>

                <Form.Item
                    name="introduce"
                    label={<p className={scss.title}>Giới thiệu</p>}
                    className={scss.part}
                    rules={formValidator.introduce()}
                >
                    <Input.TextArea
                        size="large"
                        className={scss.barlow}
                        placeholder="Giới thiệu về công ty..."
                        rows={5}
                        showCount
                        maxLength={10000}
                    />
                </Form.Item>

                <div className="d-flex gap-2 justify-content-end">
                    <Button type="primary" htmlType="submit">
                        Lưu thông tin
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default RecruiterFormAdd;
