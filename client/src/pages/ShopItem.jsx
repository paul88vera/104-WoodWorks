import { Link, useLoaderData } from "react-router-dom";
import { getShopItem } from "../api/shop";
import { SignedIn } from "@clerk/clerk-react";
import { useState } from "react";
import FormGroup from "../components/FormGroup";
// import { createCart } from "../api/cart";

//TODO! -- Fix this to post shopItem Info to a cart {}

export default function ShopItem() {
  const item = useLoaderData();
  const [itemQuantity, setItemQuantity] = useState();

  return (
    <>
      <div className="item-container">
        <a href="./" className="item-back-button">
          {"<"} BACK
        </a>
        <img
          src="../src/constants/wooden_chair.jpg"
          className="item-image"
          title={item.name}
        />

        <div className="shopitem-container">
          <SignedIn>
            <Link
              className="btn submit-btn edit-btn"
              to={`/shop/${item._id}/edit`}>
              Edit
            </Link>
          </SignedIn>
          <div className="descriptions">
            <h2 className="item-title">{item.name}</h2>
            <div className="price-container">
              <div className="card-sale-price">${item.sale}</div>
              <div className="card-actual-price">was ${item.price}</div>
            </div>
            {/* <div className="colors">
            <div className="color-container">
              
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
              
            </div>
          </div> */}
          </div>
          <div className="quantity-container">
            <FormGroup>
              <label htmlFor="quantity">
                <b>qty.</b>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  min={1}
                  max={3}
                  defaultValue={itemQuantity || 1}
                  onChange={(e) => setItemQuantity(e.target.value)}
                />
              </label>
            </FormGroup>
          </div>
          {/* <div>
            <b> Items in stock: {item.quantity}</b>
          </div> */}
          <div className="specifications-container">
            <h3>Description</h3>
            <div className="description">
              <p>{item.description}</p>
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
                //TODO! need to make a reference to add to localStorage on first render
                // Adds cart-item ID, Total Quantity for that item, and User Quantity added to cart
                if (
                  item.quantity !== 0 ||
                  NaN ||
                  itemQuantity !== 0 ||
                  undefined
                ) {
                  localStorage.setItem(`t4_cartItem_${item._id}_id`, item._id);
                  localStorage.setItem(
                    `t4_cartItem_${item._id}_total_quantity`,
                    item.quantity - itemQuantity
                  );
                  localStorage.setItem(
                    `t4_cartItem_${item._id}_customer_quantity`,
                    itemQuantity
                  );
                } else {
                  return console.log("no items added to cart");
                }
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

// async function action({ request, params: id }) {
//   const formData = await request.formData();
//   const title = formData.get("title");
//   const desc = formData.get("description");
//   const actual = formData.get("actualPrice");
//   const sale = formData.get("salePrice");
//   const length = formData.get("length");
//   const width = formData.get("width");
//   const height = formData.get("height");
//   const ftitle = formData.get("feature-title");
//   const featured = formData.get("featured");
//   const fdesc = formData.get("feature-title");
//   const fimg = formData.get("feature-img");
// }

// const cartItem = await createCart(id, {
//   title,
//   shopId,
//   quantity,
// });

// eslint-disable-next-line react-refresh/only-export-components
export const shopItem = {
  loader,
  element: <ShopItem />,
};
