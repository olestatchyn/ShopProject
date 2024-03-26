

// import {DASHBOARD_PERMISSIONS, PERMISSIONS, USER_PROFILE_PERMISSIONS} from "../constants/permissions"
import Basket from "../pages/basket/Basket"
import PersonalDetails from "../pages/personal details/PersonalDetails"
import About from "../pages/about/About"
import Shares from "../pages/shares/Shares"
import Home from "../pages/home/Home"
import Admin from "../pages/admin/Admin"
import ErrorPage from "../pages/error/ErrorPage"
import PaymentAndDelivery from "../pages/payment_and_delivery/PaymentAndDelivery"

export const HomeRoute = {
	path: "/",
	name: "Home Route",
	element: <Home />,
	protectedRoute: false
}

export const BasketRoute = {
	path: "/basket",
	name: "Basket Route",
	element: <Basket />,
	protectedRoute: true, 
  requiredRole: null
}

export const PersonalDetailsRoute = {
	path: "/personal-details",
	name: "Personal Details Route",
	element: <PersonalDetails />,
	protectedRoute: true,
  requiredRole: null
}

export const AdminRoute = {
	path: "/admin",
	name: "Admin Route",
	element: <Admin />,
	protectedRoute: true,
	requiredRole: "Admin"
}

export const AboutRoute = {
	path: "/about",
	name: "About Route",
	element: <About />,
	protectedRoute: false
}

export const PaymentAndDeliveryRoute = {
	path: "/payment-and-delivery",
	name: "Payment and delivery Route",
	element: <PaymentAndDelivery />,
	protectedRoute: false
}

export const SharesRoute = {
	path: "/shares",
	name: "Shares Route",
	element: <Shares />,
	protectedRoute: false
}

export const ErrorRoute = {
	path: "/error",
	name: "Error",
	element: <ErrorPage />,
	protectedRoute: false,
}

export const routes = [
    HomeRoute,
    BasketRoute,
    PersonalDetailsRoute,
    AdminRoute,
    AboutRoute,
    PaymentAndDeliveryRoute,
    SharesRoute,
		ErrorRoute
]
