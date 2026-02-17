import { motion } from 'framer-motion';
import { ArrowLeft, Download, Terminal, Layers, Cpu, Globe, Rocket, Shield, Zap, Sparkles, Award } from 'lucide-react';
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
            className="min-h-screen bg-background pb-32 pt-40"
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-20">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
                    <div className="space-y-6">
                        <Link to="/" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-foreground transition-all group mb-8">
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Return Home
                        </Link>
                        <h1 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.7]">
                            Personal <br />
                            <span className="text-muted-foreground/40 dark:text-muted-foreground/25 italic">Genesis.</span>
                        </h1>
                    </div>
                    <div className="flex flex-col items-end gap-6 w-full md:w-auto">
                        <p className="text-right text-[10px] font-black uppercase tracking-[0.4em] opacity-40 max-w-sm leading-relaxed">
                            Hiruy Legesse — Software Engineer & AI Researcher. Exploring the intersection of digital logic and human experience.
                        </p>
                    </div>
                </div>

                {/* Hero Content */}
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-32 items-start mb-48">
                    <div className="space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/60 flex items-center gap-4">
                                <div className="w-12 h-[1px] bg-muted-foreground/40"></div> The Narrative
                            </h2>
                            <p className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tighter text-foreground">
                                I am Hiruy Legesse Adane, a Software Engineering student architecture-focused on <span className="text-muted-foreground italic">scalable back-end systems</span>.
                            </p>
                            <div className="space-y-8 text-lg text-muted-foreground font-medium leading-relaxed max-w-3xl">
                                <p>
                                    Based in Addis Ababa, I specialize in building robust digital infrastructures. My foundation is built on a rock-solid understanding of <b>Data Structures, Algorithms, and Object-Oriented Programming</b>, which I apply to solve complex server-side challenges.
                                </p>
                                <p>
                                    Whether it's architecting a high-performance Restaurant Management System or training intelligent models for financial market analysis, my goal remains constant: to bridge the gap between industrial efficiency and human-centric design through clean, scalable code.
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-1px bg-border border border-border rounded-[2rem] overflow-hidden">
                            {[
                                { label: 'Top Tier', icon: <Award /> },
                                { label: 'Back-end Dept', icon: <Terminal /> },
                                { label: 'Scalability', icon: <Zap /> },
                                { label: 'CS Foundations', icon: <Layers /> }
                            ].map((value, i) => (
                                <div key={i} className="bg-background p-10 flex flex-col items-center gap-6 group hover:bg-muted/30 transition-all duration-700">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-muted-foreground group-hover:bg-foreground group-hover:text-background transition-all">
                                        {value.icon}
                                    </div>
                                    <span className="text-[8px] font-black uppercase tracking-[0.4em]">{value.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-16 sticky top-40">
                        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-border bg-muted shadow-2xl relative group">
                            <img
                                src="/Hiruy Legesse.png"
                                alt="Hiruy Legesse Portrait"
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
                        </div>

                        <div className="space-y-10 p-12 bg-muted/20 backdrop-blur-3xl border border-border rounded-[3rem]">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground pb-6 border-b border-white/5">Quick Intel</h4>
                            <div className="space-y-6">
                                {[
                                    { label: 'Base of Op', value: 'Addis Ababa, ETH' },
                                    { label: 'Academic Rank', value: 'Top Percentile' },
                                    { label: 'Education', value: 'AAU SE Dept' },
                                    { label: 'Specialty', value: 'Back-end / ML' }
                                ].map((intel, i) => (
                                    <div key={i} className="flex justify-between items-center">
                                        <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground/60">{intel.label}</span>
                                        <span className="text-[10px] font-black uppercase tracking-widest">{intel.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-8 flex flex-col gap-4">
                                <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground/40 leading-relaxed text-center">
                                    High academic performance at Addis Ababa University.
                                </p>
                                <a
                                    href="/Hiruy-Legesse-Adane-FlowCV-Resume-20260215 (1).pdf"
                                    download="Hiruy-Legesse-Resume.pdf"
                                    className="h-16 bg-foreground text-background flex items-center justify-center rounded-2xl font-black uppercase tracking-widest text-[10px] gap-4 hover:scale-105 active:scale-95 transition-all"
                                >
                                    Download Secure CV <Download size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Extra Section: Core Principles */}
                <div className="space-y-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-16"
                    >
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/60 flex items-center gap-4">
                            <div className="w-12 h-[1px] bg-muted-foreground/40"></div> Engineering Philosophy
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="p-16 border border-border rounded-[3rem] space-y-8 hover:bg-muted/20 transition-all duration-700">
                                <Terminal className="text-muted-foreground" size={32} />
                                <h3 className="text-3xl font-black uppercase tracking-tighter">Code as Architecture</h3>
                                <p className="text-muted-foreground font-medium leading-relaxed">
                                    I treat code not just as instructions for a machine, but as a living structure that must be resilient, readable, and elegant. Scalability is planned from the first line of code.
                                </p>
                            </div>
                            <div className="p-16 border border-border rounded-[3rem] space-y-8 hover:bg-muted/20 transition-all duration-700">
                                <Globe className="text-muted-foreground" size={32} />
                                <h3 className="text-3xl font-black uppercase tracking-tighter">Global Accessibility</h3>
                                <p className="text-muted-foreground font-medium leading-relaxed">
                                    Technology should empower everyone. My designs prioritize high-contrast accessibility and mobile-first logic to ensure that digital bridges reach every corner of the globe.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage;
