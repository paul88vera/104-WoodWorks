import { Form } from "react-router-dom";

export default function Sidebar() {
  // const [priceRef] = useRef(null);
  return (
    <div className="sidebar-container">
      <Form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
        <br />
        <div>
          <label htmlFor="price">Choose a price:</label>
          <br />
          <input
            type="range"
            id="price"
            name="price"
            list="markers"
            min="0"
            max="600"
            step="100"
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
          {" $"}
          <output id="">400</output>
        </div>
        <br />
        <label htmlFor="type">Type:</label>
        <input type="text" name="type" id="type" />
        <br />
        <button className="btn submit-btn">Filter Search</button>
      </Form>
    </div>
  );
}
