import { Link } from "react-router-dom";
import Bgimg from "../src/assets/backgr.png";
import Icone from "../src/assets/icon.png"

const Header = () => {
    return (
        <div
            className="text-white bg-[#0F0F0F] pt-10 pl-18 pr-20"
        >
            <nav className="flex gap-4 justify-between  ">
                <div className="flex gap-10">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/works">Works</Link>
                </div>
                <div className="flex flex-row justify-center text-center gap-4">
                    <Link to="/contact">Get in Touch</Link>
                    <img src={Icone} alt="icone " className="w-[20px] h-[20px]" />
                </div>
            </nav>
        </div>
        
    );
};

export default Header;
