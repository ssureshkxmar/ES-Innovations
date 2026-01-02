import { Section } from "@/components/ui/Section";
import { COMPANY_NAME } from "@/lib/constants";

export default function TermsAndConditions() {
    return (
        <div className="bg-transparent min-h-screen pt-24 pb-16 px-6 relative">
            {/* Background overlay for readability */}
            <div className="max-w-4xl mx-auto bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-gray-200 shadow-2xl relative z-10">
                <h1 className="text-3xl font-bold text-primary mb-8 border-b pb-4">Terms and Conditions</h1>
                <div className="prose max-w-none text-foreground/80 space-y-6">
                    <p className="text-sm text-foreground/50">Last Updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-xl font-semibold text-primary">1. Agreement to Terms</h2>
                    <p>
                        These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&ldquo;you&rdquo;) and <strong>{COMPANY_NAME}</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), concerning your access to and use of our website.
                    </p>

                    <h2 className="text-xl font-semibold text-primary">2. Intellectual Property Rights</h2>
                    <p>
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &ldquo;Content&rdquo;) and the trademarks, service marks, and logos contained therein (the &ldquo;Marks&rdquo;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                    </p>

                    <h2 className="text-xl font-semibold text-primary">3. User Representations</h2>
                    <p>
                        By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.
                    </p>

                    <h2 className="text-xl font-semibold text-primary">4. Governing Law</h2>
                    <p>
                        These Terms shall be governed by and defined following the laws of India. <strong>{COMPANY_NAME}</strong> and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                    </p>

                    <h2 className="text-xl font-semibold text-primary">5. Contact Us</h2>
                    <p>
                        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us via the contact information provided on our Contact page.
                    </p>
                </div>
            </div>

        </div >
    );
}
