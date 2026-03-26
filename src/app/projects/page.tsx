"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { GlowingCard } from "@/components/ui/GlowingCard";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, X, LayoutGrid, Cpu, Brain, Activity, Search, FlaskConical } from "lucide-react";
import { useRouter } from "next/navigation";

const CATEGORIES = ["All", "Embedded", "IoT", "Web", "AI", "HealthTech"];

const projects = [
    {
        title: "Digital Twin - Cardiac Engine",
        category: "AI",
        description: "INTERNAL RESEARCH: High-fidelity cardiac simulation platform for patient-specific predictive analytics.",
        link: "/projects/digital-twin",
        isLocked: true,
        icon: Brain,
        isConfidential: true,
        glowColor: "from-red-600/30"
    },
    {
        title: "Face Matcher AI",
        category: "AI",
        description: "Deep learning system for forensic face sketch construction and automated matching with cloud infrastructure.",
        link: "/projects/face-matcher",
        icon: Search,
        glowColor: "from-blue-600/20"
    },
    {
        title: "SmartECG AI Digitalizer",
        category: "AI-Powered Diagnostics",
        description: "AI-powered pipeline to digitize paper ECGs and extract clinical insights using advanced CV models.",
        link: "/projects/ecg-digitalizer",
        demoLink: "https://ecg-digitalizer-demo.vercel.app", // Placeholder if link wasn't provided
        icon: Activity
    },
    {
        title: "CardioVis Pro",
        category: "HealthTech",
        description: "Advanced cardiac visualization and analysis system offering real-time insights.",
        link: "/projects/cardiovis-pro",
        icon: FlaskConical
    },
    {
        title: "Smart Factories Power Control",
        category: "Embedded",
        description: "PLC-based automated conveyor system with sensor integration for a manufacturing client.",
        link: "/projects/smart-factories",
        icon: Cpu
    },
    {
        title: "Adaptive Cardiology Care",
        category: "HealthTech",
        description: "Advanced cardiac monitoring system with adaptive algorithms for real-time patient care optimization.",
        link: "/projects/adaptive-cardiology",
        icon: Activity
    },
    {
        title: "Movies Stream Finder",
        category: "Web",
        description: "Intelligent streaming aggregator helping users find where to watch their favorite movies.",
        link: "/projects/movies-stream-finder",
        icon: LayoutGrid
    },
    {
        title: "Personal Portfolio",
        category: "Web",
        description: "A showcase of my projects and skills, designed with a focus on aesthetics and user experience.",
        link: "/projects/portfolio",
        icon: LayoutGrid
    }
];

// Password Modal Component
const PasswordModal = ({ isOpen, onClose, onConfirm, title }: any) => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (password === "adminsuresh123") {
            onConfirm();
            setPassword("");
            setError(false);
        } else {
            setError(true);
            setTimeout(() => setError(false), 500);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            >
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="bg-slate-950/95 border border-red-500/30 p-8 md:p-12 rounded-[2.5rem] max-w-md w-full shadow-[0_0_50px_rgba(239,68,68,0.2)] relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />
                    
                    <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
                        <X size={24} />
                    </button>

                    <div className="text-center mb-10">
                        <div className="w-20 h-20 bg-red-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-red-500/40 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                            <Lock className="text-red-500" size={36} />
                        </div>
                        <h3 className="text-3xl font-black text-white mb-3 uppercase tracking-tighter">SECURE NODE</h3>
                        <p className="text-red-100/40 text-xs font-bold uppercase tracking-widest leading-relaxed">
                            Restricted Internal Research. <br /> Unauthorized access is strictly logged.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="ACCESS CODE"
                                className={`w-full bg-red-950/20 border ${error ? 'border-red-500 animate-shake' : 'border-white/10'} rounded-2xl px-6 py-5 text-white placeholder:text-red-500/20 focus:outline-none focus:border-red-500 transition-all text-center tracking-[0.5em] text-xl font-mono shadow-inner`}
                                autoFocus
                            />
                            {error && <p className="text-red-500 text-[10px] mt-4 text-center font-black animate-pulse uppercase tracking-[0.2em]">Security Check Failed • Retry</p>}
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-red-600 hover:bg-red-500 text-white font-black py-5 rounded-2xl transition-all shadow-[0_0_30px_rgba(239,68,68,0.4)] uppercase tracking-widest text-sm"
                        >
                            Open Protocol
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [lockModal, setLockModal] = useState<{ open: boolean, project: any }>({ open: false, project: null });
    const router = useRouter();

    const filteredProjects = projects.filter(p => 
        activeFilter === "All" || p.category === activeFilter
    );

    const handleProjectClick = (e: any, project: any) => {
        if (project.isLocked) {
            e.preventDefault();
            setLockModal({ open: true, project });
        }
    };

    const handleUnlock = () => {
        if (lockModal.project) {
            router.push(lockModal.project.link);
            setLockModal({ open: false, project: null });
        }
    };

    return (
        <div className="min-h-screen pt-20 bg-black/40 backdrop-blur-lg">
            <Section className="text-center py-20 relative z-10 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-accent text-[10px] md:text-sm font-black tracking-[0.4em] uppercase mb-4 block">Our Portfolio</span>
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-6 uppercase tracking-tighter text-glow">Research Hub</h1>
                    <p className="text-lg md:text-xl text-blue-100/60 max-w-2xl mx-auto font-light leading-relaxed italic border-l-2 md:border-l-0 md:border-b-2 border-accent/20 pl-6 md:pl-0 md:pb-6">
                        Breakthrough engineering in <span className="text-accent font-bold">Medicine</span>, <span className="text-accent font-bold">AI</span>, and <span className="text-accent font-bold">IoT</span>.
                    </p>
                </motion.div>
            </Section>

            <Section>
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {CATEGORIES.map((filter) => (
                        <button 
                            key={filter} 
                            onClick={() => setActiveFilter(filter)}
                            className={`px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-500 border-2 ${
                                activeFilter === filter 
                                ? "bg-accent text-black border-accent shadow-[0_0_25px_rgba(14,165,233,0.5)]" 
                                : "bg-white/5 border-white/10 text-gray-400 hover:border-accent/40 hover:text-white"
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <GlowingCard 
                                    glowColor={project.glowColor}
                                    className={`p-8 md:p-12 h-full flex flex-col group relative overflow-hidden h-auto min-h-[400px] border border-white/5 transition-all active:scale-[0.98] ${project.isConfidential ? 'ring-1 ring-red-500/20' : ''}`}
                                >
                                    {/* Project Icon */}
                                    <div className={`w-14 h-14 md:w-16 md:h-16 ${project.isConfidential ? 'bg-red-500/10 text-red-500 border-red-500/20' : 'bg-accent/10 text-accent border-accent/20'} rounded-[1.25rem] md:rounded-2xl flex items-center justify-center mb-10 border transition-all duration-500 group-hover:bg-accent group-hover:text-black group-hover:scale-110 shadow-2xl`}>
                                        <project.icon size={28} strokeWidth={2.5} />
                                    </div>

                                    <div className="space-y-5 flex-grow">
                                        <div className="flex items-center justify-between gap-3">
                                            <span className="text-[10px] md:text-xs font-black text-accent uppercase tracking-[0.3em]">{project.category}</span>
                                            {project.isConfidential && <span className="px-2 py-0.5 bg-red-600 text-[8px] text-white font-black rounded-sm animate-pulse tracking-tighter">CONFIDENTIAL</span>}
                                            {project.isLocked && !project.isConfidential && <Lock size={12} className="text-accent/50" />}
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-[0.9] group-hover:text-accent transition-colors">{project.title}</h3>
                                        <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light italic opacity-80 group-hover:opacity-100 transition-opacity">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-10 flex items-center justify-between border-t border-white/5">
                                        {project.isLocked ? (
                                            <button 
                                                onClick={(e) => handleProjectClick(e, project)}
                                                className={`text-[11px] md:text-xs font-black ${project.isConfidential ? 'text-red-500' : 'text-accent'} flex items-center gap-2 group/btn uppercase tracking-widest`}
                                            >
                                                SECURE ACCESS <Lock size={14} className="group-hover/btn:translate-y-[-2px] transition-transform" />
                                            </button>
                                        ) : (
                                            <Link 
                                                href={project.link} 
                                                className="text-[11px] md:text-xs font-black text-white/40 hover:text-white transition-colors flex items-center gap-2 group/btn uppercase tracking-widest"
                                            >
                                                VIEW CASE STUDY <span className="group-hover/btn:translate-x-2 transition-transform italic">→</span>
                                            </Link>
                                        )}
                                        
                                        {"demoLink" in project && (
                                            <a 
                                                href={project.demoLink} 
                                                target="_blank" 
                                                className="text-[9px] font-black py-2 px-4 bg-white/5 border border-white/10 rounded-full text-white/40 hover:bg-accent hover:text-black hover:border-accent transition-all uppercase tracking-widest hidden sm:block"
                                            >
                                                LIVE DEMO
                                            </a>
                                        )}
                                    </div>
                                </GlowingCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </Section>

            {/* Password Modal */}
            <PasswordModal 
                isOpen={lockModal.open} 
                onClose={() => setLockModal({ open: false, project: null })}
                onConfirm={handleUnlock}
                title={lockModal.project?.title}
            />
        </div>
    );
}
