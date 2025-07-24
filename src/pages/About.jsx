import Navbar from "../components/Navbar";
import abouthero from "../assets/abouthero.png"; 
import TeamCarousel from "../components/TeamCarousel";
import Testimonial from "../components/Testimonial";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const About = () => {
  return (
    <div className="w-full bg-zinc-100">
      <Navbar />

      {/*  Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative w-full h-[80vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${abouthero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay with smooth fade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black"
        ></motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative text-center px-6 max-w-2xl z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl">
            Compassion in Action: About People for Animals – Gurgaon
          </p>
        </motion.div>
      </motion.section>

      {/*  Who We Are */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full bg-white py-16 px-6 flex flex-col items-center text-left"
      >
        {/* Heading */}
        <div className="mb-8 py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 relative inline-block hover:scale-105 transition-transform duration-300">
            Who are we?
            <span className="absolute left-0 right-0 bottom-[-8px] mx-auto w-[200px] h-[4px] bg-lime-400 rounded-full"></span>
            <span className="absolute left-0 right-0 bottom-[-16px] mx-auto w-[200px] h-[4px] bg-lime-400 rounded-full"></span>
          </h2>
        </div>

        {/* Description */}
        <p className="max-w-3xl text-gray-600 leading-7 text-lg mb-16">
          At People for Animals – Gurgaon, compassion is our guiding principle. We
          are a dedicated team of animal lovers, medical professionals, and
          volunteers working tirelessly to rescue, treat, rehabilitate, and rehome
          animals in distress. Whether it’s a street dog hit by a vehicle or a cow
          abandoned due to illness, we’re here to help — because every life
          matters.
        </p>
      </motion.section>

      {/* What We Do & Vision */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full bg-gray-800 text-white py-16 px-6"
      >
        <div className="max-w-6xl mx-auto flex flex-row md:flex-row justify-between gap-12">
          {/* What We Do */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-300 mb-8">
              What We Do:
            </h2>
            <ul className="space-y-5 text-gray-300">
              {[
                "Ambulance Service – Emergency pickup and first aid for injured or sick street animals.",
                "Street Animal Treatment & Boarding – Safe recovery environment with 24/7 veterinary support.",
                "OPD Clinic – Affordable treatment for pet owners and community animals.",
                "Gaushala – Specialized care for injured and abandoned cows at our Gaushala.",
                "Sterilization Services – Population control of street dogs through ethical sterilization.",
                "Operation Theatre – Life-saving surgeries for severe injuries and illnesses."
              ].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="transition-all duration-300"
                >
                  <span className="text-teal-400 mr-2">●</span>{item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Our Vision */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-300 mb-8">
              Our Vision:
            </h2>
            <ul className="space-y-5 text-gray-300">
              {[
                "Swift Rescue Response – Ensure every injured or distressed animal receives timely and humane help.",
                "Accessible Animal Healthcare – Offer quality treatment through ambulances, OPD, and in-shelter care.",
                "Ethical Adoptions – Find safe, loving homes for our rescued animals through responsible adoption.",
                "Street Dog Sterilization – Control stray populations with ongoing sterilization and vaccination drives.",
                "Awareness & Education – Foster empathy in youth and citizens through workshops and outreach.",
                "Care for the Unadoptable – Provide lifelong shelter to disabled, blind, and aging animals."
              ].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="transition-all duration-300"
                >
                  <span className="text-teal-400 mr-2">●</span>{item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/*  Team Carousel */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16"
      >
        <TeamCarousel />
      </motion.section>

      {/* Testimonials */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16"
      >
        <Testimonial />
      </motion.section>
    </div>
  );
};

export default About;
