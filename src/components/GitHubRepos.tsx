import { Section } from "./Section";
import { Github } from "lucide-react";
import { ClientRepoGrid } from "./ClientRepoGrid";

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
    forks_count: number;
}

async function getRepos() {
    try {
        const res = await fetch("https://api.github.com/users/Talhii/repos?sort=updated&per_page=6", {
            next: { revalidate: 3600 } // Revalidate every hour
        });

        if (!res.ok) {
            return [];
        }

        return res.json() as Promise<Repo[]>;
    } catch (error) {
        console.error("Error fetching repos:", error);
        return [];
    }
}

export async function GitHubRepos() {
    const repos = await getRepos();

    if (!repos.length) {
        return null;
    }

    return (
        <Section id="github" title="Latest from GitHub">
            <ClientRepoGrid repos={repos} />

            <div className="mt-10 text-center relative z-10">
                <a
                    href="https://github.com/Talhii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] border border-white/10 hover:border-white/20 hover:-translate-y-1"
                >
                    <Github className="w-5 h-5" />
                    View All Repositories
                </a>
            </div>
        </Section>
    );
}
