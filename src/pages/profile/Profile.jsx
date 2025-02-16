import { Image, Tag, Card, Button, Badge, Rate, Flex, Input, DatePicker,Form } from 'antd';
import { ReconciliationOutlined, WalletOutlined } from '@ant-design/icons';
import scss from './Profile.module.scss'
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontWeight } from '@cloudinary/url-gen/qualifiers';
import profileApi from '../../api/profileApi';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';


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
    const [isEdit, setIsEdit] = useState(false)
    const [activeTabKey1, setActiveTabKey1] = useState('tab1');
    const onTab1Change = (key) => {
        setActiveTabKey1(key);
    };


    const [profile, setProfile] = useState({
        fullName: ""
    });
    async function getProfile() {
        const logined = JSON.parse(sessionStorage.getItem("logined"));
        const id = logined.id;
        const resp = await profileApi.getByAccountId(id);
        setProfile(resp.data)
        console.log(resp.data);
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

    const items = [
        {
            key: 'sub1',
            label: 'Tổng quan',
            icon: <ReconciliationOutlined />,
            children: [
                {
                    key: 'g1',
                    label: 'Hồ sơ việc làm',
                },
                {
                    key: 'g2',
                    label: 'Việc đã làm',
                },
            ],
        }
    ];

    const walletItems = [
        {
            key: 'wallet1wallet1',
            label: 'FreeLance wallet',
            icon: <WalletOutlined />,
            children: [
                {
                    key: 'w1',
                    icon: <FontAwesomeIcon icon={faMoneyBill} />,
                    label: '10,000,000 VNĐ',
                }
            ]
        }
    ]

    return (<div className="container" >
        <div className="row">
            {!isEdit ? (
                <div div className="col-8">
                    <h1>{profile?.fullName}</h1>
                    <hr></hr>
                    <h5>Ngày sinh</h5>
                    <span>{formatDate(profile?.birthday)}</span>
                    <h5>Số điện thoại</h5>
                    <span>{profile?.phone}</span>
                    <hr></hr>
                    <h5>Hồ sơ làm việc </h5>
                    <div className="row">
                        <div className="col-4"><Image
                            width={200}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        /></div>
                        <div className="col-4"><Image
                            width={200}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        /></div>
                        <div className="col-4"><Image
                            width={200}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        /></div>
                        <p className="text-primary">Xem thêm</p>
                        <hr></hr>
                        <h5>Kỹ năng làm việc</h5>
                        <div>
                            <Tag className={scss.tag} color="magenta">Java</Tag>
                            <Tag className={scss.tag} color="lime">Javascript</Tag>
                            <Tag className={scss.tag} color="blue">Python</Tag>
                            <Tag className={scss.tag} color="purple">HTML</Tag>
                        </div>
                    </div>
                    <div className='text-end'>
                        <Button type="primary" ghost style={{ width: "100px" }} onClick={() => setIsEdit(!isEdit)}>
                            Chỉnh sửa
                        </Button>
                    </div>
                </div>
            ) : (<div div className="col-8">
                <Form>
                    <Form.Item>
                        <Input value={profile?.fullName} />
                    </Form.Item>
                    <hr></hr>
                    <h5>Ngày sinh</h5>
                    <DatePicker value={dayjs(profile.birthday)} format="DD/MM/YYYY" />
                    <h5>Số điện thoại</h5>
                    <span>{profile?.phone}</span>
                    <hr></hr>
                    <h5>Hồ sơ làm việc </h5>
                    <div className="row">
                        <div className="col-4"><Image
                            width={200}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        /></div>
                        <div className="col-4"><Image
                            width={200}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        /></div>
                        <div className="col-4"><Image
                            width={200}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        /></div>
                        <p className="text-primary">Xem thêm</p>
                        <hr></hr>
                        <h5>Kỹ năng làm việc</h5>
                        <div>
                            <Tag className={scss.tag} color="magenta">Java</Tag>
                            <Tag className={scss.tag} color="lime">Javascript</Tag>
                            <Tag className={scss.tag} color="blue">Python</Tag>
                            <Tag className={scss.tag} color="purple">HTML</Tag>
                        </div>
                    </div>
                    <div className='text-end'>
                        <Button type="primary" ghost style={{ width: "100px" }} htmlType='submit' onClick={() => setIsEdit(!isEdit)}>
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
                    100,000,000
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