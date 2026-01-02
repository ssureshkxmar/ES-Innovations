'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { submitContactForm } from '@/app/contact/actions';
import { Loader2, Send, CheckCircle2 } from 'lucide-react';

export function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        budget: 'Not Specified',
        timeline: 'Not Specified',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await submitContactForm(formData);
            setSuccess(true);
        } catch (error) {
            console.error('Failed to submit form:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleWhatsApp = () => {
        const phoneNumber = '918925427760';
        const text = `Hello *ES Innovations*,%0a%0aMy name is *${formData.name}*.%0aI am interested in: *${formData.subject}*.%0a%0a*Project Budget:* ${formData.budget}%0a*Timeline:* ${formData.timeline}%0a*Phone:* ${formData.phone}%0a%0a*Details:*%0a${formData.message}%0a%0aEmail: ${formData.email}`;
        window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    };

    if (success) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl text-white relative overflow-hidden flex flex-col items-center justify-center text-center h-[600px]"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -z-10" />

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.4)]"
                >
                    <CheckCircle2 className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-2">Almost Done!</h3>
                <p className="text-gray-300 max-w-md mb-6">
                    Please send your details via WhatsApp to complete the process. <br />
                    <span className="text-white font-medium">Our team will contact you shortly after receiving your message.</span>
                </p>

                <div className="space-y-4 w-full max-w-xs">
                    <Button
                        onClick={handleWhatsApp}
                        className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-green-500/20"
                    >
                        <Send className="w-4 h-4 mr-2" />
                        Send via WhatsApp
                    </Button>

                    <Button
                        variant="outline"
                        onClick={() => setSuccess(false)}
                        className="w-full border-white/10 hover:bg-white/5"
                    >
                        Send Another Message
                    </Button>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl text-white relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
            <h2 className="text-3xl font-bold text-white mb-6">Start Your Project</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-200">Your Name</label>
                        <input
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text"
                            className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent/50 placeholder:text-gray-500 transition-all focus:bg-white/10"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-200">Phone Number</label>
                        <input
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                            className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent/50 placeholder:text-gray-500 transition-all focus:bg-white/10"
                            placeholder="+91 9876543210"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-200">Email Address</label>
                    <input
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent/50 placeholder:text-gray-500 transition-all focus:bg-white/10"
                        placeholder="john@example.com"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-200">Project Type</label>
                        <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent/50 [&>option]:bg-slate-900 transition-all focus:bg-white/10"
                        >
                            <option>General Inquiry</option>
                            <option>Embedded Systems</option>
                            <option>IoT Solution</option>
                            <option>Web Development</option>
                            <option>Mobile App</option>
                            <option>AI/ML Model</option>
                            <option>Partnership</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-200">Estimated Budget</label>
                        <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent/50 [&>option]:bg-slate-900 transition-all focus:bg-white/10"
                        >
                            <option>Not Specified</option>
                            <option>&lt; ₹10,000</option>
                            <option>₹10k - ₹50k</option>
                            <option>₹50k - ₹1 Lakh</option>
                            <option>₹1 Lakh - ₹5 Lakhs</option>
                            <option>&gt; ₹5 Lakhs</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-200">Expected Timeline</label>
                    <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent/50 [&>option]:bg-slate-900 transition-all focus:bg-white/10"
                    >
                        <option>Not Specified</option>
                        <option>Urgent (Within 1 week)</option>
                        <option>Within 1 Month</option>
                        <option>1-3 Months</option>
                        <option>3+ Months</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-200">Project Details</label>
                    <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent/50 placeholder:text-gray-500 transition-all focus:bg-white/10"
                        placeholder="Please describe your project requirements, features, and goals..."
                    ></textarea>
                </div>
                <Button
                    type="submit"
                    disabled={loading}
                    className="w-full shadow-lg shadow-accent/20 h-12 text-base"
                >
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing...
                        </>
                    ) : (
                        <>
                            Submit Request
                            <Send className="ml-2 h-4 w-4" />
                        </>
                    )}
                </Button>
            </form>
        </motion.div>
    );
}
