import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item) => {
    console.log(item);
    // const handleBuyButton = (item) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
// let active = ture;
  };



  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          // bought={true}
          // handleBuyButton={onBuyButton}
          // handleBuyButton={()=> onBuyButton(item)}
          handlerBuyButton={()=>onBuyButton(item)}
        ></Item>

      ))}
    </ul>
  );
};

export default FoodItems;