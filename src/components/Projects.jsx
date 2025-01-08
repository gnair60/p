import React from "react";
import Footer from "./Footer";

// Project Section
const Projects = () => {
    // Project Data
    const projects = [
        {
            title: "Swire-Coca-Cola (Predictive Maintenance)",
            description:
                "Developed a predictive maintenance framework to reduce equipment downtime by 45%, leveraging Failure Risk Scores, Power BI dashboards, and ML-based forecasting models.",
            image: require("../assets/Swire.jpg"),
            git: "https://github.com/gnair60/Swire-Coca-Cola-Predictive-Maintenance",
            technologies: ["Python", "Power BI", "EDA", "Feature Engineering", "Machine Learning"],
        },
        {
            title: "Retail Project",
            description:
                "Streamlined customer order analysis using big data tools, reducing processing time by 40% and decreasing customer churn by 30%.",
            image: require("../assets/Retail.jpg"),
            git: "https://github.com/gnair60/Retail-Project",
            technologies: ["Big Data", "SQL", "Python", "Tableau", "Apache Spark", "Apache Hive", "Apache Kafka"],
        },
        {
            title: "Environmental Sensor Data Analysis",
            description:
                "Developed an Azure-based pipeline to analyze sensor data, achieving 84% accuracy in ecological forecasts using Airflow and machine learning.",
            image: require("../assets/Environmental.jpg"),
            git: "https://github.com/gnair60/EnviroDataPipeline-AzureAirflow",
            technologies: ["Python", "Azure ML", "Apache Airflow", "Data Engineering"],
        },
        {
            title: "Home Credit Default Risk",
            description:
                "Built a predictive model for credit default risk with 75% accuracy, improving financial inclusion strategies and loan approvals.",
            image: require("../assets/Credit.jpg"),
            git: "https://github.com/gnair60/Home-Credit-Capstone",
            technologies: ["Python", "Scikit-Learn", "EDA", "Machine Learning"],
        },
    ];

    // Project Card Component
    const ProjectCard = ({ image, title, description, git, technologies }) => {
        return (
            <div
                className="card-medium-height max-w-xs bg-gradient-to-r flex-grow from-[#003467] to-black border border-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
                {/* Project Image */}
                <img className="w-full h-40 object-cover" src={image} alt={title} />
                {/* Project Content */}
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
                        {title}
                    </h3>
                    <p className="text-gray-300 text-sm mt-3">{description}</p>
                    {/* Project Technologies */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span key={index} className="text-blue-300 text-xs">
                                #{tech}
                            </span>
                        ))}
                    </div>
                    {/* GitHub Link */}
                    <a
                        href={git}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-red-400 hover:text-green-400 border border-gray-700 rounded-lg px-3 py-2 transition duration-300"
                    >
                        GitHub →
                    </a>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-blue-100" id="projects">
            {/* Animated Background */}
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            {/* Section Title */}
            <div className="text-center pt-12">
                <h2
                    className="text-4xl sm:text-5xl font-extrabold mt-8"
                    style={{
                        textAlign: "center",
                        fontSize: "2.5em",
                        fontWeight: "500",
                        marginBottom: "-0.5em",
                        color: "#003467",
                    }}
                >
                    Projects
                </h2>
            </div>

            {/* Project Cards */}
            <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 mt-9">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        git={project.git}
                        technologies={project.technologies}
                    />
                ))}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Projects;
