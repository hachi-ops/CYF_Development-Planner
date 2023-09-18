import React from "react";
import { FaTrashAlt } from "react-icons/fa";
function LineItem({ item, handleCheck, handleDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label>{item.title}</label>
      <FaTrashAlt
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
        onClick={() => handleDelete(item.id)}
      />
    </li>
  );
}

export default LineItem;
