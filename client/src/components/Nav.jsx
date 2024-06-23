import { Link, redirect } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { LuUser2 } from "react-icons/lu";
import { FaLinesLeaning } from "react-icons/fa6";
import { IoAddOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { BsBoxSeam } from "react-icons/bs";
import { FaWind } from "react-icons/fa6";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import Cart from "../pages/Cart";

export default function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [isOpen, isOpenSet] = useState(false);

  // mobile function to check if screen size is less than 568px
  const MobileNav = () => {
    if (window.innerWidth <= 568) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setOpenMobile(false);
    }
  };

  // checks the size of the screen to active the mobile navigation
  useEffect(() => {
    window.addEventListener("resize", MobileNav);
  });

  // function to open the cart modal
  const openCartModal = () => {
    if (!isOpen) {
      isOpenSet(true);
    }
  };
  // function to close the cart modal
  const closeCartModal = () => {
    if (isOpen) {
      isOpenSet(false);
    }
  };

  return (
    <>
      <div className="top-banner">
        <div className="banner-container">
          <FaWind
            style={{
              rotate: "180deg",
              marginRight: "-.4rem",
              marginTop: ".2rem",
              fontSize: ".7rem",
            }}
          />
          <BsBoxSeam />
          <p>Free shipping on all orders!</p>
        </div>
        <div className="auth-btn-container">
          <SignedIn>
            <SignOutButton
              signOutCallback={() => redirect("/home")}
              className="clk-btn"
            />
          </SignedIn>
          <SignedOut>
            <SignInButton className="clk-btn" />
          </SignedOut>
        </div>
      </div>
      <ul id="nav-container">
        {isMobile ? (
          <>
            <div
              className={`burger`}
              onClick={() => {
                setOpenMobile((current) => !current);
              }}>
              {!openMobile ? (
                <FaLinesLeaning />
              ) : (
                <IoMdClose style={{ fontSize: "1.5rem", cursor: "pointer" }} />
              )}
              <div
                className={`mobileNav ${openMobile ? "appear" : "no-display"}`}>
                <Link to="/" className="mobile-links">
                  Home
                </Link>

                <Link to="/shop" className="mobile-links">
                  Shop
                </Link>

                <Link to="/contact" className="mobile-links">
                  Contact
                </Link>
              </div>
            </div>
            <div className="logo">
              <Link to="/">10-4 WoodWorks</Link>
            </div>
            <div className="cart-icon-section">
              <SignedIn>
                <li>
                  <Link to="/add" className="icon-links">
                    <IoAddOutline />
                  </Link>
                </li>

                <li>
                  <Link
                    to={`https://informed-stag-2.accounts.dev/user`}
                    className="icon-links">
                    <LuUser2 />
                  </Link>
                </li>
              </SignedIn>
              <li>
                <BiCart
                  className="icon-links cart-link"
                  onClick={openCartModal}
                />
                {isOpen ? <Cart closeCart={closeCartModal} /> : null}
              </li>
            </div>
          </>
        ) : (
          <>
            <div className="logo">
              <Link to="/">10-4 WoodWorks</Link>
            </div>
            <div className="nav-link-container">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </div>
            <div className="cart-icon-section">
              <SignedIn>
                <li>
                  <Link to="/add" className="icon-links">
                    <IoAddOutline />
                  </Link>
                </li>

                <li>
                  <Link
                    to={`https://informed-stag-2.accounts.dev/user`}
                    className="icon-links">
                    <LuUser2 />
                  </Link>
                </li>
              </SignedIn>
              <li>
                <BiCart
                  className="icon-links cart-link"
                  onClick={openCartModal}
                />
                {isOpen ? <Cart closeCart={closeCartModal} /> : null}
              </li>
            </div>
          </>
        )}
      </ul>
    </>
  );
}
