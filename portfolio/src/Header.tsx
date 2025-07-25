import { NavLink } from "react-router-dom";
import Bgimg from "../src/assets/backgr.png";
import Icone from "../src/assets/icon.png";

const Header = () => {
    return (
        <div className="text-white bg-[#0F0F0F] pt-10 pl-18 pr-20">
            <nav className="flex gap-4 justify-between">
                <div className="flex gap-10">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? "font-semibold text-shadow-gray-400" : "text-white"}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => isActive ? "font-semibold text-shadow-gray-400" : "text-white"}
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="/works" 
                        className={({ isActive }) => isActive ? " font-semibold text-shadow-gray-400" : "text-white"}
                    >
                        Works
                    </NavLink>
                </div>
                <div className="flex flex-row justify-center text-center gap-4">
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => isActive ? "font-semibold text-shadow-gray-400" : "text-white"}
                    >
                        Get in Touch
                    </NavLink>
                    <img src={Icone} alt="icon" className="w-[20px] h-[20px]" />
                </div>
            </nav>
        </div>
    );
};

export default Header;
