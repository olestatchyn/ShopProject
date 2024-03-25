import React, { useState } from 'react';
import MyButton from '../UI/button/MyButton';
// import './style.css';
import cl from './RandomPizza.module.scss';
import AlertMessage from '../UI/alert message/AlertMessage';

const RandomPizza = () => {
	const items = ['4 сири', 'Пепероні', 'Гостріше Гострого', 'Маргарита', 'Салмон'];
  const [activeIndex, setActiveIndex] = useState(null);
	const [selectedItem, setSelectedItem] = useState(null)
	const [message, setMessage] = useState(null);

	const handleRandomSelect = () => {
		let randomIndex
    const interval = setInterval(() => {
      randomIndex = Math.floor(Math.random() * items.length);
      setActiveIndex(randomIndex);
    }, 100); 
		
    setTimeout(() => {
			clearInterval(interval);
			setSelectedItem(items[randomIndex]);
    }, 3000); 
		
  };
	
	const handleClick = () => {
    console.log(selectedItem);
		setMessage("Ви обрали піцу: " + selectedItem);
  };

	return (
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
				<MyButton onClick={handleClick}>Обрана піца</MyButton>
				{message && <AlertMessage
                code={200}
                message={message}
                setMessage={setMessage}
                duration={3000}
            />}
      </div>
    </div>
  );
}

export default RandomPizza;
