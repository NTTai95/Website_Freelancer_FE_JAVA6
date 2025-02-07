import scss from "./profileFreelancers.module.scss";
import { Tag, Divider } from "antd";
import profileApi from '@api/profileApi'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ProfileFreelancers() {
    const [profile, setProfile] = useState(null);
    const nagivate = useNavigate();

    useEffect(() => {
        const logined = JSON.parse(sessionStorage.getItem("logined"));
        if (logined) {
            if (logined.type) {
                nagivate("/404");
            } else {
                profileApi.getByAccountId(logined.id).then((response) => {
                    if (response.status == 200) {
                        setProfile(response.data);
                    }
                });
            }
        }
    }, []);

    return (
        <div>
            <div>
                <h2 className="text-primary">Tóm lược</h2>
                <Divider />
                <p style={{ fontSize: "17px" }}>
                    {profile?.freelancer?.introduce}
                </p>
                <Divider />
            </div>
            <div className="mb-4">
                <h2 className="text-primary">Ngôn ngữ</h2>
                <Tag className="fs-6 p-1" color="purple">
                    Tiếng Anh
                </Tag>
                <Tag className="fs-6 p-1" color="cyan">
                    Tiếng Nga
                </Tag>
            </div>
            <Divider />
            <div className="mb-4">
                <h2 className="text-primary">Kỹ năng</h2>
                <Tag className="fs-6 p-1" bordered={false} color="processing">
                    Java
                </Tag>
                <Tag className="fs-6 p-1" bordered={false} color="gold">
                    React
                </Tag>
                <Tag className="fs-6 p-1" bordered={false} color="magenta">
                    Copy Writing
                </Tag>
                <Tag className="fs-6 p-1" bordered={false} color="success">
                    Copy & Paste
                </Tag>
            </div>
        </div>
    );
}
export default ProfileFreelancers;
