import React, { useState, useEffect } from 'react';

const WeekDays = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const generateWeekDays = () => {
      const daysUA = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
      const daysEN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const today = new Date();
      let weekDays = [];

      for (let i = 0; i < 7; i++) {
        let dayIndex = (today.getDay() + i) % 7;
        if (i === 0) {
          weekDays.push({name: "Сьогодні", value: "today"});
        } else if (i === 1) {
          weekDays.push({name: "Завтра", value: "tomorrow"});
        } else {
          weekDays.push({name: daysUA[dayIndex], value: daysEN[dayIndex]});
        }
      }

      return weekDays;
    };

    setDays(generateWeekDays());
  }, []);

  return days
};

export default WeekDays;
