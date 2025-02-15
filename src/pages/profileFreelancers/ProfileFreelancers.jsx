import scss from "./profileFreelancers.module.scss";
import { Tag, Divider, Button } from "antd";
import profileApi from '@api/profileApi';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import skillApi from "../../api/skillApi";
import languageApi from "../../api/languageApi";

function ProfileFreelancers() {
    const [freelancer, setFreelancer] = useState(null);
    const [skills, setSkills] = useState(null);
    const [languages, setLanguages] = useState(null);
    const navigate = useNavigate();

    const fetchProfile = async () => {
        const logined = JSON.parse(sessionStorage.getItem("logined"));
        if (logined) {
            const response = await profileApi.getByAccountId(logined.id);
            setFreelancer(response.data.freelancer);
            fetchSkills(response.data.freelancer.skillIds);
            fetchLanguages(response.data.freelancer.freelancerLanguageIds);
        }
    };

    const fetchSkills = async (skillIds) => {
        const response = await skillApi.getByIds(skillIds);
        setSkills(response.data);
    };
    
    const fetchLanguages = async (languageIds) => {
        const response = await languageApi.getByIds(languageIds);
        setLanguages(response.data);
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <div>
            <div>
                <h2 className="text-primary">Tóm lược</h2>
                <Divider />
                <p style={{ fontSize: "17px" }}>
                    {freelancer?.introduce}
                </p>
                <Divider />
            </div>
            <div className="mb-4">
                <h2 className="text-primary">Ngôn ngữ</h2>
                {languages && languages.map((l) => (
                    <Tag key={l.id} className="fs-6 p-1" color="blue">
                        {l.name}
                    </Tag>
                ))}
            </div>
            <Divider />
            <div className="mb-4">
                <h2 className="text-primary">Kỹ năng</h2>
                {skills && skills.map((s) => (
                    <Tag key={s.id} className="fs-6 p-1" bordered={false} color="success">
                        {s.name}
                    </Tag>
                ))}
            </div>
            <Divider />
            <Button type="primary" onClick={() => navigate('/edit-profile')}>
                Chỉnh sửa hồ sơ
            </Button>
        </div>
    );
}

export default ProfileFreelancers;
