import { motion } from "framer-motion";

export default function PartnersSection() {
    const partners = [
        {
            name: "Coinbase",
            logo: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=300&h=100&fit=crop&q=80",
            width: 195,
            height: 32
        },
        {
            name: "Spotify",
            logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=300&h=100&fit=crop&q=80",
            width: 142,
            height: 44
        },
        {
            name: "Slack",
            logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=300&h=100&fit=crop&q=80",
            width: 142,
            height: 36
        },
        {
            name: "Dropbox",
            logo: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=300&h=100&fit=crop&q=80",
            width: 184,
            height: 38
        },
        {
            name: "Webflow",
            logo: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=300&h=100&fit=crop&q=80",
            width: 130,
            height: 32
        },
        {
            name: "Zoom",
            logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=100&fit=crop&q=80",
            width: 114,
            height: 32
        }
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
        <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden bg-white">
            <motion.div
                className="container mx-auto px-4 md:px-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <motion.div
                    className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
                    variants={containerVariants}
                >
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center justify-center"
                            variants={itemVariants}
                        >
                            <img
                                src={partner.logo}
                                alt={`${partner.name} brand`}
                                className="h-auto max-h-10 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                style={{
                                    width: partner.width,
                                    height: partner.height
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
