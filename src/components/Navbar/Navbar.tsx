import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="py-4 bg-black">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <span className="text-3xl font-bold text-white">
                            M.
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="items-center hidden space-x-8 md:flex">
                        <motion.a
                            href="#"
                            className="px-6 py-2 font-medium text-black bg-white rounded-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Home
                        </motion.a>
                        <motion.a
                            href="#"
                            className="text-white hover:text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            About
                        </motion.a>
                        <motion.a
                            href="#"
                            className="text-white hover:text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Projects
                        </motion.a>
                        <motion.a
                            href="#"
                            className="text-white hover:text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            Contact
                        </motion.a>
                    </div>

                    {/* Hire Me Button */}
                    <div className="hidden md:block">
                        <motion.a
                            href="#"
                            className="px-6 py-2 text-white transition-colors border border-white rounded-full hover:bg-white hover:text-black"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                        >
                            HIRE ME
                        </motion.a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 text-white rounded-md hover:text-gray-300 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X
                                    className="block w-6 h-6"
                                    aria-hidden="true"
                                />
                            ) : (
                                <Menu
                                    className="block w-6 h-6"
                                    aria-hidden="true"
                                />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <motion.div
                className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.6 }}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <motion.a
                        href="#"
                        className="block px-3 py-2 text-base font-medium text-black bg-white rounded-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Home
                    </motion.a>
                    <motion.a
                        href="#"
                        className="block px-3 py-2 text-base font-medium text-white rounded-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        About
                    </motion.a>
                    <motion.a
                        href="#"
                        className="block px-3 py-2 text-base font-medium text-white rounded-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Projects
                    </motion.a>
                    <motion.a
                        href="#"
                        className="block px-3 py-2 text-base font-medium text-white rounded-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Contact
                    </motion.a>
                    <motion.a
                        href="#"
                        className="block px-3 py-2 text-base font-medium text-white border border-white rounded-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        HIRE ME
                    </motion.a>
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
