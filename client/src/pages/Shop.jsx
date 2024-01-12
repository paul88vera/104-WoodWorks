import { Link, useLoaderData } from "react-router-dom";
// import axios from "axios";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { getShop } from "../api/shop";

export default function Shop() {
  const [modal, setModal] = useState(false);
  
  // const [cart, setCart] = useState([]);
  // const showModal = () => {
  //   setModal((current) => !current);
  // };
  const closeModal = () => {
    setModal((current) => !current);
  };

  const shop = useLoaderData();
  return (
    <>
      <Sidebar {...shop} />
      {modal && (
        <div className="shop-modal" onClick={closeModal}>
          hi there
        </div>
      )}
      <div className="shop-grid">
        {shop.map((data) => (
          <div className="shop-card" key={data.id}>
            <div className="card-img">
              <img src="../../../public/vite.svg" alt="item" width="275" />
            </div>
            <div className="card-title">{data.title}</div>
            <div className="card-price">{data.price}</div>
            <div className="shop-btn-container">
              <Link className="btn" to={`/shop/${data.id}`}>
                View
              </Link>
              <button className="btn">Add To Cart</button>
            </div>
          </div>
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
