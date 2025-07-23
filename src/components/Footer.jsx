import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer w-full h-auto">
        <div className="footer-top w-full h-auto p-8 flex justify-between flex-wrap gap-6">
            <div className="footer-left min-w-[30%] flex h-full">
                <h2 className="font-bold text-3xl text-[#90d8d1]">People For Animal</h2>
            </div>
            <div className="footer-right flex gap-6 flex-wrap">
                <div className="footer-link">
                    <h5><a href="">Home</a></h5>
                    <h5><a href="">News</a></h5>
                    <h5><a href="">Visit Us</a></h5>
                    <h5><a href="">About Us</a></h5>
                    <h5><a href="">Contact Us</a></h5>
                </div>
                <div className="footer-link">
                    <h5><a href="">Gallery</a></h5>
                    <h5><a href="">Blogs & News</a></h5>
                    <h5><a href="">Adopt an Animal</a></h5>
                    <h5><a href="">Donate</a></h5>
                </div>
                <div className="footer-link">
                    <h5><a href="">Legal Policies</a></h5>
                    <h5><a href="">Privacy</a></h5>
                    <h5><a href="">Cookies</a></h5>
                    <h5><a href="">Terms & Conditions</a></h5>
                </div>
            </div>
        </div>


        <div className="footer-bottom w-full flex justify-between items-center p-8 text-[#667085] flex-wrap gap-6">
            <div className="w-full sm:w-auto flex justify-center items-center gap-3">
                <i><a href=""><FiTwitter /></a></i>
                <i><a href=""><FaFacebookF /></a></i>
                <i><a href=""><FaYoutube /></a></i>
                <i><a href=""><FaInstagram /></a></i>
            </div>
            <div className="w-full sm:w-auto flex justify-center">
                <p className="text-sm">© 2025 Watermark.co. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer