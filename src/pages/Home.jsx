import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import dog from "../assets/dog.png";
import girl from "../assets/girl-with-cat.png";
import { MdOutlineArrowOutward, MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { BiDonateHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
import rescue from "../assets/rescue.png";
import cow from "../assets/cow.png";
import thumbnail from "../assets/thumbnail.png";
import adopt from "../assets/adopt-dog.jpg"
import cows from "../assets/cow2.webp"
import image1 from "../assets/image1.png"
import hearts from "../assets/heartsOnHands.png"
import QuoteLeft from '../assets/QuoteLeft.png'
import QuoteRight from '../assets/QuoteRight.png'
import Maneka from '../assets/ManekaGandhi.png'
import vector1 from '../assets/Vector1.png'
import vector2 from '../assets/Vector2.png'
import frame1 from '../assets/frame1.png'
import frame2 from '../assets/frame2.png'


const Home = () => {
  return (
    <div className="w-full h-full min-h-screen bg-zinc-100">
      <Navbar />
      <div className="main w-full p-4 mt-24 flex items-center flex-col relative">
        {/* upper heading section */}
        <div className="tablet:max-w-[35rem] absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center flex-col ">
          <h1 className="text-[2rem]">Give Hope. Save Lives.</h1>
          <p className="text-sm text-center">
             Join People for Animals – Gurgaon in rescuing, treating, and
            rehoming animals in need. Your compassion can change lives.
          </p>
        </div>
        {/* cards section */}
        <div className="w-full h-[26rem] flex justify-center items-end mt-28 gap-3 py-4 bg">
          {/* 1st card */}
          <div className="w-56 h-[28rem] flex flex-col gap-3">
            <div className="w-full h-[18rem] rounded-b-[3rem] rounded-t-3xl bg-[#eca49c] flex flex-col p-3">
              <div className="h-52 w-full">
                <img
                  src={dog}
                  alt="An image of dog"
                  className="h-full w-full"
                />
              </div>
              <div className="w-full h-[calc(100%-13rem)] bg-[#efb2ab] rounded-[3rem] flex justify-between items-center py-3 pr-2 pl-4">
                <h4 className="text-xs font-medium">
                  View Animals for donations
                </h4>
                <h4 className="p-2 bg-[#90d8d1] rounded-full cursor-pointer hover:scale-110 transition">
                  <Link to="/donate">
                    <i className="text-3xl">
                      <MdOutlineArrowOutward />
                    </i>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="w-full h-[calc(100%-18rem)] bg-zinc-800 rounded-[3rem] py-4 px-5 flex flex-col items-center justify-center gap-2">
              <div className="flex items-center gap-1">
                <i className="text-4xl text-slate-50">
                  <BiDonateHeart />
                </i>
                <h4 className="newsreader font-bold text-slate-50 text-[1.2rem] leading-5">
                  SPREAD THE LOVE
                </h4>
              </div>
              <div className="w-full py-2 px-3 gap-2 rounded-lg border-2 border-slate-50 flex justify-center items-center text-[#76c2c3]">
                <h4 className="text-xs">Donate Now</h4>
                <Link to="/donate">
                  <i className="text-xs">
                    <MdArrowForwardIos />
                  </i>
                </Link>
              </div>
            </div>
          </div>

          {/* 2nd card */}
          <div className="relative w-56 h-80 rounded-b-[3rem] rounded-t-3xl overflow-hidden">
            <img src={rescue} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50  z-10"></div>
            <div className="absolute inset-0 flex items-end justify-center z-20 text-white text-lg font-semibold p-3 bottom-5">
              <h4 className="newsreader text-slate-50 leading-5">
                Ambulance service for street animals
              </h4>
            </div>
          </div>

          {/* 3rd card */}
          <div className="w-56 h-60 bg-[#c4c4c4] rounded-[3rem] p-3">
            <div className="w-full h-40 flex items-center justify-center">
              <h4 className="font-bold text-2xl text-center newsreader">
                Join, 1000+ People Donate
              </h4>
            </div>
            <div className="w-full h-[calc(100%-10rem)] bg-[#b4b4b4] rounded-[3rem] flex justify-between items-center py-3 pr-2 pl-4">
              <h4 className="text-xs font-medium">Volunteer with Us</h4>
              <h4 className="p-2 bg-[#000000] rounded-full cursor-pointer hover:scale-110 transition">
                <Link to="/volunteer">
                  <i className="text-3xl text-white">
                    <MdOutlineArrowOutward />
                  </i>
                </Link>
              </h4>
            </div>
          </div>

          {/* 4th card */}
          <div className="relative w-56 h-80 rounded-b-[3rem] rounded-t-3xl overflow-hidden">
            <img src={cow} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-end justify-center z-20 text-white text-lg font-semibold p-3 bottom-5">
              <h4 className="newsreader text-slate-50 leading-5">
                Gauseva for injured and sick cows at our Gaushala
              </h4>
            </div>
          </div>

          {/* 5th card */}
          <div className="w-56 h-[28rem] flex flex-col gap-3">
            <div className="relative w-full h-[18rem] rounded-b-[3rem] rounded-t-3xl bg-[#90d8d1] flex flex-col p-3">
              <h3 className="absolute top-2 right-4 font-bold text-2xl text-[#2e2e2e] newsreader">
                Gallery
              </h3>
              <div className="h-52 w-full">
                <img
                  src={girl}
                  alt="An image of dog"
                  className="h-full w-64 scale-110"
                />
              </div>
              <div className="w-full h-[calc(100%-13rem)] bg-[#659893] rounded-[3rem] flex justify-between items-center py-3 pr-2 pl-3">
                <h4 className="text-xs font-medium text-white">
                  See All Our Moments
                </h4>
                <h4 className="p-2 bg-black rounded-full cursor-pointer hover:scale-110 transition">
                  <Link to="/donate">
                    <i className="text-3xl text-slate-50">
                      <MdOutlineArrowOutward />
                    </i>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="w-full h-[calc(100%-18rem)] bg-zinc-800 rounded-[3rem] py-4 px-5 flex items-center justify-center gap-3 text-[#76c2c3]">
              <i className="text-3xl">
                <FaRegHeart />
              </i>
              <h4 className="text-[1.2rem] newsreader font-bold leading-5">
                Home for All Animals
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto bg-[#ffffff] flex flex-col justify-center items-center pt-12 pb-8 gap-8">
        {/* Know Us Section */}
        <div className="know-us w-4/5 h-auto">
          <div className="w-full flex justify-center items-center">
            <h4 className="text-2xl font-bold newsreader">GET TO KNOW US</h4>
          </div>

          <div className="w-full h-full flex justify-between items-center gap-4 mt-10 flex-wrap flex-col sm:flex-row">
            <div className="w-full h-full flex items-center sm:w-1/2">
              <div className="w-full h-full flex flex-col justify-center items-start gap-4">
                <div className="w-20 h-[0.3rem] rounded bg-[#76c2c3]"></div>
                <h4 className="text-2xl font-semibold newsreader">
                  Who We Are
                </h4>
                <p className="text-sm text-gray-700">
                  People for Animals (PFA) Gurgaon is a non-profit animal
                  welfare organization dedicated to rescuing, healing, and
                  rehoming street animals in distress. We work tirelessly to
                  promote compassion through treatment, education, and community
                  engagement.
                </p>
                <Link to="/about">
                  <div className="flex items-center gap-2 cursor-pointer text-[#76c2c3] border border-[#76c2c3] px-4 py-1 rounded-lg hover:bg-[#76c2c3] hover:text-white transition">
                    <h5 className="text-sm">Learn More</h5>
                    <i className="text-sm"><MdArrowForwardIos /></i>
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-full sm:w-[calc(50%-1rem)] h-full flex justify-center items-center">
              <img src={thumbnail} alt="" className="w-[90%]" />
            </div>
          </div>
        </div>

        {/* Upcoming events section */}
        <div className="upcoming-events w-4/5 h-auto">
          <div className="w-full h-full flex justify-between items-center gap-4 mt-10 flex-wrap flex-col sm:flex-row">
            <div className="w-full sm:w-[calc(50%-1rem)] h-full flex justify-center items-center">
              <div className="w-1/2 h-full flex justify-center items-center">
                <img src={adopt} alt="" className="w-[80%] rounded-tl-[60px] rounded-br-[60px]" />
              </div>
              <div className="w-1/2 h-full flex flex-col gap-4 justify-center items-center">
                <div>
                  <img src={cows} alt="" className="max-w-[80%] min-h-40 rounded-tl-[60px] object-cover rounded-br-[60px]" />
                </div>
                <div>
                  <img src={image1} alt="" className="w-[80%] min-h-40 rounded-tr-[60px] object-cover rounded-bl-[60px]" />
                </div>
              </div>
            </div>

            <div className="w-full h-full flex items-center sm:w-1/2">
              <div className="w-full h-full flex flex-col justify-center items-start gap-4">
                <div className="w-20 h-[0.3rem] rounded bg-[#76c2c3]"></div>
                <h4 className="text-2xl font-semibold newsreader">
                  Upcoming Events / Workshops
                </h4>
                <p className="text-sm text-gray-700">
                  From adoption drives to awareness campaigns and school workshops, we host events that bring people and animals closer.
                </p>
                <Link to="/about">
                  <div className="flex items-center gap-2 cursor-pointer text-[#76c2c3] border border-[#76c2c3] px-4 py-1 rounded-lg hover:bg-[#76c2c3] hover:text-white transition">
                    <h5 className="text-sm">Learn More</h5>
                    <i className="text-sm"><MdArrowForwardIos /></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick words section */}
        <div className="w-[90%] h-[30rem] sm:h-96 mt-10 bg-[#eca49c] sm:pt-12 px-4 sm:px-8 rounded-3xl flex items-center justify-center sm:justify-start flex-col relative">
          <h3 className="newsreader text-3xl font-bold uppercase">Quick Words</h3>
          <div className="sm:w-[85%] w-64 flex gap-4 mt-4 sm:mt-8">
            <div className="w-24">
              <img src={QuoteLeft} alt="" />
            </div>
            <p className="text-lg text-center">The mother is given a pride of place. She is expected to be strong and take care of her baby and herself. It takes healthy mothers to raise good citizen, and good citizens to build a great nation.</p>
            <div className="w-24">
              <img src={QuoteRight} alt="" />
            </div>
          </div>
          <h3 className="font-bold text-2xl mt-8">Maneka Gandhi</h3>
          <h4 className="text-xl uppercase tracking-[0.2rem]">Founder, PFA</h4>
          <img src={hearts} alt="" className="w-[30rem] absolute bottom-0"/>
        </div>

        {/* team section */}
        <div className="w-full h-auto pt-20 px-4 sm:px-16 flex flex-col bg-slate-100">
          <div className="w-full flex justify-center items-center">
            <h4 className="font-bold text-2xl newsreader">MEET THE TEAM</h4>
          </div>
          <div className="w-full flex gap-6 mt-10 flex-col sm:flex-row justify-center items-center ">
            <div className="w-full sm:w-1/2 h-60 sm:h-[30rem] overflow-hidden relative flex justify-center">
              <img src={vector1} alt="" className="w-full h-full absolute object-contain"/>
              <img src={vector2} alt="" className="w-full h-full absolute object-contain"/>
              <img src={Maneka} alt="" className="w-[90%] h-full absolute object-contain"/>
            </div>
            <div className="w-full sm:w-[48%] h-96 px-6 pb-10 sm:p-0 flex flex-col gap-6 justify-around">
              <div className="">
                <p className="text-xs tracking-[1px] leading-6"> With the huddles that motherhood can attract, i plan to be the rainbow on a rainy day. This is a purposefully driven entity that is set to support what motherliness encompasses.</p>
                <h6 className="text-base font-semibold mt-2">- Maneka Gandhi</h6>
              </div>
              <div className="w-full">
                <div>
                  <h4 className="font-semibold text-sm newsreader mb-4">Heroes</h4>
                </div>
                <div className="w-full relative flex items-center gap-6">
                  <h4 className="bg-white p-3 text-xl absolute rounded-full shadow-md left-[-20px]"><i><MdOutlineArrowBackIosNew /></i></h4>
                  <div className="sliderDiv w-full flex justify-center items-center gap-4">
                    <div className="">
                      <img src={frame1} alt="" />
                    </div>
                    <div>
                      <img src={frame2} alt="" />
                    </div>
                  </div>
                  <h4 className="bg-white p-3 text-xl absolute rounded-full shadow-md right-[-20px]"><i><MdArrowForwardIos /></i></h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* testimonial section */}

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
