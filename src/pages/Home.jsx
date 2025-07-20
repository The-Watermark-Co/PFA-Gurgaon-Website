import Navbar from "../components/Navbar"
import dog from "../assets/dog.png"
import girl from "../assets/girl-with-cat.png"
import { MdOutlineArrowOutward, MdArrowForwardIos } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { BiDonateHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
import rescue from '../assets/rescue.png'
import cow from '../assets/cow.png'
// import Donate from "./Donate";

const Home = () => {
  return (
    <div className="w-full h-full min-h-screen bg-zinc-100">
            <Navbar />
            <div className="main w-full p-4 mt-24 flex items-center flex-col relative">
              {/* upper heading section */}
              <div className="tablet:max-w-[35rem] absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center flex-col ">
                  <h1 className="text-[2rem]">Give Hope. Save Lives.</h1>
                  <p className="text-sm text-center"> Join People for Animals – Gurgaon in rescuing, treating, and rehoming animals in need. Your compassion can change lives.</p>
              </div>
              {/* cards section */}
              <div className="w-full h-[26rem] flex justify-center items-end mt-28 gap-3 py-4 bg">

                {/* 1st card */}
                <div className="w-56 h-[28rem] flex flex-col gap-3">
                  <div className="w-full h-[18rem] rounded-b-[3rem] rounded-t-3xl bg-[#eca49c] flex flex-col p-3">
                    <div className="h-52 w-full"><img src={dog} alt="An image of dog" className="h-full w-full"/></div>
                    <div className="w-full h-[calc(100%-13rem)] bg-[#efb2ab] rounded-[3rem] flex justify-between items-center py-3 pr-2 pl-4">
                      <h4 className="text-xs font-medium">View Animals for donations</h4>
                      <h4 className="p-2 bg-[#90d8d1] rounded-full cursor-pointer hover:scale-110 transition">
                        <Link to="/donate"><i className="text-3xl"><MdOutlineArrowOutward /></i></Link>
                      </h4>
                    </div>
                  </div>
                  <div className="w-full h-[calc(100%-18rem)] bg-zinc-800 rounded-[3rem] py-4 px-5 flex flex-col items-center justify-center gap-2">
                    <div className="flex items-center gap-1">
                      <i className="text-4xl text-slate-50"><BiDonateHeart /></i>
                      <h4 className="newsreader font-bold text-slate-50 text-[1.2rem] leading-5">SPREAD THE LOVE</h4>
                    </div>
                    <div className="w-full py-2 px-3 rounded-lg border-2 border-slate-50 flex justify-center items-center text-[#76c2c3]">
                      <h4 className="text-xs">Donate Now</h4>
                      <Link to="/donate"><i className="text-xs"><MdArrowForwardIos /></i></Link>
                    </div>
                  </div>
                </div>

                {/* 2nd card */}
                <div className="relative w-56 h-80 rounded-b-[3rem] rounded-t-3xl overflow-hidden">
                  <img src={rescue} alt="" className="w-full h-full object-cover"/>
                  <div className="absolute inset-0 bg-black/50  z-10"></div>
                  <div className="absolute inset-0 flex items-end justify-center z-20 text-white text-lg font-semibold p-3 bottom-5">
                    <h4 className="newsreader text-slate-50 leading-5">Ambulance service for street animals</h4>
                  </div>
                </div>

                {/* 3rd card */}
                <div className="w-56 h-60 bg-[#c4c4c4] rounded-[3rem] p-3">
                  <div className="w-full h-40 flex items-center justify-center">
                    <h4 className="font-bold text-2xl text-center newsreader">Join, 1000+ People Donate</h4>
                  </div>
                  <div className="w-full h-[calc(100%-10rem)] bg-[#b4b4b4] rounded-[3rem] flex justify-between items-center py-3 pr-2 pl-4">
                      <h4 className="text-xs font-medium">Volunteer with Us</h4>
                      <h4 className="p-2 bg-[#000000] rounded-full cursor-pointer hover:scale-110 transition">
                        <Link to="/volunteer"><i className="text-3xl text-white"><MdOutlineArrowOutward /></i></Link>
                      </h4>
                    </div>
                </div>

                {/* 4th card */}
                <div className="relative w-56 h-80 rounded-b-[3rem] rounded-t-3xl overflow-hidden">
                  <img src={cow} alt="" className="w-full h-full object-cover"/>
                  <div className="absolute inset-0 flex items-end justify-center z-20 text-white text-lg font-semibold p-3 bottom-5">
                    <h4 className="newsreader text-slate-50 leading-5">Gauseva for injured and sick cows at our Gaushala</h4>
                  </div>
                </div>
                
                {/* 5th card */}
                <div className="w-56 h-[28rem] flex flex-col gap-3">
                  <div className="relative w-full h-[18rem] rounded-b-[3rem] rounded-t-3xl bg-[#90d8d1] flex flex-col p-3">
                    <h3 className="absolute top-2 right-4 font-bold text-2xl text-[#2e2e2e] newsreader">Gallery</h3>
                    <div className="h-52 w-full"><img src={girl} alt="An image of dog" className="h-full w-64 scale-110"/></div>
                    <div className="w-full h-[calc(100%-13rem)] bg-[#659893] rounded-[3rem] flex justify-between items-center py-3 pr-2 pl-3">
                      <h4 className="text-xs font-medium text-white">See All Our Moments</h4>
                      <h4 className="p-2 bg-black rounded-full cursor-pointer hover:scale-110 transition">
                        <Link to="/donate"><i className="text-3xl text-slate-50"><MdOutlineArrowOutward /></i></Link>
                      </h4>
                    </div>
                  </div>
                  <div className="w-full h-[calc(100%-18rem)] bg-zinc-800 rounded-[3rem] py-4 px-5 flex items-center justify-center gap-3 text-[#76c2c3]">
                    <i className="text-3xl"><FaRegHeart /></i>
                    <h4 className="text-[1.2rem] newsreader font-bold leading-5">Home for All Animals</h4>
                  </div>
                </div>

              </div>
            </div>
        </div>
  )
}

export default Home