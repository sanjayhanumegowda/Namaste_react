import { Outlet, RouterProvider, createBrowserRouter } from "react-router";

import AboutUs from "./components/AboutUs";
import Body from "./components/Body";
import { ContactUs } from "./components/ContactUs";
import {Error} from "./components/Error"
import Header from "./components/Header";
import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRoute = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/about",
        element:<AboutUs />
      },
      {
        path:"/contactUs",
        element:<ContactUs />
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu />
      }
    ],
    errorElement:<Error/>
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
