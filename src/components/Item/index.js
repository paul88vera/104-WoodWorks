import React from "react";

export default function Item(props) {
const item = props.item;

 return (
<section id="item-container">
    {item.map((item) => (
  <div id="items" key={item.id}>
   <img src={item.image} alt=""/>
   <br/>
   <h3>{item.name}</h3>
   <p>{item.price}</p>
   <br/>
   <p>{item.category}</p>
   <p>{item.description}</p>
   <br/>
   <div className="shop-btn-container">
   <button className="btn btn-blue">add to cart</button>
   <button className="btn btn-white">details</button>
   </div>
  </div>
    ))}
</section>
 )
}