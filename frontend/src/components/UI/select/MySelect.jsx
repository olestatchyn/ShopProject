import React from 'react';

const MySelect = ({option, value, onChange}) => {
	return (
		<select
			value={value}
			onChange={(e) => onChange(e.target.value)}
		>
				{option.map((option => 
					<option
						key={option.id} 
						value={option.value}>
						{option.name}
					</option>))}

		</select>
	);
}

export default MySelect;
