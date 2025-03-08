import { Facebook, Instagram, ArrowUp } from "lucide-react";

export default function FooterSection() {
    const footerLinks = [
        {
            title: "START A BUSINESS",
            links: [
                "Features",
                "Solutions",
                "Integrations",
                "Enterprise",
                "Solutions"
            ]
        },
        {
            title: "GOVERNMENT REGISTRATION",
            links: ["Partners", "Community", "Developers", "App", "Blog"]
        },
        {
            title: "COMPLIANCE & TAX",
            links: ["Channels", "Scale", "Watch the Demo", "Our Competition"]
        },
        {
            title: "BIS & CDSCO",
            links: ["About Us", "News", "Leadership", "Media Kit"]
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="w-full py-12 md:py-16 lg:py-20 bg-[#001A52] text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-medium mb-4">
                            Design outstanding interfaces with advanced Figma
                            features in a matter of minutes.
                        </h3>
                        <div className="flex space-x-4 mt-6">
                            <a
                                href="#"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
                                    <span className="text-[#001A52] font-bold text-lg">
                                        G
                                    </span>
                                </span>
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                <span className="flex items-center justify-center w-6 h-6">
                                    <span className="text-white text-xl">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"></path>
                                        </svg>
                                    </span>
                                </span>
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {footerLinks.map((column, columnIndex) => (
                        <div key={columnIndex}>
                            <h3 className="text-orange-400 font-bold mb-4">
                                {column.title}
                            </h3>
                            <ul className="space-y-3">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-white transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mb-6">
                    <button
                        onClick={scrollToTop}
                        className="bg-orange-400 hover:bg-orange-500 transition-colors rounded-full p-3"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-6 h-6 text-white" />
                    </button>
                </div>

                <div className="text-center text-gray-400">
                    <p>© 2024 Registerkaro. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
