import { nanoid } from "nanoid";

import Form from "../../Form";
import FilterButton from "../../FilterButton";
import Todo from "../../Todo";
import React, { useState } from "react";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function AddNewDraft(props) {
  const [tasks, setTasks] = useState(props.tasks);
  console.log(props.tasks);
  const [filter, setFilter] = useState("All");

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };

    setTasks([...tasks, newTask]);
  }
  console.log(tasks);

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }

      return task;
    });
    setTasks(updatedTasks);
    console.log(tasks[0]);
  }
  console.log(tasks[0]);

  function deleteTask(id) {
    console.log(id);
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }
  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));
  console.log(filter);
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const headingText = `${taskList.length} tasks remaining`;

  return (
    <div className="show-element">
      <div
        className="titleCloseBtn"
        onClick={() => {
          props.setShowAddNewDraft(false);
        }}
      >
        X
      </div>
      <h1>New Draft</h1>
      <Form addTask={addTask} />

      <div className="buttons">{filterList}</div>
      <h2 id="list-heading">{headingText}</h2>

      <ul>{taskList}</ul>
    </div>
  );
}

export default AddNewDraft;
