import scss from "./FreelancerInfo.module.scss";
import {
  Tag,
  Divider,
  Form,
  Skeleton,
  Space,
  Button,
  Input,
  Spin,
  Select,
} from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import skillApi from "@api/skillApi";
import languageApi from "@api/languageApi";
import freelancerApi from "@api/freelancerApi";
import freelancerLanguageApi from "@api/freelancerLanguageApi";
import DebounceSelect from "@components/iu/select/DebounceSelect";
import { useForm } from "antd/es/form/Form";

function FreelancerInfo() {
  const [freelancer, setFreelancer] = useState(null);
  const [skills, setSkills] = useState(null);
  const [freelancerLanguages, setFreelancerLanguages] = useState(null);
  const [languages, setLanguages] = useState(null);

  const [initialValues, setInitialValues] = useState({
    introduce: "",
    skills: [],
    languages: [],
  });
  const [form] = Form.useForm();

  const [isEditing, setIsEditing] = useState(true);

  const fetchData = async () => {
    const logined = JSON.parse(sessionStorage.getItem("logined"));
    if (logined) {
      const resFreelancer = await freelancerApi.getByAccountId(logined.id);
      setFreelancer(resFreelancer.data);
      console.log(resFreelancer.data);

      const resSkills = await skillApi.getByIds(resFreelancer.data.skillIds);
      setSkills(resSkills.data);

      const resfl = await freelancerLanguageApi.getByIds(
        resFreelancer.data.freelancerLanguageIds
      );
      setFreelancerLanguages(resfl.data);

      const resLanguage = await languageApi.getByIds(
        resfl.data.map((fl) => fl.languageId)
      );

      setLanguages(resLanguage.data);

      const formatData = {
        id: resFreelancer.data.id,
        introduce: resFreelancer.data.introduce,
        skills: resSkills.data.map((skill) => {
          return { value: skill.id, label: skill.name };
        }),
        languages: resLanguage.data.map((language) => {
          return { value: language.id, label: language.name };
        }),
      };
      setInitialValues(formatData);
      form.setFieldsValue(formatData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSearchSkill = async (value) => {
    const res = await skillApi.searchByName(value);

    return res.data.map((skill) => ({
      value: skill.id,
      label: skill.name,
    }));
  };

  const onSearchLanguage = async (value) => {
    const res = await languageApi.searchByName(value);

    return res.data.map((language) => ({
      value: language.id,
      label: language.name,
    }));
  };

  const onFinish = async (values) => {

    const flFormatData = {
      freelancerId: freelancer.id,
      languageIds: values.languages.map((language) => language.value),
      level: 1,
    };

    const resfl = await freelancerLanguageApi.create(flFormatData);
    // const freelancerDTO = {
    //   introduce: values.introduce,
    //   skillIds: values.skills.map((skill) => skill.value),
    // };

    // const resFreelancer = await freelancerApi.update(
    //   freelancer.id,
    //   freelancerDTO
    // );

    // const resSkills = await skillApi.getByIds(resFreelancer.data.skillIds);
    // setSkills(resSkills.data);

    // const resLanguage = await languageApi.getByIds(
    //   resFreelancer.data.freelancerLanguageIds
    // );
    // setLanguages(resLanguage.data);

    // const formatData = {
    //   id: resFreelancer.data.id,
    //   introduce: resFreelancer.data.introduce,
    //   skills: resSkills.data.map((skill) => {
    //     return { value: skill.id, label: skill.name };
    //   }),
    //   languages: resLanguage.data.map((language) => {
    //     return { value: language.id, label: language.name };
    //   }),
    // };
    // setInitialValues(formatData);
    // form.setFieldsValue(formatData);
  };

  return (
    <>
      {isEditing ? (
        <div className={scss.container}>
          <Form
            layout="vertical"
            form={form}
            initialValues={initialValues}
            onFinish={onFinish}
          >
            <div className={scss.part}>
              <Form.Item
                name="introduce"
                label={<p className={scss.title}>Giới thiệu</p>}
              >
                <Input.TextArea
                  size="large"
                  placeholder="Giới thiệu về bản thân mình..."
                  rows={7}
                />
              </Form.Item>
            </div>
            <div className={scss.part}>
              <Form.Item
                name="skills"
                label={<p className={scss.title}>Kỹ năng</p>}
              >
                <DebounceSelect
                  mode="multiple"
                  placeholder="Tìm kiếm kỹ năng..."
                  maxCount={10}
                  size="large"
                  fetchOptions={onSearchSkill}
                />
              </Form.Item>
            </div>
            <div className={scss.part}>
              <Form.Item
                name="languages"
                label={<p className={scss.title}>Ngôn ngữ</p>}
              >
                <DebounceSelect
                  mode="multiple"
                  placeholder="Tìm kiếm ngôn ngữ..."
                  size="large"
                  fetchOptions={onSearchLanguage}
                />
              </Form.Item>
            </div>
            <Form.Item>
              <Button
                className={"d-block ms-auto"}
                type="primary"
                htmlType="submit"
              >
                Lưu
              </Button>
            </Form.Item>
          </Form>
        </div>
      ) : freelancer && skills && languages ? (
        <div className={scss.container}>
          <div className={scss.part}>
            <p className={scss.title}>Giới thiệu</p>
            <Divider />
            <p className={scss.text}>{freelancer?.introduce}</p>
            <Divider />
          </div>
          <div className={scss.part}>
            <p className={scss.title}>Kỹ năng</p>
            {skills &&
              skills.map((s) => (
                <Tag color="purple" className={scss.tag}>
                  {s.name}
                </Tag>
              ))}
          </div>
          <Divider />
          <div className={scss.part}>
            <p className={scss.title}>Ngôn ngữ</p>
            {languages &&
              languages.map((l) => (
                <Tag color="red" className={scss.tag}>
                  {l?.name}
                </Tag>
              ))}
          </div>
          <Button
            className={"ms-auto d-block"}
            type="primary"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Chỉnh sửa
          </Button>
        </div>
      ) : (
        <div className={scss.container}>
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
          <Skeleton.Button active className={"ms-auto d-block"} />
        </div>
      )}
    </>
  );
}
export default FreelancerInfo;
