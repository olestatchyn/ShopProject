import React, { useState, useEffect } from "react";

const ProductItem = ({ number, items, imageUrls }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (selectedSize) {
      setPrice(items.sizeAndPrice[selectedSize]);
    }
  }, [selectedSize, items.sizeAndPrice]);

  const imageUrl = imageUrls[items.name]; 

  return (
    <div className="post">
      <div className="post__content">
        {imageUrl && <img src={imageUrl} alt={items.name} />} 
        <strong>{items.name}</strong>
        <ul>
          {items.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
        <div>
          {Object.keys(items.sizeAndPrice).map((size) => (
            <button key={size} onClick={() => setSelectedSize(size)}>
              {size}
            </button>
          ))}
        </div>
        {selectedSize && <div>{`Ціна: ${price} грн`}</div>}
      </div>
    </div>
  );
};

export default ProductItem;
