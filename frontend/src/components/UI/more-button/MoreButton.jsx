import MyButton from "../button/MyButton";
import cl from "./MoreButton.module.scss";
import React from "react";


const MoreButton = ({changePage}) => {
    return (
        <div className={cl.menu__more}>
            <MyButton className={cl.menu__more__button} onClick={changePage}>
                <div className={cl.menu__more__button__text}>
                    Показати ще
                </div>

            </MyButton>
        </div>
    );
}

export default MoreButton;