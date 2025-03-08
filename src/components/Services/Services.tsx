import { motion } from "framer-motion";
import {
    ArrowRight,
    BarChart2,
    Briefcase,
    Megaphone,
    ShoppingCart,
    Users
} from "lucide-react";
import "./services.css";

const services = [
    {
        id: 1,
        title: "Company Formation",
        description:
            "Build web-based solutions that enhance customer experience.",
        icon: <Briefcase className="service-icon" />,
        color: "bg-orange-100",
        iconColor: "text-orange-500"
    },
    {
        id: 2,
        title: "Company Secretarial Services",
        description:
            "Make data-driven decisions and utilize technology to reach business goals.",
        icon: <BarChart2 className="service-icon" />,
        color: "bg-orange-100",
        iconColor: "text-orange-500"
    },
    {
        id: 3,
        title: "Virtual Office Address",
        description:
            "Foster customer relationships by effectively serving your market.",
        icon: <Users className="service-icon" />,
        color: "bg-orange-100",
        iconColor: "text-orange-500"
    },
    {
        id: 4,
        title: "Annual Compliance Services",
        description:
            "Turn your ideas into modern products with our design experts.",
        icon: <Briefcase className="service-icon" />,
        color: "bg-orange-100",
        iconColor: "text-orange-500"
    },
    {
        id: 5,
        title: "Payroll Services",
        description:
            "Expand your business across the globe with minimal effort.",
        icon: <ShoppingCart className="service-icon" />,
        color: "bg-orange-100",
        iconColor: "text-orange-500"
    },
    {
        id: 6,
        title: "Bookkeeping Services",
        description:
            "Steering user behaviours with creative design, data insights & technology.",
        icon: <Megaphone className="service-icon" />,
        color: "bg-orange-100",
        iconColor: "text-orange-500"
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    }
};

const Services = () => {
    return (
        <section className="services-section py-16 px-4 md:px-6 lg:px-8">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-orange-500 font-medium uppercase tracking-wider">
                        WELCOME TO REGISTERKARO.IN
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                        Explore Our Services
                    </h2>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={item}
                            className="service-card bg-white p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div
                                className={`service-icon-wrapper ${service.color} p-4 rounded-lg inline-flex mb-4`}
                            >
                                <div className={`${service.iconColor}`}>
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {service.description}
                            </p>
                            <a
                                href="#"
                                className="learn-more-link inline-flex items-center text-gray-700 font-medium hover:text-orange-500 transition-colors"
                            >
                                Learn more{" "}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>

                            {/* Decorative element */}
                            {(service.id === 2 || service.id === 5) && (
                                <div className="decorative-line absolute right-0 top-1/2 h-16 w-0.5 bg-red-500 transform -translate-y-1/2"></div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-center mt-12"
                >
                    <a
                        href="#"
                        className="see-all-button bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md transition-colors"
                    >
                        See All Services
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
