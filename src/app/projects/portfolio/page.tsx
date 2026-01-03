import { Section } from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";

export default function PersonalPortfolioPage() {
    return (
        <div className="min-h-screen pt-20 bg-black/40 backdrop-blur-lg">
            {/* Header Section */}
            <Section className="py-20 relative z-10">
                <Link href="/projects" className="inline-flex items-center text-accent hover:text-white mb-8 transition-colors">
                    ← Back to Projects
                </Link>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-glow">
                        Personal Portfolio
                    </h1>
                    <a
                        href="https://profilo-two-olive.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-2 rounded-full bg-accent text-black font-bold hover:bg-white transition-colors shadow-[0_0_15px_rgba(14,165,233,0.4)]"
                    >
                        Live Demo ↗
                    </a>
                </div>
                <p className="text-lg text-blue-100 max-w-2xl font-medium mb-8">
                    A digital showcase designed to represent my professional journey, skills, and projects with a focus on modern aesthetics.
                </p>
                <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold">
                        Next.js
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold">
                        React
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold">
                        Tailwind CSS
                    </span>
                </div>
            </Section>

            {/* Content Section */}
            <Section className="pb-20">
                <div className="flex flex-col gap-20">

                    {/* Feature 1: Hero Section */}
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] group">
                                <Image
                                    src="/projects/portfolio/p41.png"
                                    alt="Portfolio Home Interface"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-white">Interactive Hero Section</h3>
                            <div className="h-1 w-20 bg-accent rounded-full"></div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                The landing page features a dynamic, visually engaging hero section that immediately captures attention. It sets the tone for the entire portfolio, combining professional branding with a personal touch.
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Visual Impact:</strong> Designed to leave a lasting first impression.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Navigation:</strong> Intuitive access to all key sections of the portfolio.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 2: Project Gallery */}
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] group">
                                <Image
                                    src="/projects/portfolio/p42.png"
                                    alt="Project Gallery Interface"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-white">Curated Project Gallery</h3>
                            <div className="h-1 w-20 bg-accent rounded-full"></div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                A dedicated section to showcase selected works. Each project is presented with a clear visual preview and key details, allowing visitors to explore the depth and breadth of my technical expertise.
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Structured Layout:</strong> Clean grid design ensuring readability and flow.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Responsive Design:</strong> Optimized for viewing on all devices, from desktops to mobile phones.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </Section>
        </div>
    );
}
