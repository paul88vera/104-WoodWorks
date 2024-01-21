import { Link, useLoaderData } from "react-router-dom";
// might add later
// import { useState } from "react";
import { getShop } from "../api/shop";

export default function Shop() {
  // might add later
  // const [modal, setModal] = useState(false);
  const shop = useLoaderData();

  // might add later
  // const showModal = () => {
  //   setModal((current) => !current);
  // };

  // might add later
  // const closeModal = () => {
  //   setModal((current) => !current);
  // };

  return (
    <>
      {/* // might add later
      {modal && (
        <div className="shop-modal" onClick={closeModal}>
          hi there
        </div>
      )} */}
      <h1 className="page-title">Shop 10-4ww</h1>
      <div className="shop-grid">
        {shop.map((data) => (
          <Link to={`/shop/${data.id}`} className="shop-card" key={data.id}>
            <div className="card-img">
              <img src="/pexels-pixabay-276651.jpg" alt="item" width="100%" />
            </div>
            <div className="card-title">{data.title}</div>
            <div className="price-container">
              <div className="card-sale-price">${data.sale}</div>
              <div className="card-actual-price">was ${data.actual}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export function loader({ request: { signal } }) {
  return getShop({ signal });
}

export const ShopRoute = {
  loader,
  element: <Shop />,
};
