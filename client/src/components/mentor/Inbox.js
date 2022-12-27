import React from "react";

import { Link, Outlet } from "react-router-dom";

function Inbox() {
  return (
    <>
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
