import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  border,
  borderGradient,
} from "@cloudinary/url-gen/qualifiers/background";
import { Avatar, Card, Image, Button, Flex } from "antd";
import scss from "./card.module.scss";
const CardAbout = ({ image, title, text }) => {
  return (
    <>
      <Card className={scss.card}>
        <div className={scss.avatar}>
          <img src={image} />
        </div>
        <div className={scss.cardBody}>
          <p className={scss.title}>{title}</p>
          <p className={scss.text}>{text}</p>
        </div>
      </Card>
    </>
  );
};

export default CardAbout;
