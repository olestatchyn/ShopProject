import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import Basket from "../pages/basket/Basket";
import About from "../pages/about/About";
import PaymentAndDelivery from "../pages/payment_and_delivery/PaymentAndDelivery";
import Shares from "../pages/shares/Shares";
import { RequireAuth } from './RequireAuth'; 
import Admin from "../pages/admin/Admin";
import ErrorPage from "../pages/error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
		errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        path: "/basket",
        element: <RequireAuth><Basket /></RequireAuth>
      },
      {
        path: "/admin",
        element: <RequireAuth requiredRole="admin"><Admin /></RequireAuth>
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/payment_and_delivery",
        element: <PaymentAndDelivery />
      },
      {
        path: "/shares",
        element: <Shares />
      }
    ]
  }
]);
