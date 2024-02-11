/* eslint-disable react/prop-types */
import { deleteItem } from "../api/shop";

export default function DeleteModal({ item, toggleDeleteModalClose }) {
  return (
    <div
      className="shop-modal"
      style={{ display: "flex", flexDirection: "column", fontSize: "1.2rem" }}>
      <p>Are you sure you want to delete this item?</p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "55%",
          justifyContent: "center",
          margin: "1em",
          gap: "2em",
        }}>
        <button className="btn delete-btn" onClick={() => deleteItem(item.id)}>
          Yes
        </button>
        <button className="btn cancel-btn" onClick={toggleDeleteModalClose}>
          No
        </button>
      </div>
    </div>
  );
}
