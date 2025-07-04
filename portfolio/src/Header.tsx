import { Link } from "react-router-dom";
import Bgimg from "../src/assets/backgr.png";

const Header = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${Bgimg})`,
            }}
            className="text-white bg-gray-950 opacity-100 pt-10 pl-18 pr-20"
        >
            <nav className="flex gap-4 justify-between  ">
                <div className="flex gap-10">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/works">Works</Link>
                </div>
                <div>
                    <Link to="/contact">Get in Touch</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;
