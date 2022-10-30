import React, { useState } from "react";

export default function Item() {
 const [state, setState] = useState({ image: "https://unsplash.it/200/200",title: 'Item', price: "$4.00"});
 const title = state.title;
 const price = state.price;
 const image = state.image;

//  const [items, setItems] = useState([])

//  const [title, setTitle] = useState(() => {
//   return "Hello There..."
//  })



 return (
<<<<<<< HEAD
  <>
   <br/>
   <img src={image} alt=""/>
   <br/>
   <h3>{title}</h3>
   <p>{price}</p>
   <div className="shop-btn-container">
   <button className="btn-details">details</button>
   <button className="btn"></button>
=======
  <section id="items">
   <img src="https://www.unsplash.it/250" alt=""/>
   <br/>
   <h3>{title}</h3>
   <p>{price}</p>
   <br/>
   <div className="shop-btn-container">
   <button className="btn btn-blue">add to cart</button>
   <button className="btn btn-white">details</button>
>>>>>>> develop
   </div>
  </section>
 )
}