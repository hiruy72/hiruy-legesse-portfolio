import { motion } from 'framer-motion';
import { ArrowLeft, Cpu, Globe, Database, Code, Layout, Blocks, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const techStack = [
    {
        category: 'Programming Languages',
        items: [
            { name: 'Python', icon: 'python-original', level: 'Expert', desc: 'Core language for AI research, backend architecture, and data science.' },
            { name: 'Java', icon: 'java-original', level: 'Intermediate', desc: 'Utilized for secondary systems and academic object-oriented logic.' },
            { name: 'JavaScript', icon: 'javascript-original', level: 'Expert', desc: 'The fundamental engine behind every interactive web interface I build.' },
            { name: 'C++', icon: 'cplusplus-original', level: 'Intermediate', desc: 'Applied in robotics integration and performance-critical systems.' }
        ]
    },
    {
        category: 'Web Development',
        items: [
            { name: 'Next.js', icon: 'nextjs-original', invertDark: true, level: 'Expert', desc: 'The framework of choice for production-grade, SEO-optimized React apps.' },
            { name: 'Nest.js', icon: 'nestjs-plain', level: 'Expert', desc: 'Progressive Node.js framework for building efficient, scalable server-side applications.' },
            { name: 'React', icon: 'react-original', level: 'Expert', desc: 'Declarative UI development with deep state management expertise.' },
            { name: 'Node.js', icon: 'nodejs-original', level: 'Expert', desc: 'High-performance JavaScript runtime for scalable network applications.' },
            { name: 'Express.js', icon: 'express-original', invertDark: true, level: 'Expert', desc: 'Minimalist web framework for building robust API infrastructures.' },
            { name: 'HTML5', icon: 'html5-original', level: 'Expert', desc: 'Semantic structure for modern, accessible web experiences.' },
            { name: 'CSS3', icon: 'css3-original', level: 'Expert', desc: 'Advanced styling, Flexbox/Grid, and responsive layout design.' }
        ]
    },
    {
        category: 'AI & Machine Learning',
        items: [
            { name: 'TensorFlow', icon: 'tensorflow-original', level: 'Intermediate', desc: 'Neural network training and deployment for complex AI tasks.' },
            { name: 'PyTorch', icon: 'pytorch-original', level: 'Intermediate', desc: 'Dynamic computational modeling for advanced machine learning research.' },
            { name: 'NumPy', icon: 'numpy-original', level: 'Expert', desc: 'Essential library for numerical computing and vector operations.' },
            { name: 'Pandas', icon: 'pandas-original', level: 'Expert', desc: 'Data manipulation toolkit for exploring and cleaning large datasets.' },
            { name: 'scikit-learn', icon: 'scikitlearn-original', level: 'Expert', desc: 'Machine learning library for predictive data analysis.' }
        ]
    },
    {
        category: 'Databases & Tools',
        items: [
            { name: 'PostgreSQL', icon: 'postgresql-original', level: 'Expert', desc: 'Primary relational database for structured data persistence.' },
            { name: 'MongoDB', icon: 'mongodb-original', level: 'Expert', desc: 'NoSQL solution for flexible, document-oriented data storage.' },
            { name: 'Git', icon: 'git-original', level: 'Expert', desc: 'Distributed version control for seamless team collaboration.' },
            { name: 'GitHub', icon: 'github-original', invertDark: true, level: 'Expert', desc: 'Platform for CI/CD pipelines and source code management.' },
            { name: 'Docker', icon: 'docker-original', level: 'Intermediate', desc: 'Containerization for consistent deployment across environments.' },
            { name: 'Figma', icon: 'figma-original', level: 'Expert', desc: 'Professional interface design and high-fidelity prototyping.' },
            { name: 'Linux', icon: 'linux-original', level: 'Expert', desc: 'Operating system environment for server-side management.' },
            { name: 'VS Code', icon: 'vscode-original', level: 'Expert', desc: 'Primary integrated development environment for efficiency.' }
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
            className="min-h-screen bg-background pb-32 pt-40"
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-20">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
                    <div className="space-y-6">
                        <Link to="/" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-foreground transition-all group mb-8">
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Return Home
                        </Link>
                        <h1 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.7]">
                            Technical <br />
                            <span className="text-muted-foreground/40 dark:text-muted-foreground/25 italic">Arsenal.</span>
                        </h1>
                    </div>
                </div>

                {/* Categorized Tech List */}
                <div className="space-y-24">
                    {techStack.map((category, idx) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="space-y-12"
                        >
                            <div className="flex items-center gap-8">
                                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/60 w-max whitespace-nowrap">
                                    0{idx + 1} // {category.category}
                                </h2>
                                <div className="h-[1px] bg-border flex-1"></div>
                            </div>

                            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                                {category.items.map((item, i) => (
                                    <div key={item.name} className="p-10 bg-muted/20 border border-border rounded-[2.5rem] hover:bg-muted/40 transition-all duration-700 group flex flex-col gap-8 shadow-sm">
                                        <div className="flex justify-between items-start">
                                            <div className="w-20 h-20 bg-background rounded-2xl flex items-center justify-center p-4 group-hover:scale-110 group-hover:bg-foreground transition-all duration-700 shadow-xl border border-border">
                                                <img
                                                    src={getIconUrl(item.icon)}
                                                    alt={item.name}
                                                    className={`w-full h-full object-contain filter grayscale group-hover:invert-0 group-hover:grayscale-0 transition-all duration-700 ${item.invertDark ? 'dark:invert group-hover:dark:invert-0' : ''}`}
                                                />
                                            </div>
                                            <div className="flex flex-col items-end gap-2 text-right">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-foreground">{item.name}</span>
                                                <span className="text-[8px] font-black uppercase tracking-widest opacity-40">{item.level}</span>
                                            </div>
                                        </div>
                                        <p className="text-xs font-medium text-muted-foreground leading-relaxed h-12">
                                            {item.desc}
                                        </p>
                                        <div className="h-0.5 bg-border w-0 group-hover:w-full transition-all duration-700"></div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Strategy Section */}
                <div className="mt-48 p-20 bg-foreground text-background rounded-[4rem] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -z-0 translate-x-20 -translate-y-20"></div>
                    <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-24 items-center">
                        <div className="space-y-10">
                            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">The Philosophy of Selection.</h3>
                            <p className="text-lg opacity-80 leading-relaxed font-medium">
                                My tech stack is not just a collection of tools; it's a carefully curated ecosystem designed for high-performance data processing, pixel-perfect design execution, and rock-solid architectural reliability.
                            </p>
                        </div>
                        <div className="space-y-6">
                            {[
                                { title: 'Scalability First', desc: 'Architecting for the next 10 million users.' },
                                { title: 'Human Experience', desc: 'Prioritizing readability and user interaction.' },
                                { title: 'Data Integrity', desc: 'Ensuring absolute consistency in every transaction.' }
                            ].map((strat, i) => (
                                <div key={i} className="flex flex-col gap-2 p-6 border border-white/10 rounded-2xl">
                                    <span className="text-[10px] font-black uppercase tracking-widest">{strat.title}</span>
                                    <span className="text-xs opacity-60 uppercase tracking-widest leading-relaxed">{strat.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TechStackPage;
