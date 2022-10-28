import Contact from "./contact";
import Item from "../components/Item";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <section className="homepage">
      <Hero />
      <br />
      <div>
        <h2>FEATURED BUILDS</h2>
        <div id="home-featured-items">
          <div className="card">
            <Item />
          </div>
          <div className="card">
            <Item />
          </div>
          <div className="card">
            <Item />
          </div>
        </div>
        <br />
        <div id="see-builds">
          <a href="/shop">SEE MORE BUILDS</a>
        </div>
        <br />
      </div>
      <Contact />
    </section>
  );
}
