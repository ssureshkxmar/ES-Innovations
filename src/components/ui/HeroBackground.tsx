"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useUI } from "@/lib/context/UIContext";

const SLIDES = [
    "/images/hero/1.jpg",
    "/images/hero/2.jpg",
    "/images/hero/3.jpg",
    "/images/hero/4.jpg",
    "/images/hero/5.jpg"
];

export function HeroBackground() {
    const { showBgVideo } = useUI();
    const [index, setIndex] = useState(0);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        if (!showBgVideo) {
            const timer = setInterval(() => {
                setIndex((prev) => (prev + 1) % SLIDES.length);
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [showBgVideo]);

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden -z-50 bg-background transition-colors duration-1000">
            {/* Cinematic Overlays */}
            <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
            
            {/* 1. Video Background (Mode: ACTIVE) */}
            <AnimatePresence mode="wait">
                {showBgVideo && (
                    <motion.div
                        key="hero-video-container"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            onLoadedData={() => setIsVideoLoaded(true)}
                            className="absolute inset-0 w-full h-full object-cover z-0 grayscale-[0.2] brightness-75"
                        >
                            <source src="/videos/hero-bg.mp4" type="video/mp4" />
                        </video>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 2. Image Slideshow (Mode: DEFAULT) */}
            <AnimatePresence mode="wait">
                {!showBgVideo && (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <img 
                            src={SLIDES[index]} 
                            alt={`Innovation Hub Slide ${index + 1}`}
                            className="absolute inset-0 w-full h-full object-cover brightness-50 contrast-125"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Subtle Texture/Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none z-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] z-30" />
        </div>
    );
}
