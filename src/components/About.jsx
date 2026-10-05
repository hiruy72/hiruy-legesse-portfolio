import { Download, Terminal, Layers, Globe, Sparkles, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section id="about" className="py-28 md:py-40 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/[0.03] blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
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
                                I am <span className="text-white/80 font-semibold">Hiruy Legesse Adane</span>, a Software Engineering student focused on UI/UX, Full Stack development, scalable back-end systems, and distributed AI.
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

                    {/* Right - Portrait */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden border border-white/[0.06] group">
                            <img
                                src="/Hiruy Legesse.png"
                                alt="Hiruy Legesse"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-60"></div>
                            
                            {/* Bottom label */}
                            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                <p className="text-xs font-medium text-white/70 text-center">Software Engineer • UI/UX Designer</p>
                            </div>
                        </div>

                        {/* Decorative */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 border border-indigo-500/10 rounded-full -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-500/[0.03] rounded-full blur-3xl -z-10"></div>
                    </motion.div>
                </div>
            </div>

            {/* Section divider */}
            <div className="absolute bottom-0 w-full section-glow-line"></div>
        </section>
    );
};

export default About;
