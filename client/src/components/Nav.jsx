import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";

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
          <Link to="/profile">
            <FaUserCircle />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <TiShoppingCart />
          </Link>
        </li>
      </div>
    </ul>
  );
}
