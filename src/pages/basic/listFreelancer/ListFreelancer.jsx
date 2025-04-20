import React, { useState, useEffect } from "react";
import FreelancerCard from "./FreelancerCard";
import { Skeleton, Row, Col, Pagination, Divider, Typography, Select, Input, Empty, Button } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import freelancerApi from "@api/freelancerApi";
import skillApi from "@api/skillApi";
import languageApi from "@api/languageApi";
import profileApi from "@api/profileApi";

const { Search } = Input;

const ListFreelancer = () => {
    const [freelancers, setFreelancers] = useState(null);
    const [freelancerProfiles, setFreelancerProfiles] = useState({});
    const [skills, setSkills] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [searchName, setSearchName] = useState("");

    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
        total: 0
    });

    const fetchProfiles = async (profileIds) => {
        try {
            const profiles = await Promise.all(
                profileIds.map(id => profileApi.getById(id))
            );
            const profileMap = {};
            profiles.forEach((response, index) => {
                if (response.data) {
                    profileMap[profileIds[index]] = response.data;
                }
            });
            setFreelancerProfiles(profileMap);
        } catch (error) {
            console.error("Lỗi khi lấy thông tin profile:", error);
        }
    };

    const fetchSkills = async () => {
        try {
            const res = await skillApi.getAll();
            setSkills(res.data);
        } catch (error) {
            console.error("Lỗi khi lấy danh sách kỹ năng:", error);
        }
    };

    const fetchLanguages = async () => {
        try {
            const res = await languageApi.getAll();
            if (res.data) {
                setLanguages(res.data);
            }
        } catch (error) {
            console.error("Lỗi khi lấy danh sách ngôn ngữ:", error);
        }
    };

    const fetchData = async () => {
        try {
            const params = {
                page: pagination.current - 1,
                size: pagination.pageSize
            };
            
            if (selectedSkills.length > 0) {
                params.skillIds = selectedSkills.join(',');
            }
            if (selectedLanguages.length > 0) {
                params.languageIds = selectedLanguages.join(',');
            }
            if (searchName) {
                params.fullName = searchName;
            }

            const res = await freelancerApi.search(params);
            if (res.data) {
                const freelancerData = res.data.content;
                setFreelancers(freelancerData);
                setPagination(prev => ({
                    ...prev,
                    total: res.data.totalElements
                }));

                // Lấy danh sách profileId để fetch thông tin profile
                const profileIds = freelancerData.map(f => f.profileId);
                await fetchProfiles(profileIds);
            }
        } catch (error) {
            console.error("Lỗi khi tìm kiếm freelancer:", error);
        }
    };

    useEffect(() => {
        fetchSkills();
        fetchLanguages();
    }, []);

    useEffect(() => {
        fetchData();
    }, [pagination.current, pagination.pageSize, selectedSkills, selectedLanguages, searchName]);

    const handlePageChange = (page, pageSize) => {
        setPagination(prev => ({
            ...prev,
            current: page,
            pageSize: pageSize
        }));
        window.scrollTo(0, 0);
    };

    const handleSearch = (value) => {
        setSearchName(value);
        setPagination(prev => ({
            ...prev,
            current: 1
        }));
    };

    const handleReset = () => {
        // Reset các state
        setSearchName("");
        setSelectedSkills([]);
        setSelectedLanguages([]);
        setPagination(prev => ({
            ...prev,
            current: 1
        }));

        // Reset giá trị của input tìm kiếm
        const searchInput = document.querySelector('input[placeholder="Nhập tên freelancer"]');
        if (searchInput) {
            searchInput.value = "";
        }

        // Reset các Select components
        const skillSelect = document.querySelector('.ant-select-selection-search-input[aria-label="Chọn kỹ năng"]');
        const languageSelect = document.querySelector('.ant-select-selection-search-input[aria-label="Chọn ngôn ngữ"]');
        
        if (skillSelect) {
            skillSelect.click();
            document.querySelector('.ant-select-clear')?.click();
        }
        
        if (languageSelect) {
            languageSelect.click();
            document.querySelector('.ant-select-clear')?.click();
        }
    };

    const renderEmptyState = () => {
        let searchMessage = "Không tìm thấy freelancer";
        if (searchName || selectedSkills.length > 0 || selectedLanguages.length > 0) {
            searchMessage += " với:";
            const conditions = [];
            if (searchName) {
                conditions.push(`tên "${searchName}"`);
            }
            if (selectedSkills.length > 0) {
                conditions.push("kỹ năng đã chọn");
            }
            if (selectedLanguages.length > 0) {
                conditions.push("ngôn ngữ đã chọn");
            }
            searchMessage = `${searchMessage} ${conditions.join(" và ")}`;
        }

        return (
            <div className="text-center py-5 empty-state-container">
                <style>
                    {`
                        .empty-state-container {
                            padding: 40px;
                            background: #f8f9fa;
                            border-radius: 12px;
                            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                            transition: all 0.3s ease;
                        }
                        .empty-state-container:hover {
                            transform: translateY(-5px);
                            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
                        }
                        .empty-state-icon {
                            font-size: 64px;
                            color: #1890ff;
                            margin-bottom: 24px;
                            animation: bounce 2s infinite;
                        }
                        @keyframes bounce {
                            0%, 20%, 50%, 80%, 100% {
                                transform: translateY(0);
                            }
                            40% {
                                transform: translateY(-20px);
                            }
                            60% {
                                transform: translateY(-10px);
                            }
                        }
                        .empty-state-title {
                            font-size: 24px;
                            color: #262626;
                            margin-bottom: 16px;
                            font-weight: 600;
                        }
                        .empty-state-description {
                            color: #595959;
                            font-size: 16px;
                            margin-bottom: 24px;
                            max-width: 80%;
                            margin: 0 auto 24px;
                        }
                        .empty-state-button {
                            margin-top: 16px;
                            transition: all 0.3s ease;
                        }
                        .empty-state-button:hover {
                            transform: scale(1.05);
                        }
                        .search-icon-container {
                            display: inline-block;
                            animation: pulse 1.5s infinite;
                        }
                        @keyframes pulse {
                            0% {
                                transform: scale(1);
                                opacity: 1;
                            }
                            50% {
                                transform: scale(1.2);
                                opacity: 0.7;
                            }
                            100% {
                                transform: scale(1);
                                opacity: 1;
                            }
                        }
                    `}
                </style>
                <div className="search-icon-container">
                    <SearchOutlined className="empty-state-icon" />
                </div>
                <h3 className="empty-state-title">Oops! Không tìm thấy freelancer nào</h3>
                <p className="empty-state-description">
                    {searchMessage}
                </p>
                {(searchName || selectedSkills.length > 0 || selectedLanguages.length > 0) && (
                    <Button 
                        type="primary" 
                        icon={<ReloadOutlined />}
                        className="empty-state-button"
                        onClick={handleReset}
                    >
                        Đặt lại tìm kiếm
                    </Button>
                )}
            </div>
        );
    };

    const renderContent = () => {
        if (!freelancers) {
            return (
                <Row gutter={[16, 16]}>
                    {[...Array(8)].map((_, index) => (
                        <Col key={index} span={6}>
                            <Skeleton active avatar paragraph={{ rows: 2 }} />
                        </Col>
                    ))}
                </Row>
            );
        }

        if (freelancers.length === 0) {
            return renderEmptyState();
        }

        return (
            <>
                <Row gutter={[16, 16]}>
                    {freelancers.map((freelancer) => (
                        <Col key={freelancer.id} span={6}>
                            <FreelancerCard 
                                profile={freelancer} 
                                profileData={freelancerProfiles[freelancer.profileId]}
                            />
                        </Col>
                    ))}
                </Row>
                <div className="d-flex justify-content-center mt-5">
                    <Pagination
                        current={pagination.current}
                        pageSize={pagination.pageSize}
                        total={pagination.total}
                        onChange={handlePageChange}
                        showSizeChanger
                    />
                </div>
            </>
        );
    };

    return (
        <div className="container">
            <Row gutter={24}>
                <Col span={6} className={"border-end mt-5"}>
                    <div>
                        <Typography.Title level={5}>Tìm kiếm theo tên</Typography.Title>
                        <Search
                            placeholder="Nhập tên freelancer"
                            allowClear
                            enterButton="Tìm kiếm"
                            onSearch={handleSearch}
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                        />

                        <div className="mt-3">
                            <Typography.Title level={5}>Kỹ năng</Typography.Title>
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="Chọn kỹ năng"
                                onChange={setSelectedSkills}
                                options={skills.map(skill => ({
                                    value: skill.id,
                                    label: skill.name
                                }))}
                                value={selectedSkills}
                                allowClear
                            />
                        </div>

                        <div className="mt-3">
                            <Typography.Title level={5}>Ngôn ngữ</Typography.Title>
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="Chọn ngôn ngữ"
                                onChange={setSelectedLanguages}
                                options={languages.map(lang => ({
                                    value: lang.id,
                                    label: lang.name
                                }))}
                                value={selectedLanguages}
                                allowClear
                            />
                        </div>
                    </div>
                    <Divider />
                </Col>

                <Col span={18} className={"mt-5"}>
                    {renderContent()}
                </Col>
            </Row>
        </div>
    );
};

export default ListFreelancer;
