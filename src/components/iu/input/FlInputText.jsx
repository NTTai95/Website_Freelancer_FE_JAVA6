import React, { useState } from "react";
import scss from "./FlInput.module.scss"; // Tùy chọn: Thêm file CSS để chỉnh kiểu dáng

const FlInputText = ({
  icon,
  label,
  value,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={scss.flInput}>
      <div className={scss["floating-icon"]}>
        {icon && React.cloneElement(icon, { className: "icon" })}
      </div>
      <div className={scss["floating-label-input"]}>
        <label className={` ${isFocused || value ? scss["focused"] : ""}`}>
          {label}
        </label>
        <input
          type="text"
          className={scss["input-field"]}
          autoComplete="off"
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
};

export default FlInputText;
