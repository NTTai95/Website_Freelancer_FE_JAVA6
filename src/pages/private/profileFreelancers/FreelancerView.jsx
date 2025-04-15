import scss from "./FreelancerInfo.module.scss";
import { Button, Divider, Tag, Skeleton, Space, Typography, Card, Col, Row } from "antd";
import formater from "@utils/formater";

const { Paragraph } = Typography;

const FreelancerView = ({ freelancer, skills, languages, setIsEditing }) => {
    const renderContent = () => (
        <div>
            <div className={scss.part}>
                <p className={scss.title}>Giới thiệu</p>
                <Divider />
                <Paragraph style={{ whiteSpace: "pre-line" }} className={scss.text}>
                    {freelancer?.introduce}
                </Paragraph>
                <Divider />
            </div>
            <div className={scss.part}>
                <p className={scss.title}>Kỹ năng</p>
                {skills?.map(s => (
                    <Tag key={s.id} color="purple" className={scss.tag}>
                        {s.name}
                    </Tag>
                ))}
            </div>
            <Divider />
            <div className={scss.part}>
                <p className={scss.title}>Ngôn ngữ</p>
                {languages?.map(l => (
                    <Tag key={l.id} color="red" className={scss.tag}>
                        {l.name}
                    </Tag>
                ))}
            </div>
            <Divider />
            <div className={scss.part}>
                <p className={scss.title}>Chứng chỉ</p>
                {freelancer?.certificates?.map(c => {
                    return (
                        <Row className={scss.certificate}>
                            <Col span={20}>
                                <p className={scss.name}>{c?.name}</p>
                                <p className={scss.by}>
                                    Tổ chức cấp:<span> {c?.providedBy}</span>
                                </p>
                                <p className={scss.note}>{c?.note}</p>
                            </Col>
                            <Col span={4}>
                                <p className={scss.date}>{formater.formatDate(c?.dateOfIssue)}</p>
                            </Col>
                        </Row>
                    );
                })}
            </div>
            {/* <Divider />
            <div className={scss.part}>
                <p className={scss.title}>Học vấn</p>
                <Row className={scss.education}>
                    <Col span={18}>
                        <p className={scss.name}>Trường Cao Đẳng FPT Polytechnic cơ sở cần thơ</p>
                        <p className={scss.branch}>
                            Ngành:<span> Công nghệ thông tin</span>
                        </p>
                        <p className={scss.branch}>
                            Chuyên ngành:<span> Phát triển phần mềm</span>
                        </p>
                        <p className={scss.note}>Ghi chú cho học vấn</p>
                    </Col>
                    <Col span={6}>
                        <p className={scss.date}>
                            12/2022 <span>-</span> 21/2022
                        </p>
                        <p className={scss.gpa}>
                            GPA:<span> 3.75/4</span>
                        </p>
                    </Col>
                </Row>
            </div> */}
            <Button className="ms-auto d-block" type="primary" onClick={() => setIsEditing(true)}>
                Chỉnh sửa
            </Button>
        </div>
    );

    const renderSkeleton = () => (
        <div>
            <div className={scss.part}>
                <p className={scss.title}>Giới thiệu</p>
                <Skeleton active title={false} paragraph={{ rows: 5 }} />
            </div>
            <Divider />
            <div className={scss.part}>
                <p className={scss.title}>Kỹ năng</p>
                <Space>
                    <Skeleton.Button active />
                    <Skeleton.Button active />
                    <Skeleton.Button active />
                </Space>
            </div>
            <Divider />
            <div className={scss.part}>
                <p className={scss.title}>Ngôn ngữ</p>
                <Space>
                    <Skeleton.Button active />
                    <Skeleton.Button active />
                    <Skeleton.Button active />
                </Space>
            </div>
            <Skeleton.Button active className="ms-auto d-block" />
        </div>
    );

    return freelancer && skills && languages ? renderContent() : renderSkeleton();
};

export default FreelancerView;
