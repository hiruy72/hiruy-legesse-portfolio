import { motion } from 'framer-motion';
import { ArrowLeft, Cpu, Globe, Database, Code, Layout, Blocks, Zap, Sparkles, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const techStack = [
    {
        category: 'Programming Languages',
        icon: <Code size={18} className="text-indigo-400" />,
        items: [
            { name: 'Python', icon: 'python-original', level: 'Expert', desc: 'Primary language for AI pipelines, machine learning models, and backend architecture.' },
            { name: 'JavaScript / TypeScript', icon: 'javascript-original', level: 'Expert', desc: 'Core language powering responsive web interfaces, full-stack frameworks, and Node services.' },
            { name: 'Java', icon: 'java-original', level: 'Intermediate', desc: 'Object-oriented programming logic, enterprise algorithms, and backend systems.' },
            { name: 'C++', icon: 'cplusplus-original', level: 'Intermediate', desc: 'Applied in low-level systems programming and computational efficiency.' }
        ]
    },
    {
        category: 'Frameworks & Web Architecture',
        icon: <Layout size={18} className="text-violet-400" />,
        items: [
            { name: 'Next.js', icon: 'nextjs-original', invertDark: true, level: 'Expert', desc: 'Modern SSR, SSG, and edge-rendered production React web applications.' },
            { name: 'React', icon: 'react-original', level: 'Expert', desc: 'Declarative component hierarchies, dynamic client state, and custom hooks.' },
            { name: 'Node.js', icon: 'nodejs-original', level: 'Expert', desc: 'Event-driven, high-concurrency server runtime for distributed microservices.' },
            { name: 'Nest.js', icon: 'nestjs-plain', level: 'Expert', desc: 'Progressive Node.js framework for scalable, enterprise-grade architectures.' },
            { name: 'Express.js', icon: 'express-original', invertDark: true, level: 'Expert', desc: 'Lightweight routing and middleware engine for REST APIs.' },
            { name: 'Tailwind CSS', icon: 'tailwindcss-plain', level: 'Expert', desc: 'Utility-first CSS framework for rapid, bespoke design systems.' }
        ]
    },
    {
        category: 'AI, Data & Machine Learning',
        icon: <Cpu size={18} className="text-indigo-400" />,
        items: [
            { name: 'PyTorch', icon: 'pytorch-original', level: 'Intermediate', desc: 'Deep learning research, neural network modeling, and tensor computations.' },
            { name: 'TensorFlow', icon: 'tensorflow-original', level: 'Intermediate', desc: 'End-to-end open source platform for machine learning model development.' },
            { name: 'NumPy & Pandas', icon: 'pandas-original', level: 'Expert', desc: 'Vector operations, large tabular data manipulation, and matrix arithmetic.' },
            { name: 'scikit-learn', icon: 'scikitlearn-original', level: 'Expert', desc: 'Predictive data modeling, regression, clustering, and ML benchmarks.' }
        ]
    },
    {
        category: 'Databases & Infrastructure',
        icon: <Database size={18} className="text-violet-400" />,
        items: [
            { name: 'PostgreSQL', icon: 'postgresql-original', level: 'Expert', desc: 'Relational ACID database for complex relational queries and transactions.' },
            { name: 'MongoDB', icon: 'mongodb-original', level: 'Expert', desc: 'High-throughput document-oriented NoSQL database for unstructured data.' },
            { name: 'Docker', icon: 'docker-original', level: 'Intermediate', desc: 'Containerization and isolation ensuring reproducible multi-cloud deployments.' },
            { name: 'Git & GitHub', icon: 'github-original', invertDark: true, level: 'Expert', desc: 'Version control, CI/CD automated deployment workflows, and collaboration.' },
            { name: 'Figma', icon: 'figma-original', level: 'Expert', desc: 'Interface design, design token systems, and interactive UI prototyping.' },
            { name: 'Linux', icon: 'linux-original', level: 'Expert', desc: 'Server configuration, shell scripting, and remote system administration.' }
        ]
    }
];

const TechStackPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const getIconUrl = (icon) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.split('-')[0]}/${icon}.svg`;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-[#050507] text-white pb-32 pt-32 relative overflow-hidden"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-indigo-600/[0.08] rounded-full blur-[160px] pointer-events-none -z-10" />
            <div className="absolute top-1/2 right-10 w-96 h-96 bg-violet-600/[0.08] rounded-full blur-[130px] pointer-events-none -z-10" />

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
                            <Layers size={13} className="text-indigo-400" />
                            <span>COMPREHENSIVE ARSENAL</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gradient-micro1">
                            Technologies & Infrastructure
                        </h1>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground max-w-sm leading-relaxed">
                        A curated toolkit spanning AI research, scalable backend services, and high-fidelity frontend systems.
                    </p>
                </div>

                {/* Categorized Tech List */}
                <div className="space-y-16">
                    {techStack.map((category, idx) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                                    {category.icon}
                                </div>
                                <h2 className="text-xl font-bold text-white tracking-tight">
                                    {category.category}
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {category.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="glass-card rounded-2xl p-6 border border-white/[0.06] hover:border-white/20 transition-all flex flex-col justify-between group space-y-4"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center p-2.5 group-hover:scale-105 transition-transform">
                                                <img
                                                    src={getIconUrl(item.icon)}
                                                    alt={item.name}
                                                    className={`w-full h-full object-contain ${item.invertDark ? 'brightness-200' : ''}`}
                                                />
                                            </div>
                                            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-indigo-300">
                                                {item.level}
                                            </span>
                                        </div>

                                        <div>
                                            <h3 className="text-base font-bold text-white group-hover:text-indigo-200 transition-colors">
                                                {item.name}
                                            </h3>
                                            <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Architecture Philosophy Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-28 glass-card rounded-3xl p-8 md:p-12 border border-white/[0.08] relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/[0.05] via-transparent to-violet-500/[0.05] pointer-events-none" />
                    <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-7 space-y-4">
                            <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                                <Sparkles size={14} /> Architectural Standard
                            </div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                                The Philosophy of Tool Selection
                            </h3>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                Every framework, library, and runtime in my stack is chosen for deterministic performance, developer ergonomic clarity, and frictionless scalability.
                            </p>
                        </div>

                        <div className="lg:col-span-5 space-y-3">
                            {[
                                { title: 'Scalability by Design', desc: 'Modular microservices & edge architecture.' },
                                { title: 'Type Safety & Testing', desc: 'Predictable execution & runtime stability.' },
                                { title: 'User-Centric UX', desc: 'Zero-latency feedback and accessible interfaces.' }
                            ].map((strat, i) => (
                                <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                                    <h4 className="text-xs font-bold text-white">{strat.title}</h4>
                                    <p className="text-xs text-muted-foreground">{strat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default TechStackPage;

