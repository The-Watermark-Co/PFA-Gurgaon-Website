import { Link } from "react-router-dom"
import logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

const Navbar = () => {
  return (
      <div className="w-full h-[70px] px-8 py-4 bg-zinc-100 flex justify-between items-center sticky">
        <div className="w-[30%] flex items-center gap-10">
          <div className="">
            <img src={logo} className="w-16" />
          </div>
          <div className="flex justify-between items-center gap-3">
            <i><a href=""><FaFacebookF /></a></i>
            <i><a href=""><FaInstagram /></a></i>
            <i><a href=""><FiTwitter /></a></i>
            <i><a href=""><SlSocialLinkedin /></a></i>
          </div>
        </div>
        <div className="w-[70%] px-4 flex justify-end items-center desktop:gap-8 tablet:gap-4">
          <h3 className="navlink"><Link to="/">Home</Link></h3>
          <h3 className="navlink"><Link to="/about">About</Link></h3>
          <h3 className="navlink"><Link to="/volunteer">Volunteer</Link></h3>
          <h3 className="navlink"><Link to="/donate">Donate</Link></h3>
          <h3 className="navlink">Report</h3>
          <h3 className="navlink"><Link to="/contact">Contact</Link></h3>
          <h3 className="bg-[#90D8D1] py-2 px-3 rounded-3xl font-semibold cursor-pointer">Donate Now</h3>
        </div>
      </div> 
  )
}

export default Navbar