import { useEffect, useState } from "react";
import { Line } from "@ant-design/plots";

function MultiLine() {
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
        sizeField: 'value',
        shapeField: 'trail',
        legend: { size: false },
        colorField: 'category',
    };

    return (
        <>
            <h2>Ví dụ MultiLine</h2>
            <Line {...config} />
        </>
    )
};

export default MultiLine;