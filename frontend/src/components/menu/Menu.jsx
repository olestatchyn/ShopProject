import React, { useEffect, useMemo, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import PostService from "../../API/ProductsService";
import ProductsList from "../products list/ProductsList";
import Pagination from "../pagination/Pagination";
import PizzaLoader from "../../components/UI/loader/PizzaLoader";
import PostServiceFront from "../../API/ProductsServiceFront";
import MoreButton from "../UI/more-button/MoreButton";
import BasketButton from "../UI/basket-button/BasketButton";
import { useSessionStorage } from "../../hooks/useSessionStorage";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import cl from "./Menu.module.scss";

const Menu = () => {
	const [items, setItems] = useSessionStorage('menuItems', {
		pizza: [],
		salad: [],
		drink: [],
		other: [],
		count: 0
	});
	const [basketItems, setBasketItems] = useLocalStorage('basketItems', [

	]);
	const [currentPage, setCurrentPage] = useState("Піца");
	const [limit, setLimit] = useState(8);

  const countOfProduct = useMemo(() => {
    return basketItems.reduce((total, item) => total + item.quantity, 0);
  }, [basketItems]);

	const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
		if (!items[dict[currentPage]].length) {
			const response = await PostServiceFront.getAll(dict[currentPage], limit);
		 	setItems(prevItems => ({ ...prevItems, [dict[currentPage]]: response }));
		}
	});


  const dict = {
    Піца: "pizza",
    Салат: "salad",
    Напої: "drink",
    Інше: "other",
  };
  useEffect(() => {
    fetchPosts();
  }, [currentPage, limit]);

  const changePage = (e) => {
    e.preventDefault();
    setLimit(limit + 8);
    console.log(basketItems);
  };

	const addProductToBasket = (item, price, selectedSize) => {
		const productToAdd = {
			id: item._id, 
			name: item.name,
			price: price,
			selectedSize: selectedSize,
			quantity: 1,
			description: item.description,
			type: dict[currentPage]
		};
	
		const existingProductIndex = basketItems.findIndex(basketItem => basketItem.id === item._id && basketItem.selectedSize === selectedSize);
	
		if (existingProductIndex > -1) {
			const newBasketItems = basketItems.slice();
			newBasketItems[existingProductIndex].quantity += 1;
			setBasketItems(newBasketItems);
		} else {
			setBasketItems([...basketItems, productToAdd]);
		}
	};

	

  const clearStorage = () => {
    setBasketItems([]);
  };

  return (
    <div className={cl.MenuContainer}>
      <Pagination
        totalPage={4}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      <BasketButton  countOfProduct={countOfProduct} />

      {postError && <h1>Error loading</h1>}

      {isPostLoading ? (
        <div
          style={{ marginTop: 50, display: "flex", justifyContent: "center" }}
        >
          <PizzaLoader />
        </div>
      ) : (
        <ProductsList
          items={items[dict[currentPage]]}
          addProductToBasket={addProductToBasket}
        />
      )}

      <MoreButton changePage={changePage} />
      <MoreButton changePage={clearStorage} />
    </div>
  );
};

export default Menu;
