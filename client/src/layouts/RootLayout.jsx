import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Nav from "../components/Nav";
import { IoHammerOutline } from "react-icons/io5";
import { GiWoodBeam } from "react-icons/gi";

export default function RootLayout() {
  const { state } = useNavigation();
  const isLoading = state === "loading";

  return (
    <>
      <Nav />
      <ScrollRestoration />
      {isLoading && (
        <div className="loading-spinner">
          <IoHammerOutline />
          <GiWoodBeam />
        </div>
      )}
      <div className={`container ${isLoading ? "loading" : ""}`}>
        <Outlet />
      </div>
    </>
  );
}
