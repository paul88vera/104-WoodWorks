import React from "react";

export default function Item(props) {
const item = props.item;

 return (
<section id="item-container">
    {item.map((item) => (
  <div className="items" key={item.id}>
    <div className="item-img-container">
   <img src={item.image} alt=""/>
    </div>
   <br/>
   <h3>{item.name}</h3>
   <p>${item.price}</p>
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