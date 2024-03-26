import React from 'react';
import cl from "./ModalForPizza.module.scss"

const ModalForPizza = ({children, visible, setVisible, style}) => {
	
	const rootClasses = [cl.myModal]

	if (visible) {
    rootClasses.push(cl.active)
  }
	
	return (
		<div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
			<div
				style={{width: "300px"}}
				className={cl.myModalContent}
				onClick={(e) => e.stopPropagation()}
				>
					{children}
			</div>
		</div>
	);
}

export default ModalForPizza;
