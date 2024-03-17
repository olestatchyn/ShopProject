import React from "react";
import ProductItem from "./ProductItem";
import pizza from "../../source/home/pizza.jpg"
import cl from "./ProductList.module.scss";

const ProductsList = ({ items }) => {

	if(!items.length){
		return(
			<h1 style={{ textAlign: "center" }}> Post has not found </h1>
		)
	}

	const imageUrls = {
		"Vegan": pizza,
		"4 сири": pizza,
		"4 м'яса": pizza,
		"Мисливська": pizza,
	};


  return (
    <div className={cl.menu__lists}>
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
