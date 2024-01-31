import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { LuUser2 } from "react-icons/lu";
import { FaLinesLeaning } from "react-icons/fa6";
import { IoAddOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { BsBoxSeam } from "react-icons/bs";
import { FaWind } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

import { useEffect, useState } from "react";

export default function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [isSignedIn] = useState(false);

  const MobileNav = () => {
    if (window.innerWidth <= 568) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setOpenMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", MobileNav);
  });

  return (
    <>
      <div className="top-banner">
        <FaWind
          style={{
            rotate: "180deg",
            marginRight: "-.4rem",
            marginTop: ".4rem",
            fontSize: ".7rem",
          }}
        />
        <BsBoxSeam />
        <p>Free shipping on all orders!</p>
      </div>
      <ul id="nav-container">
        {openMobile ? (
          <div>
            <IoMdClose onClick={() => setOpenMobile((current) => !current)} />
          </div>
        ) : null}
        {isMobile ? (
          <>
            <div
              className="burger"
              onClick={() => {
                setOpenMobile((current) => !current);
              }}>
              {!openMobile ? <FaLinesLeaning /> : null}
              <div
                className={`mobileNav ${openMobile ? "appear" : "no-display"}`}>
                <Link to="/" className="mobile-links">
                  Home
                </Link>

                <Link to="/shop" className="mobile-links">
                  Shop
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
              {isSignedIn && (
                <li>
                  <Link to="/login" className="icon-links">
                    <IoAddOutline />
                  </Link>
                </li>
              )}
              <li>
                <Link to="/login" className="icon-links">
                  <IoSearchOutline />
                </Link>
              </li>
              <li>
                <Link
                  to={isSignedIn ? "/profile" : "/login"}
                  className="icon-links">
                  <LuUser2 />
                </Link>
              </li>
              <li>
                <Link to="/cart" className="icon-links">
                  <BiCart />
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
              {isSignedIn && (
                <li>
                  <Link to="/login" className="icon-links">
                    <IoAddOutline />
                  </Link>
                </li>
              )}
              <li>
                <Link to="/login" className="icon-links">
                  <IoSearchOutline />
                </Link>
              </li>
              <li>
                <Link
                  to={isSignedIn ? "/profile" : "/login"}
                  className="icon-links">
                  <LuUser2 />
                </Link>
              </li>
              <li>
                <Link to="/cart" className="icon-links">
                  <BiCart />
                </Link>
              </li>
            </div>
          </>
        )}
      </ul>
    </>
  );
}
