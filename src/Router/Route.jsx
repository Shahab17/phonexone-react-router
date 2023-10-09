import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favorite from "../Pages/Favorite/Favorite";
import Login from "../Pages/Login/Login";
import PhoneDetails from "../Pages/PhoneDetails/PhoneDetails";



const myCreateRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/phones.json')

            },
            {
                path: '/favorite',
                element: <Favorite></Favorite>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/phones/:id',
                element: <PhoneDetails></PhoneDetails>,
                loader: () => fetch('/phones.json')
            }
        ]
    }
])

export default myCreateRouter;