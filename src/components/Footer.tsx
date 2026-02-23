import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-card-border bg-background/50 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-foreground/60">
                    © {new Date().getFullYear()} Talha Zubair. Built with Next.js & Tailwind CSS.
                </p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://github.com/Talhii" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/in/talha-zubair-cs" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:talhazubair.cs@gmail.com" className="text-foreground/60 hover:text-primary transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
