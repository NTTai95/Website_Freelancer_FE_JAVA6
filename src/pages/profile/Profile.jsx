import { Image, Menu, Tag, Card, Progress, Button } from 'antd';
import { ReconciliationOutlined } from '@ant-design/icons';
import scss from './Profile.module.scss'
import { useNavigate } from 'react-router-dom';

function Profile() {

    const navigator = useNavigate();

    const onClick = (e) => {
        console.log('click ', e);
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

    return (<div className="container">
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
                /></div>

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
                <Card className={scss.card} title="Hồ sơ của tôi">
                    <Progress percent={50} size={{ height: 25 }} />
                    <p>Bạn muốn khách hàng chú ý đến hồ sơ của bạn hơn? Hãy tham khảo<a href='#' onClick={() => { navigator("/") }}> gợi ý của chúng tôi.</a></p>
                </Card>
                <Card className={scss.card} title="Tóm lược">
                    <Progress percent={50} size={{ height: 25 }} />
                    <p>Bạn muốn khách hàng chú ý đến hồ sơ của bạn hơn? Hãy tham khảo<a href='#' onClick={() => { navigator("/") }}> gợi ý của chúng tôi.</a></p>
                </Card>

            </div>

        </div>

    </div>);
}

export default Profile;