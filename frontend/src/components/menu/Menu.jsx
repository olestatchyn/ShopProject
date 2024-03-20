import React, { useEffect, useState } from 'react';
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../API/ProductsService';
import ProductsList from '../products list/ProductsList';
import Pagination from '../pagination/Pagination';
import MyButton from '../UI/button/MyButton';
import PizzaLoader from "../../components/UI/loader/PizzaLoader";
import PostServiceFront from '../../API/ProductsServiceFront';
import cl from './Menu.module.scss'
import MoreButton from "../UI/more-button/MoreButton";
import BasketButton from "../UI/basket-button/BasketButton";
const Menu = () => {
	const [items, setItems] = useState([]);

	const [currentPage, setCurrentPage] = useState("Піца");
	const [limit, setLimit] = useState(8);

	const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
		const responce = await PostServiceFront.getAll(dict[currentPage], limit)
		setItems(responce)
	})

	const dict = {
		"Піца": "pizza",
		"Салат": "salad",
		"Напої": "drink",
		"Інше": "other"
	}
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

			<BasketButton/>
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

			<MoreButton changePage={changePage}/>
		</div>
	);
}

export default Menu;
