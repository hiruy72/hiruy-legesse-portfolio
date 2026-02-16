import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Globe } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const getTimeInAddis = () => {
        return new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Africa/Addis_Ababa',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }).format(time);
    };

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden bg-background">
            {/* Masterpiece Background: Interactive Logic Grid */}
            <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            {/* Kinetic Type Marquee - The "Architectural" touch */}
            <div className="absolute top-1/4 -right-20 rotate-90 origin-top-right hidden xl:block pointer-events-none">
                <motion.div
                    animate={{ x: [0, -100, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="text-[10rem] font-black text-foreground/[0.02] dark:text-foreground/[0.01] uppercase whitespace-nowrap leading-none"
                >
                    Software Engineer • UI/UX Designer • Full Stack Engineer •
                </motion.div>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 lg:pl-12 w-full relative z-10">
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        {/* Realistic Status Bar */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex flex-wrap items-center gap-6 mb-12"
                        >
                            <div className="flex items-center gap-3 px-4 py-2 bg-muted/50 border border-border rounded-full backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-[10px] font-black uppercase tracking-widest">Available for Hire</span>
                            </div>
                            <div className="flex items-center gap-3 px-4 py-2 border border-border rounded-full">
                                <Globe size={12} className="text-muted-foreground" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Addis Ababa, ETH — {getTimeInAddis()}</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-6xl md:text-8xl font-black mb-12 leading-[0.8] tracking-tighter uppercase"
                        >
                            CRAFTING <br />
                            <span className="text-muted-foreground/40 dark:text-muted-foreground/25 italic">DIGITAL</span> <br />
                            EXPERIENCES.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-lg leading-relaxed font-medium"
                        >
                            Specializing in <span className="text-foreground font-black">software engineering</span> and <span className="text-foreground font-black">UI/UX design</span> to build high-performance web products.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap gap-12 items-center"
                        >
                            <a href="#projects" className="group relative px-10 py-5 bg-foreground text-background rounded-full font-black uppercase tracking-[0.2em] text-[10px] transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_40px_rgba(255,255,255,0.05)] overflow-hidden">
                                <span className="relative z-10 flex items-center gap-4">
                                    Launch Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            </a>

                            <div className="flex items-center gap-10">
                                {[
                                    { icon: <Github size={24} />, href: "https://github.com/hiruy72" },
                                    { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/hiruy-legesse" },
                                    { icon: <Mail size={24} />, href: "mailto:hiruyadane@gmail.com" }
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:-translate-y-1"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
                        <div className="relative w-full aspect-square max-w-[550px]">
                            {/* The Masterpiece: Kinetic Geometry */}
                            <svg viewBox="0 0 200 200" className="w-full h-full text-foreground/5 dark:text-foreground/[0.03]">
                                <motion.circle
                                    cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4"
                                    animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.circle
                                    cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 5"
                                    animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                                />
                            </svg>

                            {/* Floating Masterpiece Element: "The Live Node" */}
                            <motion.div
                                animate={{
                                    y: [0, -30, 0],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 flex items-center justify-center p-12"
                            >
                                <div className="relative w-full h-full bg-foreground dark:bg-muted/30 backdrop-blur-2xl rounded-[4rem] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center overflow-hidden group">
                                    <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
                                    <span className="text-[12rem] font-black text-background dark:text-foreground leading-none select-none group-hover:scale-110 transition-transform duration-700">H.</span>

                                    {/* Sensory Feedback Lines */}
                                    <div className="absolute bottom-12 flex gap-1">
                                        {[...Array(8)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ height: [10, 30, 10] }}
                                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                                                className="w-1 bg-background/30 dark:bg-foreground/20 rounded-full"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Perspective Floating Badges */}
                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-[10%] -left-[5%] bg-background border border-border px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-xl z-20 flex items-center gap-4"
                            >
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <span className="text-[10px] font-black uppercase tracking-widest">Software Engineer</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-[20%] -right-[5%] bg-background border border-border px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-xl z-20 flex items-center gap-4"
                            >
                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                <span className="text-[10px] font-black uppercase tracking-widest">UI/UX Designer</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Bottom Ribbon - Masterpiece Final Touch */}
            <div className="absolute bottom-0 w-full border-t border-border/50 bg-background/50 backdrop-blur-sm py-6 overflow-hidden hidden md:block">
                <div className="max-w-[1440px] mx-auto px-6 lg:pl-12 flex justify-between items-center opacity-40">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em]">Scroll to Explore Experience</span>
                    <div className="flex gap-12">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] italic">AESTHETIC</span>
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] italic">PRECISION</span>
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] italic">PERFORMANCE</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
