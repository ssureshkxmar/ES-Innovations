"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE_NAME } from "@/lib/constants";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/services", label: "Services" },
        { href: "/projects", label: "Projects" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/10 border-b border-white/5 transition-all duration-300">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 text-xl font-bold text-foreground tracking-tight hover:opacity-90 transition-opacity">
                    <div className="relative w-10 h-10 overflow-hidden rounded-md items-center justify-center flex bg-white/10 backdrop-blur-sm border border-white/10 shadow-sm">
                        <Image
                            src="/logo.png"
                            alt={`${SITE_NAME} Logo`}
                            width={40}
                            height={40}
                            className="object-contain p-0.5"
                            priority={true}
                        />
                    </div>
                    {SITE_NAME}
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8 text-sm font-medium text-foreground/80">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-accent transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu} className="md:hidden text-foreground hover:text-accent transition-colors p-2">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    {!isOpen && (
                        <div className="hidden md:block">
                            {/* Placeholder for future Desktop CTA if needed */}
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-foreground/80 hover:text-accent hover:pl-2 transition-all duration-300 py-2 border-b border-white/5 last:border-none"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                        <Button className="w-full mt-4 bg-accent hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/20">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            )}
        </nav>
    );
}
