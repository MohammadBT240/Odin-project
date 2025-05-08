import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function ListItem(props) {
  return <li>{props.animal}</li>;
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
}
function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  // const animals = [];

  return (
    <>
      <h1>Animals: </h1>
      <List animalsList={animals} />
    </>
  );
}

export default App;
