import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <h1>
        <img src="#" alt="10-4 Woodworks Logo" />
      </h1>
      <ul>
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="nav-link">
          <Link to="/custom">Custom</Link>
        </li>
        <li className="nav-link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
