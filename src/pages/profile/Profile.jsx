import { Card, Button, Badge, Rate, Flex, Input, DatePicker, Form, Spin, notification } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import scss from './Profile.module.scss'
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import profileApi from '../../api/profileApi';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import formValidator from '../../utils/formValidator';
import formatCurrency from '../../utils/formater';


dayjs.extend(utc);
dayjs.locale("vi");

const tabList = [
    {
        key: 'tab1',
        tab: 'Công việc',
    },
    {
        key: 'tab2',
        tab: 'Đánh giá',
    },
];

function Profile() {
    const [form] = Form.useForm();
    const [isEdit, setIsEdit] = useState(false)
    const [messageApi, contextHolder] = notification.useNotification();


    const [errorPhoneLoading, setErrorPhoneLoading] = useState(false);
    const [initialValues, setInitialValues] = useState({
        fullName: "",
        birthday: "",
        phone: "",
        wallet: ""
    });
    const [activeTabKey1, setActiveTabKey1] = useState('tab1');
    const onTab1Change = (key) => {
        setActiveTabKey1(key);
    };

    async function getProfile() {
        const logined = JSON.parse(sessionStorage.getItem("logined"));
        const id = logined.id;
        const resp = await profileApi.getByAccountId(id);
        const formatData = {
            id: resp.data.id,
            fullName: resp.data.fullName,
            birthday: dayjs(resp.data.birthday),
            phone: resp.data.phone,
            wallet: resp.data.wallet
        };
        setInitialValues(formatData)
        form.setFieldsValue(formatData)
        console.log(resp.data);
    }

    const onFinish = async (values) => {
        try{
            const resp = await profileApi.update(initialValues.id,values);
            const formatData = {
                id: resp.data.id,
                fullName: resp.data.fullName,
                birthday: dayjs(resp.data.birthday),
                phone: resp.data.phone,
                wallet: resp.data.wallet
            };
            setInitialValues(formatData);
            form.setFieldsValue(formatData);
            messageApi.success({
                message: "Cập nhật hồ sơ thành công!",
                showProgress: true,
            });
            setIsEdit(!isEdit);
        }catch(e){
            console.log(e)
        }
        
    }



    useEffect(() => {
        getProfile();

    }, [])
    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    };
    const navigator = useNavigate();

    const onClick = (e) => {
        console.log('click ', e);
    };

    const desc = ['Lừa đảo', 'Không khuyến khích', 'Bình thường', 'Tốt', 'Tuyệt cà là vời'];
    const [value, setValue] = useState(1);
    const getColor = (val) => {
        if (val <= 2) return "red";
        if (val >= 2 && val <= 3) return "orange";
        return "green";
    };

    const getTooltip = (val) => {
        const index = Math.floor(val);
        if (val === 0.5) {
            return `Siêu lừa đảo`;
        }
        else if (val % 1 !== 0) {
            return `${desc[index - 1]}`;
        }
        return desc[index - 1];
    };
    const contentList = {
        tab1: (
            <>
                <div className='row'>
                    <div className='col-lg-5'>Việc đã đăng:</div>
                    <div className='col-lg-2'><Badge count={25} color="blue" /></div>
                </div>
                <hr />
                <div className='row'>
                    <div className='col-lg-5'>Việc làm:</div>
                    <div className='col-lg-2'><Badge count={25} color="green" /></div>
                    <div className='col-lg-5'>việc đã làm</div>
                </div>
                <hr />
                <div className='row'>
                    <div className='col-lg-5'>Khách hàng:</div>
                    <div className='col-lg-2'><Badge count={25} color="#4096ff" /></div>
                    <div className='col-lg-5'>khách</div>
                </div>
                <hr />
            </>
        ),
        tab2: (
            <>
                <div className='row'>
                    <div className="col-lg-4">
                        <p>Đánh giá:</p>
                    </div>
                    <div className="col-lg-8">
                        <Flex gap="middle" vertical align="center">
                            <Rate allowHalf tooltips={desc} onChange={setValue} value={value} />
                            {value ? (
                                <span style={{ color: getColor(value), fontWeight: "bold" }}>
                                    {getTooltip(value)}
                                </span>
                            ) : null}
                        </Flex>
                    </div>
                </div>
            </>
        ),
    };


    return (<div className="container" >
        {contextHolder}
        <div className="row">
            {!isEdit ? (
                <div div className="col-8">
                    <h1>{initialValues?.fullName}</h1>
                    <hr></hr>
                    <h5>Ngày sinh</h5>
                    <span>{formatDate(initialValues?.birthday)}</span>
                    <h5>Số điện thoại</h5>
                    <span>{initialValues?.phone}</span>
                    <hr></hr>
                    <div className='text-end'>
                        <Button type="primary" ghost style={{ width: "100px" }} onClick={() => setIsEdit(!isEdit)}>
                            Chỉnh sửa
                        </Button>
                    </div>
                </div>
            ) : (<div div className="col-8">
                <Form
                    form={form}
                    initialValues={initialValues}
                    onFinish={onFinish}
                >
                    <Form.Item name={'fullName'}
                        rules={formValidator.fullName()}>
                        <Input />
                    </Form.Item>
                    <hr></hr>
                    <h5>Ngày sinh</h5>
                    <Form.Item name={'birthday'} rules={formValidator.birthday()}>
                        <DatePicker format="DD/MM/YYYY" />
                    </Form.Item>
                    <h5>Số điện thoại</h5>
                    <Form.Item name={'phone'}
                        rules={formValidator.phone(setErrorPhoneLoading, initialValues?.phone)}
                        help={
                            errorPhoneLoading ? (
                                <Spin indicator={<LoadingOutlined spin />} size="small" />
                            ) : null
                        }>
                        <Input />
                    </Form.Item>
                    <hr></hr>
                    <div className='text-end'>
                        <Button type="primary" ghost style={{ width: "100px" }} htmlType='submit'>
                            Lưu
                        </Button>
                    </div>
                </Form>
            </div>)}
            <div className={"col-4 " + scss.col3}>

                <Card
                    style={{
                        fontWeight: "bold",
                        color: "green"
                    }}
                    actions={[
                        <span>Nạp</span>,
                        <span>Rút</span>
                    ]}
                    title="Số dư ví FreelancePay"
                >
                    {formatCurrency(initialValues?.wallet?.balance)}
                </Card>
                <Card
                    className={scss.card}
                    title="Tóm lược"
                    tabList={tabList}
                    activeTabKey={activeTabKey1}
                    onTabChange={onTab1Change}>
                    {contentList[activeTabKey1]}
                </Card>

            </div>
        </div>
    </div >);
}

export default Profile;