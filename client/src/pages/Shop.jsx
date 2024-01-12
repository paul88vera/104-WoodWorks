import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Shop() {
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal((current) => !current);
  };
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
              <button className="btn" onClick={showModal}>
                View
              </button>
              <button className="btn">Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function loader({ request: { signal } }) {
  return axios
    .get("http://localhost:3000/shop", { signal })
    .then((res) => res.data);
}

export const ShopRoute = {
  loader,
  element: <Shop />,
};
