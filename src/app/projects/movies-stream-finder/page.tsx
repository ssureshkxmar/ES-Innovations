import { Section } from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";

export default function MoviesStreamFinderPage() {
    return (
        <div className="min-h-screen pt-20 bg-black/40 backdrop-blur-lg">
            {/* Header Section */}
            <Section className="py-20 relative z-10">
                <Link href="/projects" className="inline-flex items-center text-accent hover:text-white mb-8 transition-colors">
                    ← Back to Projects
                </Link>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-glow">
                        Movies Stream Finder
                    </h1>
                    <a
                        href="https://moviesstreamfinder.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-2 rounded-full bg-accent text-black font-bold hover:bg-white transition-colors shadow-[0_0_15px_rgba(14,165,233,0.4)]"
                    >
                        Live Demo ↗
                    </a>
                </div>
                <p className="text-lg text-blue-100 max-w-2xl font-medium mb-8">
                    An intelligent aggregator that simplifies finding where to stream your favorite content.
                </p>
                <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold">
                        Web Application
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold">
                        API Integration
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold">
                        UX Design
                    </span>
                </div>
            </Section>

            {/* Content Section */}
            <Section className="pb-20">
                <div className="flex flex-col gap-20">

                    {/* Feature 1: Search & Discovery */}
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] group">
                                <Image
                                    src="/projects/movies-stream-finder/p31.png"
                                    alt="Search and Discovery Interface"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-white">Seamless Discovery</h3>
                            <div className="h-1 w-20 bg-accent rounded-full"></div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                The home interface provides a sleek, user-friendly search experience. Users can instantly find movies and see which streaming platforms host them.
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Global Search:</strong> Aggregates results from Netflix, Hulu, Prime, and more.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Instant Results:</strong> Real-time API calls ensure up-to-date availability.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 2: Detailed Info */}
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] group">
                                <Image
                                    src="/projects/movies-stream-finder/p32.png"
                                    alt="Movie Details and Streaming Options"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-white">Comprehensive Availability</h3>
                            <div className="h-1 w-20 bg-accent rounded-full"></div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Each movie page offers deep insights, including plot summaries, cast info, and most importantly, a direct link to the streaming service where it is available.
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Direct Links:</strong> One-click navigation to the content.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Region Support:</strong> Filters availability based on the user's location.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </Section>
        </div>
    );
}
