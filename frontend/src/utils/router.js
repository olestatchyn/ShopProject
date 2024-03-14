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
import { ABOUT_ROUTE, ADMIN_ROUTE, BASCKET_ROUTE, HOME_ROUTE, PAYMENT_AND_DELIVERY_ROUTE, SHARES_ROUTE} from "./consts";


export const router = createBrowserRouter([
  {
    path: HOME_ROUTE,
    element: <Layout />,
		errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        path: BASCKET_ROUTE,
        element: <RequireAuth><Basket /></RequireAuth>
      },
      {
        path: ADMIN_ROUTE,
        element: <RequireAuth requiredRole="admin"><Admin /></RequireAuth>
      },
      {
        path: ABOUT_ROUTE,
        element: <About />
      },
      {
        path: PAYMENT_AND_DELIVERY_ROUTE,
        element: <PaymentAndDelivery />
      },
      {
        path: SHARES_ROUTE,
        element: <Shares />
      }
    ]
  }
]);
