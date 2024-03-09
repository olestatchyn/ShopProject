import React from 'react';
import MyButton from '../../UI/button/MyButton';

const ItemControl = ({ item, onItemChange }) => {
    const handleChange = (changes) => {
        onItemChange({...item, ...changes});
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={item.checked}
                onChange={(e) => handleChange({ checked: e.target.checked })}
            />
            {item.name}
            <MyButton
                onClick={() => handleChange({ count: Math.max(0, item.count - 1) })}
            >
                -
            </MyButton>
            {item.count}
            <MyButton
                onClick={() => handleChange({ count: item.count + 1 })}
            >
                +
            </MyButton>
        </li>
    );
};

export default ItemControl;
