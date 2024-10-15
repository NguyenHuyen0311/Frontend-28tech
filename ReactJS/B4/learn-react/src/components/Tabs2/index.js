import {useEffect, useState} from "react";
import "./Tabs2.scss";

function Tabs2() {
    const [data, setData] = useState([]);
    const [tabActive, setTabActive] = useState("comments");

    useEffect(() => {
        fetch(
            `https://dummyjson.com/${tabActive}`
        )
            .then(res => res.json())
            .then(data => {
                setData(data[tabActive]);
            })
    }, [tabActive])

    const handleChangeTab = (e) => {
        setTabActive(e);
    }

    return (
        <>
            <div className="tabs">
                <div className="tabs__item" onClick={() => handleChangeTab("comments")}>
                    Comments 
                </div>
                <div className="tabs__item" onClick={() => handleChangeTab("todos")}>
                    Todos 
                </div>
                <div className="tabs__item" onClick={() => handleChangeTab("quotes")}>
                    Quotes
                </div>
            </div>

            <div className="tabs__content">
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>
                            {item.body || item.todo || item.quote}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Tabs2;