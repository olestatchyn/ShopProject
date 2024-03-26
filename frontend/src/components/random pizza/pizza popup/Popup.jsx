import React from "react";
import cl from "./Popup.module.scss";
import BasketItem from "../../basketItems/basketItem/BasketItem";
import MyButton from "../../UI/button/MyButton";

const Popup = ({
  item,
  updateQuantity,
  price,
  setPrice,
  selectedSize,
  setSize,
	addPizza
}) => {
  return (
    <div className={cl.popup}>
		{item && <div>
				<BasketItem item={item}/>
				<div className={cl.post__param}>
					<div className={cl.post__size}>
						{Object.entries(item.sizeAndPrice).map(([size, price]) => (
							<button
								className={cl.post__size__button}
								key={size}
								onClick={() => {
									setSize(size);
									setPrice(price);
								}}
								style={{
									color: selectedSize === size ? "#ffdb47" : "inherit",
									fontWeight: selectedSize === size ? "bold" : "normal",
								}}
							>
								{`${size} см`}
							</button>
						))}
					</div>
					<div className={cl.post__price}>
						<div>{`${price} грн`}</div>
					</div>
				</div>
				<div>
					<MyButton onClick={addPizza}>Додати до кошика</MyButton>
				</div>
			</div>}
    </div>
  );
};

export default Popup;