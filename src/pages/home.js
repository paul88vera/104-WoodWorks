import Contact from "./contact";
import Item from "../components/Item";
import Hero from "../components/Hero";
import { useState } from "react";

export default function Home() {
  const [item] = useState([ 
    {
      id: 2,
      image: '../../assets/images/kennel2.jpeg',
      name: 'item2',
      catergory: 'kennel',
      price: '250',
      description: 'this is a table',
    },
    
    {
      id: 4,
      image: '../../assets/images/kennel4.jpeg',
      name: 'item4',
      catergory: 'kennel',
      price: '120',
      description: 'this is a dog kennel',
    },
    {
      id: 5,
      image: '../../assets/images/kennel5.jpeg',
      name: 'item5',
      catergory: 'kennel',
      price: '500',
      description: 'this is a bed frame',
    },
  ])
 
  return (
    <section className="homepage">
      <Hero />
      <br/>
        <div id="home-featured-items">
          <h2>Featured Builds</h2>
          <br/>
            <Item item={item} id={item.id} />
          <a href="/shop" className="btn see-builds">SEE MORE BUILDS</a>
        </div>
      <Contact />
    </section>
  );
}
