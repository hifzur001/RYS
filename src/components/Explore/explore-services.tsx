import { motion } from "framer-motion";
import {
    Settings,
    BarChart3,
    Building,
    Users,
    ShoppingCart,
    BookOpen
} from "lucide-react";

export function ExploreServices() {
    const services = [
        {
            icon: <Settings className="h-10 w-10 text-orange-500" />,
            title: "Company Formation",
            description:
                "Build web-based solutions that enhance customer experience.",
            learnMore: "#"
        },
        {
            icon: <BarChart3 className="h-10 w-10 text-orange-500" />,
            title: "Company Secretarial Services",
            description:
                "Make data-driven decisions and utilize technology to reach business goals.",
            learnMore: "#"
        },
        {
            icon: <Building className="h-10 w-10 text-orange-500" />,
            title: "Virtual Office Address",
            description:
                "Foster customer relationships by effectively serving your market.",
            learnMore: "#"
        },
        {
            icon: <Users className="h-10 w-10 text-orange-500" />,
            title: "Annual Compliance Services",
            description:
                "Turn your ideas into modern products with our design experts.",
            learnMore: "#"
        },
        {
            icon: <ShoppingCart className="h-10 w-10 text-orange-500" />,
            title: "Payroll Services",
            description:
                "Expand your business across the globe with minimal effort.",
            learnMore: "#"
        },
        {
            icon: <BookOpen className="h-10 w-10 text-orange-500" />,
            title: "Bookkeeping Services",
            description:
                "Steering user behaviours with creative design, data insights & technology.",
            learnMore: "#"
        }
    ];

    return (
        <section className="py-16 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-orange-500 uppercase font-medium">
                        WELCOME TO REGISTERKARO.IN
                    </span>
                    <h2 className="text-3xl font-bold mt-2">
                        Explore Our Services
                    </h2>
                </div>

                {/* Always open section */}
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 p-6 rounded-lg relative group"
                            >
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {service.description}
                                </p>
                                <a
                                    href={service.learnMore}
                                    className="inline-flex items-center text-orange-500 hover:text-orange-600"
                                >
                                    Learn more
                                    <svg
                                        className="ml-1 w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
                        >
                            See All Services
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
