
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { border, borderGradient } from '@cloudinary/url-gen/qualifiers/background';
import { Avatar, Card, Image, Button, Flex } from 'antd';
import scss from "./card.module.scss"
const CardAbout = ({ image, context, context1 }) => {
    return (
        <>
            <Card className={scss.card}>
                <div className={scss.avatar}>
                    <img src={image} />
                </div>
                <strong className={scss.title}><Card.Meta title={context} style={{ textAlign: 'center', marginTop: '100px' }}></Card.Meta></strong>
                <p style={{ textAlign: 'center' }}>{context1}</p>
                <Button color="primary" className={"mx-auto d-block"} variant="dashed">
                    Dashed
                </Button>          
                </Card>
        </>);
};

export default CardAbout;