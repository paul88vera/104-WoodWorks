import { useLoaderData } from "react-router-dom";
import { getCart } from "../api/cart";

export default function Cart() {
  const cart = useLoaderData();
  return (
    <div className="cart-container">
      <h1 className="section-title">Cart</h1>
      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your cart is currently empty</p>
      ) : (
        // need to fix this cart map
        cart.map((items) => (
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

export const cartData = {
  loader,
  element: <Cart />,
};
