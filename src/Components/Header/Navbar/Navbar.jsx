import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between py-5 px-5 shadow ">
                <Logo></Logo>
                <ul className="flex gap-3 lg:gap-8 text-xl">

                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isActive ? "text-blue-500 " : isPending ? "pending" : ""
                        }>
                        Home
                    </NavLink>
                    <NavLink
                        to="/favorite"
                        className={({ isActive, isPending }) =>
                            isActive ? "text-blue-500 " : isPending ? "pending" : ""
                        }>
                        Favorite
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isActive ? "text-blue-500 " : isPending ? "pending" : ""
                        }>
                        LogIn
                    </NavLink>

                </ul>
            </nav>
        </div>
    );
};

export default Navbar;