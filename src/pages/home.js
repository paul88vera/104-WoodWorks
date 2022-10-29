import Contact from "./contact";
import Item from "../components/Item";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <section className="homepage">
      <Hero />
      <br />
        <div id="home-featured-items">
          <h2>Featured Builds</h2>
          <br/>
            <Item />
            <Item />
            <Item />
          <a href="/shop" className="btn see-builds">SEE MORE BUILDS</a>
        </div>
      <Contact />
    </section>
  );
}
