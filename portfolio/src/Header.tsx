import Bgimg from "../../portfolio/src/assets/backgr.png"


const Header  = () => {
    return (
        <div style={{
            backgroundImage: `url($Bgimg)`,
        }}
            className="text-white bg-gray-950 opacity-100  p-8">
                <a href="">Home</a> 
                <a href="">About</a> 
                <a href="">Works</a> 
                <a href="">Get in touche</a> 
        </div>
    )
}


export default Header