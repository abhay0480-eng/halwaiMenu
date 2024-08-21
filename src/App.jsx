import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Parallax } from 'react-parallax';

const App = () => {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center fixed w-full z-50">
        <div className="text-2xl font-bold text-gray-800">Banquet Hall</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <ScrollLink to="home" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="menu" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">
                Menu Selection
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">
                Contact Us
              </ScrollLink>
            </li>
            <li>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Login</button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section with Parallax Effect */}
      <Parallax
        bgImage="/hero.jpg"
        strength={300}
        className="h-screen flex items-center justify-center"
      >
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-5xl font-bold mb-4">Select Your Perfect Menu</h1>
          <ScrollLink to="menu" smooth={true} duration={500}>
            <motion.button
              className="bg-blue-600 text-white px-8 py-3 rounded text-lg font-semibold hover:bg-blue-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Get Started
            </motion.button>
          </ScrollLink>
        </motion.div>
      </Parallax>

      {/* Menu Highlights */}
      <section id="menu" className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Popular Menus</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {/* Example Menu Card */}
          <motion.div
            className="bg-white p-6 rounded shadow hover:shadow-lg transform transition-transform duration-300"
            whileHover={{ translateY: -10, scale: 1.05 }}
          >
            <img src="/cholebature.jpg" alt="Dish" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">Royal Feast</h3>
            <p className="text-gray-600">A delightful assortment of traditional dishes.</p>
          </motion.div>
          {/* Repeat for more cards */}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6">What Our Clients Say</h2>
        <div className="flex justify-center">
          <motion.div
            className="w-11/12 md:w-2/3 p-6 bg-gray-50 rounded shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-gray-700">"The menu was perfect for our wedding! Guests loved the variety and the quality of the food."</p>
            <p className="mt-4 text-gray-500">- Happy Couple</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Banquet Hall. All rights reserved.</p>
          <p>Contact us: 123-456-7890 | info@banquethall.com</p>
        </div>
      </footer>
    </div>
  );
};

export default App;