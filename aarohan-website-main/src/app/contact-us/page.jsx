
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function ContactUs() {
    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden" 
             style={{ backgroundImage: "url('/assets/MainBG.png')" }}>
                <div className="container mx-auto px-8 mt-16 md:mt-8  sm:px-6 lg:px-20 py-8 sm:py-16">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl text-[#DC7D00] text-center  leading-tight  drop-shadow-[3px_3px_3px_white]">
                    CONTACT US
                </h1>
                <div className="text-center mt-6 ">
                    <h1 className="text-2xl sm:text-4xl uppercase text-[#DC7D00]">
                        Our Social Links
                    </h1>
                    <div className="flex justify-center gap-4 sm:gap-10 mt-8 text-white">
                        <a href="https://www.facebook.com/@arhn.nitd" className="bg-[#656565] p-3 sm:p-4 rounded-lg hover:bg-gray-700">
                            <FaFacebookF size={30} className="w-6 h-6 sm:w-10 sm:h-10" />
                        </a>
                        <a href="https://www.instagram.com/arhn.nitd?igsh=MWJtZjZpM29tbXhmeQ==" className="bg-[#656565] p-3 sm:p-4 rounded-lg hover:bg-gray-700">
                            <FaInstagram size={30} className="w-6 h-6 sm:w-10 sm:h-10" />
                        </a>
                        <a href="https://www.linkedin.com/posts/aarohan-nit-durgapur_aarohan2025-teamaavishkar-technomanagementfest-activity-7305963184010473472-FtjD?utm_source=share&utm_medium=member_android&rcm=ACoAAErbtVgBC-VakfV29X2EuheOzAlRcmwN-4U" className="bg-[#656565] p-3 sm:p-4 rounded-lg hover:bg-gray-700">
                            <FaLinkedinIn size={30} className="w-6 h-6 sm:w-10 sm:h-10" />
                        </a>
                        <a href="https://x.com/aarohan_nitdgp" className="bg-[#656565] p-3 sm:p-4 rounded-lg hover:bg-gray-700">
                            <FaTwitter size={30} className="w-6 h-6 sm:w-10 sm:h-10" />
                        </a>
                        <a href="https://whatsapp.com/channel/0029Vb8SWi9HVvTeOyDi2C2W" className="bg-[#656565] p-3 sm:p-4 rounded-lg hover:bg-gray-700">
                            <FaWhatsapp size={30} className="w-6 h-6 sm:w-10 sm:h-10" />
                        </a>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <h2 className="text-2xl sm:text-4xl uppercase text-[#DC7D00]">Send Us a Mail</h2>
                    <p className="text-sm sm:text-1xl mt-5 text-[#DC7D00]">Overall Coordinators, Aarohan 2025</p>
                    <div className="flex flex-wrap gap-4 mt-6 justify-center">
                        <a href="mailto:mntcnitd@gmail.com">
                            <button className="flex gap-3 bg-[#656565] items-center px-3 sm:px-5 py-2 sm:py-3 rounded-lg hover:bg-gray-700 w-full sm:w-[345px] text-white justify-center sm:justify-start  ml-0 ">
                                <FaEnvelope size={24} className="w-6 h-6 sm:w-8 sm:h-8" />
                                Tathagata Das
                            </button>
                        </a>
                        <a href="contact@nitdgplug.org">
                            <button className="flex gap-3 bg-[#656565] items-center px-3 sm:px-5 py-2 sm:py-3 rounded-lg hover:bg-gray-700 w-full sm:w-[345px] text-white justify-center sm:justify-start ml-0">
                                <FaEnvelope size={24} className="w-6 h-6 sm:w-8 sm:h-8" />
                                Suman Karmakar
                            </button>
                        </a>
                        <a href="mailto:convenerandhead@ccanitd.in">
                            <button className="flex gap-3 bg-[#656565] items-center px-3 sm:px-5 py-2 sm:py-3 rounded-lg hover:bg-gray-700 w-full sm:w-[345px] text-white justify-center sm:justify-start ml-0 ">
                                <FaEnvelope size={24} className="w-6 h-6 sm:w-8 sm:h-8" />
                                Rohan Agarwal
                            </button>
                        </a>
                        <a href="mailto:president.saeindia@nitdgp.ac.in">
                            <button className="flex gap-3 bg-[#656565] items-center px-3 sm:px-5 py-2 sm:py-3 rounded-lg hover:bg-gray-700 w-full sm:w-[345px] text-white justify-center sm:justify-start ml-0">
                                <FaEnvelope size={24} className="w-6 h-6 sm:w-8 sm:h-8" />
                                Siddharth Khandelwal
                            </button>
                        </a>
                        <a href="mailto:ar.21u10386@btech.nitdgp.ac.in" >
                            <button className="flex gap-3 bg-[#656565] px-3 sm:px-5 py-2 sm:py-3  items-center rounded-lg hover:bg-gray-700 w-full sm:w-[345px] text-white justify-center sm:justify-start ml-0 0">
                                <FaEnvelope size={24} className="w-6 h-6 sm:w-8 sm:h-8" />
                                Abhishek Ranjan
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}