import { motion } from "framer-motion";

export default function StatsSection() {
    const stats = [
        { value: "1M", symbol: "+", label: "CUSTOMERS" },
        { value: "12", symbol: "+", label: "YEARS OF EXCELLENCE" },
        { value: "41", symbol: "+", label: "R&D ENGINEERS" },
        { value: "78", symbol: "+", label: "COUNTRIES" },
        { value: "3287", symbol: "+", label: "PARTNERS" },
        { value: "41", symbol: "+", label: "AWARDS RECEIVED" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-orange-500 font-medium mb-2 uppercase tracking-wide">
                        WHY REGISTER KARO
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#4A2800]">
                        Some Numbers are important
                    </h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center"
                            variants={itemVariants}
                        >
                            <h3 className="text-4xl md:text-5xl font-bold text-[#8B7355]">
                                {stat.value}
                                <span className="text-[#8B7355]">
                                    {stat.symbol}
                                </span>
                            </h3>
                            <p className="text-sm font-semibold text-gray-800 mt-2 text-center">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
