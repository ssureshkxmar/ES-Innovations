import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL } from "@/lib/constants";

export default function InternshipPage() {
    return (
        <div className="bg-transparent min-h-screen pt-20">
            <Section className="bg-black/40 backdrop-blur-md border-b border-white/10 py-20">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-white mb-4">Internship Program</h1>
                    <p className="text-lg text-gray-200">
                        Kickstart your career with real-world experience. Join our intensive training and internship program
                        designed for final year engineering students.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold text-foreground mb-6">Program Highlights</h2>
                        <ul className="space-y-4 text-foreground/80">
                            <li className="flex items-start gap-3">
                                <span className="text-accent font-bold">•</span>
                                <span><strong>Live Projects:</strong> Work on actual industry projects, not just simulations.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent font-bold">•</span>
                                <span><strong>Mentorship:</strong> 1-on-1 guidance from senior engineers.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent font-bold">•</span>
                                <span><strong>Certification:</strong> Receive a verified internship certificate and Letter of Recommendation (LOR).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent font-bold">•</span>
                                <span><strong>Pre-Placement Offer:</strong> Top performers get a chance to join us full-time.</span>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Available Domains</h2>
                        <div className="flex flex-wrap gap-3">
                            {["Embedded Systems", "IoT & Automation", "Full Stack Web Dev", "Python & AI", "PCB Design"].map((domain) => (
                                <span key={domain} className="px-3 py-1 bg-secondary rounded-full text-sm font-medium text-primary border border-secondary/50">
                                    {domain}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-xl border border-secondary shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">Apply Now</h3>
                        <p className="text-sm text-foreground/60 mb-6">Fill out the form below to register your interest.</p>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1 text-foreground">Full Name</label>
                                <input type="text" className="w-full rounded-md border border-input bg-background/50 text-foreground px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-foreground">Email Address</label>
                                <input type="email" className="w-full rounded-md border border-input bg-background/50 text-foreground px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="john@college.edu" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-foreground">Phone Number</label>
                                <input type="tel" className="w-full rounded-md border border-input bg-background/50 text-foreground px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="+91 98765 43210" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-foreground">Domain of Interest</label>
                                <select className="w-full rounded-md border border-input bg-background/50 text-foreground px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                                    <option>Select a domain</option>
                                    <option>Embedded Systems</option>
                                    <option>IoT</option>
                                    <option>Web Development</option>
                                    <option>AI/ML</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-foreground">College/University</label>
                                <input type="text" className="w-full rounded-md border border-input bg-background/50 text-foreground px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                            </div>
                            <Button className="w-full mt-2">Submit Application</Button>
                            <p className="text-xs text-center text-foreground/50 mt-4">
                                Or email your resume to <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">{CONTACT_EMAIL}</a>
                            </p>
                        </form>
                    </div>
                </div>
            </Section>
        </div>
    );
}
