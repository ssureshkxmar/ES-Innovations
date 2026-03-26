"use client";

import { Section } from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, ShieldAlert, Cpu, CheckCircle2, Waves, HeartPulse, BarChart3, Gauge, ClipboardCheck, ArrowRight } from "lucide-react";

const PIPELINE_STAGES = [
    {
        id: "enhanced",
        title: "ENHANCED Stage",
        image: "/projects/ecg-digitalizer/m1.png", // High quality version
        desc: "Advanced neural scanning and noise reduction are applied to the raw paper input. The 10-stage proprietary filter clears artifacts while preserving cardiac integrity.",
        details: ["Noise Cancellation", "Grid Alignment", "Fidelity Match"]
    },
    {
        id: "annotated",
        title: "ANNOTATED PQRST Detection",
        image: "/projects/ecg-digitalizer/m2.png", // High quality version
        desc: "Automated detection of the PQRST wave complex. The neural engine identifies peaks and intervals with precise clinical accuracy.",
        details: ["Peak Identification", "Lead Separation", "Wave Labeling"]
    },
    {
        id: "plot",
        title: "SIGNAL PLOT Analytics",
        image: "/projects/ecg-digitalizer/m3.png", // High quality version
        desc: "Final digital reconstruction comparing raw vs. filtered signal. High-fidelity output for clinical diagnostic reporting.",
        details: ["Digital Reconstruction", "Filter Comparison", "Metric Generation"]
    }
];

export default function ECGDigitalizerPage() {
    return (
        <div className="min-h-screen pt-20 bg-black/60 backdrop-blur-3xl selection:bg-accent selection:text-black">
            {/* Header / Hero */}
            <Section className="py-20 relative z-10 overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10" />
                
                <Link href="/projects" className="inline-flex items-center text-accent/80 hover:text-accent mb-12 transition-all font-black uppercase tracking-widest text-xs group">
                    <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Portfolio Hub
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
                    <div className="lg:col-span-2 space-y-10">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black tracking-widest uppercase italic">The Innovation Engine</span>
                                <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-black tracking-widest uppercase flex items-center gap-1.5 opacity-80">
                                    <Activity size={10} /> Live Pipeline
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-white text-glow tracking-tighter uppercase leading-[0.8]">
                                SmartECG <br /> <span className="text-accent italic font-black">Digitalizer</span>
                            </h1>
                        </div>

                        <p className="text-2xl text-blue-100/60 max-w-2xl font-light leading-relaxed italic border-l-2 border-accent/40 pl-8">
                            Transforming legacy paper ECG recordings into high-fidelity digital signals for futuristic cardiology.
                        </p>

                        {/* Main App Demo Frame */}
                        <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.4)] group">
                            <Image
                                src="/projects/ecg-digitalizer/m1.png" // User's actual app shot
                                alt="SmartECG AI Live Interface"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                            <div className="absolute bottom-10 left-10 p-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
                               <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                               <span className="text-[10px] font-black text-white uppercase tracking-widest">Active Analysis Session</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar - System Telemetry Dashboard */}
                    <div className="space-y-8 bg-black/40 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-2xl shadow-2xl relative">
                        <div className="absolute top-0 right-0 p-8 opacity-5 grayscale">
                             <Activity className="w-32 h-32 text-accent" />
                        </div>

                        <div className="space-y-12 relative z-10">
                            {/* System Status */}
                            <div>
                                <h3 className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-6 flex items-center gap-2">
                                    <Cpu size={14} /> Telemetry Link
                                </h3>
                                <div className="space-y-4 font-mono text-[11px] bg-white/5 p-6 rounded-2xl border border-white/5">
                                    {[
                                        { label: "ENGINE", value: "COMPLETE", color: "text-green-400" },
                                        { label: "GRADE", value: "GOOD CLINICAL", color: "text-green-400" },
                                        { label: "SCORE", value: "78.4 / 100", color: "text-accent" },
                                        { label: "PIPELINE", value: "10-STAGE", color: "text-white" },
                                        { label: "FILTER", value: "50Hz Notch", color: "text-white/40" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                                            <span className="text-white/20 uppercase font-black">{item.label}</span>
                                            <span className={`font-black ${item.color}`}>{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Metrics Grid */}
                            <div>
                                <h3 className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-6 flex items-center gap-2">
                                    <Gauge size={14} /> Metrics Matrix
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "HEART RATE", value: "80.5", icon: HeartPulse },
                                        { label: "PR INTERVAL", value: "133.9", icon: Activity },
                                        { label: "QRS DURATION", value: "82.2", icon: Waves },
                                        { label: "QTc BAZETT", value: "381.6", icon: ShieldAlert }
                                    ].map((metric, i) => (
                                        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center group hover:bg-accent/10 transition-colors">
                                            <metric.icon size={16} className="text-accent mb-4 group-hover:scale-110 transition-transform" />
                                            <div className="text-[9px] text-white/30 uppercase font-black tracking-widest mb-2 text-center">{metric.label}</div>
                                            <div className="text-xl font-black text-white tracking-tighter">{metric.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button className="w-full bg-accent hover:bg-white text-black font-black py-4 rounded-xl transition-all shadow-[0_0_30px_rgba(14,165,233,0.3)] text-xs uppercase tracking-widest mt-6 scale-95 hover:scale-100">
                                Enter Digital Portal
                            </button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Pipeline Stage Deep Dive (The "Explained Each Detail" Section) */}
            <Section className="py-24 bg-black/40 border-y border-white/5">
                <div className="text-center mb-24">
                   <span className="text-accent text-sm font-black tracking-[0.4em] uppercase mb-4 block underline decoration-accent/30 underline-offset-8">Research Insights</span>
                   <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6">Pipeline Infrastructure</h2>
                   <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">Breaking down the stages of our medical-grade digitization engine, from raw data to clinical insights.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {PIPELINE_STAGES.map((stage, idx) => (
                        <div key={idx} className="flex flex-col gap-8 group">
                            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group-hover:border-accent/40 shadow-2xl transition-all">
                                <Image src={stage.image} alt={stage.title} fill className="object-cover filter grayscale-[0.2] transition-all group-hover:grayscale-0 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 font-black text-accent text-xs tracking-widest uppercase">{stage.title}</div>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors tracking-tight uppercase">{stage.title} Details</h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-light italic">
                                    {stage.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {stage.details.map((d, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-black tracking-widest text-accent/60 uppercase group-hover:text-accent transition-colors">{d}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Industrial Statistics Section */}
            <Section className="py-24">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {[
                        { label: "Points Analyzed", value: "7,879" },
                        { label: "System Agreement", value: "100%" },
                        { label: "Latency (ms)", value: "128" },
                        { label: "Reliability", value: "99.9%" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center space-y-2">
                            <div className="text-4xl font-black text-white text-glow">{stat.value}</div>
                            <div className="text-[10px] font-black text-accent uppercase tracking-[0.4em]">{stat.label}</div>
                            <div className="w-4 h-1 bg-accent/30 mx-auto rounded-full" />
                        </div>
                    ))}
                </div>
            </Section>

            {/* Next Steps CTA */}
            <Section className="py-40 text-center relative z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-blue-900/10 to-transparent pointer-events-none -z-10" />
                <h2 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-[0.05em] uppercase hover:tracking-[0.1em] transition-all duration-700">Digital <br /> <span className="text-accent italic">Transition</span></h2>
                <Link href="/contact">
                   <button className="px-16 py-8 rounded-full bg-accent text-black font-black text-2xl hover:bg-white hover:shadow-[0_0_50px_rgba(14,165,233,0.5)] transition-all flex items-center gap-4 mx-auto group">
                        GET FULL ACCESS <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                   </button>
                </Link>
            </Section>
        </div>
    );
}
