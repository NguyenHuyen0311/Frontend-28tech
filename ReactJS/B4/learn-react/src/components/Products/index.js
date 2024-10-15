import { useEffect, useState } from "react";
import "./Products.scss";

function Products() {
  const limit = 10;
  const [data, setData] = useState([]);
  const [quantityPage, setQuantityPage] = useState(0);
  const [pageActive, setPageActive] = useState(0);

  useEffect(() => {
    fetch(
        `https://dummyjson.com/products?skip=${pageActive * limit}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
        setQuantityPage(Math.ceil(data.total / limit))
      });
  }, [pageActive]);

  const handleClickPagi = (e) => {
    setPageActive(e);
  }

  return (
    <>
      <div className="product__list">
        {data.map((item) => (
          <div className="product__item" key={item.id}>
            <img
              className="product__image"
              src={item.thumbnail}
              alt={item.title}
            />
            <h3 className="product__title">
                {item.title}
            </h3>
            <div className="product__price">
                {item.price}$
            </div>
          </div>
        ))}
      </div>

      <ul className="pagination">
        {[...Array(quantityPage)].map((_, index) => (
            <li className="pagination__item" key={index} onClick={() => handleClickPagi(index)}>
                {index + 1}
            </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
