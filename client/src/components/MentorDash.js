import React from "react";

const messages = [
  { date: "1/1/23", sender: "Boris", message: "hi there" },
  { date: "1/2/23", sender: "Kyloren", message: "Revenge time" },
  { date: "1/3/23", sender: "Anakin", message: "oopsie doopsie" },
];

function Inbox() {
  const headings = ["date", "sender", "preview"];
  return (
    <>
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
                    <button>open</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}
function MentorDash() {
  return (
    <>
      <Inbox />
    </>
  );
}

export default MentorDash;
