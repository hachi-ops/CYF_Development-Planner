import React from "react";
// import Message from "./Message";
import { Link, Outlet } from "react-router-dom";

// const messages = [
//   { date: "1/1/23", sender: "Boris", message: "hi there" },
//   { date: "1/2/23", sender: "Kyloren", message: "Revenge time" },
//   { date: "1/3/23", sender: "Anakin", message: "oopsie doopsie" },
// ];
function Inbox() {
  // const headings = ["date", "sender", "preview"];
  return (
    <>
      <input type="search" placeholder="search messages" />
      <nav>
        <Link to="all">All</Link>
        <Link to="new">New</Link>
        <Link to="sent">Sent</Link>
      </nav>
      <Outlet />
      {/* 
      <section className="inbox">
        <table>
          <caption>Your messages</caption>
          <thead>
            <tr>
              {headings.map((heading) => {
                return <th>{heading}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => {
              return (
                <tr>
                  <td>{message.date}</td>
                  <td>{message.sender}</td>
                  <td>{message.message}</td>
                  <td>
                    {" "}
                    <Link to="/message" element={<Message />}>
                      <button>open</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section> */}
    </>
  );
}

export default Inbox;
