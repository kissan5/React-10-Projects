import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

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

function HomePage() {
  return (
    <motion.div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4 md:p-8">
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
    </motion.div>
  );
}

export default HomePage;
