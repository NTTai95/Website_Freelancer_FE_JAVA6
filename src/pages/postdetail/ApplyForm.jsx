import { Typography, Form, Input, Button, Popconfirm, Tooltip, Spin, Divider } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import scss from "./PostDetail.module.scss";
import formValidator from "@utils/formValidator";
import TooltipAI from "./TooltipAI";

const { Title, Paragraph } = Typography;

function ApplyForm({
  form,
  onFinish,
  loadingCall,
  openPopconfirm,
  setOpenPopconfirm,
  handleSubmit,
  genreateContent,
  setContent,
  apply,
}) {
  if (apply) {
    return (
      <div>
        <Title level={4}>Thông tin đã ứng tuyển</Title>
        <Divider className={"mb-0"} />
        <Paragraph className={scss.context}>{apply?.context}</Paragraph>
        <Divider className={"mt-0"} />
      </div>
    );
  }

  return (
    <Spin spinning={loadingCall}>
      <Form form={form} onFinish={onFinish}>
        <Title level={4}>Ứng tuyển ngay</Title>
        <Form.Item name="content" rules={formValidator.content()}>
          <Input.TextArea
            placeholder="Nội dung ứng tuyển"
            rows={20}
            showCount
            maxLength={10000}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Item>
        <div className={"d-flex justify-content-center gap-2"}>
          <Popconfirm
            title="Nộp hồ sơ ứng tuyển"
            icon={<QuestionCircleOutlined style={{ color: "blue" }} />}
            description={
              <p>
                Khi nộp hồ sơ ứng tuyển, bạn sẽ không thể sửa
                <br /> đổi nội dung ứng tuyển. Bạn có chắc chắn muốn
                <br /> nộp hồ sơ ứng tuyển?
              </p>
            }
            onConfirm={() => form.submit()}
            onCancel={() => setOpenPopconfirm(false)}
            okText="Đồng ý"
            cancelText="Hủy"
            open={openPopconfirm}
          >
            <Button type="primary" onClick={handleSubmit}>
              Nộp đơn ngay
            </Button>
          </Popconfirm>
          <Tooltip title={<TooltipAI />} color="blue">
            <Button htmlType="button" type="default" onClick={genreateContent}>
              Hỗ trợ AI
            </Button>
          </Tooltip>
        </div>
      </Form>
    </Spin>
  );
}

export default ApplyForm;
