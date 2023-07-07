import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

export default function App() {
  // the state, and the setter function. Never update state without the setter function (never count = 3, only setCount(3))
  const [animals, setAnimals] = useState([]);

  function getRandomAnimal() {
    const animals = ["bird", "cat", "cow", "dog", "horse"];
    return animals[Math.floor(Math.random() * animals.length)];
  }

  // define the function (what you want to happen on the event)
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
    console.log(animals);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <h1 className="title">Animal generator</h1>
      <div className="subheading">
        Click to add an animal. Click on an animal to give it some love!
      </div>
      {/* pass in the event function on the event */}
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}
