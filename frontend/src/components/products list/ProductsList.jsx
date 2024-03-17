import React from "react";
import ProductItem from "./ProductItem";

const ProductsList = ({ items }) => {

	if(!items.length){
		return(
			<h1 style={{ textAlign: "center" }}> Post has not found </h1>
		)
	}

	const imageUrls = {
		"Vegan": "тут посилання на фотку",
		"4 сири": "тут посилання на фотку",
		"4 м'яса": "тут посилання на фотку",
		"Мисливська": "тут посилання на фотку",
	};

	
  return (
    <div>
      {items.map((items, index) => (
        <ProductItem
          number={index + 1}
          items={items}
					imageUrls={imageUrls}
        />
      	))}
    </div>
  );
};

export default ProductsList;
