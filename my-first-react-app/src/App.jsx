import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function ListItem(props) {
  return <li>{props.animal}</li>;
}

function List(props) {
  if (!props.animalsList) {
    return <div>Loading...</div>;
  }

  if (props.animalsList.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animalsList.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}
function App() {
  // const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const animals = [];

  return (
    <>
      <h1>Animals: </h1>
      <List animalsList={animals} />
    </>
  );
}

export default App;
