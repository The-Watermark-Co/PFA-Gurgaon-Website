// DonationPage.jsx - Original structure + animations added
import React, { useState } from "react";
import CountUp from "react-countup";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

const animalData = {
  cats: ["cat1.jpg"],
  dogs: ["dogs.png"],
  cows: ["cow1.jpg"],
  birds: ["bird1.jpg"],
  rabbits: ["rabbit1.jpg"]
};

const counters = [
  { value: 10000, label: "Adoption" },
  { value: 7000, label: "Rescued" },
  { value: 96000, label: "Clients" },
  { value: 10, label: "Services", suffix: "+" }
];

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const DonationPage = () => {
  const [activeAnimal, setActiveAnimal] = useState("dogs");
  const [isOpen, setIsOpen] = useState(false);

  const videoLink = "https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1";

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="font-sans text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="bg-[#EFAEA7] relative  py-24 font-questrial"
      >
        <div className="w-full flex flex-row  md:flex-row items-start md:items-end justify-between px-6">
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h1 className="text-6xl font-bold text-black mb-4 pl-6">
              Donate<span className="text-black">.</span>
            </h1>
            <motion.h2
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-8xl font-medium text-[#875a47] mb-6 pl-20"
            >
              Because Their Lives Matter.
            </motion.h2>
            <p className="text-[16px] leading-relaxed text-black max-w-xl pl-6 pr-2">
              Every rescue. Every surgery. Every meal. It all begins with your
              support. At PFA Gurgaon, we care for hundreds of injured,
              abandoned, and sick animals each month — and we can’t do it
              without you. Your donation powers ambulances, medicine, food,
              shelter, and most importantly — hope.
            </p>
          </motion.div>

          {/* Puppy Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute right-0 bottom-[-62px] transform -translate-x-1/2 z-10"
          >
            <img
              src="src/assets/puppy.png"
              alt="dog"
              className="w-[480px] md:w-[380px] object-contain"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Contribution Options */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-white py-12 px-6 text-center"
      >
        <h2 className="text-2xl font-semibold mb-10">How You Can Contribute</h2>

        {/* Divider with dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-10 flex justify-center"
        >
          <div className="absolute top-1/2 left-0 w-full border-t border-[#BDB5AC] z-0"></div>
          <div className="flex w-full max-w-3xl mx-auto justify-between relative z-10 px-8">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="rounded-full bg-[#D2C8BC] border border-[#BDB5AC] w-2 h-2 flex items-center justify-center"
              ></span>
            ))}
          </div>
        </motion.div>

        {/* Titles and Descriptions in a Row */}
        <div className="flex flex-row md:flex-row justify-center gap-12 max-w-4xl mx-auto">
          {[
            {
              title: "One-Time Donation",
              desc: "Support our current rescues and medical treatments."
            },
            {
              title: "Monthly Giving",
              desc: "Become a regular supporter and help us plan long-term care."
            },
            {
              title: "Sponsor an Animal",
              desc: "Cover food, care, and treatment for a specific animal each month."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex-1 min-w-[200px]"
            >
              <h3 className="text-xl font-medium mb-1 tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

     {/* Waiting Donation Section */}
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
  className="bg-[#fdfbfb] py-0 px-6 text-center overflow-hidden"
>
  <h2 className="text-xl font-semibold mb-6">Waiting Donation</h2>
  <div className="flex justify-center gap-4 mb-6 flex-wrap">
    {Object.keys(animalData).map((type) => (
      <motion.button
        key={type}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        onClick={() => setActiveAnimal(type)}
        className={`px-4 py-2 rounded-full text-sm transition-all ${
          activeAnimal === type
            ? "bg-[#aef2d2] text-black"
            : "bg-[#e6f6f1]"
        }`}
      >
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </motion.button>
    ))}
  </div>
  <AnimatePresence mode="wait">
    <motion.img
      key={activeAnimal}
      src={`src/assets/${animalData[activeAnimal][0]}`}
      alt={`${activeAnimal} group`}
      className="w-[620px] object-contain mx-auto"
      initial={{ opacity: 0, scale: 0.8, y: 80 }}
      animate={{ opacity: 1, scale: 1, y: 80 }}
      exit={{ opacity: 0, scale: 0.8, y: 80 }}
      transition={{ duration: 0.6 }}
    />
  </AnimatePresence>
</motion.section>

      {/* Why Donate Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-[#f7c6bc] py-16 px-6 text-center"
      >
        <h2 className="text-5xl font-semibold mb-4">
          Why Donate to PFA Gurgaon?
        </h2>
        <p className="uppercase text-sm text-gray-700 mb-4">
          Where Love and Care!
        </p>
        <p className="text-sm max-w-2xl mx-auto mb-6">
          Pets bring joy, comfort, and companionship into our lives. Proper
          care, love, and attention ensure they live happy, healthy lives by our
          side. Explore our range of specialized pet care offering.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="bg-[#5cd3c6] text-white px-6 py-2 rounded-full text-sm"
        >
          Donate Now
        </motion.button>

        {/* Features Around the Image */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-12 relative">
          {/* Left features */}
          <div className="flex flex-col gap-8 text-left text-sm max-w-xs">
            <div className="flex items-start gap-2">
              <span>🐾</span>
              <p>We rescue and treat 1000+ animals every year</p>
            </div>
            <div className="flex items-start gap-2">
              <span>🐾</span>
              <p>Sterilization & vaccination</p>
            </div>
            <div className="flex items-start gap-2">
              <span>🐾</span>
              <p>24/7 shelter with veterinary care and surgeries</p>
            </div>
          </div>

          {/* Center image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="-mb-10"
          >
            <img
              src="src/assets/dog&kitten.png"
              alt="dog and cat"
              className="w-[300px] md:w-[380px] object-contain"
            />
          </motion.div>

          {/* Right features */}
          <div className="flex flex-col gap-8 text-left text-sm max-w-xs">
            <div className="flex items-start gap-2">
              <span>🐾</span>
              <p>A dedicated Gaushala for injured cows</p>
            </div>
            <div className="flex items-start gap-2">
              <span>🐾</span>
              <p>Transparent usage of every rupee</p>
            </div>
            <div className="flex items-start gap-2">
              <span>🐾</span>
              <p>Outreach programs to build empathy in youth</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Stats Counter Bar */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="grid grid-cols-4 md:grid-cols-4"
      >
        {counters.map((item, i) => (
          <div
            key={i}
            className={`py-8 text-center ${
              i % 2 === 0 ? "bg-[#9bd7d4] text-white" : "bg-white text-black"
            }`}
          >
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold"
            >
              <CountUp
                end={item.value}
                duration={2}
                suffix={item.suffix || ""}
              />
            </motion.p>
            <p className="text-sm mt-1">{item.label}</p>
          </div>
        ))}
      </motion.section>

      {/* Video Player Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative py-16 px-6 text-center bg-cover bg-center h-[600px] flex justify-center items-center"
        style={{ backgroundImage: "url('src/assets/videooverlay.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Play Button */}
        <motion.button
          onClick={openModal}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-red-500"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M6.79 5.093a.5.5 0 0 0-.79.407v4.999a.5.5 0 0 0 .79.407l3.528-2.5a.5.5 0 0 0 0-.814l-3.528-2.5z" />
          </svg>
          <span className="absolute w-full h-full rounded-full bg-red-500/30 animate-ping"></span>
        </motion.button>

        {/* Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-xl w-1/2 h-[60%] relative p-4"
              >
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl"
                >
                  &times;
                </button>
                <iframe
                  width="100%"
                  height="100%"
                  src={videoLink}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-[#1e1e1e] text-white py-16 px-6 relative"
      >
        <h2 className="text-3xl text-center mb-10">Contact Us</h2>
        <div className="flex flex-row md:flex-row justify-around items-start gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-5 text-lg max-w-sm">
            <div className="flex items-center gap-3">
              <img
                src="src/assets/locationicon.png"
                alt="Location"
                className="w-6 h-6"
              />
              <p>Plot no. - 8-168, marlu, mahabubnagar, India.</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="src/assets/callicon.png"
                alt="Phone"
                className="w-6 h-6"
              />
              <p>948-675-8987</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form className="bg-[#eaeaea] border-2 border-blue-500 p-6 rounded-md shadow-md w-full max-w-sm">
            <input
              type="text"
              placeholder="Name"
              className="w-full mb-4 p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 p-2 border rounded"
            />
            <textarea
              placeholder="Message"
              className="w-full mb-4 p-2 border rounded"
              rows="4"
            ></textarea>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Submit
            </button>
          </form>
        </div>

        {/* Cat Image */}
        <img
          src="src/assets/contactcat.png"
          alt="cat"
          className="absolute bottom-0 left-10 w-400 z-10"
          style={{ transform: "translateY(20%)" }}
        />
      </motion.section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center text-sm text-gray-600">
        <p>Home | About | Services | Contact</p>
      </footer>
    </div>
  );
};

export default DonationPage;
