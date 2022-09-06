import Contact from "./contact";
import Item from "../components/Item";

export default function Home() {
  return (
    <section className="homepage">
      <div className="para-img-center">
        <div className="para-left">
          <img src="https://www.unsplash.it/600/400" alt="" />
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
