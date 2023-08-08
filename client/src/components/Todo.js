import React, { useState } from "react";

function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");
  function handleChange(e) {
    setNewName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="" htmlFor={props.id}>
          Edit: {props.name}
        </label>
        <input
          id={props.id}
          className=""
          type="text"
          value={newName}
          onChange={handleChange}
          placeholder={props.name}
        />
      </div>
      <div className="buttons">
        <button type="button" onClick={() => setEditing(false)}>
          Cancel
        </button>

        <button type="submit">Save</button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="">
      <div>
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="buttons">
        <button type="button" onClick={() => setEditing(true)}>
          Edit
        </button>

        <button type="button" onClick={() => props.deleteTask(props.id)}>
          Delete
        </button>
      </div>
    </div>
  );

  return <li className="">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default Todo;
