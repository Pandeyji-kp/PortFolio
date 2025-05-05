import { motion } from "framer-motion";
const Projects = () => {
    const projects = [
        { title: "E-Commerce Website", desc: "Built with React & Firebase", link: "https://github.com/Pandeyji-kp/Ecommerce-web" },
        { title: "Quiz App", desc: "Real-time quiz management", link: "https://github.com/Pandeyji-kp/Quiz-App" },
        { title: "Movie App", desc: "Real-time Movie Search", link: "https://movie-app-theta-eight-33.vercel.app" },
        { title: "Admin Panel", desc: "For Control Web-site", link: "https://github.com/Pandeyji-kp/Adminpanel" },
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
