import React from "react";

import ItemList from "./ItemList";

function DashboardContent({ items, handleCheck, handleDelete }) {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p>no items</p>
      )}
    </>
  );
}

export default DashboardContent;
