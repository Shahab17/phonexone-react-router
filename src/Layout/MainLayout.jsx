import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";



const MainLayout = () => {
    return (
        <div >
            <Navbar></Navbar>
            
            <div className="container mx-auto my-12">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default MainLayout;