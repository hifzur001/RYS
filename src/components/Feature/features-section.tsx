import { Shield, CheckCircle, SmilePlus, UserRound } from "lucide-react";

export default function FeaturesSection() {
    const features = [
        {
            icon: <Shield className="w-12 h-12 text-orange-500" />,
            title: "Confidential & Safe",
            description: "All your private information is safe with us",
            bgColor: "bg-red-50"
        },
        {
            icon: <CheckCircle className="w-12 h-12 text-green-500" />,
            title: "No Hidden Fee",
            description:
                "Everything is put before you with no hidden charges or conditions",
            bgColor: "bg-green-50"
        },
        {
            icon: <SmilePlus className="w-12 h-12 text-blue-500" />,
            title: "Guaranteed Satisfaction",
            description:
                "We ensure that you stay 100% satisfied with our offered services",
            bgColor: "bg-blue-50"
        },
        {
            icon: <UserRound className="w-12 h-12 text-red-500" />,
            title: "Expert CA/CS Assistance",
            description:
                "Prompt support from our in-house expert professionals",
            bgColor: "bg-red-100"
        },
        {
            icon: <Shield className="w-12 h-12 text-orange-500" />,
            title: "Confidential & Safe",
            description: "All your private information is safe with us",
            bgColor: "bg-green-50"
        }
    ];

    return (
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className=" mx-auto mb-12">
                    <h3 className="text-orange-500 font-medium mb-2 uppercase tracking-wide text-center md:text-left">
                        WHY REGISTERKARO.IN
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center md:text-left">
                        Why Choose Register Karo
                    </h2>
                    <p className="text-gray-700 text-center md:text-left">
                        It is with consistent services and results that build
                        trust with the people and that in turn help us to serve
                        the business better.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`${feature.bgColor} rounded-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105`}
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
