import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
    id: number;
    name: string;
    company: string;
    image: string;
    text: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Floyd Miles",
        company: "eBay",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces&q=80",
        text: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers."
    },
    {
        id: 2,
        name: "Sarah Johnson",
        company: "Amazon",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces&q=80",
        text: "The platform made crafting my resume incredibly easy. The templates are modern and the interface is intuitive. I landed my dream job thanks to this tool!"
    },
    {
        id: 3,
        name: "Michael Chen",
        company: "Google",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces&q=80",
        text: "Outstanding resume builder that truly understands what employers are looking for. The customization options are endless and the results are professional."
    }
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="flex items-center justify-center p-8 text-white bg-black ">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center gap-2 mb-16">
                    <Sparkles className="w-6 h-6" />
                    <h2 className="text-4xl font-bold">What they say</h2>
                </div>

                <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
                    <div className="flex items-center gap-4">
                        <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="object-cover w-16 h-16 rounded-full"
                        />
                        <div>
                            <h3 className="text-xl font-semibold">
                                {testimonials[currentIndex].name}
                            </h3>
                            <p className="text-gray-400">
                                {testimonials[currentIndex].company}
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <AnimatePresence>
                            <motion.p
                                key={currentIndex} // This ensures that the element is unmounted before animating out
                                initial={{ opacity: 0, x: 50 }} // Start from opacity 0 and a slight horizontal offset
                                animate={{ opacity: 1, x: 0 }} // Animate to full opacity and original position
                                exit={{ opacity: 0, x: -50 }} // Animate out with fade and a slight horizontal shift
                                transition={{ duration: 0.5 }} // Transition duration
                                className="mb-8 text-xl leading-relaxed"
                            >
                                {testimonials[currentIndex].text}
                            </motion.p>
                        </AnimatePresence>

                        <div className="flex gap-4">
                            <button
                                onClick={handlePrevious}
                                className="p-4 transition-colors bg-gray-800 rounded-full hover:bg-gray-700"
                                aria-label="Previous testimonial"
                            >
                                <ArrowLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="p-4 transition-colors bg-gray-800 rounded-full hover:bg-gray-700"
                                aria-label="Next testimonial"
                            >
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
