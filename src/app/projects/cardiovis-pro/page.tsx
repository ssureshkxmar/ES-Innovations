import { Section } from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";

export default function CardioVisProPage() {
    return (
        <div className="min-h-screen pt-20 bg-black/40 backdrop-blur-lg">
            {/* Header Section */}
            <Section className="py-20 relative z-10">
                <Link href="/projects" className="inline-flex items-center text-accent hover:text-white mb-8 transition-colors">
                    ← Back to Projects
                </Link>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-glow">
                        CardioVis Pro
                    </h1>
                    <a
                        href="https://cardio-vis-pro.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-2 rounded-full bg-accent text-black font-bold hover:bg-white transition-colors shadow-[0_0_15px_rgba(14,165,233,0.4)]"
                    >
                        Live Demo ↗
                    </a>
                </div>
                <p className="text-lg text-blue-100 max-w-2xl font-medium mb-8">
                    Advanced cardiac visualization and analysis system.
                </p>
                <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold">
                        HealthTech
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold">
                        Medical Imaging
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold">
                        Software
                    </span>
                </div>
            </Section>

            {/* Content Section */}
            <Section className="pb-20">
                <div className="flex flex-col gap-20">

                    {/* Feature 1: Main Interface */}
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] group">
                                <Image
                                    src="/projects/cardiovis-pro/p21.png"
                                    alt="CardioVis Pro Main Interface"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-white">Advanced Cardiac Visualization</h3>
                            <div className="h-1 w-20 bg-accent rounded-full"></div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                CardioVis Pro offers a comprehensive dashboard for visualizing complex cardiac data. The intuitive interface allows medical professionals to view high-resolution imaging alongside patient vitals.
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Unified Dashboard:</strong> Integrates multiple data streams into a single view.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>High Fidelity:</strong> Lossless rendering of medical imaging for accurate diagnosis.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 2: Detailed Analysis */}
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] group">
                                <Image
                                    src="/projects/cardiovis-pro/p22.png"
                                    alt="CardioVis Pro Analytics"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-white">Real-time Analytics</h3>
                            <div className="h-1 w-20 bg-accent rounded-full"></div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Beyond visualization, the system performs real-time analysis to detect anomalies and trends. Automated algorithms assist in identifying potential cardiac issues earlier.
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Automated Insights:</strong> AI-driven analysis highlights regions of interest.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Trend Monitoring:</strong> Tracks patient history to visualize progression over time.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 3: Video Demonstration */}
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                                <video
                                    controls
                                    className="w-full h-full object-cover"
                                    src="/projects/cardiovis-pro/Video Project 1.mp4"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-white">Dynamic Procedure Review</h3>
                            <div className="h-1 w-20 bg-accent rounded-full"></div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                The platform supports high-definition video playback for reviewing surgical procedures or dynamic diagnostic imaging, ensuring no detail is missed during post-operative review.
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Playback Control:</strong> Frame-by-frame analysis capabilities.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Secure Storage:</strong> Encrypted archiving of sensitive patient footage.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </Section>
        </div>
    );
}
