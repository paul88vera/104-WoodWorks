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
        {shop
          .filter((item) => item.featured !== null)
          .splice(0, 3)
          .map((favs) => (
            <Link to={`/shop/${favs._id}`} className="shop-card" key={favs._id}>
              <div className="card-img">
                <img src={Images.chair} alt="item" width="100%" />
              </div>
              <div className="fav-card-title item-title">{favs.name}</div>
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

// eslint-disable-next-line react-refresh/only-export-components
export const homeData = {
  loader,
  element: <Home />,
};
