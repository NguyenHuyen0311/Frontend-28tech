import { useEffect, useState } from "react";
import { Rose } from '@ant-design/plots';

function GroupedRose() {
    const [dataChart, setDataChart] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/rose")
            .then(res => res.json())
            .then(data => {
                setDataChart(data);
            })
    }, []);

    const config = {
        data: dataChart,
        xField: "monHoc",
        yField: "diem",
        seriesField: "hoTen",
        isGroup: true
    };
    
    return (
        <>
            <h2>Ví dụ GroupedRose</h2>
            <Rose {...config} />
        </>
    )
};

export default GroupedRose;