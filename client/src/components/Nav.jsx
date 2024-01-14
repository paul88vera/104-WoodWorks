import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";

export default function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  const MobileNav = () => {
    if (window.innerWidth <= 568) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", MobileNav);
  });

  return (
    <>
      <div className="top-banner">Clearance {">"} Item Slider</div>
      <ul id="nav-container">
        {isMobile ? (
          <>
            <div
              className="burger"
              onClick={() => {
                setOpenMobile((current) => !current);
              }}>
              <GiHamburgerMenu />
              <div
                className={`mobileNav ${openMobile ? "appear" : "no-display"}`}>
                <Link to="/" className="mobile-links">
                  Kennels
                </Link>

                <Link to="/shop" className="mobile-links">
                  Tables
                </Link>

                <Link to="/about" className="mobile-links">
                  Furniture
                </Link>

                <Link to="/misc" className="mobile-links">
                  Miscelaneous
                </Link>
                <Link to="/about" className="mobile-links">
                  About
                </Link>
                <Link to="/contact" className="mobile-links">
                  Contact
                </Link>
              </div>
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
          </>
        ) : (
          <>
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
          </>
        )}
      </ul>
    </>
  );
}
