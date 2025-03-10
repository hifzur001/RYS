import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import "./Expertise.css";

const expertiseData = [
    {
        title: "Branding",
        description:
            "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites."
    },
    {
        title: "UI Design",
        description:
            "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites."
    },
    {
        title: "UX Design",
        description:
            "I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements"
    },
    {
        title: "Development",
        description:
            "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach, I employ it to produce safe, top-notch personalized websites."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};

function Expertise() {
    return (
        <div className="min-h-screen bg-black text-white p-8 md:p-4">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-7xl mx-auto"
            >
                <motion.div
                    className="flex items-center gap-4 mb-16"
                    variants={itemVariants}
                >
                    <Sparkles className="w-8 h-8" />
                    <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
                        Expertise
                    </h1>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-16"
                    variants={containerVariants}
                >
                    {expertiseData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="space-y-4"
                        >
                            <h2 className="text-2xl font-semibold">
                                {item.title}
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Expertise;
