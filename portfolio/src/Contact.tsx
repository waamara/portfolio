import Bgimg from "../../portfolio/src/assets/backgr.png"



const Contact = () => {
    return (


        <div style={{
            backgroundImage: `url($Bgimg)`,
        }}
            className="text-white bg-gray-950 opacity-100  p-8">
                <div>
                    <p>Let's Connect !</p>
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore</p>
                </div>
                <div>
                    <p>Contact</p>
                    <div>
                        <img src="" alt="" /> 
                        <p>berbicheaymen@gmail.com</p>
                    </div>
                    <div>
                        <img src="" alt="" /> 
                        <a href="">Reach me on LinkedIn</a>
                    </div>
                </div>
                <div>
                    <p>Social Media </p>
                    <div>
                        <img src="" alt="" /> 
                        <p>visualsbyartam</p>
                    </div>
                    <div>
                        <img src="" alt="" /> 
                        <p>visualsbyartam</p>
                    </div>
                </div>
                <div>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <button>Send Message </button>
                </div>
        </div>
    )
}


export default Contact