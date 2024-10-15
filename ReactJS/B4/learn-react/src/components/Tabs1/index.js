import { useEffect, useState } from "react";
import "./Tabs1.scss";

function Tabs1() {
    const [data, setData] = useState([]);
    const [tabActive, setTabActive] = useState("products");

    useEffect(() => {
        fetch(`https://dummyjson.com/${tabActive}`)
            .then(response => response.json())
            .then(data => {
                // console.log(data.products);
                setData(data[tabActive]);
            })
    }, [tabActive]);

    const handleChangeTab = (e) => {
        setTabActive(e);
    }

    // console.log(data);

    return (
        <>
            <div className="tabs">
                <div className="tabs__item" onClick={() => handleChangeTab("products")}>
                    Products
                </div>
                <div className="tabs__item" onClick={() => handleChangeTab("users")}>
                    Users
                </div>
                <div className="tabs__item" onClick={() => handleChangeTab("posts")}>
                    Posts
                </div>
            </div>

            <div className="tabs__content">
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            {item.title || `${item.firstName} ${item.lastName}`}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Tabs1;