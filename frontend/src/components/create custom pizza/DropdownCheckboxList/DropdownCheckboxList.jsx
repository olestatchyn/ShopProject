import React, { useEffect, useRef, useState } from "react";
import MyButton from "../../UI/button/MyButton";
import ItemControl from "./ItemControl";
import css from "./DropdownCheckboxList.module.css";
import stroke from "./../../../source/stroke.svg";

const DropdownCheckboxList = ({ title, items, addProduct, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customItems, setCustomItems] = useState(items);
  const ingredientsRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (ingredientsRef.current) {
      ingredientsRef.current.classList.toggle("hidden");
    }
  };

  useEffect(() => {
    addProduct(customItems);
  }, [customItems]);

  const handleItemChange = (updatedItem) => {
    setCustomItems((prevItems) =>
      prevItems.map((item) =>
        item.name === updatedItem.name ? updatedItem : item
      )
    );
  };

  return (
    <div className={css.chooseIngredients}>
      <div className={css.background}> </div>
      <div className={className} onClick={toggleDropdown}>
        <h3 className={css.buttonTitle}>{title}</h3>
        <img src={stroke} width={13} height={22} alt="stroke" />
      </div>
      {isOpen && (
        <div ref={ingredientsRef} className={css.ingredients}>
          <ul className={css.ingredientsList}>
            {customItems.map((item, index) => (
              <ItemControl
                key={item.name}
                item={item}
                onItemChange={handleItemChange}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownCheckboxList;
