import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Offline from "./components/Offline";
import useOnlineStatus from "./utils/useOnlineStatus"

const AppLayout = () =>{
    const onlineStatus = useOnlineStatus();

  
    return(
        <div>
        <div className={onlineStatus?"app":"hidden"}>
            <Header />
            <Outlet />    
        </div>
        <div className={onlineStatus?"hidden":"flex"}> 
            <Offline />
        </div>
        </div>
    )
}

const  appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
            path: '/',
            element: <Body />
            }, 
            {
            path: '/about',
            element: <About />
            },
            {
            path: '/contact',
            element: <Contact />
            },
            {
            path: "/restaurant/:restaurantID",
            element: <RestaurantMenu />
            }
        ],
    errorElement: <Error />
    }
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)