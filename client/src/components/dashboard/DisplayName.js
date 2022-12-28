import React, { useState, useEffect } from "react";

function DisplayName() {
  const [name, setName] = useState("");

  const getName = async () => {
    try {
      const res = await fetch("http://localhost:4000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await res.json();

      console.log(parseRes);

      setName(parseRes[0].username);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getName();
  }, []);
  return (
    <>
      {" "}
      <h1>{name}'s dashboard</h1>
    </>
  );
}

export default DisplayName;
