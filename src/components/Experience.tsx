"use client";

import { Section } from "./Section";
import { motion } from "framer-motion";

export function Experience() {
    const experiences = [
        {
            period: "2025 – Present",
            role: "Full Stack Developer",
            company: "Hashlogics",
            achievements: [
                "Built microservices backend using FastAPI and Node.js.",
                "Optimized complex PostgreSQL queries for high-performance data retrieval.",
                "Set up end-to-end CI/CD pipelines.",
                "Integrated Yoti identity verification seamlessly.",
            ],
        },
        {
            period: "2024",
            role: "Full Stack Developer",
            company: "Cooperative Computing",
            achievements: [
                "Architected and maintained GraphQL APIs handling 20k+ concurrent users.",
                "Refactored React dashboards resulting in a 35% performance boost.",
                "Implemented robust Role-Based Access Control (RBAC) via Keycloak.",
            ],
        },
        {
            period: "2022 – 2023",
            role: "MERN Developer",
            company: "Al-Burraq Technologies",
            achievements: [
                "Developed comprehensive applications using Next.js and FastAPI.",
                "Integrated robust real-time features using WebSockets.",
                "Performed continuous database tuning and schema optimization.",
            ],
        },
    ];

    return (
        <Section id="experience" title="Experience">
            <div className="max-w-4xl mx-auto relative mt-12">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-[2px] bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent" />

                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 50, damping: 15 }}
                            className="relative flex flex-col md:flex-row justify-between items-center w-full group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(139,92,246,1)] transition-all z-10 animate-pulse" />

                            {/* Content Box */}
                            <div className={`w-full md:w-5/12 ml-6 md:ml-0 ${idx % 2 === 0 ? "md:mr-auto md:text-right md:pr-8" : "md:ml-auto md:pl-8"}`}>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="glass-card p-6 rounded-2xl group-hover:border-primary/50 transition-colors relative overflow-hidden"
                                >
                                    {/* Hover background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="mb-2 relative z-10">
                                        <span className="text-primary font-mono text-sm uppercase tracking-wider animate-pulse-glow">{exp.period}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors relative z-10">{exp.role}</h3>
                                    <h4 className="text-lg text-foreground/60 mb-4 font-medium relative z-10">{exp.company}</h4>
                                    <ul className="space-y-2 text-foreground/80 font-light text-sm relative z-10">
                                        {exp.achievements.map((item, i) => (
                                            <li key={i} className={`flex ${idx % 2 === 0 ? "md:justify-end" : "justify-start"} items-start gap-2 text-left`}>
                                                <span className="text-primary mt-1">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section >
    );
}
