import { useState } from 'react';
import { ArrowUpRight, Github, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            y: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            y: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            y: direction < 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        })
    };

    const nextProject = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section id="projects" className="py-24 md:py-48 bg-background relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm font-black uppercase tracking-[0.3em] text-muted-foreground/60 mb-6">Masterpiece Gallery</h2>
                        <h3 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase">
                            Selected <br /> <span className="text-muted-foreground/40 dark:text-muted-foreground/25 italic">Works.</span>
                        </h3>
                    </motion.div>

                    <div className="flex gap-4 mb-4">
                        <button
                            onClick={prevProject}
                            className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-500 group"
                        >
                            <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={nextProject}
                            className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-500 group"
                        >
                            <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="relative min-h-[500px] md:min-h-[650px]">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                y: { type: "spring", stiffness: 200, damping: 25 },
                                opacity: { duration: 0.4 },
                                scale: { duration: 0.4 }
                            }}
                            className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 md:gap-24 items-center"
                        >
                            <div className="relative group">
                                <Link to={`/project/${projects[currentIndex].id}`} className="block">
                                    <div className="aspect-[16/10] overflow-hidden rounded-[2rem] bg-muted border border-border/50 shadow-2xl">
                                        <motion.img
                                            initial={{ scale: 1.2 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 1.5 }}
                                            src={projects[currentIndex].image}
                                            alt={projects[currentIndex].title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-md gap-8">
                                            <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                                                <ArrowUpRight size={32} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                {projects[currentIndex].status && (
                                    <div className="absolute -top-4 -right-4 bg-red-600 text-white text-xs font-black px-6 py-2 rounded-full uppercase tracking-widest z-20 shadow-xl">
                                        {projects[currentIndex].status}
                                    </div>
                                )}

                                <div className="absolute -bottom-8 -left-8 bg-background border border-border py-4 px-8 rounded-2xl shadow-2xl hidden md:block">
                                    <span className="text-4xl font-black tracking-tighter opacity-30 dark:opacity-20">{projects[currentIndex].year}</span>
                                </div>
                            </div>

                            <div className="space-y-8 md:space-y-12 pr-4 text-left">
                                <div className="flex flex-wrap gap-3">
                                    {projects[currentIndex].tags.map((tag) => (
                                        <span key={tag} className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground border border-border px-4 py-2 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link to={`/project/${projects[currentIndex].id}`} className="block group/title">
                                    <h4 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85] group-hover/title:text-muted-foreground transition-colors">
                                        {projects[currentIndex].title}
                                    </h4>
                                </Link>

                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                                    {projects[currentIndex].desc}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-12 pt-8">
                                    <Link
                                        to={`/project/${projects[currentIndex].id}`}
                                        className="text-lg font-black uppercase tracking-widest border-b-[3px] border-foreground pb-2 flex items-center gap-3 hover:text-muted-foreground hover:border-muted-foreground transition-all"
                                    >
                                        Case Study <ArrowUpRight size={24} />
                                    </Link>
                                    <a
                                        href={projects[currentIndex].liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg font-black uppercase tracking-widest border-b-[3px] border-foreground pb-2 flex items-center gap-3 hover:text-muted-foreground hover:border-muted-foreground transition-all"
                                    >
                                        Live Preview <Globe size={24} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex items-center gap-6 mt-12">
                    <span className="text-xs font-black tracking-widest text-muted-foreground uppercase">0{currentIndex + 1}</span>
                    <div className="flex flex-1 h-[2px] bg-border relative overflow-hidden">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: (currentIndex + 1) / projects.length }}
                            className="absolute inset-0 bg-foreground origin-left transition-transform duration-700"
                        />
                    </div>
                    <span className="text-xs font-black tracking-widest text-muted-foreground uppercase">0{projects.length}</span>
                </div>
            </div>
        </section>
    );
};

export default Projects;
