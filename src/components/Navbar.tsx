"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
];

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 w-full z-50 border-b border-card-border bg-background/50 backdrop-blur-xl shadow-sm"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="font-extrabold text-2xl tracking-tighter hover:scale-105 transition-transform">
                        Talha <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Zubair</span>.
                    </Link>
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors hover:-translate-y-0.5"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center space-x-4">
                        <motion.a
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://github.com/Talhii" target="_blank" className="text-foreground/80 hover:text-white transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://linkedin.com/in/talha-zubair-cs" target="_blank" className="text-foreground/80 hover:text-primary transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                        </motion.a>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
