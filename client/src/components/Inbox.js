import React from "react";

import { Link, Outlet } from "react-router-dom";
import LogoutBtn from "../LogoutBtn";

function Inbox() {
  return (
    <>
      <LogoutBtn />
      <input type="search" placeholder="search messages" />
      <nav>
        <Link to="all">All</Link>
        <Link to="new">New</Link>
        <Link to="sent">Sent</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Inbox;
