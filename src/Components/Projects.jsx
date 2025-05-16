import { motion } from "framer-motion";
const Projects = () => {
    const projects = [
        { title: "Walmart Sales Analysis", desc: "Built with SQL, MySQL Workbench, Python", link: "https://github.com/Jameel-DA/Walmart_SQL_Python" },
        { title: "Coffee Sales Analysis", desc: "Built with SQL, MySQL Workbench", link: "https://github.com/Jameel-DA/Coffee_Sales_Analysis-SQL" },
        { title: "Retail Sales Analysis", desc: "Built with SQL, MySQL Workbench, Python", link: "https://github.com/Jameel-DA/Retail_Sales_Analysis-SQL" },
        { title: "Online Courses Data Analysis", desc: "Built with SQL, MySQL Workbench", link: "https://github.com/Jameel-DA/Online_Courses_Data_Analysis-PowerBI-Dashboard" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <section id="projects" className="py-20 px-6 bg-gray-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Projects</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map((proj) => (
                            <div key={proj.title} className="bg-gray-800 p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-semibold">{proj.title}</h3>
                                <p className="mt-2">{proj.desc}</p>
                                {proj.link && (
                                    <a
                                        href={proj.link}
                                        className="text-blue-400 mt-4 inline-block"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Project
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Projects;
