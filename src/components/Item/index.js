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
   <br/>
   <img src="#" />
   <br/>
   <h3>{title}</h3>
   {/* <p>{price}</p> */}
   <div className="shop-btn-container">
   <button className="btn-details">details</button>
   <button className="btn">add to cart</button>
   </div>
  </>
 )
}