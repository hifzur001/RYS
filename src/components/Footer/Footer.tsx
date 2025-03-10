import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import "../Banner/Banner.css";

const Footer = () => {
    return (
        <footer className="py-12 text-white bg-black">
            <div className="overflow-hidden whitespace-nowrap">
                <motion.div
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear"
                    }}
                    className="inline-block"
                >
                    <div className="flex items-center space-x-8 text-4xl tracking-wider marquetexts">
                        <span>FLOW</span>
                        <span className="text-2xl">★</span>
                        <span>FIGMA</span>
                        <span className="text-2xl">★</span>
                        <span>DESIGNER</span>
                        <span className="text-2xl">★</span>
                        <span>DEVELOPER</span>
                    </div>
                </motion.div>
            </div>

            <div className="px-4 mx-auto mt-20 max-w-7xl">
                <div className="mb-8 text-center">
                    <h2 className="mb-4 font-bold marquetexts syne">
                        LET'S TALK!
                    </h2>
                    <a
                        href="mailto:rehanurraihan@gmail.com"
                        className="inline-flex items-center text-xl hover:underline"
                    >
                        rehanurraihan@gmail.com
                        <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                </div>

                <div className="flex items-center justify-between mt-16">
                    <div>© Rehan - 2023</div>
                    <div className="flex space-x-8">
                        <a href="#" className="hover:underline">
                            Dribbble
                        </a>
                        <a href="#" className="hover:underline">
                            Behance
                        </a>
                        <a href="#" className="hover:underline">
                            Twitter
                        </a>
                        <a href="#" className="hover:underline">
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
