import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h2>
        <label htmlFor="new-todo-input">What needs to be done?</label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className=""
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
