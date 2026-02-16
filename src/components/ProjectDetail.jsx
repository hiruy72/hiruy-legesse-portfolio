import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Github, CheckCircle2, Layout, Database, Code2, Zap } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect } from 'react';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6">
            <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">Project Not Found</h1>
            <Link to="/" className="text-xs font-black uppercase tracking-widest border-b-2 border-foreground pb-1">Return Home</Link>
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-background pb-32"
        >
            {/* Project Hero Header */}
            <div className="relative h-[70vh] md:h-[90vh] overflow-hidden">
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-background/80 to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-20 overflow-hidden">
                    <div className="max-w-[1440px] mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <Link to="/" className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] mb-12 bg-background/20 backdrop-blur-xl px-10 py-4 rounded-full border border-white/10 hover:bg-foreground hover:text-background transition-all group shadow-2xl">
                                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Selection
                            </Link>

                            <h1 className="text-6xl md:text-[10rem] font-black uppercase tracking-[0.02em] leading-[0.7] mb-12">
                                {project.title.split(' ').map((word, i) => (
                                    <span key={i} className={i % 2 !== 0 ? 'text-muted-foreground/40 dark:text-muted-foreground/30 italic block' : 'block'}>
                                        {word}
                                    </span>
                                ))}
                            </h1>

                            <div className="flex flex-wrap gap-12 mt-16 border-t border-white/10 pt-16">
                                <div className="space-y-4">
                                    <span className="block text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/60">Category</span>
                                    <span className="text-sm font-black uppercase tracking-widest">{project.tags[0]} Showcase</span>
                                </div>
                                <div className="space-y-4">
                                    <span className="block text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/60">Year</span>
                                    <span className="text-sm font-black uppercase tracking-widest">{project.year}</span>
                                </div>
                                <div className="space-y-4">
                                    <span className="block text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/60">Role</span>
                                    <span className="text-sm font-black uppercase tracking-widest">Lead Engineer / Designer</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Project Content */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-20 mt-32">
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-32 items-start">
                    {/* Left Column: Narrative */}
                    <div className="space-y-40">
                        {/* Narrative Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/60 flex items-center gap-4">
                                <div className="w-8 h-[1px] bg-muted-foreground/40"></div> Project Vision
                            </h2>
                            <p className="text-xl md:text-3xl font-black leading-[1.3] md:leading-[1.1] tracking-tighter text-foreground text-gradient">
                                {project.longDesc}
                            </p>
                        </motion.div>

                        {/* Feature Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-20"
                        >
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/60 flex items-center gap-4">
                                <div className="w-8 h-[1px] bg-muted-foreground/40"></div> Technical Excellence
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-1px bg-border border border-border rounded-[3rem] overflow-hidden shadow-2xl">
                                {project.features?.map((feature, i) => (
                                    <div key={i} className="bg-background group p-12 space-y-8 hover:bg-muted/30 transition-all duration-700">
                                        <div className="w-14 h-14 border border-border rounded-2xl flex items-center justify-center p-3 text-muted-foreground group-hover:bg-foreground group-hover:text-background transition-all">
                                            {i === 0 ? <Zap /> : i === 1 ? <Layout /> : i === 2 ? <Database /> : <Code2 />}
                                        </div>
                                        <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight">
                                            {feature}
                                        </h3>
                                        <div className="h-1 w-0 bg-foreground group-hover:w-full transition-all duration-700"></div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Execution & Links */}
                    <div className="space-y-16 sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-16 bg-muted/20 backdrop-blur-3xl border border-border rounded-[4rem] space-y-16 shadow-2xl"
                        >
                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/60">Technologies</span>
                                    <div className="flex flex-wrap gap-3">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-8 py-3 rounded-full border border-border text-[10px] font-black uppercase tracking-widest bg-background/50 backdrop-blur-xl">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/60">Objective</span>
                                    <p className="text-lg font-bold leading-relaxed opacity-80 italic italic-gradient">
                                        Focusing on {project.tags.join(' + ')} to deliver a high-performance digital bridge.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-8 pt-10">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative h-24 bg-foreground text-background flex items-center justify-center rounded-3xl font-black uppercase tracking-[0.3em] text-xs gap-6 hover:scale-105 active:scale-95 transition-all shadow-[0_30px_60px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_60px_rgba(255,255,255,0.05)] overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-4">
                                        Launch Project <Globe size={18} className="group-hover:rotate-12 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                </a>

                                {project.codeLink !== '#' && (
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-20 border border-border flex items-center justify-center rounded-3xl font-black uppercase tracking-widest text-xs gap-4 hover:bg-muted/50 transition-all hover:border-foreground"
                                    >
                                        Inspect Source <Github size={18} />
                                    </a>
                                )}
                            </div>
                        </motion.div>

                        <div className="px-12 opacity-40">
                            <p className="text-[10px] font-black uppercase tracking-[0.8em]">Architectural View • {project.id}</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="mt-64 pt-24 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-12">
                    <Link to="/" className="group flex items-center gap-6 text-xs font-black uppercase tracking-[0.5em] text-muted-foreground hover:text-foreground transition-all">
                        <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                            <ArrowLeft size={16} />
                        </div>
                        Back to Portfolio
                    </Link>

                    <div className="flex flex-col items-center md:items-end gap-2 text-right">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] italic opacity-30 italic-gradient">Precision Engineer</span>
                        <span className="text-[10px] font-black uppercase tracking-widest">© 2025 Hiruy Legesse</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;
