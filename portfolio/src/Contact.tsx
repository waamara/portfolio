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
                    <p className="text-2xl font-semibold pb-4">Ways to Reach Me</p>
                    <p>I'm available across multiple channels. Feel <br /> free to connect however it suits you best.</p>
                    <div className=" flex flex-row space-x-3 mt-4 border-b-1 border-b-[#55A4FF] p-2">
                        <p>Location</p>
                        <img src={Location} alt="Location Icone" />
                        <p>Algiers, Algeria</p>
                    </div>
                    <div className=" flex flex-row space-x-3 mt-4 border-b-1 border-b-[#55A4FF] p-2">
                        <p>Email</p>
                        <img src={Email} alt="Email icone" />
                        <p>berbicheaymen@gmail.com</p>
                    </div>
                    <div className=" flex flex-row space-x-3 mt-4 border-b-1 border-b-[#55A4FF] p-2">
                        <p>Phone</p>
                        <img src={Phone} alt="Phone icone" />
                        <p>06588300028</p>
                    </div>
                </div>
            </div>
            </div>
           
        </div>
    )
}


export default Contact