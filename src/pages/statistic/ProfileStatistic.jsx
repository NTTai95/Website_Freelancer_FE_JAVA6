//tạo 1 trang thống kê thông tin cá nhân của freelancer
//tương tự như 1 card gồm có 3 phần mỗi phần là 1 trang
import React, { useState, useEffect, Children } from 'react';
import { CheckCircleOutlined, ClockCircleOutlined, DollarOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import scss from './ProfileStatistic.module.scss';
import StatisticJobs from './StatisticJobs';


function ProfileStatistic() {
    const items = [
        {
            key: '1',
            label: 'Công việc đã hoàn thành',
            children: <StatisticJobs />,
        },
        {
            key: '2',
            label: 'Đánh giá',
        },

    ];
    return (
        <div>
            <Tabs className={scss.barlow} defaultActiveKey="1" items={items} />
        </div>
    );
}

export default ProfileStatistic;