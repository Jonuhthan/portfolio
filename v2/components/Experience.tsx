import SlideUp from "./SlideUp";
import ExperienceCard from "./ExperienceCard";

const experiencesList = [
    {
        title: "Computing Support Intern",
        company: "University of Virginia Computer Science Department",
        date: "Sept 2024 - Present",
        bullet1: "Mounted, installed, and configured servers and network devices to support research and educational resources for 60+ faculty members and 200+ graduate students",
        bullet2: "Created and deployed bootable image drives of Ubuntu 22.04.5 LTS across 40+ desktops and servers",
        bullet3: "Monitored IT support tickets in Jira, troubleshooting technical issues to provide efficient end-user support",
        image: "/uva_cs.png"
    },
    {
        title: "Software Engineer Intern",
        company: "Capital One",
        date: "June - August 2025",
        bullet1: "Developed a full-stack labor data portal from concept to deployment, automating HR spreadsheet workflows and eliminating manual data entry errors within the Card Tech organization",
        bullet2: "Implemented 15+ RESTful API endpoints to support database operations, trigger real-time notifications via Slack and Gmail, and integrate with a Jenkins-based CI/CD pipeline",
        bullet3: "Enabled data-driven decisions by syncing a PostgreSQL RDS backend to Tableau executive dashboards",
        image: "/capital_one.png"
    },
    {
        title: "Software Testing Intern",
        company: "MicroAutomation",
        date: "May - August 2022 | May - August 2024",
        bullet1: "Designed and tested 20+ server failover regression cases alongside developers for the OMNI-911 software",
        bullet2: "Monitored network traffic with WireShark to validate software features and reduce bandwidth usage by 7%",
        bullet3: "Maintained existing test documentation in tandem with product managers to streamline SDLC transitions",
        image: "/microautomation.png"
    }
]

const Experience = () => {
    return (
        <section 
            id="experience"
            className="min-h-screen flex flex-col items-center mb-20"
        >
            {/* title */}
            <h1 className="text-center font-bold text-4xl">
                Experience
                <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded" />
            </h1>

            {/* map each experience to their "card" component */}
            <div className="space-y-28">
                {experiencesList.map((experience, idx) => {
                    return (
                        <div key={idx}>
                            <SlideUp>
                                <ExperienceCard experience={experience} />
                            </SlideUp>
                        </div>
                    )
                })}
            </div>
        </section>
        
    )
}

export default Experience;