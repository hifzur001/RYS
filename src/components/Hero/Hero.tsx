"use client";
import { motion } from "framer-motion";
import { Star, Play } from "lucide-react";
import heroImage from "../../assets/Images/heroban.png"; // Ensure the path is correct
import "./Hero.css";

const Hero = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    const services = [
        "Annual Compliance",
        "Payroll Services",
        "Company Formation",
        "Annual Compliance"
    ];

    return (
        <div className="hero-container relative overflow-hidden bg-gradient-to-br from-amber-50 to-white">
            <div className="container mx-auto px-4 py-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <div className="z-10">
                        <motion.div
                            custom={0}
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            className="flex items-center mb-4"
                        >
                            <Star className="text-amber-400 mr-2" size={20} />
                            <span className="font-medium">Google Rating</span>
                            <div className="ml-2 flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        fill="#FFBF00"
                                        color="#FFBF00"
                                        size={18}
                                        className="mr-0.5"
                                    />
                                ))}
                            </div>
                        </motion.div>

                        <motion.h1
                            custom={1}
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                        >
                            Your trusted partner
                            <br />
                            for compliance business needs
                        </motion.h1>

                        <motion.div
                            custom={2}
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            className="border-t border-gray-300 pt-6 mb-6 w-24"
                        ></motion.div>

                        <motion.p
                            custom={3}
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            className="text-lg text-gray-700 mb-8"
                        >
                            An online business compliance platform that helps
                            entrepreneurs and other individuals with various,{" "}
                            <span className="font-medium">
                                registrations, tax filings
                            </span>
                            , and other{" "}
                            <span className="font-medium">legal matters</span>.
                        </motion.p>

                        <motion.div
                            custom={4}
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            className="grid grid-cols-3 gap-4 mb-10"
                        >
                            <div className="stats-item">
                                <div className="flex items-center mb-1">
                                    <div className="stats-icon">
                                        <div className="grid grid-cols-2 gap-0.5">
                                            <div className="h-3 w-3 border border-amber-700"></div>
                                            <div className="h-3 w-3 border border-amber-700"></div>
                                            <div className="h-3 w-3 border border-amber-700"></div>
                                            <div className="h-3 w-3 border border-amber-700"></div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-amber-700">
                                    4.5+
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Customer Rating
                                </p>
                            </div>

                            <div className="stats-item">
                                <div className="flex items-center mb-1">
                                    <div className="stats-icon">
                                        <div className="flex">
                                            <div className="h-5 w-3 bg-amber-700 rounded-full mr-0.5"></div>
                                            <div className="h-6 w-3 bg-amber-700 rounded-full mr-0.5"></div>
                                            <div className="h-4 w-3 bg-amber-700 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-amber-700">
                                    20,000+
                                </h3>
                                <p className="text-sm text-gray-600">Clients</p>
                            </div>

                            <div className="stats-item">
                                <div className="flex items-center mb-1">
                                    <div className="stats-icon">
                                        <div className="handshake-icon">
                                            <div className="w-8 h-4 border-2 border-amber-700 rounded-md"></div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-amber-700">
                                    99.8%
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Financial Stability
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            custom={5}
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            className="flex flex-wrap gap-4"
                        >
                            <button className="talk-expert-btn bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors">
                                Talk An Expert
                            </button>
                            <button className="see-how-btn flex items-center text-gray-700 hover:text-gray-900">
                                <div className="bg-red-500 rounded-full p-1.5 mr-2">
                                    <Play
                                        fill="white"
                                        size={16}
                                        className="ml-0.5"
                                    />
                                </div>
                                See how it works
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Content - Illustration */}
                    <div className="relative hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative z-10"
                        >
                            {/* Magnifying glass */}

                            {/* Person image */}
                            <div className="person-illustration relative">
                                <img
                                    src={heroImage} // Use standard img tag
                                    alt="Business professional"
                                    width={500}
                                    height={400}
                                    className="absolute top-40 left-28 z-20"
                                />
                            </div>

                            {/* Target */}

                            {/* Laptop */}
                        </motion.div>

                        {/* Service cards */}
                        <div className="service-cards absolute right-0 top-0 bottom-0 flex flex-col justify-center gap-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: 0.5 + index * 0.2,
                                        duration: 0.5
                                    }}
                                    className="service-card bg-white py-3 px-6 rounded-lg shadow-md"
                                >
                                    {service}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
