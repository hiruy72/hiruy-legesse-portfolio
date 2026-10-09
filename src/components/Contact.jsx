import { Send, ArrowUpRight, Github, Linkedin, Mail, Phone, CheckCircle2, ArrowLeft, Sparkles, MessageSquare, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Contact = () => {
    const location = useLocation();
    const isDedicatedPage = location.pathname === '/contact';
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const subject = encodeURIComponent(`Inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

        window.location.href = `mailto:hiruyadane@gmail.com?subject=${subject}&body=${body}`;
        setIsSent(true);
        setTimeout(() => setIsSent(false), 5000);
    };

    return (
        <section id="contact" className="py-28 md:py-36 relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/[0.07] rounded-full blur-[160px] pointer-events-none -z-10" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-600/[0.08] rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {isDedicatedPage && (
                    <div className="pt-8 mb-12">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-white transition-colors"
                        >
                            <ArrowLeft size={14} /> Back to Overview
                        </Link>
                    </div>
                )}

                {/* Section Header */}
                <div className="mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-indigo-400 mb-4">
                            <MessageSquare size={13} className="text-indigo-400" />
                            <span>INITIATE COLLABORATION</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gradient-micro1">
                            Let’s Build Something Exceptional
                        </h2>
                        <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
                            Open for engineering opportunities, AI systems consulting, and scalable full-stack application development.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Direct Info & Socials */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 space-y-6"
                    >
                        {/* Status Card */}
                        <div className="glass-card rounded-2xl p-6 border border-white/[0.08] space-y-4">
                            <div className="flex items-center gap-2.5">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                </span>
                                <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">
                                    Available for Opportunities
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Currently evaluating high-impact software engineering and AI developer positions. Let's discuss how I can contribute to your vision.
                            </p>
                        </div>

                        {/* Direct Email Card */}
                        <div className="glass-card rounded-2xl p-6 border border-white/[0.08] space-y-2">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                                Direct Email
                            </span>
                            <a
                                href="mailto:hiruyadane@gmail.com"
                                className="text-lg md:text-xl font-bold text-white hover:text-indigo-300 transition-colors flex items-center justify-between group"
                            >
                                <span>hiruyadane@gmail.com</span>
                                <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </a>
                        </div>

                        {/* Upwork Hire Banner Card */}
                        <div className="glass-card rounded-2xl p-6 border border-white/[0.08] space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                                    Freelance & Contract
                                </span>
                                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                                    Verified Talent
                                </span>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Prefer working through Upwork with escrow protection and verified milestone contracts?
                            </p>
                            <a
                                href="https://www.upwork.com/freelancers/~0191af9b1cee504214?mp_source=share"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-pill w-full justify-between"
                            >
                                <span>Hire Me on Upwork</span>
                                <div className="arrow-badge">
                                    <ArrowUpRight size={14} />
                                </div>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-4">
                                Connect on Channels
                            </span>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {[
                                    { icon: <Globe size={18} />, label: 'Upwork', href: 'https://www.upwork.com/freelancers/~0191af9b1cee504214?mp_source=share' },
                                    { icon: <Github size={18} />, label: 'GitHub', href: 'https://github.com/hiruy72' },
                                    { icon: <Linkedin size={18} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/hiruy-legesse-503a59354/' },
                                    { icon: <Mail size={18} />, label: 'Email', href: 'mailto:hiruyadane@gmail.com' }
                                ].map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/20 text-muted-foreground hover:text-white transition-all group"
                                    >
                                        <div className="text-indigo-400 group-hover:text-white group-hover:scale-110 transition-all mb-1.5">
                                            {item.icon}
                                        </div>
                                        <span className="text-xs font-medium">{item.label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <div className="glass-card rounded-3xl p-8 md:p-10 border border-white/[0.08] relative overflow-hidden">
                            {/* Subtle corner light */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/[0.08] rounded-full blur-2xl pointer-events-none" />

                            <AnimatePresence mode="wait">
                                {!isSent ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6 relative z-10"
                                    >
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="space-y-2">
                                                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                                                    Your Name
                                                </label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    placeholder="Alex Rivers"
                                                    required
                                                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-muted-foreground/40 focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.05] transition-all"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                                                    Email Address
                                                </label>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    placeholder="alex@company.com"
                                                    required
                                                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-muted-foreground/40 focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.05] transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                                                Message Details
                                            </label>
                                            <textarea
                                                name="message"
                                                rows={5}
                                                placeholder="Tell me about your project, timeline, or engineering goals..."
                                                required
                                                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-muted-foreground/40 focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.05] transition-all resize-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn-pill w-full justify-between py-3.5 px-6 shadow-xl hover:shadow-indigo-500/10 cursor-pointer"
                                        >
                                            <span className="font-semibold text-sm">Send Direct Message</span>
                                            <div className="arrow-badge">
                                                <Send size={13} />
                                            </div>
                                        </button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-16 text-center space-y-4"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                                            <CheckCircle2 size={32} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">Message Prepared</h3>
                                        <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                                            Your default mail client has opened with your inquiry. I will get back to you promptly!
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

