import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import scss from "./Stepper.module.scss";

const Stepper = ({ steps }) => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => prev + 1);
  const prev = () => setCurrent((prev) => prev - 1);

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <>
      <Steps current={current} items={items} />
      <div className={scss.containerStepper}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current > 0 && (
          <Button className={scss.mr10px} onClick={prev}>
            Quay lại
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button
            className={scss.mr10px}
            type="primary"
            onClick={() => message.success("Processing complete!")}
            disabled
          >
            Lưu và chỉnh sửa
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={next}>
            Lưu và tiếp tục
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Hoàn thành
          </Button>
        )}
      </div>
    </>
  );
};

export default Stepper;
