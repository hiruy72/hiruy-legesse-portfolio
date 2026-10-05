import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const techStack = [
    {
        category: 'Programming Languages',
        items: [
            { name: 'Python', icon: 'python-original' },
            { name: 'Django', icon: 'django-plain', invertDark: true },
            { name: 'Java', icon: 'java-original' },
            { name: 'JavaScript', icon: 'javascript-original' },
            { name: 'C++', icon: 'cplusplus-original' }
        ]
    },
    {
        category: 'Web Development',
        items: [
            { name: 'Next.js', icon: 'nextjs-original', invertDark: true },
            { name: 'Nest.js', icon: 'nestjs-plain' },
            { name: 'React', icon: 'react-original' },
            { name: 'Node.js', icon: 'nodejs-original' },
            { name: 'Express.js', icon: 'express-original', invertDark: true },
            { name: 'HTML5', icon: 'html5-original' },
            { name: 'CSS3', icon: 'css3-original' }
        ]
    },
    {
        category: 'AI & Machine Learning',
        items: [
            { name: 'TensorFlow', icon: 'tensorflow-original' },
            { name: 'PyTorch', icon: 'pytorch-original' },
            { name: 'NumPy', icon: 'numpy-original' },
            { name: 'Pandas', icon: 'pandas-original' },
            { name: 'scikit-learn', icon: 'scikitlearn-original' }
        ]
    },
    {
        category: 'Databases & Tools',
        items: [
            { name: 'PostgreSQL', icon: 'postgresql-original' },
            { name: 'MongoDB', icon: 'mongodb-original' },
            { name: 'Git', icon: 'git-original' },
            { name: 'GitHub', icon: 'github-original', invertDark: true },
            { name: 'Docker', icon: 'docker-original' },
            { name: 'VS Code', icon: 'vscode-original' },
            { name: 'Linux', icon: 'linux-original' },
            { name: 'Figma', icon: 'figma-original' }
        ]
    }
];

const TechStack = () => {
    const getIconUrl = (icon) => icon ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.split('-')[0]}/${icon}.svg` : '';

    return (
        <section id="tech-stack" className="py-28 md:py-40 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-[40%] left-[-5%] w-[400px] h-[400px] rounded-full bg-violet-500/[0.03] blur-[100px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-8 h-[1px] bg-indigo-500/50"></div>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400/80">Technical Arsenal</span>
                        <div className="w-8 h-[1px] bg-indigo-500/50"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                        <span className="text-gradient-micro1">Tech Stack</span>
                    </h2>
                    <p className="text-white/40 max-w-md mx-auto text-base">
                        Technologies and tools I use to bring ideas to life.
                    </p>
                    <div className="mt-6">
                        <Link
                            to="/tech-stack"
                            className="btn-pill-outline text-xs inline-flex"
                        >
                            <Zap size={14} />
                            Explore Full Arsenal
                        </Link>
                    </div>
                </motion.div>

                {/* Tech categories */}
                <div className="grid gap-12">
                    {techStack.map((category, idx) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-8 pb-3 border-b border-white/[0.06] inline-block">
                                {category.category}
                            </h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6">
                                {category.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="glass-card rounded-xl p-4 flex flex-col items-center justify-center gap-3 group cursor-default"
                                    >
                                        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                                            {item.custom ? (
                                                <div className="text-xl font-bold text-white/20">{item.name[0]}</div>
                                            ) : (
                                                <img
                                                    src={getIconUrl(item.icon)}
                                                    alt={item.name}
                                                    className={`w-full h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ${item.invertDark ? 'invert' : ''}`}
                                                />
                                            )}
                                        </div>
                                        <span className="text-[10px] font-medium text-white/30 group-hover:text-white/70 transition-colors text-center">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Section divider */}
            <div className="absolute bottom-0 w-full section-glow-line"></div>
        </section>
    );
};

export default TechStack;
