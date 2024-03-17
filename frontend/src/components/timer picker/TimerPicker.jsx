import React, { useState, useEffect } from 'react';
import cl from "./TimerPicker.module.css"

const TimePicker = ({ defaultValue, onChange }) => {
    const [hour, setHour] = useState("10");
    const [minute, setMinute] = useState('00');
    const [isPickerActive, setIsPickerActive] = useState(false);

    useEffect(() => {
        if (defaultValue) {
            const pattern = /^(\d+):(\d+) (am|pm)$/;
            const [, initialHour, initialMinute] = defaultValue.match(pattern);
            setHour(initialHour);
            setMinute(initialMinute);
        }
    }, [defaultValue]);

    const hourOptions = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].map((number) =>
        <option key={number} value={number.toString().padStart(2, "0")}>{number.toString().padStart(2, "0")}</option>
    );

    const minuteOptions = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map((number) =>
        <option key={number} value={number.toString().padStart(2, "0")}>{number.toString().padStart(2, "0")}</option>
    );

		const handlePickerChange = () => {
			onChange(`${hour}:${minute}`);
		};
		useEffect(() => {
			handlePickerChange()
		}, [hour, minute]);
    
    return (
        <div className={`${cl.time_picker} ${isPickerActive ? 'active' : ''}`} onBlur={() => setIsPickerActive(false)} tabIndex="0">
            <select className={cl.time_picker__select} value={hour} onChange={(e) => { setHour(e.target.value);  }}>
                {hourOptions}
            </select>
            :
            <select className={cl.time_picker__select} value={minute} onChange={(e) => { setMinute(e.target.value);  }}>
                {minuteOptions}
            </select>
        </div>
    );
};

export default TimePicker;
