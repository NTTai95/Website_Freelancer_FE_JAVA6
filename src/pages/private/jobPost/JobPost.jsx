import React, { useState, useEffect } from "react";
import { Row, Col, Typography, Select, InputNumber, Divider, Skeleton, Pagination, Input } from "antd";
import JobCard from "./JobCard";
import jobspostApi from "@api/jobspostApi";
import skillApi from "@api/skillApi";

const JobPost = () => {
    const [jobPosts, setJobPosts] = useState(null);
    const [skills, setSkills] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [minBudget, setMinBudget] = useState(null);
    const [maxBudget, setMaxBudget] = useState(null);
    const [titleSearch, setTitleSearch] = useState("");

    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
        total: 0
    });

    const fetchSkills = async () => {
        try {
            const res = await skillApi.getAll();
            setSkills(res.data);
        } catch (error) {
            console.error("Lỗi khi lấy danh sách kỹ năng:", error);
        }
    };

    const fetchData = async () => {
        try {
            const res = await jobspostApi.searchJobPosts({
                page: pagination.current,
                size: pagination.pageSize,
                skillIds: selectedSkills,
                minBudget: minBudget,
                maxBudget: maxBudget,
                title: titleSearch
            });

            const { content, totalElements } = res.data;
            setJobPosts(content);
            setPagination(prev => ({
                ...prev,
                total: totalElements
            }));
        } catch (error) {
            console.error("Lỗi khi tìm kiếm job posts:", error);
        }
    };

    useEffect(() => {
        fetchSkills();
    }, []);

    useEffect(() => {
        fetchData();
    }, [pagination.current, pagination.pageSize, selectedSkills, minBudget, maxBudget, titleSearch]);

    const handlePageChange = (page, pageSize) => {
        setPagination(prev => ({
            ...prev,
            current: page,
            pageSize: pageSize
        }));
        window.scrollTo(0, 0);
    };

    const handleTitleSearch = (e) => {
        setTitleSearch(e.target.value);
        setPagination(prev => ({
            ...prev,
            current: 1
        }));
    };

    return (
        <div className="container">
            <Row gutter={24}>
                <Col span={6} className={"border-end mt-5"}>
                    <div>
                        <Typography.Title level={5}>Tìm kiếm theo tiêu đề</Typography.Title>
                        <Input
                            placeholder="Nhập tiêu đề bài đăng"
                            onChange={handleTitleSearch}
                            value={titleSearch}
                            allowClear
                        />

                        <div className="mt-3">
                            <Typography.Title level={5}>Tìm kiếm theo kỹ năng</Typography.Title>
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="Chọn kỹ năng"
                                onChange={setSelectedSkills}
                                options={skills.map(skill => ({
                                    value: skill.id,
                                    label: skill.name
                                }))}
                            />
                        </div>

                        <div className="mt-3">
                            <Typography.Title level={5}>Ngân sách (VND)</Typography.Title>
                            <div className="d-flex gap-2">
                                <InputNumber
                                    style={{ width: '100%' }}
                                    placeholder="Tối thiểu"
                                    min={0}
                                    onChange={setMinBudget}
                                />
                                <InputNumber
                                    style={{ width: '100%' }}
                                    placeholder="Tối đa"
                                    min={minBudget || 0}
                                    onChange={setMaxBudget}
                                />
                            </div>
                        </div>
                    </div>
                    <Divider />
                </Col>

                <Col span={18} className={"mt-5"}>
                    {jobPosts ? (
                        <>
                            <Row gutter={[16, 16]}>
                                {jobPosts.map((jobPost) => (
                                    <Col key={jobPost.id} span={12}>
                                        <JobCard jobPost={jobPost} />
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
                    ) : (
                        <Row gutter={[16, 16]}>
                            {[...Array(6)].map((_, index) => (
                                <Col key={index} span={12}>
                                    <Skeleton active />
                                </Col>
                            ))}
                        </Row>
                    )}
                </Col>
            </Row>
        </div>
    );
};

export default JobPost;
