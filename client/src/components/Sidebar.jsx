import { Form } from "react-router-dom";
import { LuDollarSign } from "react-icons/lu";
import { useState } from "react";
export default function Sidebar() {
  const [priceRef, setPriceRef] = useState("200");

  return (
    <div className="sidebar-container">
      <h1>Shop Filters</h1>
      <br />
      <Form>
        <label htmlFor="name">Filter by Name</label>
        <br />
        <input type="text" name="name" id="name" />
        <div>
          <br />
          <label htmlFor="price">Choose a Price:</label>
          <br />
          <input
            type="range"
            id="price"
            name="price"
            list="markers"
            min="0"
            max="600"
            step="100"
            onChange={(e) => setPriceRef(e.target.value)}
          />
          <datalist id="markers">
            <option value="0"></option>
            <option value="100"></option>
            <option value="200"></option>
            <option value="300"></option>
            <option value="400"></option>
            <option value="500"></option>
            <option value="600"></option>
          </datalist>
          <output id="option-value">
            <LuDollarSign /> {priceRef}
          </output>
        </div>
        <br />
        <label htmlFor="type">Filter by Type</label>
        <br />
        <input type="text" name="type" id="type" />
      </Form>
    </div>
  );
}
