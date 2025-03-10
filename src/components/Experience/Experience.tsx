import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import "./Experience.css";

const experienceData = [
    {
        position: "Lead Product Designer",
        company: "Fortknox",
        period: "Mar 2022 - Oct 2023"
    },
    {
        position: "Intern Designer",
        company: "OmniSafe",
        period: "Mar 2022 - Oct 2023"
    },
    {
        position: "UI Designer",
        company: "Doradesign",
        period: "Mar 2022 - Oct 2023"
    },
    {
        position: "Frontend Developer",
        company: "OpacityAuthor",
        period: "Mar 2022 - Oct 2023"
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

function Experience() {
    return (
        <div className="min-h-screen bg-black text-white p-8 md:p-4 pt-14">
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
                        Experience
                    </h1>
                </motion.div>

                <motion.div className="space-y-12" variants={containerVariants}>
                    {experienceData.map((experience, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="border-b border-zinc-800 pb-12 last:border-b-0"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                <h2 className="text-3xl md:text-4xl font-medium tracking-wide mb-2 md:mb-0">
                                    {experience.position}
                                </h2>
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                                    <span className="text-xl text-zinc-400">
                                        {experience.company}
                                    </span>
                                    <span className="text-lg text-zinc-600">
                                        {experience.period}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Experience;
