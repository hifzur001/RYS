import { motion } from "framer-motion";

export function HappyClients() {
    const clients = [
        { logo: "/placeholder.svg?height=60&width=60" },
        { logo: "/placeholder.svg?height=60&width=60" },
        { logo: "/placeholder.svg?height=60&width=60" },
        { logo: "/placeholder.svg?height=60&width=60" },
        { logo: "/placeholder.svg?height=60&width=60" },
        { logo: "/placeholder.svg?height=60&width=60" },
        { logo: "/placeholder.svg?height=60&width=60" },
        { logo: "/placeholder.svg?height=60&width=60" },
        { logo: "/placeholder.svg?height=60&width=60" },
        { logo: "/placeholder.svg?height=60&width=60" },
        { logo: "/placeholder.svg?height=60&width=60" },
        { logo: "/placeholder.svg?height=60&width=60" },
        { logo: "/placeholder.svg?height=60&width=60" },
        { logo: "/placeholder.svg?height=60&width=60" },
        { logo: "/placeholder.svg?height=60&width=60" }
    ];

    return (
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold">Our Happy Clients</h2>
                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                        Professionally cultivate one-to-one customer service
                        with robust ideas. Dynamically innovate
                        resource-leveling customer service for state of the art
                        customer service.
                    </p>
                </div>

                {/* Always visible client logos */}
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                >
                    <div className="flex flex-wrap justify-center gap-6">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-gray-200 flex items-center justify-center p-2 hover:shadow-md transition-shadow"
                            >
                                <img
                                    src={client.logo || "/placeholder.svg"}
                                    alt="Client logo"
                                    width={60}
                                    height={60}
                                    className="rounded-full"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <button className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium">
                            Show more
                            <svg
                                className="ml-1 w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
