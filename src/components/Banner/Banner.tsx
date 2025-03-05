import React from "react";
import "./Banner.css";
import Rec1 from "../../assets/Images/Rectangle.png";
import Rec2 from "../../assets/Images/Rectangle2.png";
import Rec3 from "../../assets/Images/doradesign.png";
import Rec4 from "../../assets/Images/wavefun.png";
import Rec5 from "../../assets/Images/bg-1.png";
import { motion } from "framer-motion";

const Banner: React.FC = () => {
    return (
        <div className="flex flex-col justify-center min-h-screen text-white bg-black">
            <div className="container px-4 mx-auto">
                <div className="m-auto">
                    {/* Main headline with image inserts */}
                    <motion.h1
                        className="font-extrabold leading-none tracking-widest text-center syne mainHeading"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        I AM A
                        <span className="inline-block mx-2 overflow-hidden align-middle rounded-lg">
                            <motion.img
                                src={Rec1}
                                alt="Neon lights"
                                className="object-cover w-full h-full"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                        </span>
                        FREELANCE
                    </motion.h1>
                    {/* DESIGNER text animation with different effect */}
                    <motion.h1
                        className="font-extrabold leading-none tracking-widest text-center syne mainHeading"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: "easeOut",
                            delay: 0.3
                        }}
                    >
                        DESIGNER
                        <span className="inline-block mx-2 overflow-hidden align-middle rounded-lg">
                            <motion.img
                                src={Rec2}
                                alt="Design portfolio"
                                className="object-cover w-full h-full"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                        </span>
                        FROM
                    </motion.h1>
                    {/* SAN FRANCISCO text with a bounce effect */}
                    <motion.h1
                        className="font-extrabold leading-none tracking-widest text-center syne mainHeading"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.6,
                            type: "spring",
                            stiffness: 100,
                            damping: 20
                        }}
                    >
                        SAN FRANCISCO
                    </motion.h1>

                    {/* Client logos section with different animations */}
                    <motion.div
                        className="grid items-center grid-cols-1 gap-10 mt-20 md:grid-cols-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1.5,
                            ease: "easeOut",
                            delay: 1
                        }}
                    >
                        <motion.img
                            src={Rec3}
                            alt="Design portfolio"
                            className="w-[120px] object-cover"
                            initial={{ opacity: 0, scale: 1.2 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                                delay: 1.8
                            }}
                        />
                        <motion.img
                            src={Rec4}
                            alt="Design portfolio"
                            className="w-[100px] object-cover"
                            initial={{ opacity: 0, scale: 1.2 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                                delay: 1.8
                            }}
                        />
                        <motion.img
                            src={Rec5}
                            alt="Design portfolio"
                            className="w-[100px] object-cover"
                            initial={{ opacity: 0, scale: 1.2 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                                delay: 1.8
                            }}
                        />
                        <motion.div
                            className="text-left"
                            initial={{ opacity: 0, scale: 1.2 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                                delay: 1.8
                            }}
                        >
                            <p className="text-[16px] leading-relaxed hellothere">
                                Welcome to my portfolio. Here, artistry meets
                                functionality. Dive into a curated showcase of
                                distinctive branding.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
