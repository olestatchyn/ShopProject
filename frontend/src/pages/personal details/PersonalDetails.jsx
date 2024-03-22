import React, { useState } from 'react';
import OrderForm from '../../components/order form/OrderForm';
import OrderLoader from '../../components/order loader/OrderLoader';

const PersonalDetails = () => {
	const [isOrderFormVisible, setIsOrderFormVisible] = useState(true);
	
	const toggleForms = () => {
    setIsOrderFormVisible(!isOrderFormVisible);
  };
	return (
		<div>
			{isOrderFormVisible ? (
        <OrderForm onButtonClick={toggleForms} />
      ) : (
        <OrderLoader />
      )}
		</div>
	);
}

export default PersonalDetails;
