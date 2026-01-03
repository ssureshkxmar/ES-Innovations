import Link from "next/link";
import { SITE_NAME, ADDRESS, COMPANY_NAME } from "@/lib/constants";

export function Footer() {
    return (
        <footer className="bg-black/80 backdrop-blur-xl border-t border-white/10 text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand & Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">{SITE_NAME}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Empowering innovation through Electronics, IoT, and Software solutions.
                        </p>
                        <p className="text-sm text-gray-400">
                            {ADDRESS}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-accent">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>

                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold mb-4 text-accent">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/services" className="hover:text-white transition-colors">Embedded Systems</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Web Development</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">IoT Solutions</Link></li>

                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold mb-4 text-accent">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/legal/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-400">
                        © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
