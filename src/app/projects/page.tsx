import { Section } from "@/components/ui/Section";
import { GlowingCard } from "@/components/ui/GlowingCard";

const projects = [
    {
        title: "Smart Home Automation System",
        category: "IoT",
        description: "A centralized control unit for home appliances using ESP32 and MQTT protocol with a mobile app interface."
    },
    {
        title: "Industrial Conveyor Controller",
        category: "Embedded",
        description: "PLC-based automated conveyor system with sensor integration for a manufacturing client."
    },
    {
        title: "University Management Portal",
        category: "Web Dev",
        description: "Student and faculty management system with attendance tracking and exam scheduling modules."
    },
    {
        title: "Face Recognition Attendance",
        category: "AI",
        description: "Python-based computer vision system to automate attendance in corporate offices using OpenCV."
    },
    {
        title: "E-Commerce Mobile App",
        category: "Mobile",
        description: "Cross-platform React Native app for a local retail chain with payment gateway integration."
    }
];

export default function ProjectsPage() {
    return (
        <div className="min-h-screen pt-20 bg-black/40 backdrop-blur-lg">
            <Section className="text-center py-20 relative z-10">
                <h1 className="text-4xl font-bold text-white mb-4 text-glow">Our Portfolio</h1>
                <p className="text-lg text-blue-100 max-w-2xl mx-auto font-medium">
                    Showcasing our best work across various domains.
                </p>
            </Section>

            <Section>
                {/* Filters Placeholder - Glassy */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {["All", "Embedded", "IoT", "Web", "AI"].map((filter) => (
                        <button key={filter} className="px-6 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-gray-300 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 hover:shadow-[0_0_15px_rgba(14,165,233,0.4)]">
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <GlowingCard key={index} className="p-8 h-full flex flex-col">
                            <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2 block">{project.category}</span>
                            <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                {project.description}
                            </p>
                            <div className="mt-auto pt-4 flex items-center justify-end">
                                <span className="text-xs text-gray-500 hover:text-white cursor-pointer transition-colors">View Details →</span>
                            </div>
                        </GlowingCard>
                    ))}
                </div>
            </Section>
        </div>
    );
}
