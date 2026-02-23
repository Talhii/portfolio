"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { LayoutTemplate, ServerCog, Database, CloudCog, ShieldCheck } from "lucide-react";

export function Skills() {
    const categories = [
        {
            title: "Frontend",
            icon: <LayoutTemplate className="w-5 h-5" />,
            skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Ant Design"],
        },
        {
            title: "Backend",
            icon: <ServerCog className="w-5 h-5" />,
            skills: ["Node.js", "Express.js", "Nest.js", "FastAPI"],
        },
        {
            title: "Databases",
            icon: <Database className="w-5 h-5" />,
            skills: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Firebase"],
        },
        {
            title: "DevOps & Cloud",
            icon: <CloudCog className="w-5 h-5" />,
            skills: ["Docker", "Kubernetes", "AWS", "Azure", "GCP", "GitHub Actions"],
        },
        {
            title: "Auth & APIs",
            icon: <ShieldCheck className="w-5 h-5" />,
            skills: ["JWT", "OAuth", "Keycloak", "REST", "GraphQL", "WebSockets", "gRPC"],
        },
    ];

    return (
        <Section id="skills" title="Technical Arsenal">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, idx) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        whileHover={{ y: -5 }}
                        key={idx}
                        className="glass-card p-6 rounded-2xl group hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] relative overflow-hidden"
                    >
                        {/* Glow effect on hover */}
                        <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />

                        <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4 relative z-10">
                            <div className="p-2.5 bg-primary/10 text-primary rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{category.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 relative z-10">
                            {category.skills.map((skill, sIdx) => (
                                <motion.span
                                    whileHover={{ scale: 1.05 }}
                                    key={sIdx}
                                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-gradient-to-r hover:from-primary hover:to-tertiary hover:text-white cursor-default transition-all shadow-sm text-foreground/80 hover:shadow-md"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
