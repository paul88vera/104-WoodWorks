import { Link, redirect } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { LuUser2 } from "react-icons/lu";
import { FaLinesLeaning } from "react-icons/fa6";
import { IoAddOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { BsBoxSeam } from "react-icons/bs";
import { FaWind } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
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
              className="btn submit-btn"
            />
          </SignedIn>
          <SignedOut>
            <SignInButton className="btn submit-btn" />
          </SignedOut>
        </div>
      </div>
      <ul id="nav-container">
        {openMobile ? (
          <div>
            <IoMdClose
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
              onClick={() => setOpenMobile((current) => !current)}
            />
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
                  <Link to="/profile" className="icon-links">
                    <LuUser2 />
                  </Link>
                </li>
              </SignedIn>
              <li>
                <Link to="/search" className="icon-links">
                  <IoSearchOutline />
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
                <Link to="/about">About</Link>
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
                  <Link to="/profile" className="icon-links">
                    <LuUser2 />
                  </Link>
                </li>
              </SignedIn>
              <li>
                <Link to="/search" className="icon-links">
                  <IoSearchOutline />
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
