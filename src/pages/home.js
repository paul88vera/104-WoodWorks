import Contact from "./contact";
import Item from "../components/Item";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <section className="homepage">
<<<<<<< HEAD
      <div className="para-img-center">
        <div className="para-left">
          <img src="/pexels-engin-akyurt-4627515.jpg" alt="" width="500"/>
        </div>
        <div className="img-right">
          <h2>10-4 WoodWork</h2>
          <br/>
          <p>
            In this confusing world of Contractors and Home Remodelers, You need
            a reliable General Contractor that you can trust and believe in. The
            Texans won't waste hours of your time, we will work with you to
            develop a plan and design that will work within your budget. If we
            can't, we will at least point you in the right direction. And, at
            the end of your project, you will still be able to send your kids to
            college!
          </p>
          <br/>
          <br/>
          <button className="btn">FREE QUOTE</button>
        </div>
      </div>
=======
      <Hero />
      <br/>
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
