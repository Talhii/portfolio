"use client";

import { motion, Variants } from "framer-motion";
import { BookOpen, Star, GitFork } from "lucide-react";

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
    forks_count: number;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 60, damping: 15 }
    }
};

export function ClientRepoGrid({ repos }: { repos: Repo[] }) {
    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {repos.map((repo) => (
                <motion.a
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-6 rounded-2xl block border border-white/5 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group"
                >
                    {/* Animated gradient hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-3">
                            <BookOpen className="w-5 h-5 text-primary group-hover:animate-pulse-glow" />
                            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors truncate" title={repo.name}>
                                {repo.name}
                            </h3>
                        </div>
                        <p className="text-sm text-foreground/60 mb-6 line-clamp-2 min-h-[40px]">
                            {repo.description || "No description provided."}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-foreground/60 font-medium mt-auto">
                            {repo.language && (
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse-glow"></span>
                                    {repo.language}
                                </div>
                            )}
                            <div className="flex items-center gap-1 group-hover:text-tertiary transition-colors">
                                <Star className="w-3.5 h-3.5" />
                                {repo.stargazers_count}
                            </div>
                            <div className="flex items-center gap-1 group-hover:text-primary transition-colors">
                                <GitFork className="w-3.5 h-3.5" />
                                {repo.forks_count}
                            </div>
                        </div>
                    </div>
                </motion.a>
            ))}
        </motion.div>
    );
}
