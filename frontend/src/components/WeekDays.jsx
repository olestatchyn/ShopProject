import { useState, useEffect } from 'react';

const WeekDays = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const generateWeekDays = () => {
      const daysUA = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
      const today = new Date();
      let weekDays = [];

      for (let i = 0; i < 7; i++) {
        let futureDay = new Date(today);
        futureDay.setDate(futureDay.getDate() + i);

        const dayIndex = futureDay.getDay();
        const formattedDate = futureDay.toISOString().split('T')[0]; // Форматуємо дату до YYYY-MM-DD

        if (i === 0) {
          weekDays.push({ name: "Сьогодні", value: formattedDate });
        } else if (i === 1) {
          weekDays.push({ name: "Завтра", value: formattedDate });
        } else {
          weekDays.push({ name: daysUA[dayIndex], value: formattedDate });
        }
      }

      return weekDays;
    };

    setDays(generateWeekDays());
  }, []);

  return days;
};

export default WeekDays;