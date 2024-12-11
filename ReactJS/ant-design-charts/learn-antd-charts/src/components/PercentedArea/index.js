import { useEffect, useState } from "react";
import { Area } from "@ant-design/plots";

function PercentedArea() {
    const [dataChart, setDataChart] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/multi-line")
            .then(res => res.json())
            .then(data => {
                setDataChart(data);
            })
    }, []);

    const config = {
        data: dataChart,
        xField: "year",
        yField: "value",
        smooth: true,
        slider: {
            start: 0,
            end: 1
        },
        shapeField: 'smooth',
        colorField: 'category',
        isPercent: true
    };

    return (
        <>
            <h2>Ví dụ PercentedArea</h2>
            <Area {...config} />
        </>
    )
};

export default PercentedArea;