import { Link, useLoaderData } from "react-router-dom";
import { getShop } from "../api/shop";
import Images from "../constants/index";
import HeroBanner from "../components/HeroBanner";

export default function Shop() {
  const shop = useLoaderData();

  return (
    <>
      <HeroBanner>
        <img src={Images.shop} alt="hero" width="100%" />
      </HeroBanner>

      <h1 className="section-title">Shop 10-4 Woodworks</h1>
      <div className="shop-grid">
        {shop.map((data) => (
          <Link to={`/shop/${data.id}`} className="shop-card" key={data.id}>
            <div className="card-img">
              <img src={Images.chair} alt="item" width="100%" />
              <div className="card-title">{data.title}</div>
            </div>
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
