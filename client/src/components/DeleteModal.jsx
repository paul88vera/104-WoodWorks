/* eslint-disable react/prop-types */
import { deleteItem } from "../api/shop";

export default function DeleteModal({ item, toggleDeleteModalClose }) {
  return (
    <div
      className="shop-modal"
      style={{ display: "flex", flexDirection: "column" }}>
      <p>Are you sure you want to delete this item?</p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          justifyContent: "center",
          margin: "1em",
          gap: "1em",
        }}>
        <button className="btn" onClick={() => deleteItem(item.id)}>
          Yes
        </button>
        <button className="btn submit-btn" onClick={toggleDeleteModalClose}>
          No
        </button>
      </div>
    </div>
  );
}
