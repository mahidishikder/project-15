import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Contact from "../pages/Contact/Contact";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/DashBoard";
import Cart from "../pages/Dashboard/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/contact_us',
        element: <Contact></Contact>
      },
      {
        path: '/our_menu',
        element: <OurMenu></OurMenu>
      },
      {
        path: '/our_shop',
        element: <OurShop></OurShop>
      },
      {
        path: '/secret',
        element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard/cart',
        element: <Cart></Cart>
      }
    ]
  }
]);
