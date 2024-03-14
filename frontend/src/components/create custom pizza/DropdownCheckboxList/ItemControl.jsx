import React, { useState } from "react";
import MyButton from "../../UI/button/MyButton";
import css from "./ItemControl.module.css";
import minus from "./../../../source/minus.svg";
import plus from "./../../../source/plus.svg";
import check from "./../../../source/check.svg";

const ItemControl = ({ item, onItemChange }) => {
  const [showCountContainer, setShowCountContainer] = useState(item.checked);

  const handleChange = (changes) => {
    onItemChange({ ...item, ...changes });
  };

  const handleCheckboxButtonClick = () => {
    if (!item.checked) {
      handleChange({ checked: true, count: item.count + 1 });
      setShowCountContainer(true);
    } else {
      handleChange({ checked: false, count: 0 });
      setShowCountContainer(false);
    }
  };

  return (
    <li className={css.ingredient}>
      <MyButton
        className={`${css.checkboxButton} ${
          item.checked && css.checkboxButtonFocus
        }`}
        onClick={handleCheckboxButtonClick}
      >
        {item.checked && <img src={check} alt="check" />}
      </MyButton>

      <p className={css.name}>{item.name}</p>

      {showCountContainer && (
        <div className={css.countContainer}>
          <MyButton
            className={css.countButton}
            onClick={() => handleChange({ count: Math.max(1, item.count - 1) })}
          >
            <img src={minus} height={1.5} width={12} alt="minus" />
          </MyButton>

          <p className={css.count}>{item.count}</p>

          <MyButton
            className={css.countButton}
            onClick={() => handleChange({ count: item.count + 1 })}
          >
            <img src={plus} alt="plus" />
          </MyButton>
        </div>
      )}

      <p className={css.price}>{item.price} грн</p>
    </li>
  );
};

export default ItemControl;
