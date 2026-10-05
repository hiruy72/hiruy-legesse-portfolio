import { motion } from 'framer-motion';
import { ArrowLeft, Download, Terminal, Layers, Cpu, Globe, Rocket, Shield, Zap, Sparkles, Award, CheckCircle2, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-[#050507] text-white pb-32 pt-32 relative overflow-hidden"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-indigo-600/[0.08] rounded-full blur-[140px] pointer-events-none -z-10" />
            <div className="absolute top-1/2 right-10 w-96 h-96 bg-violet-600/[0.08] rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Back Navigation */}
                <div className="mb-10">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-white transition-colors"
                    >
                        <ArrowLeft size={14} /> Back to Overview
                    </Link>
                </div>

                {/* Page Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-indigo-400 mb-4">
                            <User size={13} className="text-indigo-400" />
                            <span>ENGINEERING DNA & GENESIS</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gradient-micro1">
                            Building at the intersection of AI, Systems & Design
                        </h1>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground max-w-sm leading-relaxed">
                        Hiruy Legesse — Software Engineer & AI Developer. Driven by clean architecture, algorithmic precision, and intuitive user experiences.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
                    {/* Left Column: Story & Philosophy */}
                    <div className="lg:col-span-7 space-y-12">
                        <div className="glass-card rounded-3xl p-8 md:p-10 border border-white/[0.08] space-y-6">
                            <h2 className="text-2xl font-bold text-white tracking-tight">
                                The Engineering Narrative
                            </h2>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                I am Hiruy Legesse Adane, a Software Engineering professional focused on <span className="text-white font-semibold">AI systems, modern full-stack architectures, and high-performance backends</span>.
                            </p>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                Based in Addis Ababa, I combine deep theoretical foundations in Data Structures, Algorithms, and Distributed Systems with hands-on development in React, Next.js, Node.js, Python, and cloud services.
                            </p>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                From training intelligent predictive models to deploying production-grade enterprise platforms, I engineer solutions that balance ultra-fast responsiveness with maintainable, robust codebases.
                            </p>
                        </div>

                        {/* 4 Pillars Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {[
                                { label: 'Top Academic Rank', sub: 'High Honors', icon: <Award size={20} className="text-indigo-400" /> },
                                { label: 'Full-Stack & UI/UX', sub: 'Modern Web Apps', icon: <Terminal size={20} className="text-violet-400" /> },
                                { label: 'AI & Data Models', sub: 'Python & ML', icon: <Zap size={20} className="text-indigo-400" /> },
                                { label: 'Scalable Systems', sub: 'Node & Cloud', icon: <Layers size={20} className="text-violet-400" /> }
                            ].map((pillar, idx) => (
                                <div
                                    key={idx}
                                    className="glass-card rounded-2xl p-5 border border-white/[0.06] text-center space-y-2 hover:border-white/20 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mx-auto mb-2">
                                        {pillar.icon}
                                    </div>
                                    <h4 className="text-xs font-bold text-white">{pillar.label}</h4>
                                    <p className="text-[11px] text-muted-foreground">{pillar.sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Profile & Quick Info */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="glass-card rounded-3xl p-6 border border-white/[0.08] overflow-hidden group">
                            <div className="aspect-[4/4.5] rounded-2xl overflow-hidden relative mb-6">
                                <img
                                    src="/Hiruy Legesse.png"
                                    alt="Hiruy Legesse"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/80 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="text-lg font-bold text-white block">Hiruy Legesse Adane</span>
                                    <span className="text-xs text-indigo-300 font-medium">Full-Stack & AI Developer</span>
                                </div>
                            </div>

                            <div className="space-y-3.5 px-2">
                                {[
                                    { label: 'Location', value: 'Addis Ababa, Ethiopia' },
                                    { label: 'Education', value: 'Addis Ababa University' },
                                    { label: 'Focus Areas', value: 'Full-Stack & AI Systems' },
                                    { label: 'Status', value: 'Available for Hire' }
                                ].map((row, idx) => (
                                    <div key={idx} className="flex justify-between items-center text-xs py-2 border-b border-white/[0.04] last:border-0">
                                        <span className="text-muted-foreground">{row.label}</span>
                                        <span className="font-semibold text-white/90">{row.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-4 space-y-3">
                                <a
                                    href="https://www.upwork.com/freelancers/~0191af9b1cee504214?mp_source=share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-pill w-full justify-between"
                                >
                                    <span>Hire Me on Upwork</span>
                                    <div className="arrow-badge">
                                        <Globe size={14} />
                                    </div>
                                </a>
                                <a
                                    href="/Hiruy-Legesse-Adane-FlowCV-Resume-20260215 (1).pdf"
                                    download="Hiruy-Legesse-Resume.pdf"
                                    className="btn-pill-outline w-full justify-between"
                                >
                                    <span>Download Resume</span>
                                    <Download size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Engineering Philosophy Cards */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-indigo-400">
                        <Sparkles size={13} className="text-indigo-400" />
                        <span>CORE PRINCIPLES</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="glass-card rounded-3xl p-8 md:p-10 border border-white/[0.08] space-y-4 hover:border-white/20 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-indigo-400">
                                <Terminal size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Code as Architecture</h3>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                I treat code not merely as instructions for a processor, but as structured architecture that must be modular, self-documenting, and designed for horizontal scale from day one.
                            </p>
                        </div>

                        <div className="glass-card rounded-3xl p-8 md:p-10 border border-white/[0.08] space-y-4 hover:border-white/20 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-violet-400">
                                <Globe size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">High Performance & Accessibility</h3>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                User interfaces must feel instantaneous and frictionless across any device. By combining minimal bundle footprints with polished micro-interactions, technology reaches its full potential.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage;

