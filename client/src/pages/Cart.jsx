import { useLoaderData } from "react-router-dom";
import { getCart } from "../api/cart";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

export default function Cart({ closeCart }) {
  const cart = useLoaderData();

  return createPortal(
    <div id="shopping-cart">
      <div className="cart-container">
        <div className="cart-header">
          <h1 className="section-title cart-title">
            {/* Cart <span className="cart-item__count">{cart.quantity} items</span> */}
          </h1>
          <div
            href="../"
            className="item-back-button cart-item__back-button"
            onClick={closeCart}>
            <IoClose className="cart_close-icon" />
          </div>
        </div>
        <div className="cart-item__container">
          {!cart ? (
            <p className="cart-item__empty">Your cart is currently empty</p>
          ) : (
            <>
              <div className="cart-item__totals">
                <div className="cart-item__labels">
                  <p>Subtotal</p>
                  <p className="cart-item__sale-price-label">Sale Savings</p>
                  <p>Shipping</p>
                  <p className="cart-item__total-price-label">Total</p>
                </div>
                {/* <div className="cart-item__prices">
                  <p>${price}</p>
                  <p className="cart-item__sale-price-number">-${salePrice}</p>
                  <p>FREE</p>
                  <p className="cart-item__total-price-number">
                    ${price - salePrice}
                  </p>
                </div> */}
              </div>
              <div>
                <button className="checkout-btn">SECURE CHECKOUT</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("alert-message")
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
