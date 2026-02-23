"use client";

import { Section } from "./Section";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
    const projects = [
        {
            title: "Degree37",
            description: "A Multi-tenant Blood Donation Platform designed to streamline blood requests, donations, and inventory management across various hospitals.",
            stack: ["Nest.js", "React.js", "PostgreSQL", "Keycloak"],
            github: "#",
            demo: "#",
        },
        {
            title: "ShiftLink",
            description: "Workforce Management System optimized for shift scheduling, employee tracking, and real-time attendance using robust backends.",
            stack: ["Next.js", "FastAPI", "PostgreSQL"],
            github: "#",
            demo: "#",
        },
        {
            title: "RightFarm",
            description: "An E-commerce Platform facilitating B2B agriculture supply chains with features like inventory tracking and automated orders.",
            stack: ["Node.js", "GraphQL", "React", "Docker"],
            github: "#",
            demo: "#",
        },
    ];

    return (
        <Section id="projects" title="Featured Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{ y: -10 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                        className="glass-card rounded-2xl p-6 flex flex-col h-full group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] relative overflow-hidden"
                    >
                        {/* Animated background gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-1" />

                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-tertiary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />

                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                            <div className="flex gap-3">
                                <a href={project.github} className="text-foreground/60 hover:text-white transition-colors hover:scale-110">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href={project.demo} className="text-foreground/60 hover:text-primary transition-colors hover:scale-110">
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <p className="text-foreground/70 mb-6 flex-grow font-light leading-relaxed relative z-10">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.stack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-md"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
