import React, { useState } from 'react';
import DropdownCheckboxList from './DropdownCheckboxList/DropdownCheckboxList';
import MyButton from '../UI/button/MyButton';

const CreateCustomPizza = () => {

	const [ingredients, setIngredients] = useState({
		base: [
			{ name: "Моццарела", checked: false, count: 0, price: 50 },
			{ name: "Пармезан", checked: false, count: 0, price: 50 },
		],
		vegetables: [
			{ name: "Моццарела", checked: false, count: 0, price: 50 },
			{ name: "Пармезан", checked: false, count: 0, price: 50 },
		],
		meat: [
      { name: "Моццарела", checked: false, count: 0, price: 50 },
      { name: "Пармезан", checked: false, count: 0, price: 50 },
    ],
		cheese: [
      { name: "Моццарела", checked: false, count: 0, price: 50 },
      { name: "Пармезан", checked: false, count: 0, price: 50 },
    ],
		sauce: [
      { name: "Моццарела", checked: false, count: 0, price: 50 },
      { name: "Пармезан", checked: false, count: 0, price: 50 },
    ],
		drinks: [
      { name: "Моццарела", checked: false, count: 0, price: 50 },
      { name: "Пармезан", checked: false, count: 0, price: 50 },
    ],
	})

	const calculateTotalPrice = () => {
    let totalPrice = 0;
    let baseSelected = false;

    Object.entries(ingredients).forEach(([type, items]) => {
      items.forEach(item => {
        if (item.checked && item.count > 0) {
          totalPrice += item.count * item.price;
          if (type === 'base') {
            baseSelected = true;
          }
        }
      });
    });

    return { totalPrice, baseSelected };
  };

  const { totalPrice, baseSelected } = calculateTotalPrice();

	const updateIngredients = (type, updatedList) => {
    setIngredients(prev => ({
      ...prev,
      [type]: updatedList,
    }));
  };

	const ingredientTypesTranslations = {
		base: "Основа",
		vegetables: "Овочі",
		meat: "М'ясо",
		sauce: "Соуси до піци",
		drinks: "Напої до піци",
		cheese: "Сир",
	};
	

	return (
		<div>
			{Object.entries(ingredients).map(([type, items]) => (
        <DropdownCheckboxList
          key={type}
          title={ingredientTypesTranslations[type]}
          items={items}
          addProduct={(updatedItems) => updateIngredients(type, updatedItems)}
        />
      ))}

			<h2>
        {baseSelected
          ? `Фінальна ціна піци: ${totalPrice} грн`
          : "Будь ласка, оберіть основу для піци, щоб замовити"}
      </h2>	
			<MyButton style={{color: "red"}}>В кошик</MyButton>
		</div>
	);
}

export default CreateCustomPizza;