import React from 'react';
import { usePagination } from '../../hooks/usePagination';

const Pagination = ({totalPage, setCurrentPage, currentPage}) => {
	const [pagesArray, changePage] = usePagination(totalPage, setCurrentPage)
	return (
		<div className="page__wrapper">
					{pagesArray.map(p =>
						<span
							onClick={()=>changePage(p)} 
							key={p} 
							className=
						{currentPage === p ? 'page page__current' : 'page'}>
								{p}
						</span>
					)}
					
				</div>
	);
}

export default Pagination;
