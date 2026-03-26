"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useUI } from "@/lib/context/UIContext";

export function CustomCursor() {
    const { cursorType } = useUI();
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        if (cursorType === "default") return;

        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", moveMouse);
        window.document.addEventListener("mouseenter", handleMouseEnter);
        window.document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", moveMouse);
            window.document.removeEventListener("mouseenter", handleMouseEnter);
            window.document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [cursorType, mouseX, mouseY, isVisible]);

    if (cursorType === "default") return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
            {/* Main Cursor Ball */}
            <motion.div
                className="h-10 w-10 rounded-full border border-accent bg-accent/10 backdrop-blur-[2px]"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0
                }}
            />
            {/* Inner Dot */}
            <motion.div
                className="h-1.5 w-1.5 rounded-full bg-accent"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 1 : 0
                }}
            />
        </div>
    );
}
