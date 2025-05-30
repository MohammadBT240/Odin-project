import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function ListItem(props) {
  return <li>{props.animal}</li>;
}

function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + "px",
  };

  return (
    <button style={buttonStyle} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

function List(props) {
  // return (
  //   <>
  //     {!props.animalsList ? (
  //       <div>Loading...</div>
  //     ) : props.animalsList.length > 0 ? (
  //       <ul>
  //         {props.animalsList.map((animal) => {
  //           return <li key={animal}>{animal}</li>;
  //         })}
  //       </ul>
  //     ) : (
  //       <div>There are no animals in the list</div>
  //     )}
  //   </>
  // );
  // OR
  if (!props.listType) {
    return "No List Type";
  }

  if (props.listType == "animals") {
    return (
      <>
        {!props.animalsList && <div>Loading...</div>}
        {props.animalsList && props.animalsList.length > 0 && (
          <ul>
            {props.animalsList.map((animal) => {
              return <li key={animal}>{animal}</li>;
            })}
          </ul>
        )}
        {props.animalsList && props.animalsList.length === 0 && (
          <div>There are no animals in the list!</div>
        )}
      </>
    );
  } else if (props.listType == "todos") {
    return (
      <>
        {!props.todoList && <div>Loading...</div>}
        {props.todoList && props.todoList.length > 0 && (
          <ul>
            {props.todoList.map((todo) => {
              return <li key={todo.id}>{todo.task}</li>;
            })}
          </ul>
        )}
        {props.todoList && props.todoList.length === 0 && (
          <div>There are no todos in the list!</div>
        )}
      </>
    );
  }
}
function App() {
  const [animalsView, setAnimalsView] = useState(false);
  const [todosView, setTodosView] = useState(false);

  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  // const animals = [];
  const todos = [
    { task: "mow the yard", id: crypto.randomUUID() },
    { task: "Work on Odin Projects", id: crypto.randomUUID() },
    { task: "feed the cat", id: crypto.randomUUID() },
  ];

  return (
    <>
      <div>
        <Button
          text={animalsView ? "Hide Animals" : "View Animals!"}
          color="blue"
          fontSize={12}
          onClick={() => setAnimalsView((view) => !view)}
        />
        <Button
          text={todosView ? "Hide Todos" : "View Todos!"}
          color="red"
          fontSize={12}
          onClick={() => setTodosView((view) => !view)}
        />
      </div>
      <div>
        <h1>Animals: </h1>
        {animalsView && <List animalsList={animals} listType={"animals"} />}
      </div>
      <div>
        <h1>TODO List</h1>
        {todosView && <List todoList={todos} listType={"todos"} />}
      </div>
    </>
  );
}

export default App;
