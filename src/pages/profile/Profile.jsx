import { Image, Menu, Tag, Card, Progress, Button, Badge, Rate, Flex } from 'antd';
import { ReconciliationOutlined, WalletOutlined } from '@ant-design/icons';
import scss from './Profile.module.scss'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
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
    const [activeTabKey1, setActiveTabKey1] = useState('tab1');
    const onTab1Change = (key) => {
        setActiveTabKey1(key);
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
            <div className="col-2"> <Image
                width={200}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
                <Menu
                    onClick={onClick}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                    style={{ width: 200 }}
                />
                <Menu
                    onClick={onClick}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['wallet1']}
                    mode="inline"
                    items={walletItems}
                    style={{ width: 200 }}
                />

            </div>

            <div className="col-7">
                <h1>Nguyễn Tấn Tài</h1>
                <p>Phát triển phần mềm</p>
                <h5>Hậu Giang</h5>
                <hr></hr>
                <h5>Tóm lược</h5>
                <p>Tôi đã có 5 năm kinh nghiệm làm Freelance trong ngành Phát triển phần mềm.
                    Tôi đã có khả năng làm việc dưới áp lực lớn với hiệu quả cao và chi phí hợp lý.
                    Khả năng làm việc độc lập và tập trung cũng là một trong những ưu thế tôi muốn để cập tới.</p>
                <hr></hr>
                <h5>Việc đã làm</h5>
                <h5 className="text-primary">Logo design</h5>
                <p>04/11/2013 | Thiết kế logo | 5.000.000 VNĐ | Đã được giao việc</p>
                <h5 className="text-primary">Logo design</h5>
                <p>04/11/2013 | Thiết kế logo | 5.000.000 VNĐ | Đã được giao việc</p>
                <p className="text-primary">Xem thêm</p>
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
                    <Button type="primary" ghost style={{ width: "100px" }}>
                        Chỉnh sửa
                    </Button>
                </div>
            </div>
            <div className={"col-3 " + scss.col3}>
                <Card title={
                    <span>
                        <FontAwesomeIcon icon={faMoneyBill} style={{ marginRight: 8}} />
                        Ví FreeLancePay
                    </span>
                }>
                    <Card.Grid style={{ width: "305px", color: "Green",fontWeight:"bold" }}>10,000,000 VNĐ</Card.Grid>
                </Card>
                <Card className={scss.card} title="Hồ sơ của tôi">
                    <Progress percent={50} size={{ height: 25 }} />
                    <p>Bạn muốn khách hàng chú ý đến hồ sơ của bạn hơn? Hãy tham khảo<a href='#' onClick={() => { navigator("/") }}> gợi ý của chúng tôi.</a></p>
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