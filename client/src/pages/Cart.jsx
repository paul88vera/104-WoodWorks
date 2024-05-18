import { useLoaderData } from "react-router-dom";
import { getCart } from "../api/cart";

export default function Cart() {
  const cart = useLoaderData();
  return (
    <div className="cart-container">
      <a href="../" className="item-back-button">
        {"<"} BACK
      </a>
      <h1 className="section-title">Cart</h1>
      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your cart is currently empty</p>
      ) : (
        cart.map((items) => (
          // need to fix this cart map to a prop that looks correct CART ITEM
          <div key={items.id} className="cart-item-container">
            {items.id}
            {items.name}
          </div>
        ))
      )}
    </div>
  );
}

function loader({ request: { signal } }) {
  return getCart({ signal });
}

// eslint-disable-next-line react-refresh/only-export-components
export const cartData = {
  loader,
  element: <Cart />,
};
