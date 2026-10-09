import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, MapPin, Calendar, Terminal, ExternalLink, BookOpen, Clock, Target, Award, Code, Download, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const experiences = [
    {
        company: 'Jirtuu Software Labs',
        role: 'DSA Instructor',
        duration: 'Jul 2026 – Sep 2026',
        location: 'Addis Ababa, Ethiopia',
        type: 'Volunteer Teaching',
        stack: ['Data Structures', 'Algorithms', 'Problem Solving', 'Mentoring'],
        desc: 'Taught Data Structures and Algorithms through hands-on coding exercises and guided students through algorithmic problem-solving.',
        details: [
            'Taught core data structures (arrays, linked lists, trees, graphs, hash maps) through structured coding sessions.',
            'Guided students through algorithmic problem-solving techniques including dynamic programming, sorting, and graph traversal.',
            'Reviewed and provided constructive feedback on student code, improving their problem-solving efficiency and code quality.'
        ],
        icon: <BookOpen size={18} className="text-violet-400" />
    },
    {
        company: 'Riftronix',
        role: 'Software Developer',
        duration: 'Dec 2025 – Apr 2026',
        location: 'Addis Ababa, Ethiopia',
        type: 'Full-Stack Development',
        stack: ['React', 'Next.js', 'Python', 'Django', 'Node.js', 'PostgreSQL', 'PostGIS'],
        desc: 'Developed full-stack applications using React, Next.js, Python, and Node.js, contributing to frontend architecture, API integration, and application features.',
        details: [
            'Developed full-stack applications using React, Next.js, Python, and Node.js, contributing to frontend architecture, API integration, and application features.',
            'Built and maintained BunaProof, a React and Django platform with role-based access control, PostgreSQL/PostGIS, and workflows for farmers and field agents.',
            'Developed reusable frontend components and integrated RESTful APIs to connect user interfaces with backend services and database-driven workflows.'
        ],
        icon: <Target size={18} className="text-indigo-400" />
    },
    {
        company: 'Eyoha Digital',
        role: 'Full-Stack Developer',
        duration: 'Feb 2025 – Jul 2025',
        location: 'Addis Ababa, Ethiopia',
        type: 'Full-Stack Development',
        stack: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'NestJS', 'Express.js'],
        desc: 'Developed a gym discovery and management website using React and Next.js, building responsive interfaces for users and gym administrators.',
        details: [
            'Developed a gym discovery and management website using React and Next.js, building responsive interfaces for users and gym administrators.',
            'Built responsive websites for multiple companies, translating UI/UX designs into reusable and user-focused frontend components.',
            'Integrated RESTful APIs with frontend applications using TypeScript and JavaScript, connecting interfaces with Node.js, NestJS, and Express.js backends.'
        ],
        icon: <Code size={18} className="text-violet-400" />
    },
    {
        company: 'Shalops Digitals',
        role: 'Full-Stack Developer',
        duration: 'Jun 2024 – Nov 2025',
        location: 'Addis Ababa, Ethiopia',
        type: 'Full-Stack Development',
        stack: ['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Cloud Integrations'],
        desc: 'Designed full-stack web applications and scalable backend services with database optimizations.',
        details: [
            'Architected custom full-stack solutions and server-side logic from inception to deployment.',
            'Crafted highly responsive user interfaces and robust relational database schemas in PostgreSQL.',
            'Integrated external third-party payment, authentication, and analytics APIs seamlessly.'
        ],
        icon: <Briefcase size={18} className="text-indigo-400" />
    },
    {
        company: 'iCog Labs',
        role: 'AI Research & Dev Intern',
        duration: 'Jan 2024 – May 2024',
        location: 'Addis Ababa, Ethiopia',
        type: 'AI Research Lab',
        stack: ['Python', 'ML Systems', 'MOSES', 'Data Pipelines', 'Model Benchmarking'],
        desc: 'Contributed to AI research projects as part of the MOSES evolutionary algorithm team.',
        details: [
            'Assisted in MOSES (Meta-Optimizing Semantic Evolutionary Search) model benchmarking and experimentation.',
            'Constructed automated data preprocessing pipelines to feed machine learning experimentation suites.',
            'Gained in-depth exposure to genetic programming, optimization heuristics, and research methodologies.'
        ],
        icon: <Award size={18} className="text-violet-400" />
    },
];

const ExperiencePage = () => {
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
            <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-indigo-600/[0.08] rounded-full blur-[160px] pointer-events-none -z-10" />
            <div className="absolute top-2/3 right-10 w-96 h-96 bg-violet-600/[0.08] rounded-full blur-[130px] pointer-events-none -z-10" />

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

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-indigo-400 mb-4">
                            <Briefcase size={13} className="text-indigo-400" />
                            <span>CHRONOLOGICAL TRACK RECORD</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gradient-micro1">
                            Career & Impact Timeline
                        </h1>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground max-w-sm leading-relaxed">
                        A detailed breakdown of technical responsibilities, architectural milestones, and software leadership.
                    </p>
                </div>

                {/* Timeline Cards */}
                <div className="space-y-8 relative">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="glass-card rounded-3xl p-8 md:p-10 border border-white/[0.08] relative overflow-hidden group hover:border-white/20 transition-all"
                        >
                            <div className="grid lg:grid-cols-12 gap-8 items-start">
                                {/* Left: Company, Role & Duration */}
                                <div className="lg:col-span-5 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                                            {exp.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                                                {exp.company}
                                            </h3>
                                            <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
                                                <MapPin size={12} /> {exp.location}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-2 pt-2">
                                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-muted-foreground">
                                            {exp.duration}
                                        </span>
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                                            {exp.role}
                                        </span>
                                    </div>

                                    <div className="pt-2">
                                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">Technologies</span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {exp.stack.map(s => (
                                                <span key={s} className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/[0.02] border border-white/[0.04] text-muted-foreground/80">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Detailed Points */}
                                <div className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-white/[0.06] space-y-4">
                                    <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider">Key Contributions & Architecture</h4>
                                    <ul className="space-y-3">
                                        {exp.details.map((detail, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Academic Background */}
                <div className="mt-28">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-indigo-400 mb-6">
                        <BookOpen size={13} className="text-indigo-400" />
                        <span>ACADEMIC FOUNDATION</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="glass-card rounded-3xl p-8 border border-white/[0.08] space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-indigo-400">
                                    <BookOpen size={22} />
                                </div>
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                                    Top Percentile
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white tracking-tight">Addis Ababa University</h3>
                            <p className="text-sm font-semibold text-indigo-300">B.Sc. in Software Engineering</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Focusing on algorithms, software architecture, distributed systems, and intelligent machine learning applications with outstanding academic performance.
                            </p>
                        </div>

                        <div className="glass-card rounded-3xl p-8 border border-white/[0.08] space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-violet-400">
                                    <Award size={22} />
                                </div>
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white">
                                    Score: 562/700
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white tracking-tight">St. Gabriel School</h3>
                            <p className="text-sm font-semibold text-violet-300">High School Diploma</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Completed secondary education with distinction, achieving top scores in national secondary school examinations in mathematics and sciences.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 flex justify-center">
                    <a
                        href="/Hiruy-Legesse-Adane-FlowCV-Resume-20260215 (1).pdf"
                        download="Hiruy-Legesse-Resume.pdf"
                        className="btn-pill"
                    >
                        <span>Download Full Curriculum Vitae</span>
                        <div className="arrow-badge">
                            <Download size={14} />
                        </div>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ExperiencePage;

