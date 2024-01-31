import HeroBanner from "../components/HeroBanner";
import Images from "../constants/index";
import { Link, useLoaderData } from "react-router-dom";
import { getShop } from "../api/shop";
import ContrastSection from "../components/ContrastSection";

export default function Home() {
  const shop = useLoaderData();

  return (
    <>
      <HeroBanner>
        <img src={Images.hero} alt="hero" width="100%" />
      </HeroBanner>

      <div className="section-title">Design deals, delivered free</div>
      {/* TURN INTO A PROP vvvv */}
      <div className="shop-grid fav-grid">
        {shop.map((favs) => (
          <Link to={`/shop/${favs.id}`} className="shop-card" key={favs.id}>
            <div className="card-img">
              <img src={Images.chair} alt="item" width="100%" />
            </div>
            <div className="fav-card-title">{favs.title}</div>
          </Link>
        ))}
      </div>
      {/* TURN INTO A PROP ^^^^ */}
      <ContrastSection />
    </>
  );
}

function loader({ request: { signal } }) {
  return getShop({ signal });
}

export const homeData = {
  loader,
  element: <Home />,
};
