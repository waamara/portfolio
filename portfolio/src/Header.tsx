import { Link } from "react-router-dom";
import Bgimg from "../src/assets/backgr.png";

const Header = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${Bgimg})`,
            }}
            className="text-white bg-gray-950 opacity-100 p-8"
        >
            <nav className="flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/works">Works</Link>
                <Link to="/contact">Get in Touch</Link>
            </nav>
        </div>
    );
};

export default Header;
