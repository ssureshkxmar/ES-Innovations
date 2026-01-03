import { Section } from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";

export default function SmartFactoriesPage() {
    return (
        <div className="min-h-screen pt-20 bg-black/40 backdrop-blur-lg">
            {/* Header Section */}
            <Section className="py-20 relative z-10">
                <Link href="/projects" className="inline-flex items-center text-accent hover:text-white mb-8 transition-colors">
                    ← Back to Projects
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-glow">
                    Smart Factories Energy Power Control
                </h1>
                <p className="text-lg text-blue-100 max-w-2xl font-medium mb-8">
                    An advanced PLC-based automated system optimizing energy consumption and control efficiency in manufacturing environments.
                </p>
                <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold">
                        Embedded Systems
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold">
                        PLC Automation
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold">
                        Energy Management
                    </span>
                </div>
            </Section>

            {/* Media Gallery Section */}
            <Section className="pb-20">
                <div className="flex flex-col gap-20">
                    {/* Feature 1: System Architecture */}
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] group">
                                <Image
                                    src="/projects/smart-factories/block-diagram.png"
                                    alt="System Architecture Block Diagram"
                                    fill
                                    className="object-contain bg-white/5 p-4 transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-white">System Architecture & Signal Flow</h3>
                            <div className="h-1 w-20 bg-accent rounded-full"></div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                The core of the system relies on a <strong>Raspberry Pi Pico</strong> as the central processing unit, interfacing with multiple peripherals via SPI and I2C protocols.
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Power Management:</strong> Step-down voltage regulators (18650) ensure stable 5V power distribution to all modules.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Communication:</strong> ESP8266 Wi-Fi Module enables real-time data transmission to the cloud dashboard.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Feedback Loop:</strong> Current sensors provide analog feedback to monitor motor load and detect anomalies.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 2: Dashboard Interface */}
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] group">
                                <Image
                                    src="/projects/smart-factories/p1.png"
                                    alt="Centralized Control Dashboard"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-white">Centralized Control Dashboard</h3>
                            <div className="h-1 w-20 bg-accent rounded-full"></div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Operators can monitor the entire production line through a unified web interface. This dashboard aggregates data from distributed sensors, presenting actionable insights in real-time.
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Real-time Visualization:</strong> Gauges and graphs display voltage, current, and power consumption metrics instantly.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Remote Switching:</strong> Manual override controls allow remote shutdown of specific conveyor sections during emergencies.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 3: Hardware Implementation */}
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] group">
                                <Image
                                    src="/projects/smart-factories/p3.jpg"
                                    alt="Hardware Implementation"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-white">Hardware Integration & Protoyping</h3>
                            <div className="h-1 w-20 bg-accent rounded-full"></div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                The physical implementation involves a custom PCB design hosting the microcontroller and power circuits, connected to industrial-grade stepper motors.
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Compact Form Factor:</strong> The entire control unit is miniaturized to fit within standard electrical enclosures.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <span><strong>Modular Design:</strong> Sensors and actuators are connected via modular terminals for easy maintenance and upgrades.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
