import { useLoaderData } from "react-router-dom";
import axios from "axios";

export default function Shop() {
  const shop = useLoaderData();
  return (
    <>
      <div className="shop-grid">
        {shop.map((data) => (
          <div className="shop-card" key={data.id}>
            <div className="card-img">{data.img}</div>
            <div className="card-title">{data.title}</div>
            <div className="card-price">{data.price}</div>
            <div className="btn-container">
              <button className="btn">View</button>
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
