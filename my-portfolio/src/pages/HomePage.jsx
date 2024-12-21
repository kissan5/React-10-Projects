import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { HiOutlineDownload } from "react-icons/hi";

const socialLinks = [
  {
    icon: <FaGithub className="text-2xl" />,
    href: "https://github.com/kissan5",
  },
  {
    icon: <FaLinkedin className="text-2xl" />,
    href: "https://www.linkedin.com/in/kishan-sah-9889651a0/",
  },
  {
    icon: <FaTwitter className="text-2xl" />,
    href: "https://x.com/KissanShah",
  },
];

const designs = [
  "Design 1",
  "Design 2",
  "Design 3",
  "Design 4",
];

function HomePage() {
  return (
    <motion.div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4 md:p-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Hey, I'm Kishan
          </motion.h1>

          <div className="mt-4 text-xl md:text-2xl text-gray-300">
            <TypeAnimation
              sequence={[
                "Frontend Developer 💻",
                2000,
                "UI/UX Enthusiast 🎨",
                2000,
                "Problem Solver 🧩",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <motion.div
            className="flex gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            className="mt-12 text-lg md:text-xl text-gray-400 text-center max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Crafting digital experiences with a blend of creativity and code.
            Let's build something amazing together! ✨
          </motion.p>
        </div>
      </motion.div>

      {/* Showcase Designs Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          My Designs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {designs.map((design, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
            >
              <p className="text-lg text-gray-300">{design}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-purple-400">Graphic Design</h3>
            <p className="text-gray-300 mt-4">
              Creating visually stunning designs that resonate with your brand.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-purple-400">Digital Marketing</h3>
            <p className="text-gray-300 mt-4">
              Optimizing your online presence to reach the right audience.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-purple-400">UI/UX Design</h3>
            <p className="text-gray-300 mt-4">
              Designing user-friendly and aesthetically pleasing interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* Download CV Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          Download My CV
        </h2>
        <a
          href="/path/to/your-cv.pdf"
          download
          className="mt-8 inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-md transition-all"
        >
          <HiOutlineDownload className="mr-2 text-2xl" /> Download Now
        </a>
      </section>
    </motion.div>
  );
}

export default HomePage;
