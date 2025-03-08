import { Apple, Play } from "lucide-react";

function MobileApp() {
    return (
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">
                        Manage Your Services by your Mobile Phone
                    </h2>
                </div>

                {/* Always visible content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="text-gray-300 mb-6">
                            Download our app to manage and track your services.
                            Our app enables you to stay in touch with our
                            experts and aids you in tracking your progress.
                        </p>
                        <h3 className="text-xl font-medium mb-4">
                            Get the App
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#"
                                className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                            >
                                <Apple className="h-6 w-6 text-black" />
                                <div>
                                    <div className="text-xs">Get it on</div>
                                    <div className="font-medium">App Store</div>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                            >
                                <Play className="h-6 w-6 text-black" />
                                <div>
                                    <div className="text-xs">Get it on</div>
                                    <div className="font-medium">
                                        Google Play
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <img
                            src="/placeholder.svg?height=300&width=300"
                            alt="Mobile app screenshot"
                            width={300}
                            height={300}
                            className="mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MobileApp;
