import React, { useState } from "react";
import { Button, Steps, Form } from "antd";
import scss from "./Stepper.module.scss";

const Stepper = ({ steps, post, save }) => {
  const [current, setCurrent] = useState(2);
  const isLastStep = current === steps.length - 1;
  const [form] = Form.useForm();

  const prev = () => {
    setCurrent(current - 1);
  };
  const next = () => {
    setCurrent(current + 1);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const onFinish = (values) => {
    if (isLastStep) {
      post(values);
    } else {
      save(values);
    }
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Steps current={current} items={items} />
      <div className={scss.containerStepper}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current > 0 && (
          <Button className={scss.mr10px + scss["font-barlow"]} onClick={prev}>
            quay lại
          </Button>
        )}
        <>
          {isLastStep ? (
            <Button className={scss["font-barlow"]} type="primary" htmlType="submit">
              Đăng bài
            </Button>
          ) : (
            <Button className={scss["font-barlow"]} type="primary" htmlType="submit">
              Lưu và tiếp tục
            </Button>
          )}
        </>
      </div>
    </Form>
  );
};

export default Stepper;