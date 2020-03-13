import { Table } from 'antd';
import React from 'react'
import { Link } from "react-router-dom"

function report() {
    const dataSource = [JSON.parse(localStorage.getItem("activity"))];
    
    const columns = [
        {
            title: 'StartTime',
            dataIndex: 'startTime',
            key: 'startTime',
        },
        {
            title: 'EndTime',
            dataIndex: 'endTime',
            key: 'endTime',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration',
        },
        {
            title: 'Activity',
            dataIndex: 'activity',
            key: 'activity',
        },

    ];

    return (
        <div>
            <div>Report For User : {localStorage.getItem("username")}</div>
            <Table dataSource={dataSource} columns={columns} />
            <Link to="/activity">Add Activity </Link>
        </div>

    )

}
export default report;