import { useEffect, useState } from "react";
import { Area } from "@ant-design/plots";

function StackedArea() {
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
    };

    return (
        <>
            <h2>Ví dụ StackedArea</h2>
            <Area {...config} />
        </>
    )
};

export default StackedArea;