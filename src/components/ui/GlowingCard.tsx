'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowingCardProps {
    children: ReactNode;
    className?: string;
    glowColor?: string; // e.g., "from-cyan-500/20"
}

export function GlowingCard({ children, className = "", glowColor = "from-cyan-500/20" }: GlowingCardProps) {
    return (
        <div className={`relative group isolate rounded-xl transition-all duration-300 ${className}`}>
            {/* Background & Border */}
            <div className="absolute inset-0 -z-10 rounded-xl bg-transparent border-none transition-colors" />

            {/* Inner Glow Gradient (Static but fades in) */}
            <div className={`absolute inset-0 -z-10 rounded-xl bg-gradient-to-br ${glowColor} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

            {/* Moving Shine Effect */}
            <div className="absolute inset-0 -z-10 rounded-xl overflow-hidden">
                <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-shine" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );
}
