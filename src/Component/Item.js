import React from 'react'
import styles from "./Item.module.css"

function Item({foodItem, handlerBuyButton, bought }) {
  return (
    <li 
    // className={`${styles["kg-item"]} list-group-item`}
    className={`${styles["kg-item"]} list-group-item ${bought && "list-group-item active"}`}
    >
        <span className={styles["kg-span"]}>{foodItem}</span>
        <button
        className={`${styles.button} btn btn-info`}
        onClick={()=>handlerBuyButton(foodItem)}
        >
            Buy
        </button>
    </li>
  )
}
 export default Item;
