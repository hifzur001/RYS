const FAQ = () => {
    const faqs = [
        {
            question: "What is your design process?",
            answer: "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design."
        },
        {
            question: "What tools and software do you use for UX design?",
            answer: "I primarily use industry-standard tools like Figma for UI/UX design, prototyping, and collaboration. Additionally, I work with various prototyping tools and coding frameworks to ensure the best possible user experience."
        },
        {
            question: "How do you measure the success of your UX designs?",
            answer: "Success is measured through a combination of quantitative and qualitative metrics, including user engagement, task completion rates, user satisfaction scores, and direct feedback from usability testing sessions."
        }
    ];

    return (
        <section className="py-20 text-white bg-black">
            <div className="px-4 mx-auto max-w-7xl">
                <h2 className="flex items-center mb-16 text-4xl font-bold">
                    <span className="mr-4">★</span>
                    Frequently asked questions
                </h2>

                <div className="space-y-16">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="pt-8 border-t border-gray-800"
                        >
                            <h3 className="mb-6 text-3xl font-bold">
                                {faq.question}
                            </h3>
                            <p className="max-w-4xl text-lg leading-relaxed text-gray-400">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
