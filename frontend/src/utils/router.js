import {createBrowserRouter} from "react-router-dom"
import Layout from "../pages/layout/layout"
import Home from "../pages/home/Home"
import Basket from "../pages/basket/Basket"
import About from "../pages/about/About"
import PaymentAndDelivery from "../pages/payment_and_delivery/PaymentAndDelivery"
import Shares from "../pages/shares/Shares"


export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		// error
		children: [
			{
				element: <Home />,
				index: true
			},
			{
				path: "/basket",
				element: <Basket />
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
])