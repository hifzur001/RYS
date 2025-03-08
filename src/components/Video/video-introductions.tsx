import { motion } from "framer-motion";
import { Lightbulb, MessageSquare } from "lucide-react";

export function VideoIntroductions() {
    return (
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold">
                        Our Video Introductions
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-8">
                            <p className="text-gray-300">
                                Velit purus egestas tellus phasellus. Mattis
                                eget sed faucibus magna vulputate pellentesque a
                                diam tincidunt apis dui.
                            </p>

                            <div className="flex items-start space-x-4">
                                <div className="bg-orange-500 rounded-full p-3">
                                    <Lightbulb className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">
                                        Explore ideas together
                                    </h3>
                                    <p className="text-gray-300">
                                        Engage audience segments and finally
                                        create actionable insights. Amplify
                                        vertical integration.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-orange-500 rounded-full p-3">
                                    <MessageSquare className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">
                                        Bring those ideas to life
                                    </h3>
                                    <p className="text-gray-300">
                                        Engage audience segments and finally
                                        create actionable insights. Amplify
                                        vertical integration.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dncbdjcndjnc.jpg-9XrPSZa3e9BOvhXmeBYe8aRAJc7MiV.jpeg"
                                alt="Video thumbnail"
                                width={600}
                                height={400}
                                className="rounded-lg"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    className="bg-red-600 rounded-full p-4 hover:bg-red-700 transition-colors"
                                    title="Play video"
                                >
                                    <svg
                                        className="w-8 h-8 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
