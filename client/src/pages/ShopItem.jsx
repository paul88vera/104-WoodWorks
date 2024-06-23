import { Link, useLoaderData } from "react-router-dom";
import { getShopItem } from "../api/shop";
import { SignedIn } from "@clerk/clerk-react";

export default function ShopItem() {
  const item = useLoaderData();

  return (
    <>
      <div className="item-container">
        <a href="./" className="item-back-button">
          {"<"} BACK
        </a>
        <img
          src="../src/constants/wooden_chair.jpg"
          className="item-image"
          title={item.title}
        />

        <div className="shopitem-container">
          <SignedIn>
            <Link
              className="btn submit-btn edit-btn"
              to={`/shop/${item.id}/edit`}>
              Edit
            </Link>
          </SignedIn>
          <div className="descriptions">
            <h2 className="item-title">{item.title}</h2>
            <div className="price-container">
              <div className="card-sale-price">${item.sale}</div>
              <div className="card-actual-price">was ${item.actual}</div>
            </div>
            <div className="colors">
              <div className="color-container">
                {/* new code */}
                <div
                  className={`color-option`}
                  style={{ backgroundColor: "#ffffff" }}
                  title="white"></div>
                <div
                  className={`color-option`}
                  style={{ backgroundColor: "#000000" }}
                  title="coffee"></div>
                <div
                  className={`color-option`}
                  style={{ backgroundColor: "333333" }}
                  title="gray"></div>
                {/* end new code */}
              </div>
            </div>
          </div>
          <div className="quantity-container">
            <label htmlFor="quantity">
              qty.
              <input
                type="number"
                name="quantity"
                id="quantity"
                defaultValue={1}
                min={1}
                max={3}
                //TODO! need to make a reference to add to localStorage
                ref={item.quantity}
              />
            </label>
          </div>
          <div className="specifications-container">
            <h3>Description</h3>
            <div className="description">
              <p>{item.desc}</p>
            </div>
            <h3>Dimensions</h3>
            <div className="dimensions">
              <div>
                <h5>Length:</h5>
                {item.length} inches
              </div>
              <div>
                <h5>Width:</h5>
                {item.width} inches
              </div>
              <div>
                <h5>Height:</h5>
                {item.height} inches
              </div>
            </div>
            <button
              className="btn submit-btn"
              onClick={() => {
                localStorage.setItem(`t4_cartItem_${item.id}`, item.id);
                //TODO! need to make a reference to add to localStorage
                localStorage.setItem(
                  `t4_cartItem_${item.id}_quantity`,
                  item.quantity
                );
              }}>
              Add to Cart
            </button>
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
