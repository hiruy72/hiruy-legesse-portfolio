import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ArrowRight, Download, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const experiences = [
    {
        company: 'Jirtuu Software Labs',
        role: 'DSA Instructor',
        duration: 'Jul 2026 – Sep 2026',
        location: 'Addis Ababa, Ethiopia',
        badge: 'Volunteer',
        badgeColor: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
        desc: 'Taught Data Structures and Algorithms through hands-on coding exercises and guided students through algorithmic problem-solving techniques.'
    },
    {
        company: 'Riftronix',
        role: 'Software Developer',
        duration: 'Dec 2025 – Apr 2026',
        location: 'Addis Ababa, Ethiopia',
        desc: 'Developed full-stack applications using React, Next.js, Python, and Node.js, contributing to frontend architecture, API integration, and application features. Built and maintained BunaProof, a React and Django platform with role-based access control, PostgreSQL/PostGIS, and workflows for farmers and field agents.'
    },
    {
        company: 'Eyoha Digital',
        role: 'Full-Stack Developer',
        duration: 'Feb 2025 – Jul 2025',
        location: 'Addis Ababa, Ethiopia',
        desc: 'Developed a gym discovery and management website using React and Next.js. Built responsive websites for multiple companies and integrated RESTful APIs with TypeScript and JavaScript, connecting interfaces with Node.js, NestJS, and Express.js backends.'
    },
    {
        company: 'Shalops Digitals',
        role: 'Full-Stack Developer',
        duration: 'Jun 2024 – Nov 2025',
        location: 'Addis Ababa, Ethiopia',
        desc: 'Designed full-stack architectures and backend services. Created resilient APIs, streamlined cloud integrations, and crafted responsive frontends tailored for optimal UX.'
    },
    {
        company: 'iCog Labs',
        role: 'AI Research & Dev Intern',
        duration: 'Jan 2024 – May 2024',
        location: 'Addis Ababa, Ethiopia',
        desc: 'Contributed to cutting-edge AI research as part of the MOSES evolutionary algorithm team. Assisted in benchmark evaluations, experimentation pipelines, and large-scale data preprocessing.'
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-28 md:py-36 relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute bottom-0 right-10 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-indigo-400 mb-4">
                            <Briefcase size={13} className="text-indigo-400" />
                            <span>CAREER TRACK RECORD</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gradient-micro1">
                            Experience & Leadership
                        </h2>
                        <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
                            A track record of engineering software and AI solutions at high-growth tech companies and innovative labs.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <Link
                            to="/experience"
                            className="btn-pill-outline text-xs uppercase tracking-wider font-semibold"
                        >
                            Detailed Timeline
                            <ArrowRight size={14} />
                        </Link>
                    </motion.div>
                </div>

                {/* Experience Cards Grid / List */}
                <div className="grid grid-cols-1 gap-5">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-white/15"
                        >
                            {/* Subtle top hover gradient */}
                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/0 group-hover:via-indigo-500/40 to-transparent transition-all duration-700" />

                            <div className="grid md:grid-cols-12 gap-6 items-start">
                                {/* Left Column: Company & Duration */}
                                <div className="md:col-span-4 space-y-3">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-colors">
                                            <Briefcase size={16} className="text-indigo-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                                                {exp.company}
                                            </h3>
                                            <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
                                                <MapPin size={12} /> {exp.location}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 pt-1">
                                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/80 font-medium bg-white/[0.02] border border-white/[0.06] px-3 py-1 rounded-full">
                                            <Calendar size={12} className="text-indigo-400/80" />
                                            {exp.duration}
                                        </span>
                                        {exp.badge && (
                                            <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${exp.badgeColor}`}>
                                                {exp.badge}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Right Column: Role & Description */}
                                <div className="md:col-span-8 space-y-3 md:pl-6 md:border-l md:border-white/[0.06]">
                                    <h4 className="text-lg font-semibold text-white/90">
                                        {exp.role}
                                    </h4>
                                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                        {exp.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Resume download banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-12 glass-card rounded-2xl p-8 md:p-10 border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/[0.05] via-transparent to-violet-500/[0.05] pointer-events-none" />
                    <div className="space-y-2 text-center md:text-left relative z-10">
                        <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                            <Sparkles size={14} /> Full Professional Record
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                            Looking for a comprehensive technical breakdown?
                        </h4>
                        <p className="text-sm text-muted-foreground max-w-xl">
                            Download the updated official curriculum vitae detailing architecture decisions, codebases, and achievements.
                        </p>
                    </div>

                    <a
                        href="/Hiruy-Legesse-Adane-FlowCV-Resume-20260215 (1).pdf"
                        download="Hiruy-Legesse-Resume.pdf"
                        className="btn-pill relative z-10 flex-shrink-0"
                    >
                        <span>Download CV</span>
                        <div className="arrow-badge">
                            <Download size={14} />
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;

