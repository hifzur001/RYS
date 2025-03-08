"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    ChevronDown,
    Menu,
    X,
    Mail,
    Phone,
    Instagram,
    Facebook,
    Twitter,
    Linkedin
} from "lucide-react";
import Logo from "../../assets/Images/Logo.png";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (servicesOpen) setServicesOpen(false);
    };

    const toggleServices = (e) => {
        e.preventDefault();
        setServicesOpen(!servicesOpen);
    };

    return (
        <header className="w-full fixed top-0 left-0 z-50">
            {/* Top Bar */}
            <div className="bg-[#14426e] text-white py-2 px-4 md:px-8">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="mailto:www.registerkaro.in"
                            className="flex items-center text-sm hover:text-orange-300 transition-colors"
                        >
                            <Mail className="h-4 w-4 mr-1" />
                            <span>www.registerkaro.in</span>
                        </a>
                        <a
                            href="tel:+918447746183"
                            className="flex items-center text-sm hover:text-orange-300 transition-colors"
                        >
                            <Phone className="h-4 w-4 mr-1" />
                            <span>+918447746183</span>
                        </a>
                    </div>
                    <div className="flex items-center space-x-4 ml-auto">
                        <a
                            href="https://instagram.com"
                            aria-label="Instagram"
                            className="hover:text-orange-300 transition-colors"
                        >
                            <Instagram className="h-4 w-4" />
                        </a>
                        <a
                            href="https://facebook.com"
                            aria-label="Facebook"
                            className="hover:text-orange-300 transition-colors"
                        >
                            <Facebook className="h-4 w-4" />
                        </a>
                        <a
                            href="https://twitter.com"
                            aria-label="Twitter"
                            className="hover:text-orange-300 transition-colors"
                        >
                            <Twitter className="h-4 w-4" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            aria-label="LinkedIn"
                            className="hover:text-orange-300 transition-colors"
                        >
                            <Linkedin className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div
                className={`bg-white py-3 px-4 md:px-8 shadow-md transition-all duration-300 ${
                    scrolled ? "py-2" : "py-3"
                }`}
            >
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <div className="relative">
                            <img
                                src={Logo}
                                alt="RegisterKaro Logo"
                                className="h-10 md:h-12"
                            />
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <a
                            href="/"
                            className="text-gray-800 font-medium hover:text-orange-500 transition-colors"
                        >
                            Home
                        </a>
                        <div className="relative group">
                            <button
                                onClick={toggleServices}
                                className="flex items-center text-gray-800 font-medium hover:text-orange-500 transition-colors focus:outline-none"
                            >
                                Our Services
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="py-2">
                                    <a
                                        href="/services/registration"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                                    >
                                        Business Registration
                                    </a>
                                    <a
                                        href="/services/compliance"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                                    >
                                        Compliance Services
                                    </a>
                                    <a
                                        href="/services/tax"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                                    >
                                        Tax Services
                                    </a>
                                </div>
                            </div>
                        </div>
                        <a
                            href="/blog"
                            className="text-gray-800 font-medium hover:text-orange-500 transition-colors"
                        >
                            Blog
                        </a>
                        <a
                            href="/contact"
                            className="text-gray-800 font-medium hover:text-orange-500 transition-colors"
                        >
                            Contact Us
                        </a>
                        <a
                            href="/about"
                            className="text-gray-800 font-medium hover:text-orange-500 transition-colors"
                        >
                            About us
                        </a>
                    </nav>

                    {/* Search and CTA */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <button
                            aria-label="Search"
                            className="text-gray-600 hover:text-orange-500 transition-colors focus:outline-none"
                        >
                            <Search className="h-5 w-5" />
                        </button>
                        <a
                            href="/contact"
                            className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-md font-medium transition-colors"
                        >
                            Talk An Expert
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center space-x-4 lg:hidden">
                        <button
                            aria-label="Search"
                            className="text-gray-600 hover:text-orange-500 transition-colors focus:outline-none"
                        >
                            <Search className="h-5 w-5" />
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="text-gray-600 hover:text-orange-500 transition-colors focus:outline-none"
                            aria-label={isOpen ? "Close Menu" : "Open Menu"}
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-white border-t shadow-md overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4">
                            <nav className="flex flex-col space-y-4">
                                <a
                                    href="/"
                                    className="text-gray-800 font-medium py-2 hover:text-orange-500 transition-colors"
                                    onClick={toggleMenu}
                                >
                                    Home
                                </a>
                                <div>
                                    <button
                                        onClick={toggleServices}
                                        className="flex items-center justify-between w-full text-gray-800 font-medium py-2 hover:text-orange-500 transition-colors focus:outline-none"
                                    >
                                        <span>Our Services</span>
                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform duration-300 ${
                                                servicesOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {servicesOpen && (
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    height: 0
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    height: "auto"
                                                }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="pl-4 mt-2 border-l-2 border-orange-200"
                                            >
                                                <a
                                                    href="/services/registration"
                                                    className="block py-2 text-gray-700 hover:text-orange-500"
                                                    onClick={toggleMenu}
                                                >
                                                    Business Registration
                                                </a>
                                                <a
                                                    href="/services/compliance"
                                                    className="block py-2 text-gray-700 hover:text-orange-500"
                                                    onClick={toggleMenu}
                                                >
                                                    Compliance Services
                                                </a>
                                                <a
                                                    href="/services/tax"
                                                    className="block py-2 text-gray-700 hover:text-orange-500"
                                                    onClick={toggleMenu}
                                                >
                                                    Tax Services
                                                </a>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <a
                                    href="/blog"
                                    className="text-gray-800 font-medium py-2 hover:text-orange-500 transition-colors"
                                    onClick={toggleMenu}
                                >
                                    Blog
                                </a>
                                <a
                                    href="/contact"
                                    className="text-gray-800 font-medium py-2 hover:text-orange-500 transition-colors"
                                    onClick={toggleMenu}
                                >
                                    Contact Us
                                </a>
                                <a
                                    href="/about"
                                    className="text-gray-800 font-medium py-2 hover:text-orange-500 transition-colors"
                                    onClick={toggleMenu}
                                >
                                    About us
                                </a>
                                <div className="pt-2">
                                    <a
                                        href="/contact"
                                        className="inline-block bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-md font-medium transition-colors"
                                        onClick={toggleMenu}
                                    >
                                        Talk An Expert
                                    </a>
                                </div>
                                <div className="pt-4 flex flex-col space-y-2 border-t border-gray-100">
                                    <a
                                        href="mailto:www.registerkaro.in"
                                        className="flex items-center text-sm text-gray-600 hover:text-orange-500 transition-colors"
                                    >
                                        <Mail className="h-4 w-4 mr-2" />
                                        <span>www.registerkaro.in</span>
                                    </a>
                                    <a
                                        href="tel:+918447746183"
                                        className="flex items-center text-sm text-gray-600 hover:text-orange-500 transition-colors"
                                    >
                                        <Phone className="h-4 w-4 mr-2" />
                                        <span>+918447746183</span>
                                    </a>
                                    <div className="flex items-center space-x-4 pt-2">
                                        <a
                                            href="https://instagram.com"
                                            aria-label="Instagram"
                                            className="text-gray-600 hover:text-orange-500 transition-colors"
                                        >
                                            <Instagram className="h-5 w-5" />
                                        </a>
                                        <a
                                            href="https://facebook.com"
                                            aria-label="Facebook"
                                            className="text-gray-600 hover:text-orange-500 transition-colors"
                                        >
                                            <Facebook className="h-5 w-5" />
                                        </a>
                                        <a
                                            href="https://twitter.com"
                                            aria-label="Twitter"
                                            className="text-gray-600 hover:text-orange-500 transition-colors"
                                        >
                                            <Twitter className="h-5 w-5" />
                                        </a>
                                        <a
                                            href="https://linkedin.com"
                                            aria-label="LinkedIn"
                                            className="text-gray-600 hover:text-orange-500 transition-colors"
                                        >
                                            <Linkedin className="h-5 w-5" />
                                        </a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
