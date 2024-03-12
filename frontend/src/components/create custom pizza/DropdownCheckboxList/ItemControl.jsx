import React from "react";
import MyButton from "../../UI/button/MyButton";
import css from "./ItemControl.module.css";

const ItemControl = ({ item, onItemChange }) => {
  const handleChange = (changes) => {
    onItemChange({ ...item, ...changes });
  };

  return (
    <li className={css.ingredient}>
      <input
        type="checkbox"
        checked={item.checked}
        className={css.checkbox}
        onChange={(e) => handleChange({ checked: e.target.checked })}
      />

      <p className={css.name}>{item.name}</p>

      <div className={css.countContainer}>
        <MyButton
          className={css.countButton}
          onClick={() => handleChange({ count: Math.max(0, item.count - 1) })}
        >
          -
        </MyButton>

        <p className={css.count}>{item.count}</p>

        <MyButton
          className={css.countButton}
          onClick={() => handleChange({ count: item.count + 1 })}
        >
          +
        </MyButton>
      </div>

      {/* <p>{price}</p> */}
      <p className={css.price}>15 грн</p>
    </li>
  );
};

export default ItemControl;
