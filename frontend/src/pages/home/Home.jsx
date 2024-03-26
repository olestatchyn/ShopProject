import React from "react";
import main from "./../../style/style.module.css";
import cl from "./Home.module.scss";
import CreateCustomPizza from "../../components/create custom pizza/CreateCustomPizza";
import FeedbackForm from "../../components/feedback form/FeedbackForm";

import Menu from "../../components/menu/Menu";

import CarouselComponent from "../../components/carousel/Carousel";
import TextLogo from "../../components/UI/text-logo/TextLogo";
import RandomPizza from "../../components/random pizza/RandomPizza";

const Home = () => {
  return (
    <div className={cl.home}>
      <div className={main.container}>
          <RandomPizza />
          <Menu />
          <CreateCustomPizza />
      </div>
      <div className={cl.home__carousel}>
        <CarouselComponent />
        <TextLogo />
      </div>
      <FeedbackForm />
    </div>
  );
};

export default Home;
