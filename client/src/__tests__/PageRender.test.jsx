import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import { getShop, loader } from "../api/shop";

describe("# what is rendered to dom", () => {
  it("About should render to dom", () => {
    render(<About />);
    screen.debug();
  });
  it("Cart should render to dom", () => {
    render(<Cart />);
    screen.debug();
  });
  it("Contact should render to dom", () => {
    render(<Contact />);
    screen.debug();
  });
  it("Home should render to dom", () => {
    render(<Home />);
    screen.debug();
  });
  it("Profile should render to dom", () => {
    render(<Profile />);
    screen.debug();
  });
});

describe("#getShop & loader", () => {
  it("should be a function", () => {
    expect(getShop, loader).toBeTypeOf("function");
  });
});
