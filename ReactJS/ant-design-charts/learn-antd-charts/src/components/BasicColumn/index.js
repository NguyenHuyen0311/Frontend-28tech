import { useEffect, useState } from "react";
import { Column } from "@ant-design/plots";

function BasicColumn() {
    const [dataChart, setDataChart] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/basic-line")
            .then(res => res.json())
            .then(data => {
                setDataChart(data);
            })
    }, []);
    
    const config = {
        data: dataChart,
        xField: "date",
        yField: "quantity",
        smooth: true,
        point: true,
        slider: {
            start: 0,
            end: 1
        },
        label: {
            style: {
                fill: '#000',
                opacity: 0.8, 
            },
        },
    };
    
    return (
        <>
            <h2>Ví dụ BasicColumn</h2>
            <Column {...config} />
        </>
    )
};

export default BasicColumn;