import scss from "./PostDetail.module.scss";
import {
  CreditCardFilled,
  MailFilled,
  PhoneFilled,
  ClockCircleFilled,
  CalendarFilled,
  ContainerFilled,
} from "@ant-design/icons";
import {
  Tag,
  Button,
  Input,
  Form,
  Typography,
  Col,
  Row,
  Divider,
  Avatar,
  Spin
} from "antd";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import jobspostApi from "@api/jobspostApi";
import skillApi from "@api/skillApi";
import profileApi from "@api/profileApi";
import dayjs from "dayjs";
import formater from "@utils/formater";
import { useNavigate } from "react-router-dom";
import formValidator from "@utils/formValidator";
import geminiCall from "@utils/geminiCall";

const { Title, Text } = Typography;

function PostDetail() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [jobpost, setJobPost] = useState(null);
  const [lastDatePost, setLastDatePost] = useState(0);
  const [skills, setSkills] = useState(null);
  const [profile, setProfile] = useState(null);
  const [form] = Form.useForm();
  const [content, setContent] = useState("");
  const [loadingCall, setLoadingCall] = useState(false);

  const fetchData = async () => {
    try {
      const jobRes = await jobspostApi.getById(id);
      setJobPost(jobRes.data);
      setLastDatePost(
        formater.timePeriodFromNow(dayjs(jobRes.data.datePosted))
      );

      const [skillsRes, profileRes] = await Promise.all([
        skillApi.getByIds(jobRes.data.skillIds),
        profileApi.getByRecruiterId(jobRes.data.recruiterId),
      ]);

      setSkills(skillsRes.data);
      setProfile(profileRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const genreateContent = async () => {
    setLoadingCall(true);
    const res = await geminiCall.generateContentApply(jobpost?.id, content);
    form.setFieldsValue({
      content: res,
    });
    setLoadingCall(false);
  };

  return (
    <div className={"container"}>
      <Row gutter={24}>
        <Col span={16} className={"border-end"}>
          <Title className={scss.title} level={3}>
            {jobpost?.title}
          </Title>
          <div className={scss["info-icon"]}>
            <ClockCircleFilled className={scss.icon} />
            <span className={scss["text-grey"]}>
              Đăng cách đây {lastDatePost} trước
            </span>
          </div>
          <Divider />
          <div>
            <Title level={4}>Mô tả</Title>
            <p>{jobpost?.description}</p>
          </div>
          <hr />
          <Title level={4}>Ngân sách</Title>
          <div className={scss["info-icon"]}>
            <CreditCardFilled className={scss.icon} />
            <span>{formater.formatCurrency(jobpost?.budget)}</span>
          </div>
          <Divider />
          <Title level={4}>Kỹ năng và Chuyên môn</Title>
          <div className={scss.skills}>
            {skills?.map((skill) => (
              <Tag color="purple" className={scss.tag} key={skill.id}>
                {skill.name}
              </Tag>
            ))}
          </div>
          <hr />
          <div className={scss.activity}>
            <Title level={4}>Hoạt động trong công việc này</Title>
            <Title level={5}>Thời gian bắt đầu</Title>
            <div className={scss["info-icon-small"]}>
              <CalendarFilled className={scss.icon} />
              <Text>{formater.formatDate(jobpost?.startDate)}</Text>
            </div>
            <br />
            <Title level={5}>Thời gian kết thúc</Title>
            <div className={scss["info-icon-small"]}>
              <CalendarFilled className={scss.icon} />
              <Text>{formater.formatDate(jobpost?.startEnd)}</Text>
            </div>
          </div>
        </Col>

        <Col span={8}>
          <div>
            <Title level={3}>Nhà tuyển dụng</Title>
            <Divider />
            <Title level={4}>Đại diện</Title>
            <div className={scss.info}>
              <Avatar
                onClick={() => navigate(`/recruiter/${profile?.id}`)}
                className={scss.avatar}
                src={profile?.avatar}
              />
              <div className={scss.text}>
                <span
                  onClick={() => navigate(`/recruiter/${profile?.id}`)}
                  className={scss.fullName}
                >
                  {profile?.fullName}
                </span>
                <span>{formater.formatDate(profile?.birthday)}</span>
              </div>
            </div>
            <Divider />
            <Title level={4}>Liên hệ</Title>
            <div className={scss["info-icon-small"]}>
              <ContainerFilled className={scss.icon} />{" "}
              <span>{profile?.recruiter?.name}</span>
            </div>
            <div className={scss["info-icon-small"]}>
              <PhoneFilled className={scss.icon} />{" "}
              <span>{profile?.phone}</span>
            </div>
            <div className={scss["info-icon-small"]}>
              <MailFilled className={scss.icon} />{" "}
              <span>{profile?.account?.email}</span>
            </div>
          </div>
          <Divider />
          <Spin spinning={loadingCall}>
            <Form form={form} onFinish={onFinish}>
              <Title level={4}>Ứng tuyển ngay</Title>
              <Form.Item name="content" rules={formValidator.content()}>
                <Input.TextArea
                  placeholder="Nội dung ứng tuyển"
                  rows={20}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                />
              </Form.Item>
              <div className={"d-flex justify-content-center gap-2"}>
                <Button htmlType="submit" type="primary">
                  Nộp đơn ngay
                </Button>
                <Button
                  htmlType="button"
                  type="default"
                  onClick={genreateContent}
                >
                  Hỗ trợ AI
                </Button>
              </div>
            </Form>
          </Spin>
        </Col>
      </Row>
    </div>
  );
}

export default PostDetail;
