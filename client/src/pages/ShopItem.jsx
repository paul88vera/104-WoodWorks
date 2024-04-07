import { Link, useLoaderData } from "react-router-dom";
import { getShopItem } from "../api/shop";
import { SignedIn } from "@clerk/clerk-react";

export default function ShopItem() {
  const item = useLoaderData();

  return (
    <>
      <div className="item-container">
        <div className="image-container"></div>
        <img src="../src/constants/wooden_chair.jpg" className="item-image" />

        <div className="shopitem-container">
          <div className="descriptions">
            <h2 className="item-title">{item.title}</h2>
            <p>
              {item.sale} | {item.actual}
            </p>
            <br />
            <div className="colors">
              <h5>Colors</h5>
              <div className="color-container">
                {/* new code */}
                <div
                  className={`color-option`}
                  style={{ backgroundColor: item.colors[0].color }}></div>
                <div
                  className={`color-option`}
                  style={{ backgroundColor: item.colors[1].color }}></div>
                <div
                  className={`color-option`}
                  style={{ backgroundColor: item.colors[2].color }}></div>
                {/* end new code */}
              </div>
            </div>
          </div>
          <br />
          <div className="specifications-container">
            <h5>Description:</h5>
            <p>{item.desc}</p>
            <div className="dimensions">
              <h2>Dimensions</h2>
              <h5>Length:</h5>
              {item.length} inches
              <h5>Width:</h5>
              {item.width} inches
              <h5>Height:</h5>
              {item.height} inches
            </div>
            <br />
            <SignedIn>
              <Link className="btn submit-btn" to={`/shop/${item.id}/edit`}>
                Edit
              </Link>
            </SignedIn>
          </div>
        </div>
      </div>
    </>
  );
}

async function loader({ request: { signal }, params: { id } }) {
  return await getShopItem(id, { signal });
}

// eslint-disable-next-line react-refresh/only-export-components
export const shopItem = {
  loader,
  element: <ShopItem />,
};
