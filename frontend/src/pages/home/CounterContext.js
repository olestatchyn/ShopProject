import React, { createContext, useContext, useState, useEffect } from 'react';

const CounterContext = createContext();

export const useCounter = () => useContext(CounterContext);

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Ініціалізація або оновлення counter на основі localStorage
    const updateCounter = () => {
      const basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
      setCounter(basketItems.reduce((total, item) => total + item.quantity, 0));
    };

    updateCounter();

    // Опційно: Підписка на події зміни localStorage, якщо потрібно
    window.addEventListener('storage', updateCounter);

    return () => {
      window.removeEventListener('storage', updateCounter);
    };
  }, []);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
