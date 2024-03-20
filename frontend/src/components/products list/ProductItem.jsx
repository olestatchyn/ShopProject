import React, { useState, useEffect } from "react";
import cl from "./ProductItem.module.scss";
import MyButton from '../UI/button/MyButton';
import basket from "../../source/home/basket.svg";
const ProductItem = ({ number, items, imageUrls }) => {
  const [selectedSize, setSelectedSize] = useState('30');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (selectedSize) {
      setPrice(items.sizeAndPrice[selectedSize]);
    }
  }, [selectedSize, items.sizeAndPrice]);

  const imageUrl = imageUrls[items.name];

  return (
      <div className={cl.post}>
        <div className={cl.post__content}>

          <div className={cl.post__img__container}>
            {imageUrl && <img className={cl.post__img} src={imageUrl} alt={items.name} />}
          </div>

          <div className={cl.post__container}>
            <div className={cl.post__title}>
              {items.name}
            </div>

            <div className={cl.post__ingredients}>
              {items.description}
            </div>

            <div className={cl.post__param}>
              <div className={cl.post__size}>
                {Object.keys(items.sizeAndPrice).map((size) => (
                    <button
                        className={cl.post__size__button}
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        style={{ color: selectedSize === size ? '#ffdb47' : 'inherit', fontWeight: selectedSize === size ? 'bold' : 'normal' }} // Make text red if size is selected
                    >
                      {`${size} см`}
                    </button>
                ))}
              </div>
              <div className={cl.post__price}>
                <div>{`${price} грн`}</div>
              </div>
            </div>
            <div className={cl.post__convex}>

            </div>
            <div className={cl.post__basket}>
              <MyButton className={cl.post__basket__button}>
                <img src={basket} alt="basket"/>
              </MyButton>
            </div>
          </div>

        </div>
      </div>
  );
};

export default ProductItem;
