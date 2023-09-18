import React, { useState } from "react";

import Logout from "./../dashboard/controls/Logout";
import DashboardContent from "./files/DashboardContent";
import Header from "./files/Header";
import Footer from "./../Footer";
function Dashboard({ setAuth }) {
  // greeting
  const username = "Me";
  const greeting = <h1>Hello {username}</h1>;

  const [items, setItems] = useState([
    { id: 1, sender: "sender 1", title: "title 1", checked: true },
    { id: 2, sender: "sender 2", title: "title 2", checked: false },
    { id: 3, sender: "sender 3", title: "title 3", checked: false },
  ]);

  const handleCheck = (id) => {
    console.log(`key: ${id}`);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("filesList", JSON.stringify);
  };

  const handleDelete = (id) => {
    console.log(`key: ${id}`);
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("filesList", JSON.stringify(listItems));
  };
  return (
    <div>
      <Logout setAuth={setAuth} />
      {greeting}
      <Header title="Files" />
      <DashboardContent
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default Dashboard;
