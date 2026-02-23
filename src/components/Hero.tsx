"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, Github } from "lucide-react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 50, damping: 10 }
    }
};

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background glowing blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-tertiary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-4000" />

            {/* Animated Floating Elements */}
            <motion.div
                className="absolute top-32 left-32 w-4 h-4 rounded-full bg-primary/40 hidden md:block"
                animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-32 right-32 w-6 h-6 rounded-full border border-secondary/40 hidden md:block"
                animate={{ y: [0, 40, 0], rotate: [0, 180, 360], opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center"
                >
                    <motion.div variants={itemVariants} className="inline-block mb-4">
                        <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium tracking-wide uppercase text-xs backdrop-blur-md">
                            Hi, I&apos;m Talha Zubair
                        </span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
                        <span className="block text-foreground mb-2">Full Stack</span>
                        <span className="text-gradient pb-2 inline-block">Developer</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="mt-4 text-xl md:text-2xl text-foreground/80 mb-6 font-light max-w-2xl mx-auto text-balance">
                        Building Scalable Backends &amp; Modern Frontend Experiences
                    </motion.p>

                    <motion.p variants={itemVariants} className="text-base md:text-lg text-foreground/50 mb-10 max-w-3xl mx-auto leading-relaxed">
                        With over 4 years of experience specializing in scalable architectures, cloud deployments, microservices, and performance optimization to deliver premium applications.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 w-full sm:w-auto">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="btn-primary shiny-btn w-full sm:w-auto group"
                        >
                            View Projects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            href="/CV.pdf"
                            download="Talha_Zubair_CV.pdf"
                            className="px-8 py-3 rounded-full glass-card hover:bg-white/5 font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center group"
                        >
                            Download CV
                            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://github.com/Talhii"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3.5 rounded-full glass-card hover:bg-white/10 transition-colors text-foreground/80 hover:text-white flex items-center justify-center"
                        >
                            <Github className="w-5 h-5" />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
