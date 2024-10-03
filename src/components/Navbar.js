import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50"> {/* Changed background to white */}
            <div className="container mx-auto p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-15 h-16 mr-3" />
                    <div className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-teal-500"> {/* Applied gradient */}
                        <Link to="/">Climate Troopers</Link>
                    </div>
                </div>
                <div className="hidden md:flex space-x-6">
                    <a href="#home" className="text-black hover:text-yellow-300">Home</a> {/* Changed link text color to black */}
                    <a href="#core-elements" className="text-black hover:text-yellow-300">Core Elements</a>
                    <a href="#our-projects" className="text-black hover:text-yellow-300">Our Projects</a>
                    <a href="#innovative-solutions" className="text-black hover:text-yellow-300">Innovative Solutions</a>
                    <a href="#contact" className="text-black hover:text-yellow-300">Contact</a>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden flex flex-col space-y-2 p-4 bg-gray-100 text-gray-800">
                    <a href="#home" className="hover:text-green-500">Home</a>
                    <a href="#core-elements" className="hover:text-green-500">Core Elements</a>
                    <a href="#our-projects" className="hover:text-green-500">Our Projects</a>
                    <a href="#innovative-solutions" className="hover:text-green-500">Innovative Solutions</a>
                    <a href="#contact" className="hover:text-green-500">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
