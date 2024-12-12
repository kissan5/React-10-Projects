import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaGithub className="text-xl" />,
    href: "https://github.com/kissan5",
  },
  {
    icon: <FaLinkedin className="text-xl hover:text-blue-500 transition-all duration-300" />,
    href: "https://www.linkedin.com/in/kishan-sah-9889651a0/",
  },
  {
    icon: <FaTwitter className="text-xl" />,
    href: "https://x.com/KissanShah",
  },
];

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-700">
          <div className="space-y-4">
            <motion.h3 
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Let's Connect
            </motion.h3>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          <div className="space-y-4">
            <motion.h3 
              className="text-lg font-semibold text-purple-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Quick Links
            </motion.h3>
            <motion.div 
              className="flex flex-col space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Projects</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
            </motion.div>
          </div>

          <div className="space-y-4">
            <motion.h3 
              className="text-lg font-semibold text-purple-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get in Touch
            </motion.h3>
            <motion.p 
              className="text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Feel free to reach out for collaborations or just a friendly hello 👋
            </motion.p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-4">
          <motion.p
            className="text-sm text-gray-400 mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Designed & Built with 💜 by Kishan Sah
          </motion.p>
          
          <motion.p
            className="text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            © {new Date().getFullYear()} All rights reserved | Made with React + Tailwind
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
