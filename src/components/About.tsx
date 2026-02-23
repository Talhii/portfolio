"use client";

import { Section } from "./Section";
import { Server, Zap, Cloud, Code2 } from "lucide-react";

export function About() {
    const highlights = [
        {
            icon: <Server className="w-6 h-6 text-primary" />,
            title: "Backend Architecture",
            description: "Expert in designing resilient, scalable backend systems using Node.js, Nest.js, and FastAPI.",
        },
        {
            icon: <Zap className="w-6 h-6 text-primary" />,
            title: "Performance Optimization",
            description: "Dedicated to database tuning and application optimization for high-throughput environments.",
        },
        {
            icon: <Cloud className="w-6 h-6 text-primary" />,
            title: "Cloud & DevOps",
            description: "Proficient in containerization with Docker, Kubernetes, and cloud deployments on AWS/Azure.",
        },
        {
            icon: <Code2 className="w-6 h-6 text-primary" />,
            title: "Clean Code",
            description: "Committed to maintainable, testable codebases using strict TypeScript and modern architectural patterns.",
        },
    ];

    return (
        <Section id="about" title="About Me">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-lg text-foreground/80 font-light leading-relaxed text-balance">
                    <p>
                        I am a passionate <strong className="text-foreground font-medium">Full Stack Developer</strong> with 4 years of professional experience crafting robust web applications. My journey started with a deep curiosity for how things work under the hood, leading me to specialize in scalable architectures and complex system designs.
                    </p>
                    <p>
                        Currently, I focus extensively on <strong className="text-foreground font-medium">microservices and GraphQL</strong>, building systems that serve thousands of users efficiently. I bridge the gap between complex backend logic and seamless frontend experiences, ensuring that every project I touch is not only performant but also user-centric.
                    </p>
                    <p>
                        When I&apos;m not optimizing PostgreSQL queries or configuring CI/CD pipelines, I enjoy exploring new modern frameworks and contributing to the developer community.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {highlights.map((item, index) => (
                        <div key={index} className="glass-card p-6 rounded-2xl hover:bg-card-hover transition-colors">
                            <div className="p-3 bg-white/5 rounded-lg inline-block mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-foreground/60">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
