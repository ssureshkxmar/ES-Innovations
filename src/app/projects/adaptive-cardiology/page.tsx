import { Section } from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";

export default function AdaptiveCardiologyPage() {
    return (
        <div className="min-h-screen pt-20 bg-black/40 backdrop-blur-lg">
            {/* Header Section */}
            <Section className="py-20 relative z-10">
                <Link href="/projects" className="inline-flex items-center text-accent hover:text-white mb-8 transition-colors">
                    ← Back to Projects
                </Link>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-glow">
                        Adaptive Cardiology Care
                    </h1>
                    <a
                        href="https://acc-ten-virid.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-2 rounded-full bg-accent text-black font-bold hover:bg-white transition-colors shadow-[0_0_15px_rgba(14,165,233,0.4)]"
                    >
                        Live Demo ↗
                    </a>
                </div>
                <p className="text-lg text-blue-100 max-w-2xl font-medium mb-8">
                    Revolutionizing cardiac patient management through intelligent, adaptive monitoring systems.
                </p>
                <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold">
                        HealthTech
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold">
                        AI Diagnosis
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold">
                        Patient Monitoring
                    </span>
                </div>
            </Section>

            {/* Content Section */}
            <Section className="pb-20">
                <div className="flex flex-col gap-20">

                    {/* Feature 1: Interface Overview (Image) */}
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] group">
                                <Image
                                    src="/projects/adaptive-cardiology/p1.png"
                                    alt="Cardiology Care Dashboard Interface"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-white">Comprehensive Diagnostic Dashboard</h3>
                            <div className="h-1 w-20 bg-accent rounded-full"></div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                The system features a high-fidelity dashboard that aggregates real-time vital signs from connected sensors. It provides cardiologists with an immediate, holistic view of patient health.
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Live ECG Stream:</strong> Continuous visualization of lead waves with instant arrhythmia detection.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>History Tracking:</strong> Seamless access to historical patient data for trend analysis and long-term care planning.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 2: System Demo (Video) */}
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] bg-black/50 backdrop-blur aspect-[16/9] relative">
                                <video
                                    controls
                                    className="w-full h-full object-cover"
                                    poster="/projects/adaptive-cardiology/p1.png" // Fallback poster
                                >
                                    <source src="/projects/adaptive-cardiology/video.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-white">Adaptive Response Mechanism</h3>
                            <div className="h-1 w-20 bg-accent rounded-full"></div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Watch the system in action as it dynamically adjusts to changing patient conditions. The adaptive algorithm reduces false alarms while ensuring critical events are never missed.
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Smart Alerts:</strong> Context-aware notifications sent directly to the nursing station and mobile devices.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Integration:</strong> Seamless compatibility with existing hospital information systems (HIS).</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </Section>
        </div>
    );
}
