// import FoodItems from "./components/FoodItems";
// import FoodInput from "./Component/FoodInput";
import FoodInput from "./Component/FoodInput";
import ErrorMessage from "./Component/ErrorMessage";
// import ErrorMessage from "./components/ErrorMessage";
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap. css';
// import 'bootstrap/dist/css/bootstrap. css'
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
// import Container from "./components/Container";
// import FoodInput from "./components/FoodInput";
import FoodItems from "./Component/FoodItems";
import Container from "./Component/Container";
import { useState } from "react";

function App() {
  // let [foodItems, setFoodItems] = useState(["sabgi", "roti", "green" ]);
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;