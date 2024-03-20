import React, { useState } from "react";
import DropdownCheckboxList from "./DropdownCheckboxList/DropdownCheckboxList";
import MyButton from "../UI/button/MyButton";
import cl from "./CreateCustomPizza.module.css";
import baseCss from "../../style/style.module.css";
import btnStroke from "../../source/button-stroke.svg";

const CreateCustomPizza = () => {
  const [ingredients, setIngredients] = useState({
    base: [
      { name: "Моцарела", checked: false, count: 0, price: 50 },
      { name: "Пармезан", checked: false, count: 0, price: 50 },
    ],
    vegetables: [
      { name: "Моцарела", checked: false, count: 0, price: 50 },
      { name: "Пармезан", checked: false, count: 0, price: 50 },
    ],
    meat: [
      { name: "Моцарела", checked: false, count: 0, price: 50 },
      { name: "Пармезан", checked: false, count: 0, price: 50 },
    ],
    cheese: [
      { name: "Моцарела", checked: false, count: 0, price: 50 },
      { name: "Пармезан", checked: false, count: 0, price: 50 },
    ],
    sauce: [
      { name: "Моцарела", checked: false, count: 0, price: 50 },
      { name: "Пармезан", checked: false, count: 0, price: 50 },
    ],
    drinks: [
      { name: "Моцарела", checked: false, count: 0, price: 50 },
      { name: "Пармезан", checked: false, count: 0, price: 50 },
    ],
  });

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    let baseSelected = false;

    Object.entries(ingredients).forEach(([type, items]) => {
      items.forEach((item) => {
        if (item.checked && item.count > 0) {
          totalPrice += item.count * item.price;
          if (type === "base") {
            baseSelected = true;
          }
        }
      });
    });

    return { totalPrice, baseSelected };
  };

  const { totalPrice, baseSelected } = calculateTotalPrice();

  const updateIngredients = (type, updatedList) => {
    setIngredients((prev) => ({
      ...prev,
      [type]: updatedList,
    }));
  };

  const ingredientTypesTranslations = {
    base: "Основа",
    meat: "М'ясо",
    cheese: "Сир",
    sauce: "Соуси до піци",
    drinks: "Напої до піци",
    vegetables: "Овочі",
  };

  return (
    <div className={`${cl.custom} ${baseCss.container}`}>
      <h2 className={cl.title}>Зроби свою ідеальну піцу!</h2>
      <div className={cl.custom__lists}>
      {/* <div> */}
        {Object.entries(ingredients).map(([type, items], index) => (
          <DropdownCheckboxList
            key={type}
            title={ingredientTypesTranslations[type]}
            items={items}
            addProduct={(updatedItems) => updateIngredients(type, updatedItems)}
            className={cl.checkbox}
          />
        ))}
      </div>

      <div className={cl.orderContainer}>
        {baseSelected ? (
          <>
            <h2>
              <span className={cl.orderSum}>загальна сума: </span>
              <span className={cl.Sum}>{totalPrice} грн</span>
            </h2>
            <MyButton className={cl.addButton}>
              <p>В кошик</p>
              <img src={btnStroke} alt="btnStroke" />
            </MyButton>
          </>
        ) : (
          <p>Оберіть основу для піци, щоб замовити</p>
        )}
      </div>
    </div>
  );
};

export default CreateCustomPizza;
