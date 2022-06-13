import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Custom from "./pages/custom";
import Contact from "./pages/contact";
import Login from "./pages/login";
import ErrorPage from "./pages/errorPage";

function App() {
  return (
    <Router>
      <main className="main-page">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
