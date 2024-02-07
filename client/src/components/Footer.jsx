import { Link } from "react-router-dom";
import {
  TiSocialInstagram,
  TiSocialFacebook,
  TiSocialTwitter,
} from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="top-footer-section">
        <div className="subscribe">
          <input
            type="email"
            name="subscribe"
            id="subcribe"
            placeholder="Sign up for enthralling woodworking needs"
          />
          <button className="subscribe-btn">SUBSCRIBE</button>
        </div>
        <div className="social-link-container">
          <Link to="/" className="social-links">
            <TiSocialFacebook className="social-icon" />
          </Link>
          <Link to="/" className="social-links">
            <TiSocialTwitter className="social-icon" />
          </Link>
          <Link to="/" className="social-links">
            <TiSocialInstagram className="social-icon" />
          </Link>
        </div>
      </div>

      <div className="footer-middle-section">
        <div className="middle">
          <h4>Shopping Services</h4>
          <ul>
            <li>
              <Link to="/contact">Schedule Consultation</Link>
            </li>
            <li>
              <Link to="/shop">Showrooms</Link>
            </li>
            <li>
              <p>Trade Program</p>
            </li>
            <li>
              <p>Outlet</p>
            </li>
          </ul>
        </div>
        <div className="middle">
          <h4>About</h4>
          <ul>
            <li>
              <Link to="/about">Our Story</Link>
            </li>
            <li>
              <p>Reviews</p>
            </li>
            <li>
              <p>Careers</p>
            </li>
            <li>
              <p>Financing</p>
            </li>
            <li>
              <p>Patents</p>
            </li>
            <li>
              <p>Our Blog</p>
            </li>
          </ul>
        </div>
        <div className="middle">
          <h4>Resources</h4>
          <ul>
            <li>
              <Link to="/">Look Up Order Status</Link>
            </li>
            <li>
              <Link to="/">Assembly Instructions</Link>
            </li>
            <li>
              <Link to="/">Returns</Link>
            </li>
            <li>
              <Link to="/">Shipping & Delivery</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Refer a Friend</Link>
            </li>
          </ul>
        </div>
        <div className="middle">
          <h4>Contact Customer Experience</h4>
          <ul>
            <li>
              <p>
                Email:{" "}
                <a href="mailto:104woodworks@gmail.com">
                  104woodworks@gmail.com
                </a>
              </p>
            </li>
            <li>
              <p>Hours:</p>
            </li>
            <li>
              <p>Monday to Friday — 9a to 6p</p>
            </li>
            <li>
              <p>CST</p>
            </li>
            <li>
              <p>Saturday to Sunday — 10a to 2p</p>
            </li>
            <li>
              <p>CST</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-section">
        <div className="copyright-container">
          <p>© 2024 10-4 Woodworks -</p>
          <p>
            Terms - Accessibility - Sitemap - Do not sell my personal
            information -
          </p>
          <p>
            This site may collect, use and disclose personal information. Please
            refer to our Privacy Policy for more information.
          </p>
        </div>
        <div className="copyright-aside">
          <p>
            Developed by{" "}
            <Link to="https://paulvera.com" target="_blank">
              Paul Vera
            </Link>
          </p>
          <p>San Antonio, TX 78221</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
