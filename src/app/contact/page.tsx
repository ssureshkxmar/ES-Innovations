import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CONTACT_EMAIL, CONTACT_PHONE, ADDRESS } from "@/lib/constants";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";


export default function ContactPage() {
    return (
        <div className="min-h-screen pt-20 bg-black/40 backdrop-blur-lg">
            {/* Static Gradient Background */}
            {/* Static Gradient Background - Removed for Global Glassy Background */}

            <Section className="bg-transparent text-white py-20 text-center relative z-10">
                {/* Glassy background for header - Removed to let HeroBackground show through cleanly, or keep subtle */}
                {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-md -z-10" /> */}
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">Contact Us</h1>
                <p className="text-blue-50 max-w-2xl mx-auto text-lg md:text-xl font-medium drop-shadow-md">
                    We&apos;d love to hear from you. Reach out to us for project inquiries, collaboration, or just to say hello.
                </p>
            </Section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <Card className="p-6 border-none bg-transparent text-white hover:bg-white/5 transition-colors">
                                <Mail className="h-8 w-8 text-cyan-400 mb-4 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                                <h3 className="font-bold text-lg mb-2">Email Us</h3>
                                <p className="text-sm text-gray-200">{CONTACT_EMAIL}</p>
                            </Card>
                            <Card className="p-6 border-none bg-transparent text-white hover:bg-white/5 transition-colors">
                                <Phone className="h-8 w-8 text-cyan-400 mb-4 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                                <p className="text-sm text-gray-200">{CONTACT_PHONE}</p>
                            </Card>
                            <Card className="p-6 border-none bg-transparent text-white hover:bg-white/5 transition-colors">
                                <MapPin className="h-8 w-8 text-cyan-400 mb-4 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                                <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                                <p className="text-sm text-gray-200">{ADDRESS}</p>
                            </Card>
                            <Card className="p-6 border-none bg-transparent text-white hover:bg-white/5 transition-colors">
                                <Clock className="h-8 w-8 text-cyan-400 mb-4 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                                <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                                <p className="text-sm text-gray-200">Mon - Fri: 9:00 AM - 6:00 PM</p>
                            </Card>
                        </div>

                        {/* Google Map Embed (Neyveli) */}
                        <div className="w-full h-[300px] bg-black/20 rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm">
                            <iframe
                                src="https://maps.google.com/maps?q=Neyveli%2C%20Cuddalore%20District%2C%20Tamil%20Nadu%20-%20607802&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <ContactForm />
                </div>
            </Section>
        </div>
    );
}
