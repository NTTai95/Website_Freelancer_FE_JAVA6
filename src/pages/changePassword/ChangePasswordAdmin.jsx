import { useEffect, useState } from 'react';
import { Button, Input, Form, Typography, Card, Divider } from 'antd';
import FancyText from "@carefully-coded/react-text-gradient";
import scss from './ChangePasswordAdmin.module.scss';
import formValidator from "../../utils/formValidator";
import accountApi from '@api/accountApi';
import { use } from 'react';

const { Title, Text } = Typography;

const ChangePasswordAdmin = () => {
    const [loading, setLoading] = useState(false);
    const [account, setAccount] = useState(null);
    const fetchAccount = async () => {
        try {
            const logined = JSON.parse(sessionStorage.getItem("logined"));
            if (!logined) return;
            const resAccount = await accountApi.getById(logined.id);
            setAccount(resAccount.data);
        } catch (error) {
            console.error("Error fetching account data:", error);
        }
    }
    useEffect(() => {
        fetchAccount();
    }, []);


    const onFinish = (values) => {
        setLoading(true);
        console.log('Form values:', values);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    };

    return (
        <div className={scss.container}>

            <Card
                className={scss.card}
                bordered={false}
                style={{ maxWidth: 450, width: '100%', margin: '-100px auto 0', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            >
                <div className={scss.divlogo}>
                    <FancyText
                        className={scss.logo}
                        gradient={{ from: "#cb5eee", to: "#4be1ec", type: "linear" }}
                        animateTo={{ from: "#4be1ec", to: "#cb5eee" }}
                        animateDuration={1500}
                        onClick={() => navigate("/")}
                    >
                        FREELANCER
                    </FancyText>
                </div>
                <Title level={3} style={{ textAlign: 'center', margin: '0 0 24px' }}>Đổi mật khẩu</Title>
                <Divider style={{ margin: '0 0 24px' }} />
                <Form
                    name="changePassword"
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Form.Item>
                        <Input value={account?.email} size="large" placeholder="Email" disabled />
                    </Form.Item>
                    <Form.Item
                        name="oldPassword"
                        rules={[{ required: true, message: `Vui lòng nhập mật khẩu cũ` }]}
                    >
                        <Input.Password
                            size="large"
                            placeholder="Nhập mật khẩu cũ"
                        />
                    </Form.Item>

                    <Form.Item
                        name="newPassword"
                        rules={formValidator.password()}
                    >
                        <Input.Password
                            size="large"
                            placeholder="Nhập mật khẩu mới"

                        />
                    </Form.Item>

                    <Form.Item
                        name="confirmPassword"
                        dependencies={['newPassword']}
                        rules={[
                            { required: true, message: 'Vui lòng xác nhận mật khẩu!' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('newPassword') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Mật khẩu không khớp!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            size="large"
                            placeholder="Xác nhận mật khẩu"

                        />
                    </Form.Item>

                    <Form.Item style={{ marginTop: 32 }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            loading={loading}
                            block
                            style={{
                                height: 45,
                                borderRadius: 6,
                                fontWeight: 600,
                                fontSize: 16
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