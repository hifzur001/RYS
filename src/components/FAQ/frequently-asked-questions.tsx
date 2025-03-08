import { useState } from "react";
import { ChevronRight } from "lucide-react";

export function FrequentlyAskedQuestions() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question:
                "Can I recover deleted files from desktop with this software?",
            answer: "Yes, our software allows you to recover deleted files from your desktop. It scans your storage devices for recoverable data and helps you restore files that have been accidentally deleted or lost due to various reasons."
        },
        {
            question: "How do I install the software?",
            answer: "Installation is simple. You can download the installer from our website, and once downloaded, follow the on-screen instructions to complete the installation process."
        },
        {
            question: "Is this software compatible with Mac and Windows?",
            answer: "Yes, the software is available for both Windows and macOS. You can download the appropriate version based on your operating system."
        },
        {
            question: "How long does the recovery process take?",
            answer: "The recovery process varies depending on the size of the storage device and the number of files to recover. It could take anywhere from a few minutes to several hours."
        },
        {
            question: "Can I recover files from an external hard drive?",
            answer: "Yes, you can recover files from external hard drives, USB drives, and other external storage devices."
        }
    ];

    const toggleAccordion = (index: number) => {
        if (openIndex === index) {
            setOpenIndex(null); // Close the accordion if it's already open
        } else {
            setOpenIndex(index); // Open the clicked accordion
        }
    };

    return (
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <span className="text-orange-500 uppercase font-medium">
                        FAQ
                    </span>
                    <h2 className="text-3xl font-bold mt-2 text-gray-900">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm border p-4"
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-left font-medium">
                                    {faq.question}
                                </span>
                                <ChevronRight
                                    className={`transition-transform ${
                                        openIndex === index
                                            ? "rotate-90"
                                            : "rotate-0"
                                    }`}
                                    style={{ width: "16px", height: "16px" }}
                                />
                            </div>
                            {openIndex === index && (
                                <div className="pt-4 text-gray-600">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <button className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors">
                        Show more
                        <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default FrequentlyAskedQuestions;
