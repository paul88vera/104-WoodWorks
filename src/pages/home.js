import Contact from "./contact";
import Item from "../components/Item";

export default function Home() {
  return (
    <section className="homepage">
      This is the Home page
      <div>
        <h2>Call 10-4 WoodWork</h2>
        <button>CALL US NOW</button>
        <p>
          In this confusing world of Contractors and Home Remodelers, You need a
          reliable General Contractor that you can trust and believe in. The
          Texans won't waste hours of your time, we will work with you to
          develop a plan and design that will work within your budget. If we
          can't, we will at least point you in the right direction. And, at the
          end of your project, you will still be able to send your kids to
          college!
        </p>
      </div>
      <div>
        <h2>FEATURED BUILDS</h2>
        <Item />
        <Item />
        <Item />
        <button>SEE MORE BUILDS</button>
      </div>
      <Contact />
    </section>
  );
}
