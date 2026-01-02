import { Section } from "@/components/ui/Section";
import { SITE_NAME, COMPANY_NAME } from "@/lib/constants";
import Image from "next/image";
import { GlowingCard } from "@/components/ui/GlowingCard";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-20 bg-black/40 backdrop-blur-lg">
            <Section className="text-white py-20 text-center relative z-10">
                <h1 className="text-5xl font-extrabold text-white mb-6 text-center drop-shadow-lg text-glow">About Us</h1>
                <p className="text-lg text-center text-blue-100 max-w-3xl mx-auto font-medium">
                    Driving innovation since <span className="text-accent font-bold">2025</span>.
                </p>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <GlowingCard className="p-8 h-full">
                            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                            <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                                At {SITE_NAME}, our mission is to empower the next generation of engineers and deliver world-class technology solutions.
                                We bridge the gap between academic theory and industrial application through hands-on innovation.
                            </p>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                We are committed to excellence, integrity, and the relentless pursuit of technological advancement.
                            </p>
                        </GlowingCard>
                    </div>

                    {/* Founder Section */}
                    <div className="text-center pt-8">
                        <h3 className="text-3xl font-bold text-white mb-2 tracking-wide">SURESHKUMAR S</h3>
                        <p className="text-accent font-medium mb-6 uppercase tracking-widest text-sm">Founder</p>

                        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 max-w-sm mx-auto shadow-lg">
                            <p className="text-base text-gray-300 italic font-light">
                                "Innovation looks forward. We build the future today."
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-12 text-glow">Company Profile</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <GlowingCard className="p-8">
                        <h3 className="text-xl font-bold mb-2 text-accent">Established</h3>
                        <p className="text-gray-300 text-lg">2025</p>
                    </GlowingCard>
                    <GlowingCard className="p-8">
                        <h3 className="text-xl font-bold mb-2 text-accent">Focus Area</h3>
                        <p className="text-gray-300">Embedded Systems & IoT <br /><span className="text-xs text-gray-500">(Research & Development)</span></p>
                    </GlowingCard>
                    <GlowingCard className="p-8">
                        <h3 className="text-xl font-bold mb-2 text-accent">Vision</h3>
                        <p className="text-gray-300">Empowering future engineers through practical innovation.</p>
                    </GlowingCard>
                </div>
            </Section>
        </div>
    );
}
