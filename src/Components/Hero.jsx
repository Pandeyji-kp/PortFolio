import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-4 md:px-12 bg-gray-900 text-white"
    >
      {/* Left: Text Content */}
      <div className="md:w-1/2 w-full mb-10 md:mb-0">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold"
        >
          Hi, I'm <span className="text-blue-500">Karan Pandey</span>
        </motion.h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0">
          A Back-End Developer focused on building robust, scalable APIs and seamless server-side logic to power modern applications.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="/cv"
            className="px-6 py-3 border border-blue-500 hover:bg-blue-500 rounded-full text-blue-500 hover:text-white transition duration-300"
          >
            View CV
          </a>
        </div>
      </div>

      {/* Right: Profile Image */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src={profileImg}
          alt="Karan Pandey"
          className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
