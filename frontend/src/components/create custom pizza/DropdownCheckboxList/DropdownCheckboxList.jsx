import React, { useEffect, useState } from 'react';
import MyButton from '../../UI/button/MyButton';
import ItemControl from './ItemControl';

const DropdownCheckboxList = ({title, items, addProduct}) => {

	const [isOpen, setIsOpen] = useState(false);
	const [customItems, setCustomItems] = useState(items);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	}

	useEffect(() => {
		addProduct(customItems);
	}, [customItems]);

	const handleItemChange = (updatedItem) => {
		setCustomItems(prevItems =>
			prevItems.map(item => 
				item.name === updatedItem.name ? updatedItem : item
			)
		);
	};
	

	return (
		<div>
			<MyButton onClick={toggleDropdown}>
				{title}
			</MyButton>
			{isOpen && (
				<ul>
					{customItems.map((item, index) => (
            <ItemControl
              key={item.name}
              item={item}
              onItemChange={handleItemChange}
            />
          ))}
				</ul>
			)
			}
		</div>
	);
}

export default DropdownCheckboxList;
