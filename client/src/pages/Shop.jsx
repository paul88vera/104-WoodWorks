import { Link, useLoaderData } from "react-router-dom";
import { getShop } from "../api/shop";

export default function Shop() {
  const shop = useLoaderData();

  return (
    <>
      <h1 className="page-title">Shop 10-4ww</h1>
      <div className="shop-grid">
        {shop.map((data) => (
          <Link to={`/shop/${data.id}`} className="shop-card" key={data.id}>
            <div className="card-img">
              <img src="/wooden-chair.jpg" alt="item" width="100%" />
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

function loader({ request: { signal } }) {
  return getShop({ signal });
}

export const ShopRoute = {
  loader,
  element: <Shop />,
};
