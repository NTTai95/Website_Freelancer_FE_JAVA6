/* eslint-disable no-unused-vars */
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
                <p className={scss.title}>Học vấn</p>
                {(!freelancer?.academicInfos || freelancer.academicInfos.length === 0) && (
                    <p>Chỉnh sửa để thêm học vấn</p>
                )}
                {freelancer?.academicInfos?.map(academic => (
                    <Row key={academic.id} className={scss.education}>
                        <Col span={20}>
                            <p className={scss.name}>{academic.schoolName}</p>
                            <p className={scss.level}>
                                Trình độ:<span> {academic.educationLevel}</span>
                            </p>
                            <p className={scss.branch}>
                                Chuyên ngành:<span> {academic.major}</span>
                            </p>
                            <p className={scss.note}>{academic.note}</p>
                        </Col>
                        <Col span={4}>
                            <p className={scss.gpa}>
                                GPA:<span> {academic.gpa}/4</span>
                            </p>
                            {/* Hình ảnh học vấn */}
                            {academic?.image?.length > 0 ? (
                                <div className={scss.image}>
                                    {academic.image.slice(0, 2).map((imgUrl, index) => (
                                        <img
                                            key={index}
                                            src={imgUrl}
                                            alt={`Học vấn ${index + 1}`}
                                            className={scss.image}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <p className={scss.noImage}>Chưa có hình ảnh</p>
                            )}
                        </Col>
                    </Row>
                ))}
            </div>
            <Divider />

            <div className={scss.part}>
                <p className={scss.title}>Chứng chỉ</p>
                {(!freelancer?.certificates || freelancer.certificates.length === 0) && (
                    <p>Chỉnh sửa để thêm chứng chỉ</p>
                )}
                {freelancer?.certificates?.map(c => (
                    <Row key={c.id} className={scss.certificate}>
                        <Col span={20}>
                            <p className={scss.name}>{c?.name}</p>
                            <p className={scss.by}>
                                Tổ chức cấp:<span> {c?.providedBy}</span>
                            </p>
                            <p className={scss.note}>{c?.note}</p>
                        </Col>
                        <Col span={4}>
                            <p className={scss.date}>{formater.formatDate(c?.dateOfIssue)}</p>
                            {/* Hình ảnh chứng chỉ */}
                            {c?.image?.length > 0 ? (
                                <div className={scss.image}>
                                    {c.image.slice(0, 2).map((imgUrl, index) => (
                                        <img
                                            key={index}
                                            src={imgUrl}
                                            alt={`Chứng chỉ ${index + 1}`}
                                            className={scss.image}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <p className={scss.noImage}>Chưa có hình ảnh</p>
                            )}
                        </Col>
                    </Row>
                ))}
            </div>

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
