import { Avatar, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import profileApi from "../../api/profileApi";
import { useParams } from "react-router-dom";
import applyApi from "../../api/applyApi";



function ApplyDetail() {
    const { id } = useParams();
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Chọn ứng viên thành công',
        });
    };
    async function selectApply() {
        try {
            await applyApi.selectApply(id);
            success();
            setTimeout(() => {
                navigate("/profile/recruiters");
            }, 2000);
        } catch (e) {
            console.log(e);
        }
    }

    console.log(id);
    const [profile, setProfile] = useState(null);
    const [apply, setApply] = useState(null);
    const fetchData = async () => {
        try {
            const resA = await applyApi.getById(id);
            setApply(resA.data);
            const res = await profileApi.getByFreelancerId(resA?.data?.freelancerId);
            setProfile(res.data);
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {contextHolder}
            {/* Phần trên gồm infor và contact nằm ngang */}
            <div className="top" style={{ display: 'flex', gap: '20px' }}>
                <div
                    className="infor"
                    style={{
                        flex: 1,
                        border: "1px solid #ccc",
                        padding: "20px",
                        borderRadius: "8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                    }}
                >
                    <div className="avatar">
                        <Avatar size={100} src="data:image/jpeg;base64,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" />
                    </div>
                    <h4 className="mt-4">Tên: {profile?.fullName}</h4>
                    <p>
                        <span>Năm sinh: {profile?.birthday}</span>
                    </p>
                </div>

                <div className="contact" style={{ flex: '1', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
                    <h3>Thông tin liên hệ</h3>
                    <p>Số điện thoại: {profile?.phone}</p>
                    <p>Email: {profile?.account?.email}</p>
                </div>
            </div>

            {/* Phần mô tả nằm bên dưới */}
            <div className="describe" style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
                <h3>Mô tả</h3>
                <p>{apply?.context}</p>
            </div>
            <Button className="mt-4 w-25" type="primary" onClick={selectApply} >
                Click Test
            </Button >
        </div >

    );
}
export default ApplyDetail;