import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL } from "@/lib/constants";

export default function CareersPage() {
    return (
        <div className="bg-transparent min-h-screen pt-20">
            <Section className="bg-black/40 backdrop-blur-md text-white text-center py-24 border-b border-white/10">
                <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
                <p className="text-blue-100 max-w-2xl mx-auto">
                    Build the future with us. We are always looking for passionate individuals to join our growing family.
                </p>
            </Section>

            <Section>
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-primary mb-6">Why Join Us?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-4 bg-secondary/30 rounded-lg">
                                <h3 className="font-semibold mb-2">Growth Culture</h3>
                                <p className="text-sm text-foreground/70">Continuous learning and rapid career progression.</p>
                            </div>
                            <div className="p-4 bg-secondary/30 rounded-lg">
                                <h3 className="font-semibold mb-2">Innovative Work</h3>
                                <p className="text-sm text-foreground/70">Work on challenging projects in IoT and AI.</p>
                            </div>
                            <div className="p-4 bg-secondary/30 rounded-lg">
                                <h3 className="font-semibold mb-2">Work-Life Balance</h3>
                                <p className="text-sm text-foreground/70">Flexible timings and supportive environment.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-primary mb-6">Open Positions</h2>
                        {/* Placeholder for no open jobs */}
                        <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-8 text-center">
                            <p className="text-foreground/60 mb-4">
                                We don&apos;t have specific openings right now, but we are always hiring talented developers and engineers.
                            </p>
                            <Button variant="outline">
                                Check Back Later
                            </Button>
                        </div>

                        <div className="mt-8 bg-primary/5 p-6 rounded-lg border border-primary/10">
                            <h3 className="font-semibold text-primary mb-2">Don&apos;t see a fit?</h3>
                            <p className="text-sm text-foreground/70 mb-4">
                                Send your resume to our HR team and we&apos;ll contact you when a relevant position opens up.
                            </p>
                            <a href={`mailto:${CONTACT_EMAIL}`}>
                                <Button variant="secondary" size="sm">Email Resume</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
