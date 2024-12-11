import { useEffect, useState } from "react";
import { Line } from "@ant-design/plots";

function StepLine() {
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
        point: true,
        slider: {
            start: 0,
            end: 1
        },
        stepType: "hv"
    };

    return (
        <>
            <h2>Ví dụ StepLine</h2>
            <Line {...config} />
        </>
    )
};

export default StepLine;