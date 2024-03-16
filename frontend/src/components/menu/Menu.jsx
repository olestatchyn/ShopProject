import React, { useEffect, useState } from 'react';
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../API/ProductsService';
import ProductsList from '../products list/ProductsList';
import Pagination from '../pagination/Pagination';
import MyButton from '../UI/button/MyButton';


const Menu = () => {
	const [items, setItems] = useState([]);

	const [currentPage, setCurrentPage] = useState("Піца");
	const [limit, setLimit] = useState(8);

	const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
		const responce = await PostService.getAll(limit, currentPage)
		setItems(responce)
	})

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
					{/* <Loader /> */}
				</div>
				: <ProductsList items={items} title="Post about JS" />
				}
			<MyButton onClick={changePage}>
				Показати ще
			</MyButton>
		</div>
	);
}

export default Menu;
