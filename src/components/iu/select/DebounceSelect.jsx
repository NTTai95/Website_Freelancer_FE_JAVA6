import { Select, Spin } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React, { useMemo, useRef, useState } from "react";
import debounce from "lodash/debounce";

function DebounceSelect({ fetchOptions, debounceTimeout = 800, ...props }) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState([]);
  const fetchRef = useRef(0);
  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      if (value === "") {
        setOptions([]);
        return;
      }
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          return;
        }
        setOptions(newOptions);
        setFetching(false);
      });
    };
    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  const suffix = props?.maxCount && (
    <>
      <span style={{ fontSize: "14px" }}>
        {value?.length} / {props?.maxCount}
      </span>
      <DownOutlined />
    </>
  );

  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      suffixIcon={suffix}
      value={value}
      onChange={(value) => {
        setValue(value);
      }}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
}

export default DebounceSelect;
