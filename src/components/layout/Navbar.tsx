"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE_NAME } from "@/lib/constants";
import { useState, useEffect } from "react";
import { Menu, X, Search, Settings, Sun, Moon, MousePointer2, Home, Briefcase, Rocket, Info, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useUI } from "@/lib/context/UIContext";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme, cursorType, setCursorType } = useUI();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "HOME", icon: Home },
        { href: "/projects", label: "PROJECTS", icon: Rocket },
        { href: "/services", label: "SERVICES", icon: LayoutGrid },
        { href: "/about", label: "ABOUT", icon: Info },
    ];

    return (
        <>
            {/* Desktop & Tablet Top Navbar - HIDDEN ON MOBILE completely */}
            <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 group/nav hidden lg:block ${scrolled ? "py-4" : "py-6"}`}>
                <div className={`relative overflow-hidden backdrop-blur-2xl bg-black/40 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[2.5rem] px-10 py-4 flex items-center justify-between transition-all group-hover/nav:border-accent/40 group-hover/nav:shadow-accent/10 ${scrolled ? "scale-[0.98]" : "scale-100"}`}>
                    {/* Animated Border Glow */}
                    <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-1000" />
                    
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-5 group transition-transform active:scale-95">
                        <div className="relative w-14 h-14 overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 shadow-xl group-hover:shadow-accent/20 transition-all">
                             <Image src="/logo.png" alt="Logo" width={48} height={48} className="object-contain p-1.5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-black tracking-tighter text-white uppercase leading-none">{SITE_NAME}</span>
                            <span className="text-[10px] font-bold text-accent uppercase tracking-[0.35em] mt-1 opacity-80">Innovation Hub</span>
                        </div>
                    </Link>

                    {/* Desktop Center Links */}
                    <div className="flex items-center gap-12 text-[13px] font-black text-foreground/70 tracking-widest uppercase">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.href} 
                                href={link.href} 
                                className={`transition-colors relative group py-2 ${pathname === link.href ? "text-accent" : "hover:text-accent"}`}
                            >
                                {link.label}
                                <span className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all rounded-full ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
                            </Link>
                        ))}
                    </div>

                    {/* Icons Section */}
                    <div className="flex items-center gap-6">
                        <button className="text-foreground/60 hover:text-accent transition-colors hidden sm:block">
                            <Search size={22} strokeWidth={2.5} />
                        </button>
                        <button 
                            onClick={() => setIsSwitcherOpen(true)}
                            className="w-11 h-11 flex items-center justify-center rounded-full bg-foreground/5 text-foreground/80 hover:bg-accent hover:text-white transition-all shadow-lg active:rotate-90"
                        >
                            <Settings size={22} className="animate-spin-slow" strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Top Header (Minimal Logo only) - Visible only on < lg screens */}
            <div className="lg:hidden fixed top-0 left-0 w-full z-[60] px-6 py-4 flex items-center justify-between backdrop-blur-md bg-black/20 border-b border-white/5">
                <Link href="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                         <Image src="/logo.png" alt="Logo" width={32} height={32} className="object-contain" />
                    </div>
                    <span className="text-lg font-black tracking-tighter text-white uppercase">{SITE_NAME}</span>
                </Link>
                <button 
                    onClick={() => setIsSwitcherOpen(true)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/80"
                >
                    <Settings size={20} strokeWidth={2.5} />
                </button>
            </div>

            {/* Mobile Bottom Navigation Bar (Visible only on < lg screens) */}
            <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-md">
                <div className="backdrop-blur-2xl bg-black/70 border border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.6)] rounded-full px-4 py-3 flex items-center justify-around">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;
                        return (
                            <Link 
                                key={link.href} 
                                href={link.href}
                                className="relative flex flex-col items-center gap-1 group py-1 min-w-[60px]"
                            >
                                <div className={`p-2 rounded-2xl transition-all duration-300 ${isActive ? "bg-accent/20 text-accent scale-110 shadow-[0_0_20px_rgba(14,165,233,0.3)]" : "text-white/60 group-hover:text-white"}`}>
                                    <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                                </div>
                                <span className={`text-[9px] font-black tracking-widest uppercase transition-all duration-300 ${isActive ? "text-accent opacity-100" : "text-white/40 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"}`}>
                                    {link.label}
                                </span>
                                {isActive && (
                                    <motion.div 
                                        layoutId="activeTab" 
                                        className="absolute -bottom-1 w-1 h-1 bg-accent rounded-full"
                                        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Switcher Settings Drawer */}
            <AnimatePresence>
                {isSwitcherOpen && (
                    <div className="fixed inset-0 z-[100] flex justify-end">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSwitcherOpen(false)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        />
                        <motion.div 
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="relative w-full max-w-sm h-full bg-background border-l border-foreground/10 shadow-[-20px_0_50px_rgba(0,0,0,0.3)] p-12 flex flex-col gap-12 overflow-y-auto"
                        >
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-black uppercase tracking-tighter">Site Settings</h2>
                                <button onClick={() => setIsSwitcherOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-red-500 hover:text-white transition-all">
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Cursor Selection */}
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest opacity-60">
                                    <MousePointer2 size={18} /> Cursor Style
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {["default", "animated"].map((type) => (
                                        <button 
                                            key={type}
                                            onClick={() => setCursorType(type as any)}
                                            className={`py-6 rounded-2xl border-2 transition-all font-bold uppercase text-xs tracking-widest ${cursorType === type ? "border-accent bg-accent/10 text-accent" : "border-foreground/5 bg-foreground/5 text-foreground/40 hover:border-foreground/20"}`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Mode Selection */}
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest opacity-60">
                                    {theme === "light" ? <Sun size={18} /> : <Moon size={18} />} View Mode
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <button 
                                        onClick={() => setTheme("light")}
                                        className={`py-8 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 font-black uppercase text-xs tracking-widest ${theme === "light" ? "border-accent bg-accent/10 text-accent" : "border-foreground/5 bg-foreground/5 text-foreground/40 hover:border-foreground/20"}`}
                                    >
                                        <Sun size={24} /> Light
                                    </button>
                                    <button 
                                        onClick={() => setTheme("dark")}
                                        className={`py-8 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 font-black uppercase text-xs tracking-widest ${theme === "dark" ? "border-accent bg-accent/10 text-accent" : "border-foreground/5 bg-foreground/5 text-foreground/40 hover:border-foreground/20"}`}
                                    >
                                        <Moon size={24} /> Dark
                                    </button>
                                </div>
                            </div>

                            <div className="mt-auto text-[10px] font-bold text-foreground/20 uppercase tracking-[0.3em] text-center border-t border-foreground/5 pt-8">
                                ES Innovations © 2026 hub
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
