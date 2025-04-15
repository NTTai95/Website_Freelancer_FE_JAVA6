import { Form } from "antd";
import { useEffect, useState } from "react";
import skillApi from "@api/skillApi";
import languageApi from "@api/languageApi";
import freelancerApi from "@api/freelancerApi";
import FreelancerView from "./FreelancerView";
import FreelancerForm from "./FreelancerForm";
import { Spin } from "antd";
import authenticationApi from "@api/authenticationApi";
import formater from "../../../utils/formater";
import dayjs from "dayjs";

function FreelancerInfo() {
    const [freelancer, setFreelancer] = useState(null);
    const [skills, setSkills] = useState(null);
    const [languages, setLanguages] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [initialValues, setInitialValues] = useState({
        introduce: "",
        skills: [],
        languages: []
    });

    const formatDataForForm = (freelancerData, skillsData, languagesData) => {
        return {
            id: freelancerData.id,
            introduce: freelancerData.introduce,
            skills: skillsData.map(skill => ({
                value: skill.id,
                label: skill.name
            })),
            languages: languagesData.map(language => ({
                value: language.id,
                label: language.name
            })),
            certificates: freelancerData.certificates.map(certificate => ({
                ...certificate,
                dateOfIssue: certificate.dateOfIssue ? dayjs(certificate.dateOfIssue) : null,
                freelancerId: freelancerData.id
            }))
        };
    };

    const fetchFreelancerData = async () => {
        setIsLoading(true);
        try {
            const token = sessionStorage.getItem("token");
            if (!token) return;

            const res = await authenticationApi.isStaff();
            const { id, isStaff } = res.data;

            const resFreelancer = await freelancerApi.getByAccountId(id);
            setFreelancer(resFreelancer.data);
            console.log(resFreelancer.data);

            const resSkills = await skillApi.getByIds(resFreelancer.data.skillIds);
            setSkills(resSkills.data);

            const resLanguage = await languageApi.getByIds(
                resFreelancer.data.freelancerLanguages.map(fl => fl.languageId)
            );
            setLanguages(resLanguage.data);

            const formattedData = formatDataForForm(
                resFreelancer.data,
                resSkills.data,
                resLanguage.data
            );
            setInitialValues(formattedData);
        } catch (error) {
            console.error("Error fetching freelancer data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchFreelancerData();
    }, [isEditing]);

    const onSearchSkill = async value => {
        const res = await skillApi.searchByName(value);
        return res.data.map(skill => ({
            value: skill.id,
            label: skill.name
        }));
    };

    const onSearchLanguage = async value => {
        const res = await languageApi.searchByName(value);
        return res.data.map(language => ({
            value: language.id,
            label: language.name
        }));
    };

    const onFinish = async values => {
        const freelancerLanguages = values.languages.map(language => ({
            freelancerId: freelancer.id,
            languageId: language.value,
            level: 1
        }));

        const formattedCertificates = values.certificates ? values.certificates.map(certificate => ({
            id: certificate.id || null,
            name: certificate.name,
            providedBy: certificate.providedBy,
            note: certificate.note || '',
            dateOfIssue: certificate.dateOfIssue ? certificate.dateOfIssue.format('YYYY-MM-DD') : null,
            freelancerId: freelancer.id
        })) : [];

        const freelancerDTO = {
            id: freelancer.id,
            introduce: values.introduce,
            status: freelancer.status,
            profileId: freelancer.profileId,
            skillIds: values.skills.map(skill => skill.value),
            freelancerLanguages,
            certificates: formattedCertificates
        };

        try {
            const res = await freelancerApi.update(freelancer.id, freelancerDTO);
            if (res.status === 200) {
                setIsEditing(false);
            }
        } catch (error) {
            console.error("Error updating freelancer:", error);
        }
    };

    const onCancel = () => {
        setIsEditing(false);
    };

    return (
        <Spin spinning={isLoading}>
            {isEditing ? (
                <FreelancerForm
                    initialValues={initialValues}
                    onFinish={onFinish}
                    onSearchSkill={onSearchSkill}
                    onSearchLanguage={onSearchLanguage}
                    onCancel={onCancel}
                />
            ) : (
                <FreelancerView
                    freelancer={freelancer}
                    skills={skills}
                    languages={languages}
                    setIsEditing={setIsEditing}
                />
            )}
        </Spin>
    );
}
export default FreelancerInfo;
