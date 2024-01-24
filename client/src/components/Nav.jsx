import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { FaLinesLeaning } from "react-icons/fa6";
import { MdOutlineAddBox } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BsBoxSeam } from "react-icons/bs";
import { FaWind } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

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
              <li>
                <Link to="/login">
                  <MdOutlineAddBox />
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <CgProfile />
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
                <Link to="/add">
                  <MdOutlineAddBox />
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <CgProfile />
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
