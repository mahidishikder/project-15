
import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Contact from "../pages/Contact/Contact";
import DashBoard from "../pages/DashBoard/DashBoard";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import Home from "../pages/Home/Home";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/contact_us',
        element:<Contact></Contact>
      },
      {
        path:'/dashboard',
        element:<DashBoard></DashBoard>
      },
      {
        path:'/our_menu',
        element:<OurMenu></OurMenu>
      },
      {
        path:'/our_shop',
        element:<OurShop></OurShop>
      }
    ]
  },
  
]);