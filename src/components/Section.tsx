"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
    id: string;
    title?: string;
    children: ReactNode;
    className?: string;
}

export function Section({ id, title, children, className = "" }: SectionProps) {
    return (
        <section id={id} className={`py-24 relative ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {title && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-16 relative"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground relative z-10">
                            {title}
                            <span className="text-primary animate-pulse-glow">.</span>
                        </h2>
                        {/* Decorative element behind title */}
                        <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
                        
                        <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-tertiary to-transparent mt-6 rounded-full animate-shimmer bg-[length:200%_auto]" />
                    </motion.div>
                )}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
