import React, { useState } from "react";

export default function Item() {
 const [state, setState] = useState({ title: 'Hello There', price: "$4.00"})
 const title = state.title
 const price = state.price

//  const [items, setItems] = useState([])

//  const [title, setTitle] = useState(() => {
//   return "Hello There..."
//  })



 return (
  <>
   <h3>{title}</h3>
   <br/>
   <img src="#" />
   <br/>
   <p>{price}</p>
   <div className="shop-btn-container">
   <button className="btn btn-white">details</button>
   <button className="btn">add to cart</button>
   </div>
  </>
 )
}