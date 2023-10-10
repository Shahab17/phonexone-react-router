import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import { useEffect } from "react";



const MainLayout = () => {

    const location = useLocation()
    
    useEffect(() => {
        console.log(location.pathname)

        if(location.pathname === '/'){
            document.title = 'Home'
        }else{
            document.title = `${location.pathname.replace('/','')}`
        }
        if(location.state){ // eita holo product er nam soho dynamic vabe dekhabe 
            document.title = `${location.state}`
        }

    }, [location.pathname, location.state])

    return (
        <div >
            <Navbar></Navbar>

            <div className="container mx-auto px-5 my-12">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default MainLayout;