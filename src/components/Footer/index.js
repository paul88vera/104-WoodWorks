import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <ul>
        <h4>Navigation</h4>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </footer>
  );
}
