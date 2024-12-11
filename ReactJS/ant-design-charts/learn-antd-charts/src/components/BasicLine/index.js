import { useEffect, useState } from "react";
import { Line } from "@ant-design/plots";

function BasicLine() {
    const [dataChart, setDataChart] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/basic-line")
            .then(res => res.json())
            .then(data => {
                setDataChart(data);
            })
    }, []);

    // console.log(dataChart);

    const config = {
        data: dataChart,
        xField: "date",
        yField: "quantity",
        // autoFit: false,
        // width: 500,
        // height: 400,
        smooth: true,
        point: true,
        slider: {
            start: 0,
            end: 1
        }
    };
    
    return (
        <>
            <h2>Ví dụ BasicLine</h2>
            <Line {...config} />
        </>
    )
};

export default BasicLine;