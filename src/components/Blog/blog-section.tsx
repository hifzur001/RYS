import { ArrowUpRight } from "lucide-react";

const BlogSection = () => {
    const blogs = [
        {
            image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80",
            author: "Prabhash Mishra",
            date: "1 Jan 2023",
            tag: "Today",
            title: "Small business & Startup",
            description:
                "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
            categories: ["Tax & Audit", "Management"],
            link: "#"
        },
        {
            image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80",
            author: "Mahesh Kumar",
            date: "1 Jan 2023",
            title: "Scale-Up Company Offer",
            description:
                "Mental models are simple expressions of complex processes or relationships.",
            categories: ["Tax", "Research", "Compliance"],
            link: "#"
        },
        {
            image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80",
            author: "Rakhi Verma",
            date: "1 Jan 2023",
            title: "Growing Business Package",
            description:
                "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
            categories: ["Audit", "Money Back"],
            link: "#"
        },
        {
            image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80",
            author: "Karan Kumar",
            date: "1 Jan 2023",
            title: "Scale-Up Company Offer",
            description:
                "Collaboration can make our teams stronger, and our individual designs better.",
            categories: ["Money", "Management"],
            link: "#"
        },
        {
            image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80",
            author: "Richa Singh",
            date: "1 Jan 2023",
            title: "Scale-Up Company Offer",
            description:
                "JavaScript frameworks make development easy with extensive features and functionalities.",
            categories: ["Tax Return", "News", "Audit"],
            link: "#"
        },
        {
            image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80",
            author: "Miss Nora",
            date: "1 Jan 2023",
            title: "Scale-Up Company Offer",
            description:
                "Starting a community doesn't need to be complicated, but how do you get started?",
            categories: ["Private Limited Company", "Customer Success"],
            link: "#"
        }
    ];

    return (
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-orange-500 uppercase font-medium">
                        EXPLORE OUR BLOGS
                    </span>
                    <h2 className="text-3xl font-bold mt-2 text-gray-900">
                        Accelerate Digital Transformation
                    </h2>
                </div>

                {/* Display all blogs by default */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <div key={index} className="group">
                            <div className="overflow-hidden rounded-lg mb-4">
                                <img
                                    src={blog.image || "/placeholder.svg"}
                                    alt={blog.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center text-sm text-gray-500">
                                    <span>{blog.author}</span>
                                    <span className="mx-2">•</span>
                                    <span>{blog.date}</span>
                                    {blog.tag && (
                                        <>
                                            <span className="mx-2">•</span>
                                            <span className="text-orange-500">
                                                {blog.tag}
                                            </span>
                                        </>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold group-hover:text-orange-500 transition-colors flex items-center">
                                    <a href={blog.link}>{blog.title}</a>
                                    <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-gray-600">
                                    {blog.description}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {blog.categories.map(
                                        (category, catIndex) => (
                                            <span
                                                key={catIndex}
                                                className={`px-3 py-1 text-sm rounded-full ${
                                                    catIndex % 3 === 0
                                                        ? "bg-purple-100 text-purple-700"
                                                        : catIndex % 3 === 1
                                                        ? "bg-blue-100 text-blue-700"
                                                        : "bg-orange-100 text-orange-700"
                                                }`}
                                            >
                                                {category}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors">
                        Show more blogs
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
            </div>
        </section>
    );
};

export default BlogSection;
