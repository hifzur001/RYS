import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./brands.css";

const brandLogos = [
    {
        name: "Oracle",
        logo: "/logos/oracle.svg",
        width: 150,
        height: 30
    },
    {
        name: "Morpheus",
        logo: "/logos/morpheus.svg",
        width: 150,
        height: 30
    },
    {
        name: "Morpheus",
        logo: "/logos/morpheus.svg",
        width: 150,
        height: 30
    },
    {
        name: "Samsung",
        logo: "/logos/samsung.svg",
        width: 150,
        height: 30
    },
    {
        name: "Monday.com",
        logo: "/logos/monday.svg",
        width: 150,
        height: 30
    },
    {
        name: "Segment",
        logo: "/logos/segment.svg",
        width: 150,
        height: 30
    }
];

export default function Brands() {
    const [width, setWidth] = useState(0);
    const carousel = useRef(null);

    useEffect(() => {
        if (carousel.current) {
            setWidth(
                carousel.current.scrollWidth - carousel.current.offsetWidth
            );
        }
    }, []);

    return (
        <section className="brands-section py-16 px-4 md:px-6 lg:px-8">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Trusted By Over 100+ Startups and freelance businesses
                    </h2>
                </motion.div>

                <motion.div
                    ref={carousel}
                    className="brands-carousel overflow-hidden"
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="brands-inner-carousel flex items-center justify-center gap-8 md:gap-12 lg:gap-16"
                    >
                        {brandLogos.map((brand, index) => (
                            <motion.div
                                key={index}
                                className="brand-item min-w-[120px] md:min-w-[150px]"
                                whileHover={{ scale: 1.05 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10
                                }}
                            >
                                {/* Replace Image component with a regular <img> tag */}
                                <img
                                    src={brand.logo || "/placeholder.svg"}
                                    alt={brand.name}
                                    width={brand.width}
                                    height={brand.height}
                                    className="brand-logo"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
