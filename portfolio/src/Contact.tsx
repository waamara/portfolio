import Bgimg from "../../portfolio/src/assets/backgr.png"
import Linkedin from "../../portfolio/src/assets/email (7).png"
import Email from "../../portfolio/src/assets/email (1).png"
import Instagram from "../../portfolio/src/assets/Instagram.png"



const Contact = () => {
    return (


        <div style={{
            backgroundImage: `url($Bgimg)`,
        }}
            className="text-white bg-gray-950 opacity-100  p-8 h-screen">
            <div >
                <p className="text-3xl font-semibold pb-3">Let's Connect !</p>
                <p className="pb-4"> Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore</p>
            </div>
            <div>
                <p className="text-xl font-semibold pb-4">Contact</p>
                <div className=" flex flex-row">
                    <img src={Email} alt="email-asset" className="pb-2" />
                    <p>berbicheaymen@gmail.com</p>
                </div>
                <div className=" flex flex-row pb-4 pt-3">
                    <img src={Linkedin} alt="Linkedin-asset" />
                    <a href="linkedin.com/in/aymen-berbiche-772a13280">Reach me on LinkedIn</a>
                </div>
            </div>
            <div>
                <p className="text-xl font-semibold pb-4">Social Media </p>
                <div className="flex flex-row">
                    <img src={Instagram} alt="Instagram-icone" />
                    <p>visualsbyartam</p>
                </div>
                <div className="flex flex-row pt-4">
                    <img src={Instagram} alt="Instagram-icone" />
                    <p >visualsbyartam</p>
                </div>
            </div>
            <div className="flex flex-col mt-12">
                <input type="text" placeholder="Full Name" className="bg-white" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Message" />
                <button>Send Message </button>
            </div>
        </div>
    )
}


export default Contact