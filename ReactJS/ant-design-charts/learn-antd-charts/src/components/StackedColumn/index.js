import { useEffect, useState } from "react";
import { Column } from "@ant-design/plots";

function StackedColumn() {
    const [dataChart, setDataChart] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/multi-line")
            .then(res => res.json())
            .then(data => {
                setDataChart(data);
            })
    }, []);

    // console.log(dataChart);

    const config = {
        data: dataChart,
        xField: "year",
        yField: "value",
        smooth: true,
        slider: {
            start: 0,
            end: 1
        },
        colorField: 'category',
        seriesField: 'category',
        isStack: true,
        connectedArea: true,
        isGroup: true
    };

    return (
        <>
            <h2>Ví dụ StackedColumn</h2>
            <Column {...config} />
        </>
    )
};

export default StackedColumn;