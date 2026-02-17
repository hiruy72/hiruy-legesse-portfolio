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
    const getIconUrl = (icon) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.split('-')[0]}/${icon}.svg`;

    return (
        <section id="tech-stack" className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="text-sm font-black uppercase tracking-[0.3em] text-muted-foreground/60 mb-6">Technical Arsenal</h2>
                    <h3 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase mb-12">
                        TECH <br /> <span className="text-muted-foreground/40 dark:text-muted-foreground/25 italic">STACK.</span>
                    </h3>
                    <Link
                        to="/tech-stack"
                        className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-foreground transition-all group"
                    >
                        Explore Arsenal <Zap size={14} className="group-hover:rotate-12 transition-transform" />
                    </Link>
                </motion.div>

                <div className="grid gap-16 md:gap-24">
                    {techStack.map((category, idx) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground mb-10 pb-4 border-b border-border inline-block">
                                {category.category}
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12">
                                {category.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group flex flex-col items-center justify-center gap-4 transition-all duration-500"
                                    >
                                        <div className="w-16 h-16 md:w-20 md:h-20 bg-muted/30 rounded-2xl flex items-center justify-center p-4 group-hover:bg-muted transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl">
                                            {item.custom ? (
                                                <div className="text-2xl font-black opacity-20">{item.name[0]}</div>
                                            ) : (
                                                <img
                                                    src={getIconUrl(item.icon)}
                                                    alt={item.name}
                                                    className={`w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 ${item.invertDark ? 'dark:invert' : ''}`}
                                                />
                                            )}
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
