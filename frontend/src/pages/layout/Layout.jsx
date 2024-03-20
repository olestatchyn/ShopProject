import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/UI/header/Header";
import Footer from "../../components/UI/footer/Footer";
import ScrollToTopButton from "../../components/UI/ScrollToTopButton/ScrollToTopButton";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
