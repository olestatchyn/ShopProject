import React, { useEffect, useRef } from 'react';
import cl from "./Basket.module.scss";
import MyNavLink from "../nav-bar/MyNavLink"; // Переконайтеся, що шлях до імпорту вірний
import basket from '../../../source/home/basket2.svg'; // Імпортуйте ваш зображення кошика, замініть шлях

const BasketButton = () => {
    const basketRef = useRef(null); // Використання ref для зовнішнього div

    useEffect(() => {
        const basketEl = basketRef.current;
        const sticky = basketEl.offsetTop; // Запам'ятовуємо початкову верхню позицію кошика

        const handleScroll = () => {
            if (window.pageYOffset >= sticky-50) {
                basketEl.classList.add(cl.fixed); // Додавання класу, коли кошик досягає верху сторінки
            } else {
                basketEl.classList.remove(cl.fixed);
            }
        };

        window.addEventListener('scroll', handleScroll); // Додавання обробника скролу

        return () => {
            window.removeEventListener('scroll', handleScroll); // Видалення обробника скролу
        };
    }, []); // Ефект виконується лише при монтуванні

    return (
        <div className={cl.basket} ref={basketRef}>
            <div className={cl.button}>
                <MyNavLink className={cl.basket__button}>
                    <img src={basket} alt="basket"/>
                </MyNavLink>
            </div>
        </div>
    );
}

export default BasketButton;
