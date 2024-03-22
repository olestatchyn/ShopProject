import cl from "./BasketButton.module.scss";
import MyNavLink from "../nav-bar/MyNavLink";
import basket from "../../../source/home/basket2.svg";

const BasketButton = ({ countOfProduct }) => {
  return (
    <div className={`${cl.basket}`}>
      <div className={cl.button}>
        <MyNavLink to="basket" className={cl.basket__button}>
          <img src={basket} alt="basket" />
        </MyNavLink>
        <p>{countOfProduct}</p>
      </div>
    </div>
  );
};

export default BasketButton;
