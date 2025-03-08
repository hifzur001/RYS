import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-full bg-orange-500 rounded-l-full opacity-10"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500 rounded-full opacity-10"></div>
            <div className="absolute top-1/2 right-12 w-16 h-16 bg-orange-500 rounded-full opacity-10"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-6">
                    <span className="text-orange-500 uppercase font-medium">
                        WELCOME TO REGISTERKARO.IN
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">
                            About{" "}
                            <span className="text-orange-500">
                                Register Karo
                            </span>
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                We have been using Intelegencia as our DevOps
                                vendor for our field service applications over
                                the last couple of years and I'm extremely
                                pleased with their performance, ability to
                                execute, and willingness to adapt in our
                                ever-changing environment. Perry is an
                                outstanding leader who is fanatical about
                                customer satisfaction. He has built a solid team
                                which has consistently delivered on projects
                                thereby exceeding everyone's expectations.
                            </p>
                            <p>
                                I would strongly recommend their services to any
                                organization that is looking for solid,
                                reliable, and predictable outcomes.
                            </p>
                        </div>
                        <button className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors">
                            Learn More
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

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                                alt="Register Karo Team"
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;

