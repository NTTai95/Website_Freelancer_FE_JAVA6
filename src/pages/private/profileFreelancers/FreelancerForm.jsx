import { Form, Input, Button, Spin, Row, Col, DatePicker } from "antd";
import scss from "./FreelancerInfo.module.scss";
import DebounceSelect from "@components/ui/select/DebounceSelect";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const FreelancerForm = ({ initialValues, onFinish, onSearchSkill, onSearchLanguage, onCancel }) => {
    const [form] = Form.useForm();
    form.setFieldsValue(initialValues);

    const isLoading =
        initialValues.introduce === "" || !initialValues?.skills || !initialValues?.languages;

    return (
        <Spin spinning={isLoading}>
            <Form
                className={scss.form}
                layout="vertical"
                form={form}
                initialValues={initialValues}
                onFinish={onFinish}
            >
                <Form.Item
                    name="introduce"
                    label={<p className={scss.title}>Giới thiệu</p>}
                    className={scss.part}
                >
                    <Input.TextArea
                        size="large"
                        className={scss.barlow}
                        placeholder="Giới thiệu về bản thân mình..."
                        rows={7}
                    />
                </Form.Item>
                <Form.Item
                    name="skills"
                    label={<p className={scss.title}>Kỹ năng</p>}
                    className={scss.part}
                >
                    <DebounceSelect
                        mode="multiple"
                        placeholder="Tìm kiếm kỹ năng..."
                        size="large"
                        color="purple"
                        fetchOptions={onSearchSkill}
                    />
                </Form.Item>

                <Form.Item
                    name="languages"
                    label={<p className={scss.title}>Ngôn ngữ</p>}
                    className={scss.part}
                >
                    <DebounceSelect
                        mode="multiple"
                        placeholder="Tìm kiếm ngôn ngữ..."
                        size="large"
                        color="red"
                        fetchOptions={onSearchLanguage}
                    />
                </Form.Item>
                <div className={scss.part}>
                    <p className={scss.title}>Chứng chỉ</p>
                    <Form.List name="certificates">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <div
                                        className={scss.certificate + " " + scss.certificateForm}
                                        key={key}
                                    >
                                        <Row className={scss.body} gutter={16}>
                                            <Col span={20}>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, "name"]}
                                                    label={<b>Tên chứng chỉ</b>}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: "Chứng chỉ không được để trống"
                                                        }
                                                    ]}
                                                    className={scss.formItem}
                                                >
                                                    <Input placeholder="Chứng chỉ..." />
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, "by"]}
                                                    label={<b>Tổ chức cấp</b>}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message:
                                                                "Tổ chức cấp không được để trống"
                                                        }
                                                    ]}
                                                    className={scss.formItem}
                                                >
                                                    <Input placeholder="Tổ chức cấp..." />
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, "note"]}
                                                    label={<b>Ghi chú</b>}
                                                    className={scss.formItem}
                                                >
                                                    <Input.TextArea placeholder="Ghi chú..." />
                                                </Form.Item>
                                            </Col>
                                            <Col span={4}>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, "date"]}
                                                    label={<b>Ngày cấp</b>}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: "Ngày cấp không được để trống"
                                                        }
                                                    ]}
                                                    className={scss.formItem}
                                                >
                                                    <DatePicker />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <Button
                                            type="dashed"
                                            icon={<MinusCircleOutlined />}
                                            danger
                                            className={scss.delete}
                                            onClick={() => remove(name)}
                                        >
                                            Xóa chứng chỉ
                                        </Button>
                                    </div>
                                ))}
                                <Form.Item>
                                    <Button
                                        type="dashed"
                                        onClick={() => add()}
                                        block
                                        icon={<PlusOutlined />}
                                    >
                                        Thêm chứng chỉ
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </div>
                <div className="d-flex gap-2 justify-content-end">
                    <Button type="primary" htmlType="submit">
                        Lưu
                    </Button>
                    <Button onClick={onCancel}>Hủy</Button>
                </div>
            </Form>
        </Spin>
    );
};

export default FreelancerForm;
