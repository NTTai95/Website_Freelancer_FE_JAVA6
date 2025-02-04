
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { Button, Flex } from 'antd';
const CardAbout = ({ image, context, context1 }) => {
    return (<div>
        <div className='card border-black'>
            <img alt="example" src={image}  style={{width:"100%", borderRadius:"5px 5px 0px 0px"}}/>
            <strong><Card.Meta title={context} style={{ textAlign: 'center' }}></Card.Meta></strong>
            <p style={{ textAlign: 'center' }}>{context1}</p>
            <Button type="primary" danger className='mx-auto mb-3 my-auto d-block'>Xem Thêm</Button>
        </div>
    </div>);
};

export default CardAbout;