import { Download, Terminal, Layers, Cpu, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-32 md:py-56 bg-background relative overflow-hidden">
            {/* Background Architectural Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-border to-transparent opacity-20"></div>
            <div className="absolute -left-24 top-1/2 -rotate-90 text-[12rem] font-black text-foreground/[0.02] dark:text-foreground/[0.01] select-none pointer-events-none uppercase">
                Biography
            </div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-24 md:gap-40 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/60 mb-12 flex items-center gap-4">
                            <div className="w-12 h-[1px] bg-muted-foreground/40"></div> Personal Codex
                        </h2>

                        <h3 className="text-6xl md:text-8xl font-black mb-16 tracking-tighter uppercase leading-[0.8]">
                            Engineering <br />
                            <span className="text-muted-foreground/40 dark:text-muted-foreground/25 italic">Individuality.</span>
                        </h3>

                        <div className="space-y-10 max-w-2xl">
                            <p className="text-xl md:text-2xl text-foreground font-bold leading-relaxed">
                                I am Hiruy Legesse, a Software Engineer based in Ethiopia. I specialize in building digital bridges that connect industrial efficiency with human-centric design.
                            </p>
                        </div>

                        {/* Professional Metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-20">
                            {[
                                { label: 'Location', value: 'Addis Ababa, ET', icon: <Globe size={14} /> },
                                { label: 'Specialty', value: 'Full Stack / UI', icon: <Terminal size={14} /> },
                                { label: 'Education', value: 'AAU SE Dept', icon: <Layers size={14} /> }
                            ].map((stat, i) => (
                                <div key={i} className="group flex flex-col gap-4">
                                    <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                                        {stat.icon}
                                        <span className="text-[10px] font-black uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                    <span className="text-sm font-black uppercase tracking-widest">{stat.value}</span>
                                    <div className="h-0.5 w-8 bg-border group-hover:w-full transition-all duration-700"></div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-20">
                            <a
                                href="/Hiruy-Legesse-Adane-FlowCV-Resume-20260215 (1).pdf"
                                download
                                className="group relative inline-flex items-center gap-6 px-10 py-5 bg-background border border-foreground rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-foreground hover:text-background transition-all duration-500 shadow-xl overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Secure Dossier / CV <Download size={14} />
                                </span>
                                <div className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Architectural Portrait Frame */}
                        <div className="relative z-10 aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden border border-border bg-muted shadow-2xl group">
                            <img
                                src="/Hiruy Legesse.png"
                                alt="Hiruy Legesse"
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                            />
                            {/* Inner Masterpiece Overlay */}
                            <div className="absolute inset-0 border-[20px] border-background/10 mix-blend-overlay pointer-events-none"></div>
                            <div className="absolute bottom-8 left-8 right-8 p-8 bg-background/20 backdrop-blur-2xl border border-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <p className="text-[10px] font-black uppercase tracking-widest text-center">Software Engineering • UI/UX Designer</p>
                            </div>
                        </div>

                        {/* Kinetic Background Decor */}
                        <div className="absolute -top-12 -right-12 w-48 h-48 border border-foreground/[0.05] rounded-full -z-10 animate-pulse"></div>
                        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-foreground/[0.02] dark:bg-foreground/[0.01] rounded-full blur-3xl -z-10"></div>

                        {/* Status Floaties */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -left-6 bg-background border border-border px-8 py-4 rounded-2xl shadow-2xl z-20 flex items-center gap-4"
                        >
                            <Cpu size={14} className="text-blue-500" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Logic Driven</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
