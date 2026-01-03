import { Section } from "@/components/ui/Section";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { Cpu, Globe, Brain, Database, FileCode, GraduationCap } from "lucide-react";

const services = [
    {
        title: "Embedded Systems",
        icon: <Cpu className="h-8 w-8 text-accent" />,
        description: "Design and development of microcontroller-based systems, PCB design, and firmware development for industrial applications.",
        glow: "from-blue-500/20"
    },
    {
        title: "IoT Solutions",
        icon: <Database className="h-8 w-8 text-accent" />,
        description: "Smart home automation, industrial IoT (IIoT), and cloud-connected device ecosystems using MQTT and AWS IoT.",
        glow: "from-cyan-500/20"
    },
    {
        title: "Web Development",
        icon: <Globe className="h-8 w-8 text-accent" />,
        description: "Full-stack web applications using React, Next.js, and Node.js. E-commerce platforms and corporate portals.",
        glow: "from-purple-500/20"
    },
    {
        title: "AI & Machine Learning",
        icon: <Brain className="h-8 w-8 text-accent" />,
        description: "Predictive analytics, computer vision, and NLP solutions to automate business processes and drive insights.",
        glow: "from-emerald-500/20"
    },
    {
        title: "Software Projects",
        icon: <FileCode className="h-8 w-8 text-accent" />,
        description: "Custom software development for SMEs, including desktop applications and inventory management systems.",
        glow: "from-pink-500/20"
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen pt-20 bg-black/40 backdrop-blur-lg">
            <Section className="text-white text-center py-20 relative z-10">
                <h1 className="text-4xl font-bold mb-4 text-glow">Our Services</h1>
                <p className="text-blue-100 max-w-2xl mx-auto font-medium">
                    Delivering excellence across hardware and software domains with a focus on quality and scalability.
                </p>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <GlowingCard key={index} glowColor={service.glow} className="p-8 h-full flex flex-col items-start gap-4">
                            {service.icon}
                            <h3 className="text-xl font-bold text-white">{service.title}</h3>
                            <p className="text-gray-300 leading-relaxed">
                                {service.description}
                            </p>
                        </GlowingCard>
                    ))}
                </div>
            </Section>
        </div>
    );
}
