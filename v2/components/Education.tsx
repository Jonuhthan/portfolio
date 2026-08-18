import Image from "next/image";
import SlideUp from "./SlideUp";

const Education = () => {
    return (
        <section
            id="education"
            className="min-h-screen flex flex-col items-center"
        >
            {/* title */}
            <h1 className="text-center font-bold text-4xl">
                Education
                <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded" />
            </h1>

            {/* content wrapper */}
            <SlideUp offset='-300px 0px -300px 0px'>           
                <div className="w-full max-w-6xl mx-auto px-4 mt-10 animate-slideUpCubiBezier animation-delay-2">
                    <div className="flex flex-col-reverse md:flex-row gap-10 items-stretch">
                    
                        {/* text content */}
                        <div className="md:w-1/2 text-center md:text-left text-xl">
                            <h1 className="text-2xl font-bold">
                                University of Virginia
                            </h1>

                            <p className="text-lg text-neutral-600 dark:text-neutral-400">
                                The College of Arts & Sciences
                            </p>

                            <div className="mt-4">
                                <p>B.A. in Computer Science, Minor in Data Science and Business</p>
                                <p>
                                    Expected Graduation: <span className="font-medium">Spring 2027</span>
                                </p>
                                <p>
                                    GPA: <span className="font-medium">4.0</span>
                                </p>
                            </div>

                            {/* coursework list */}
                            <div className="mt-6">
                                <h3 className="text-2xl font-semibold mb-2">Relevant Coursework</h3>
                                <div className="flex justify-center md:justify-start">
                                    <ul className="list-disc list-inside text-left space-y-1 text-neutral-600 dark:text-neutral-400">
                                        <li>Data Structures & Algorithms</li>
                                        <li>Discrete Mathematics and Theory</li>
                                        <li>Computer Systems & Organization</li>
                                        <li>Software Testing</li>
                                        <li>Foundations of Machine Learning</li>
                                        <li>Data Science Systems</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* uva image */}
                        <div className="md:w-1/2 flex justify-center items-center md:justify-end">
                            <Image
                                src="/uva.png"
                                alt="University of Virginia"
                                width={400}
                                height={400}
                                />
                        </div>
                    </div>
                </div>
            </SlideUp>
        </section>
    );
};

export default Education;