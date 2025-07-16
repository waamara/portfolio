
import Linkedin from "../../portfolio/src/assets/email (7).png"
import Email from "../../portfolio/src/assets/email (1).png"
import Instagram from "../../portfolio/src/assets/Instagram.png"



const Contact = () => {
    return (
        <div style={{
            backgroundImage: `url($Bgimg)`,
        }}
            className="text-white bg-[#0A0B10] bg-cover md:flex md:flex-row md:justify-around p-8 h-svh">
            <div className="bg-[#EAF4FF08] p-12 border-1 rounded-2xl border-[#A1CDFF14] ">
                <div >
                    <p className="text-3xl font-semibold pb-3">Let's Connect !</p>
                    <p className="pb-4"> Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore</p>
                    <div className="flex flex-col mt-12">
                        <div className="flex flex-col md:flex-row ">
                            <input type="text" placeholder="Full Name" className=" pt-5 pb-5 pl-2 mb-4" />
                            <input type="text" placeholder="Email" className=" pt-5 pb-5 pl-2 mb-4" />
                        </div>
                        <input type="text" placeholder="Message" className=" pt-5 pb-5 pl-2 mb-4" />
                        <button className="bg-[#4D8FCD] rounded-xl  w-[150px] h-[50px]  font-semibold ">Send Message </button>
                    </div> </div>
            </div>
            <div>
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
            </div>
        </div>
    )
}


export default Contact