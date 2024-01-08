import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Nav from "../components/Nav";

export default function RootLayout() {
  const { state } = useNavigation();
  const isLoading = state === "loading";

  return (
    <>
      <Nav />
      <ScrollRestoration />
      {isLoading && <div className="loading-spinner" />}
      <div className={`container ${isLoading ? "loading" : ""}`}>
        <Outlet />
      </div>
    </>
  );
}
