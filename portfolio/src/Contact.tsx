import  Location from "../src/assets/Cash Pin Map--Streamline-Ultimate (1).png" 
import Phone from "../src/assets/Phone Actions Receive--Streamline-Ultimate.png"
import Email from "../src/assets/Envelope--Streamline-Ultimate.png"

const Contact = () => {
    return (
        <div style={{
            backgroundImage: `url($Bgimg)`,
        }}
        
            className="text-white bg-[#0A0B10]   p-8 h-screen ">
            <hr className="text-[#A1CDFF1A] ml-8 mr-8" />
            <div className="flex flex-row pt-16 justify-around">
                <div className="bg-[#EAF4FF08] p-12 border-1 rounded-2xl border-[#A1CDFF14] h-[450px] w-[700px] ">                
                <div >
                    <p className="text-3xl font-semibold pb-3">Let's Connect !</p>
                    <p className="pb-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore</p>
                    <div className="flex flex-col mt-12">
                        <div className="flex flex-col md:flex-row space-x-20 ">
                            <input type="text" placeholder="Full Name" className=" border-[#A1CDFF1A] border-b-1 pt-5 pb-5 pl-2 mb-4 w-[250px]" />
                            <input type="text" placeholder="Email" className=" border-[#A1CDFF1A] border-b-1 pt-5 pb-5 pl-2 mb-4 w-[250px]" />
                        </div>
                        <input type="text" placeholder="Message" className=" border-[#A1CDFF1A] border-b-1 pt-5 pb-5 pl-2 mb-4 w-[580px]" />
                        <button className="bg-[#1E8BF2] mt-4 rounded-xl  w-[180px] h-[40px]  font-semibold ">Send Message </button>
                    </div> </div>
            </div>
            <div>
                <div>
                    <p className="text-2xl font-semibold pb-4">Ways to Reach Me</p>
                    <p>I'm available across multiple channels. Feel <br /> free to connect however it suits you best.</p>
                    <div className=" mt-4 border-b-1 border-b-[#55A4FF] p-2">
                        <a href="https://maps.app.goo.gl/gDqYRgsN18RdwNTS9 " className="flex flex-row space-x-4">
                            <p>Location</p>
                        <img src={Location} alt="Location Icone" />
                        <p>Algiers, Algeria</p>
                        </a>
                    </div>
                    <div className="  mt-4 border-b-1 border-b-[#55A4FF] p-2">
                        <a href="mailto:berbicheaymen@gmail.com" className=" flex flex-row space-x-3">
                            <p>Email</p>
                            <img src={Email} alt="Email icone" />
                            <p>berbicheaymen@gmail.com</p>
                        </a>
                    </div>
                    <div className="  mt-4 border-b-1 border-b-[#55A4FF] p-2">
                        <a href="tel:+2130658830028" className="flex flex-row space-x-3">
                             <p>Phone</p>
                        <img src={Phone} alt="Phone icone" />
                        <p>+2136588300028</p>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}


export default Contact