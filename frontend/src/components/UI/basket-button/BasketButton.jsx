import React, { useEffect, useRef, useState } from 'react';
import cl from "./BasketButton.module.scss";
import MyNavLink from "../nav-bar/MyNavLink";
import basket from '../../../source/home/basket2.svg';

const BasketButton = ({countOfProduct}) => {
    const basketRef = useRef(null);

    useEffect(() => {
        const basketEl = basketRef.current;
        const sticky = basketEl.offsetTop;

        const handleScroll = () => {
            if (window.pageYOffset >= sticky-50) {
                basketEl.classList.add(cl.fixed);
            } else {
                basketEl.classList.remove(cl.fixed);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={cl.basket} ref={basketRef}>
            <div className={cl.button}>
                <MyNavLink className={cl.basket__button}>
                    <img src={basket} alt="basket"/>
                </MyNavLink>
								<p>{countOfProduct}</p>
            </div>
        </div>
    );
}

export default BasketButton;
