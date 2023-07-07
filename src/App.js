import AnimalShow from "./AnimalShow";
import { useState } from "react";

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
    <div>
      <h1>Hello</h1>
      {/* pass in the event function on the event */}
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderedAnimals}</div>
    </div>
  );
}
