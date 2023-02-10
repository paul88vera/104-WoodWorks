import Item from "../components/Item";
import { useState } from "react";

export default function Shop() {
  const [item] = useState([
    {
      id: 1,
      image: "../../assets/images/kennel1.png",
      name: "item1",
      catergory: "kennel",
      price: "400",
      description: "this is a chair",
    },
    {
      id: 2,
      image: "../../assets/images/kennel2.jpeg",
      name: "item2",
      catergory: "kennel",
      price: "250",
      description: "this is a table",
    },
    {
      id: 3,
      image: "../../assets/images/kennel3.jpeg",
      name: "item3",
      catergory: "kennel",
      price: "200",
      description: "this is another dog kennel",
    },
    {
      id: 4,
      image: "../../assets/images/kennel4.jpeg",
      name: "item4",
      catergory: "kennel",
      price: "120",
      description: "this is a dog kennel",
    },
    {
      id: 5,
      image: "../../assets/images/kennel5.jpeg",
      name: "item5",
      catergory: "kennel",
      price: "500",
      description: "this is a bed frame",
    },
  ]);

  return (
    <section id="shop">
      <h2>Take a look at what we can create for you!</h2>
      <h4 align="center">
        Filter Your Search
        <br />
        --
      </h4>
      {/* <div id="selection-container">
        <a href="#">all</a>
        <a href="#">kennels</a>
        <a href="#">tables</a>
        <a href="#">chairs</a>
        <a href="#">misc</a>
      </div> */}
      <div className="card-container">
        <div className="card">
          <Item item={item} />
        </div>
      </div>
    </section>
  );
}
