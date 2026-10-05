import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Github, CheckCircle2, Layout, Database, Code2, Zap, ExternalLink, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect } from 'react';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#050507] text-white p-6">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <Link to="/" className="btn-pill">
                <span>Return to Overview</span>
                <div className="arrow-badge">
                    <ArrowLeft size={14} />
                </div>
            </Link>
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-[#050507] text-white pb-32 pt-28 relative overflow-hidden"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-indigo-600/[0.08] rounded-full blur-[160px] pointer-events-none -z-10" />
            <div className="absolute top-1/2 right-10 w-96 h-96 bg-violet-600/[0.08] rounded-full blur-[130px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Back Navigation */}
                <div className="mb-8">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-white transition-colors"
                    >
                        <ArrowLeft size={14} /> All Projects
                    </Link>
                </div>

                {/* Hero Title & Meta */}
                <div className="mb-12 space-y-4">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                        {project.tags.map(tag => (
                            <span
                                key={tag}
                                className="text-xs font-medium px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-indigo-300"
                            >
                                {tag}
                            </span>
                        ))}
                        {project.status && (
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                                {project.status}
                            </span>
                        )}
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gradient-micro1">
                        {project.title}
                    </h1>

                    <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                        {project.desc}
                    </p>
                </div>

                {/* Hero Image Showcase */}
                <div className="glass-card rounded-3xl p-2 md:p-3 border border-white/[0.08] mb-16 overflow-hidden">
                    <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden relative">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/60 via-transparent to-transparent pointer-events-none" />
                    </div>
                </div>

                {/* Detailed Breakdown Grid */}
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Narrative & Technical Pillars */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Vision & Overview */}
                        <div className="glass-card rounded-3xl p-8 md:p-10 border border-white/[0.08] space-y-4">
                            <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                                <Sparkles size={14} /> Architecture & Vision
                            </div>
                            <h2 className="text-2xl font-bold text-white tracking-tight">System Overview</h2>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                {project.longDesc || project.desc}
                            </p>
                        </div>

                        {/* Features Breakdown */}
                        {project.features && (
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                                    <Code2 size={18} className="text-indigo-400" /> Key Features & Capabilities
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {project.features.map((feature, i) => (
                                        <div
                                            key={i}
                                            className="glass-card rounded-2xl p-6 border border-white/[0.06] space-y-3 hover:border-white/20 transition-colors"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-indigo-400">
                                                {i === 0 ? <Zap size={18} /> : i === 1 ? <Layout size={18} /> : i === 2 ? <Database size={18} /> : <Code2 size={18} />}
                                            </div>
                                            <h4 className="text-base font-bold text-white">{feature}</h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Meta Info & Actions */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="glass-card rounded-3xl p-7 md:p-8 border border-white/[0.08] space-y-6">
                            <h3 className="text-lg font-bold text-white tracking-tight">Project Summary</h3>

                            <div className="space-y-3.5 text-xs">
                                <div className="flex justify-between py-2 border-b border-white/[0.04]">
                                    <span className="text-muted-foreground">Year</span>
                                    <span className="font-semibold text-white">{project.year || '2025'}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-white/[0.04]">
                                    <span className="text-muted-foreground">Role</span>
                                    <span className="font-semibold text-white">Lead Developer & Designer</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-white/[0.04]">
                                    <span className="text-muted-foreground">Status</span>
                                    <span className="font-semibold text-emerald-400">{project.status || 'Active'}</span>
                                </div>
                            </div>

                            <div className="space-y-3 pt-4">
                                {project.liveLink && project.liveLink !== '#' ? (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-pill w-full justify-between"
                                    >
                                        <span>Launch Live App</span>
                                        <div className="arrow-badge">
                                            <Globe size={13} />
                                        </div>
                                    </a>
                                ) : (
                                    <div className="text-xs text-center py-3 text-muted-foreground/60 bg-white/[0.02] border border-white/[0.04] rounded-xl font-medium">
                                        Internal / Demo In Progress
                                    </div>
                                )}

                                {project.codeLink && project.codeLink !== '#' && (
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-pill-outline w-full justify-center gap-2 text-xs"
                                    >
                                        <Github size={14} />
                                        <span>Inspect Source Code</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;

