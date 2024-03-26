import React, { useEffect, useState } from 'react';
import MyButton from '../UI/button/MyButton';
// import './style.css';
import cl from './RandomPizza.module.scss';
import AlertMessage from '../UI/alert message/AlertMessage';
import ModalForPizza from '../UI/random pizza\'s modal/ModalForPizza';
import Popup from './pizza popup/Popup';

const RandomPizza = ({setCount}) => {
  const items = [
    "BBQ Chicken",
    "Hawaiian",
    "Pepperoni",
    "Margherita",
    "Vegetarian",
  ];
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedItem, setSelectedItem] = useState("Margherita");
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);

  const [pizza, setPizza] = useState("");

  const handleRandomSelect = () => {
    let randomIndex;
    const interval = setInterval(() => {
      randomIndex = Math.floor(Math.random() * items.length);
      setActiveIndex(randomIndex);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setSelectedItem(items[randomIndex]);
			setVisible(true);
    }, 3000);
  };

  // setMessage("Ви обрали піцу: " + selectedItem);

  useEffect(() => {
    const storedItems = sessionStorage.getItem("menuItems");
    if (storedItems) {
      const pizzaArray = JSON.parse(storedItems).pizza;
      const selectedPizza = pizzaArray.find(
        (pizza) => pizza.name === selectedItem
      );
      if (selectedPizza) {
        const sizeAndPriceEntries = Object.entries(selectedPizza.sizeAndPrice);
        if (sizeAndPriceEntries.length > 0) {
          const [firstSize, firstPrice] = sizeAndPriceEntries[0];
          setPrice(firstPrice);
          setPizza({
            ...selectedPizza,
            size: firstSize,
            quantity: 1,
            price: firstPrice,
            type: "pizza",
          });
        }
      }
    }
  }, [selectedItem]);

  const updateQuantity = (__, newQuantity, _) => {
    setPizza((prevItems) => {
      return { ...prevItems, quantity: newQuantity };
    });
  };

  const [selectedSize, setSelectedSize] = useState("30");
  const [price, setPrice] = useState(0);

	useEffect(() => {
		if (pizza) {
			setPizza((prevPizza) => {
				return { ...prevPizza, size: selectedSize, price: price, quantity: 1};
			});
		}
	}, [selectedSize, price]);

	const addToBasket = () => {
    setMessage("Ви обрали піцу: " + selectedItem);
    setVisible(false);
		addProductToBasket(pizza)
  };


	const addProductToBasket = (pizza) => {
		const basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
		console.log(basketItems);
		const productToAdd = {
			id: pizza._id, 
			name: pizza.name,
			price: pizza.price,
			selectedSize: pizza.size,
			quantity: pizza.quantity,
			description: pizza.description,
			type: pizza.type
		};
	
		const existingProductIndex = basketItems.findIndex(basketItem => basketItem.id === pizza._id && basketItem.selectedSize === pizza.size);
	
		if (existingProductIndex > -1) {
			const newBasketItems = basketItems.slice();
			newBasketItems[existingProductIndex].quantity += pizza.quantity;
			localStorage.setItem('basketItems', JSON.stringify(newBasketItems));

		} else {
			localStorage.setItem('basketItems', JSON.stringify([...basketItems, productToAdd]));
		}
	};
	
  return (
    <div className={cl.container}>
      <div className={cl.random}>
        <div>
          <div>
            {items.map((item, index) => (
              <div key={index} className={cl.random_item}>
                <p>{item}</p>
                <div
                  className={`${cl.circle} ${
                    activeIndex === index ? cl.circle_active : ""
                  }`}
                ></div>
              </div>
            ))}
          </div>
          <MyButton onClick={handleRandomSelect}>Рандом</MyButton>
          {message && (
            <AlertMessage
              code={200}
              message={message}
              setMessage={setMessage}
              duration={3000}
            />
          )}
        </div>
      </div>
      <ModalForPizza setVisible={setVisible} visible={visible}>
        <Popup
          item={pizza}
          updateQuantity={updateQuantity}
          selectedSize={selectedSize}
          setSize={setSelectedSize}
          price={price}
          setPrice={setPrice}
          addPizza={addToBasket}
        />
      </ModalForPizza>
    </div>
  );
};

export default RandomPizza;
