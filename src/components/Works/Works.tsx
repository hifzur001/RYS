import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const worksData = [
    {
        title: "Analysis Application",
        description:
            "With user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
        image: "https://images.unsplash.com/photo-1627163439134-7a8c47e08208?auto=format&fit=crop&q=80&w=2532",
        tags: ["FIGMA", "UX"]
    },
    {
        title: "Fortknox Application",
        description:
            "With user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=2532",
        tags: ["MOBILE", "WEB"]
    },
    {
        title: "Zenocide Application",
        description:
            "With user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
        image: "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?auto=format&fit=crop&q=80&w=2532",
        tags: ["APP", "WEB"]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6
        }
    }
};

const cardVariants = {
    hidden: { scale: 0.95, opacity: 0.7 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

const hoverEffect = {
    scale: 1.05,
    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
    transition: {
        duration: 0.3,
        ease: "easeInOut"
    }
};

const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: "#F0F0F0" }
};

function Works() {
    return (
        <div className="min-h-screen p-8 text-white bg-black md:p-4">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="mx-auto max-w-7xl"
            >
                <div className="flex items-center justify-between mb-16">
                    <motion.div
                        className="flex items-center gap-4"
                        variants={itemVariants}
                    >
                        <Sparkles className="w-8 h-8" />
                        <h1 className="text-5xl font-bold tracking-wide md:text-6xl">
                            Works
                        </h1>
                    </motion.div>
                    <motion.a
                        href="#"
                        variants={itemVariants}
                        className="text-white transition-colors hover:text-gray-300"
                    >
                        View all
                    </motion.a>
                </div>

                <motion.div className="space-y-8" variants={containerVariants}>
                    {worksData.map((work, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="overflow-hidden bg-zinc-900 rounded-3xl"
                            whileHover={hoverEffect}
                        >
                            <div className="grid gap-8 md:grid-cols-2">
                                <div className="relative h-[300px] md:h-auto overflow-hidden">
                                    <motion.img
                                        src={work.image}
                                        alt={work.title}
                                        className="absolute inset-0 object-cover w-full h-full"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                                <div className="flex flex-col justify-between p-8 md:p-12">
                                    <div>
                                        <h2 className="mb-4 text-3xl font-semibold">
                                            {work.title}
                                        </h2>
                                        <p className="mb-6 text-gray-400">
                                            {work.description}
                                        </p>
                                        <div className="flex gap-3 mb-8">
                                            {work.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-4 py-1 text-sm rounded-full bg-zinc-800"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <motion.button
                                        className="self-start px-6 py-3 text-black transition-colors bg-white rounded-full hover:bg-gray-200"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                    >
                                        View Case Study
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Works;
