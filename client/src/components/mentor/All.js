import React from "react";
import { Link } from "react-router-dom";
const messages = [
  { date: "1/1/23", sender: "Boris", message: "hi there" },
  { date: "1/2/23", sender: "Kyloren", message: "Revenge time" },
  { date: "1/3/23", sender: "Anakin", message: "oopsie doopsie" },
];
function All() {
  const headings = ["date", "sender", "preview"];
  return (
    <>
      <h1>All Messages</h1>
      <section>
        {" "}
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
                      <Link to="/message">
                        <button>open</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
}

export default All;
