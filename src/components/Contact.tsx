"use client";

import { Section } from "./Section";
import { Send, Mail, MapPin, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const target = e.currentTarget;
        const name = (target.elements.namedItem("name") as HTMLInputElement).value;
        const email = (target.elements.namedItem("email") as HTMLInputElement).value;
        const subject = (target.elements.namedItem("subject") as HTMLInputElement).value;
        const message = (target.elements.namedItem("message") as HTMLTextAreaElement).value;

        try {
            const response = await fetch("https://formsubmit.co/ajax/talhazubair.cs@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    subject,
                    message,
                }),
            });

            if (response.ok) {
                toast.success("Message sent successfully!");
                target.reset();
            } else {
                toast.error("Failed to send message. Please try again later.");
            }
        } catch (err) {
            toast.error("An error occurred. Please try again.");
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section id="contact" title="Get In Touch">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-3xl font-bold mb-4">Let&apos;s build something great together.</h3>
                    <p className="text-foreground/70 mb-8 font-light text-lg">
                        Whether you have a question, a project proposal, or just want to connect, feel free to reach out. I&apos;m always open to discussing new opportunities and challenges.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm text-foreground/60 font-medium">Email</p>
                                <a href="mailto:talhazubair.cs@gmail.com" className="text-lg hover:text-primary transition-colors font-medium">
                                    talhazubair.cs@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm text-foreground/60 font-medium">Location</p>
                                <p className="text-lg font-medium">Lahore, Pakistan</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex gap-4">
                        <a href="https://github.com/Talhii" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com/in/talha-zubair-cs" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="glass-card p-8 rounded-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-light"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-light"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-light"
                                placeholder="Project Proposal"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-light resize-none"
                                placeholder="Hello Talha..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                        >
                            {isSubmitting ? "Sending..." : (
                                <>
                                    Send Message
                                    <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </Section>
    );
}
