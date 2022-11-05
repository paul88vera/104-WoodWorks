import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <h1>
        <a href="/"><img src="#" alt="10-4 Woodworks" /></a> 
      </h1>
      <nav>
      <ul className="nav-link-container">
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="nav-link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      </nav>
    </header>
  );
}
