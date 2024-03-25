import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import { RequireAuth } from './RequireAuth'; 
import ErrorPage from "../pages/error/ErrorPage";
import { routes } from "./index";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: routes.map(({ path, element: Element, protectedRoute, requiredRole }, index) => {
      const WrappedElement = protectedRoute ? (
        <RequireAuth requiredRole={requiredRole}>{Element}</RequireAuth>
      ) : (
        Element
      );

      return {
        path: path,
        element: WrappedElement,
      };
    })
  }
]);