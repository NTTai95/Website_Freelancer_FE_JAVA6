import { Avatar, Button } from "antd";
import { useEffect, useState } from "react";
import profileApi from "../../api/profileApi";
import { useParams } from "react-router-dom";
import applyApi from "../../api/applyApi";



function ApplyDetail() {
    function selectApply(){
        
    }
    const { id } = useParams();
    console.log(id);
    const [profile, setProfile] = useState(null);
    const [apply, setApply] = useState(null);
    const fetchData = async () => {
        try {
            const res = await profileApi.getByFreelancerId(id);
            const resA = await applyApi.getById(id);
            setProfile(res.data);
            setApply(resA.data);
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
                        <Avatar size={100} src={profile?.avatar} />
                    </div>
                    <h4 className="mt-4">Tên: {profile?.fullName}</h4>
                    <p>
                        <span>Năm sinh: {profile?.birthday}</span>
                    </p>
                </div>

                <div className="contact" style={{ flex: '1', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
                    <h3>Thông tin liên hệ</h3>
                    <p>Công ty ABC</p>
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