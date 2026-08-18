import Image from "next/image";
import Link from "next/link";

const programming = [
    { skill: "Python", path: "/icons/python.svg" },
    { skill: "Java", path: "/icons/java.svg" },
    { skill: "JavaScript", path: "/icons/javascript.svg" },
    { skill: "C", path: "/icons/c.svg" },
    { skill: "Django", path: "/icons/django.svg" },
    { skill: "Flask", path: "/icons/flask.svg" },
    { skill: "React", path: "/icons/react.png" },
    { skill: "Node", path: "/icons/nodejs.svg" },
    { skill: "Tailwind CSS", path: "/icons/tailwind.svg" },
    { skill: "Material UI", path: "/icons/mui.svg" },
    { skill: "Bash", path: "/icons/bash.svg" },
    { skill: "SQLite", path: "/icons/sqlite.svg" },
    { skill: "PostgreSQL", path: "/icons/postgresql.svg" },
    { skill: "OpenCV", path: "/icons/opencv.png" },
    { skill: "NumPy", path: "/icons/numpy.svg" },
    { skill: "FastAPI", path: "/icons/fastapi.svg" } 
]

const tools = [
    { skill: "Git", path: "/icons/git.svg" },
    { skill: "Visual Studio Code", path: "/icons/vscode.svg" },
    { skill: "Pycharm", path: "/icons/pycharm.svg" },
    { skill: "IntelliJ", path: "/icons/intellij.svg" },
    { skill: "Eclipse", path: "/icons/eclipse.svg" },
    { skill: "Figma", path: "/icons/figma.svg" },
    { skill: "Jira", path: "/icons/jira.svg" },
]

const certifications = [
    { skill: "CompTIA ITF+", path: "/icons/itf+.png", url: "https://www.credly.com/badges/8c4cc210-bc96-4404-9e83-200407a24cc3/public_url"},
    { skill: "AWS Cloud Practitioner", path: "/icons/cloud_practitioner.png", url: "https://www.credly.com/badges/ee8dccb0-9c81-41fd-b206-7b33c9ef5fc7/public_url"}
]

const Skills = () => {
    return (
        <section
            id="skills"
            className="min-h-screen flex flex-col items-center"
        >
            {/* title */}
            <h1 className='text-center font-bold text-4xl'>
                Skills
                <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded" />
            </h1>

            {/* make them horizontally aligned */}

            {/* container for 3 sections */}
            <div className="flex flex-col space-y-10 items-center md:items-start justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row mt-10">
		        {/* languages/frameworks */}
                <div className='md:w-1/3'>
                    <h1 className="text-center text-2xl font-bold mb-6">
                        Programming
                    </h1>

                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                        {/* TODO: make skills in each row fill the rest of the horizontal space */}
                        {programming.map((item, idx) => {
                                return (
                                    <div 
                                        className="flex flex-grow flex-col items-center justify-center bg-gray-200 px-3 py-2 mr-2 mt-2 text-black rounded font-semibold hover:-translate-y-1 transition-transform"
                                        key={idx}
                                    >
                                        <div>
                                            <Image 
                                                src={item.path}
                                                alt={item.skill}
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        <p>{item.skill}</p>
                                    </div>
                                )
                        })}
                    </div>
                </div>

                {/* tools */}
		        <div className='md:w-1/3'>
                    <h1 className="text-center text-2xl font-bold mb-6">
                        Development Tools
                    </h1>

                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                        {tools.map((item, idx) => {
                            return (
                                <div 
                                    className="flex flex-grow flex-col items-center justify-center bg-gray-200 px-3 py-2 mr-2 mt-2 text-black rounded font-semibold hover:-translate-y-1 transition-transform"
                                    key={idx}
                                >
                                    <div>
                                        <Image 
                                            src={item.path}
                                            alt={item.skill}
                                            width={50}
                                            height={50}
                                        />
                                    </div>
                                    <p>{item.skill}</p>
                                </div>
                            )
                        })}
                    </div>
		        </div>

                {/* certifications */}
                <div className='w-full md:w-1/3'>
                    <h1 className="text-center text-2xl font-bold mb-6">
                    Certifications
                    </h1>
                    
                    {/* icon/url container */}
                    <div className="grid grid-cols-2 gap-2 justify-center z-10 md:justify-start">
                        {certifications.map((item, idx) => {
                            return (
                                <Link 
                                    key={idx}
                                    href={item.url} 
                                    target='_blank'
                                    className="relative aspect-square block"
                                >
                                    <Image
                                        alt={item.skill}
                                        src={item.path}
                                        fill
                                        className="object-contain bg-gray-200 px-3 py-2 mr-2 mt-2 text-black rounded hover:-translate-y-1 transition-transform cursor-pointer"
                                    />
                                </Link>
                            )
                        })}
                    </div>
                </div>
		    </div>
        </section>
    )
}

export default Skills;