import { FileText, CreditCard, UserCheck, Mail } from "lucide-react";

export function ApplicationProcess() {
    const steps = [
        {
            icon: <FileText className="h-6 w-6 text-white" />,
            title: "Fill up Application Form",
            color: "bg-orange-500"
        },
        {
            icon: <CreditCard className="h-6 w-6 text-white" />,
            title: "Make Online Payment",
            color: "bg-orange-500"
        },
        {
            icon: <UserCheck className="h-6 w-6 text-white" />,
            title: "Executive will Process Application",
            color: "bg-orange-500"
        },
        {
            icon: <Mail className="h-6 w-6 text-white" />,
            title: "Get Confirm Mail",
            color: "bg-orange-500"
        }
    ];

    return (
        <section className="py-8 px-4 md:py-12 md:px-6 lg:py-16 lg:px-8 bg-orange-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold">Application Process</h2>
                </div>

                {/* Always visible steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-4"
                        >
                            <div
                                className={`${step.color} rounded-full p-4 flex-shrink-0`}
                            >
                                {step.icon}
                            </div>
                            <span className="font-medium">{step.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
