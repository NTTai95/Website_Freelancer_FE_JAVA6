
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { Button, Flex } from 'antd';
const CardAbout = ({ image, context, context1 }) => {
    return (<div>
        <div className='card border-black'>
            <img alt="example" src={image}  style={{width:"100%", borderRadius:"5px 5px 0px 0px"}}/>
            <Card.Meta title={context} style={{ textAlign: 'center' }}></Card.Meta>
            <p style={{ textAlign: 'center' }}>{context1}</p>
            <Button type="primary" danger className='mx-auto d-block'>Xem Thêm</Button>
        </div>
    </div>);
};

export default CardAbout;