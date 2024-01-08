import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <ul id="nav-container">
      <div className="nav-link-container">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </div>
      <div className="cart-icon-section">
        <li>
          <Link to="/cart">
            <i className="fa fa-cart">Cart</i>
          </Link>
        </li>
      </div>
    </ul>
  );
}
