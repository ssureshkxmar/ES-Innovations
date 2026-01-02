"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const IMAGES = [
    "/images/hero/1.jpg",
    "/images/hero/2.jpg",
    "/images/hero/3.jpg",
    "/images/hero/4.jpg",
    "/images/hero/5.jpg"
];

export function HeroBackground() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden -z-50">
            <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark overlay for text readability */}

            <AnimatePresence mode="popLayout">
                <motion.img
                    key={index}
                    src={IMAGES[index]}
                    alt="Hero background"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }} // Full opacity for maximum visibility
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                />
            </AnimatePresence>
        </div>
    );
}
