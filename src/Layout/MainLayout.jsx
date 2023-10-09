import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";



const MainLayout = () => {
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