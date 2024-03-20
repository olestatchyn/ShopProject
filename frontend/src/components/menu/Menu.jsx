import React, { useEffect, useState } from 'react';
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../API/ProductsService';
import ProductsList from '../products list/ProductsList';
import Pagination from '../pagination/Pagination';
import MyButton from '../UI/button/MyButton';
import PizzaLoader from "../../components/UI/loader/PizzaLoader";
import PostServiceFront from '../../API/ProductsServiceFront';
import { useSessionStorage } from '../../hooks/useSessionStorage';

const Menu = () => {
	const [items, setItems] = useState([]);
	// const [items, setItems] = useSessionStorage('menuItems', {
	// 	pizza: [],
	// 	salad: [],
	// 	drink: [],
	// 	other: []
	// });
	

	const [currentPage, setCurrentPage] = useState("Піца");
	const [limit, setLimit] = useState(8);

	// const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
	// 	// if (!items[dict[currentPage]].length) {
	// 		const response = await PostServiceFront.getAll(dict[currentPage], limit);
	// 		setItems(prevItems => ({ ...prevItems, [dict[currentPage]]: response }));
	// 		console.log(items);
	// 	// } else {
	// 		// console.log('from session storage problem');
	// 	// }
	// });
	const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
		const responce = await PostServiceFront.getAll(dict[currentPage], limit)
		setItems(responce)
		console.log(items);
	})

	const dict = {
    Піца: "pizza",
    Салат: "salad",
    Напої: "drink",
    Інше: "other",
  };
	useEffect(() => {
		fetchPosts()
	}, [currentPage, limit]);

	const changePage = (e) => {
		e.preventDefault()
		setLimit(limit + 8)
	}

	return (
		<div>
			<Pagination
					totalPage={4}
					setCurrentPage={setCurrentPage}
					currentPage={currentPage} 
				/>
			{postError &&
				<h1>Error loading</h1>
			}
			{isPostLoading
				? <div style={{marginTop: 50, display: "flex", justifyContent: "center"}}>
					<PizzaLoader />
				</div>
				:
				<ProductsList items={items} title="Post about JS" />
				}
			<MyButton onClick={changePage}>
				Показати ще
			</MyButton>
		</div>
	);
}

export default Menu;
