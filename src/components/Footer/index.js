import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <ul>
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
      <br/>
      <br/>
      <ul>
      <li>
        <a href="#"><img src="#" alt="" width="20"/>LinkedIn</a>
        </li>
      <li>
        <a href="#"><img src="#" alt="" width="20"/>Facebook</a>
        </li>
      <li>
        <a href="#"><img src="#" alt="" width="20"/>Instagram</a>
        </li>
      </ul>
    </footer>
  );
}
