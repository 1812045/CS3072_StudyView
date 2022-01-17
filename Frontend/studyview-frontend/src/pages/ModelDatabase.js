import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";

const ModelDatabase = () => {
    return (
        <div class ="wrapper">
            <div>&nbsp;</div>
                <div class ="mainWrapper">
                <strong class ="tableHeader">Model Database</strong>
                <TableData />
                </div>
            <div>&nbsp;</div>
        </div>
    )
}
export default ModelDatabase

const TableData = () => {
    const [tableData, setTableData] = useState([]);

    const fetchTableData = () => {
        axios.get("http://localhost:8080/models").then(res => {
            console.log(res);
            setTableData(res.data)
        });
    };

    useEffect(() => {
        fetchTableData();
    }, []);

    return tableData.map((tableData, index) => {
        return (
            <div key={index}>
                <table class ="tableWrapper">
                    <tr class = "tableTitle">
                        <th>Model ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>File Path</th>
                        <th>File</th>
                    </tr>
                    <tr class ="tableData">
                        <td>{tableData.modelID}</td>
                        <td>{tableData.name}</td>
                        <td>{tableData.description}</td>
                        <td>{tableData.filepath}</td>
                        <td>{tableData.file}</td>
                    </tr>
                </table>
            </div>
        )
    })
};