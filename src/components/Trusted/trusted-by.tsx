import { motion, AnimatePresence } from "framer-motion";

export function TrustedBy() {
    const companies = [
        { name: "Oracle", logo: "/placeholder.svg?height=40&width=120" },
        { name: "Morpheus", logo: "/placeholder.svg?height=40&width=120" },
        { name: "Morpheus", logo: "/placeholder.svg?height=40&width=120" },
        { name: "Samsung", logo: "/placeholder.svg?height=40&width=120" },
        { name: "Monday.com", logo: "/placeholder.svg?height=40&width=120" },
        { name: "Segment", logo: "/placeholder.svg?height=40&width=120" }
    ];

    return (
        <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-center w-full">
                        Trusted By Over 100+ Startups and freelance business
                    </h2>
                </div>

                <AnimatePresence>
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                            {companies.map((company, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center"
                                >
                                    <img
                                        src={company.logo || "/placeholder.svg"}
                                        alt={company.name}
                                        width={120}
                                        height={40}
                                        className="grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
