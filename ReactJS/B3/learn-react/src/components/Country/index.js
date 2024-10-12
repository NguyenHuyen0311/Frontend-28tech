import { country } from "../../data/country";
// import "./Country.css";
import "./Country.scss";

function Country() {
    // console.log(country);
    
    return (
        <>
            {/* <ul>
                <li>
                    <span>Việt Nam</span>
                    <ul>
                        <li>Hà Nội</li>
                        <li>Đà Nẵng</li>
                    </ul>
                </li>
                <li>
                    <span>Thái Lan</span>
                </li>
            </ul> */}

            <ul className="country">
                {(country || []).map(itemCountry => (
                    <li className="country__item" key={itemCountry.id}>
                        <span className="country__text">{itemCountry.name}</span>
                        <ul className="country__sub">
                            {(itemCountry.city || []).map(itemCity => (
                                <li className="country__sub-item" key={itemCity.id}>{itemCity.name}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Country;