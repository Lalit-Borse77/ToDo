import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [deleted, setDelete] = useState([]);

  let saveTodoList = (event) => {
    let toName = event.target.toName.value;
    if (!todoList.includes(toName)) {
      let finalDoList = [...todoList, toName];
      setTodoList(finalDoList);
    } else {
      alert("todo name already exists");
    }
    alert(toName);

    event.preventDefault();
  };

  let list = todoList.map((value, index) => {
    return (
      <ToDoListItem
        value={value}
        key={index}
        indexNumber={index}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    );
  });

  return (
    <div>
      <h1>Todo List</h1>
      <form action="" onSubmit={saveTodoList}>
        <input type="text" name="toName" />
        <button>Save</button>
      </form>

      <div className="outerDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default App;

function ToDoListItem({ value, indexNumber, todoList, setTodoList }) {
  let [status, setStatus] = useState(false);

  let deleteRow = () => {
    let finalData = todoList.filter((v, i) => i != indexNumber);
    setTodoList(finalData);
  };

  let checkStatus = () => {
    setStatus(!status);
  };

  return (
    <li className={status ? "completeTodo" : ""} onClick={checkStatus}>
      {indexNumber + 1}
      {value} <span onClick={deleteRow}> &times;</span>
    </li>
  );
}
