import { Download, Terminal, Layers, Globe, Sparkles, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section id="about" className="py-28 md:py-40 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/[0.03] blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-16 items-center">
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Section label */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-8 h-[1px] bg-indigo-500/50"></div>
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400/80">About Me</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-8">
                            <span className="text-gradient-micro1">Building the</span>
                            <br />
                            <span className="text-gradient-accent">future of web.</span>
                        </h2>

                        <div className="space-y-6 mb-10">
                            <p className="text-base md:text-lg text-white/50 leading-relaxed">
                                I am <span className="text-white/80 font-semibold">Hiruy Legesse</span>, a software developer specializing in full-stack web and mobile applications, backend development, REST APIs, and AI-powered systems.
                            </p>
                        </div>

                        {/* Info grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                            {[
                                { label: 'Location', value: 'Addis Ababa, ET', icon: <Globe size={14} /> },
                                { label: 'Focus', value: 'Full Stack / AI', icon: <Terminal size={14} /> },
                                { label: 'Education', value: 'AAU SE Dept', icon: <Layers size={14} /> }
                            ].map((stat, i) => (
                                <div key={i} className="glass-card rounded-xl p-4 group">
                                    <div className="flex items-center gap-2 text-white/30 mb-2 group-hover:text-indigo-400/70 transition-colors">
                                        {stat.icon}
                                        <span className="text-[10px] font-semibold uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                    <span className="text-sm font-semibold text-white/70">{stat.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 items-center">
                            <a
                                href="/Hiruy-Legesse-Adane-FlowCV-Resume-20260215 (1).pdf"
                                download="Hiruy-Legesse-Resume.pdf"
                                className="btn-pill-outline"
                            >
                                <Download size={14} />
                                Download CV
                            </a>
                            <Link to="/about" className="btn-pill-outline">
                                <Sparkles size={14} />
                                Full Story
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right - Portrait (compact & balanced) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative max-w-[320px] md:max-w-[340px] mx-auto w-full"
                    >
                        <div className="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden border border-white/[0.08] group shadow-2xl bg-[#0d0e12]">
                            <img
                                src="/Hiruy Legesse.png"
                                alt="Hiruy Legesse"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-60"></div>
                            
                            {/* Bottom label */}
                            <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                <p className="text-xs font-medium text-white/70 text-center">Software Engineer • UI/UX Designer</p>
                            </div>
                        </div>

                        {/* Decorative background glow */}
                        <div className="absolute -top-5 -right-5 w-28 h-28 border border-indigo-500/15 rounded-full -z-10"></div>
                        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-indigo-500/[0.05] rounded-full blur-2xl -z-10"></div>
                    </motion.div>
                </div>
            </div>

            {/* Section divider */}
            <div className="absolute bottom-0 w-full section-glow-line"></div>
        </section>
    );
};

export default About;
