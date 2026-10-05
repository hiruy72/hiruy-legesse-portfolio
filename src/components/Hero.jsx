import { ArrowUpRight, Github, Linkedin, Mail, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const getTimeInAddis = () => {
        try {
            const now = new Date();
            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const eatDate = new Date(utc + (3600000 * 3));
            const hours = String(eatDate.getHours()).padStart(2, '0');
            const minutes = String(eatDate.getMinutes()).padStart(2, '0');
            const seconds = String(eatDate.getSeconds()).padStart(2, '0');
            return `${hours}:${minutes}:${seconds}`;
        } catch {
            return '12:00:00';
        }
    };

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center pt-24 pb-16 relative overflow-hidden">
            {/* Ambient background orbs */}
            <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full bg-indigo-500/[0.04] blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] rounded-full bg-violet-500/[0.03] blur-[100px] pointer-events-none"></div>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            ></div>

            <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Status badge - micro1 pill style */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-wrap items-center gap-3 mb-10"
                    >
                        <div className="glass flex items-center gap-2.5 px-4 py-2 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="text-xs font-medium text-white/70">Available for Hire</span>
                        </div>
                        <div className="glass flex items-center gap-2.5 px-4 py-2 rounded-full">
                            <Globe size={12} className="text-white/40" />
                            <span className="text-xs font-medium text-white/50">Addis Ababa — {getTimeInAddis()}</span>
                        </div>
                    </motion.div>

                    {/* Hero headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-8"
                    >
                        <span className="text-gradient-micro1">Crafting Digital</span>
                        <br />
                        <span className="text-gradient-accent">Experiences</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg md:text-xl text-white/40 max-w-xl leading-relaxed mb-12 font-medium"
                    >
                        Software Engineer specializing in{' '}
                        <span className="text-white/70">full-stack development</span> and{' '}
                        <span className="text-white/70">UI/UX design</span> to build
                        high-performance web products.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45 }}
                        className="flex flex-wrap gap-4 items-center justify-center mb-16"
                    >
                        <a
                            href="https://www.upwork.com/freelancers/~0191af9b1cee504214?mp_source=share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-pill"
                        >
                            <span>Hire Me on Upwork</span>
                            <span className="arrow-badge">
                                <ArrowUpRight size={14} />
                            </span>
                        </a>
                        <a href="/#projects" className="btn-pill-outline">
                            Explore Projects
                        </a>
                        <a
                            href="/Hiruy-Legesse-Adane-FlowCV-Resume-20260215 (1).pdf"
                            download="Hiruy-Legesse-Resume.pdf"
                            className="btn-pill-outline"
                        >
                            Download CV
                        </a>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex items-center gap-4"
                    >
                        {[
                            { icon: <Github size={18} />, href: "https://github.com/hiruy72", label: "GitHub" },
                            { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/hiruy-legesse", label: "LinkedIn" },
                            { icon: <Mail size={18} />, href: "mailto:hiruyadane@gmail.com", label: "Email" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-300"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Floating badges - micro1 style */}
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[25%] left-[8%] glass px-5 py-3 rounded-2xl hidden xl:flex items-center gap-3"
            >
                <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                <span className="text-xs font-medium text-white/60">Software Engineer</span>
            </motion.div>

            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-[30%] right-[8%] glass px-5 py-3 rounded-2xl hidden xl:flex items-center gap-3"
            >
                <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                <span className="text-xs font-medium text-white/60">UI/UX Designer</span>
            </motion.div>

            {/* Bottom section divider */}
            <div className="absolute bottom-0 w-full section-glow-line"></div>
        </section>
    );
};

export default Hero;
