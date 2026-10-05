import { useState } from 'react';
import { ArrowUpRight, Globe, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            y: direction > 0 ? 60 : -60,
            opacity: 0,
            scale: 0.98
        }),
        center: {
            zIndex: 1,
            y: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            y: direction < 0 ? 60 : -60,
            opacity: 0,
            scale: 0.98
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
        <section id="projects" className="py-28 md:py-40 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/[0.03] blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-[1px] bg-indigo-500/50"></div>
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400/80">Selected Works</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                            <span className="text-gradient-micro1">Projects</span>
                        </h2>
                        <Link
                            to="/projects"
                            className="btn-pill-outline text-xs inline-flex"
                        >
                            <Layers size={14} />
                            View All Projects
                        </Link>
                    </motion.div>

                    {/* Navigation arrows */}
                    <div className="flex gap-3">
                        <button
                            onClick={prevProject}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-300"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextProject}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-300"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Project showcase */}
                <div className="relative min-h-[500px] md:min-h-[550px]">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                y: { type: "spring", stiffness: 250, damping: 30 },
                                opacity: { duration: 0.3 },
                                scale: { duration: 0.3 }
                            }}
                            className="grid lg:grid-cols-[1.4fr_0.6fr] gap-10 items-center"
                        >
                            {/* Image */}
                            <div className="relative group">
                                <Link to={`/project/${projects[currentIndex].id}`} className="block">
                                    <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.06] micro1-card">
                                        <motion.img
                                            initial={{ scale: 1.1 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 1.2 }}
                                            src={projects[currentIndex].image}
                                            alt={projects[currentIndex].title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                                            <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                                <ArrowUpRight size={24} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                {projects[currentIndex].status && (
                                    <div className="absolute -top-3 -right-3 bg-indigo-500 text-white text-[10px] font-semibold px-4 py-1.5 rounded-full z-20">
                                        {projects[currentIndex].status}
                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-2">
                                    {projects[currentIndex].tags.map((tag) => (
                                        <span key={tag} className="text-[10px] font-medium text-white/40 border border-white/[0.08] px-3 py-1.5 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link to={`/project/${projects[currentIndex].id}`} className="block group/title">
                                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white/90 group-hover/title:text-white transition-colors leading-tight">
                                        {projects[currentIndex].title}
                                    </h3>
                                </Link>

                                <p className="text-sm md:text-base text-white/40 leading-relaxed">
                                    {projects[currentIndex].desc}
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Link
                                        to={`/project/${projects[currentIndex].id}`}
                                        className="btn-pill text-xs"
                                    >
                                        Case Study
                                        <span className="arrow-badge">
                                            <ArrowUpRight size={14} />
                                        </span>
                                    </Link>
                                    {projects[currentIndex].liveLink !== '#' && (
                                        <a
                                            href={projects[currentIndex].liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-pill-outline text-xs"
                                        >
                                            <Globe size={14} />
                                            Live Preview
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Progress indicator */}
                <div className="flex items-center gap-4 mt-10">
                    <span className="text-xs font-medium text-white/30">{String(currentIndex + 1).padStart(2, '0')}</span>
                    <div className="flex-1 h-[1px] bg-white/[0.06] relative overflow-hidden rounded-full">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: (currentIndex + 1) / projects.length }}
                            className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 origin-left"
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                    <span className="text-xs font-medium text-white/30">{String(projects.length).padStart(2, '0')}</span>
                </div>
            </div>

            {/* Section divider */}
            <div className="absolute bottom-0 w-full section-glow-line"></div>
        </section>
    );
};

export default Projects;
