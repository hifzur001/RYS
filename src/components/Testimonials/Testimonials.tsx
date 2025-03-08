import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export function Testimonials() {
    const testimonials = [
        {
            content:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
            author: "Chris",
            position: "President and CEO, PrintReach, USA",
            avatar: "/placeholder.svg?height=60&width=60",
            rating: 4.5
        },
        {
            content:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
            author: "Chris",
            position: "President and CEO, PrintReach, USA",
            avatar: "/placeholder.svg?height=60&width=60",
            rating: 4.5
        },
        {
            content:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
            author: "Chris",
            position: "President and CEO, PrintReach, USA",
            avatar: "/placeholder.svg?height=60&width=60",
            rating: 4.5
        }
    ];

    return (
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold">
                        What people say about us
                    </h2>
                    <div className="flex space-x-2">
                        <button
                            className="p-2 bg-white text-blue-900 rounded-full hover:bg-gray-100 transition-colors"
                            title="Previous"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
                            title="Next"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white text-gray-800 p-6 rounded-lg"
                        >
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-5 w-5 ${
                                            i < Math.floor(testimonial.rating)
                                                ? "text-yellow-400 fill-yellow-400"
                                                : i < testimonial.rating
                                                ? "text-yellow-400 fill-yellow-400 half-filled"
                                                : "text-gray-300"
                                        }`}
                                    />
                                ))}
                            </div>
                            <blockquote className="text-gray-600 mb-6">
                                "{testimonial.content}"
                            </blockquote>
                            <div className="flex items-center">
                                <img
                                    src={
                                        testimonial.avatar || "/placeholder.svg"
                                    }
                                    alt={testimonial.author}
                                    width={60}
                                    height={60}
                                    className="rounded-full mr-4"
                                />
                                <div>
                                    <div className="font-bold">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {testimonial.position}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-6 space-x-2">
                    {[...Array(5)].map((_, i) => (
                        <button
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                                i === 0 ? "bg-orange-500" : "bg-gray-400"
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
