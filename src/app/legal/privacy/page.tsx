import { Section } from "@/components/ui/Section";
import { COMPANY_NAME, CONTACT_EMAIL } from "@/lib/constants";

export default function PrivacyPolicy() {
    return (
        <div className="bg-transparent min-h-screen pt-24 pb-16 px-6 relative">
            {/* Background overlay for readability */}
            <div className="max-w-4xl mx-auto bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-gray-200 shadow-2xl relative z-10">
                <h1 className="text-3xl font-bold text-primary mb-8 border-b pb-4">Privacy Policy</h1>
                <div className="prose max-w-none text-foreground/80 space-y-6">
                    <p className="text-sm text-foreground/50">Last Updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-xl font-semibold text-primary">1. Introduction</h2>
                    <p>
                        Welcome to <strong>{COMPANY_NAME}</strong>. We value your trust and are committed to protecting your personal information.
                        This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
                    </p>

                    <h2 className="text-xl font-semibold text-primary">2. Information We Collect</h2>
                    <p>We may collect the following types of information:</p>
                    <ul className="list-disc pl-5">
                        <li>Personal Identification Information (Name, Email address, Phone number, etc.)</li>
                        <li>Academic or Professional details (for internship/career applications)</li>
                        <li>Usage Data (IP address, browser type, pages visited)</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-primary">3. How We Use Your Information</h2>
                    <p>We use the collected data for various purposes:</p>
                    <ul className="list-disc pl-5">
                        <li>To provide and maintain our Service</li>
                        <li>To notify you about changes to our Service</li>
                        <li>To allow you to participate in interactive features when you choose to do so</li>
                        <li>To provide customer support</li>
                        <li>To monitor the usage of the Service</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-primary">4. Data Security</h2>
                    <p>
                        The security of your data is important to us, but remember that no method of transmission over the Internet is 100% secure.
                        We strive to use commercially acceptable means to protect your Personal Data.
                    </p>

                    <h2 className="text-xl font-semibold text-primary">5. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at: <br />
                        Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent underline">{CONTACT_EMAIL}</a>
                    </p>
                </div>
            </div>

        </div >
    );
}
