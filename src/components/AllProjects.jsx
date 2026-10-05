import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Search, Sparkles, FolderGit2 } from 'lucide-react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AllProjects = () => {
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProjects, setFilteredProjects] = useState(projects);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        let filtered = projects;

        if (filter !== 'All') {
            filtered = filtered.filter(p => p.tags.includes(filter));
        }

        if (searchQuery) {
            filtered = filtered.filter(p =>
                p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        setFilteredProjects(filtered);
    }, [filter, searchQuery]);

    const categories = ['All', 'Next.js', 'React', 'Node.js', 'Figma', 'AI/ML'];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-[#050507] text-white pb-32 pt-32 relative overflow-hidden"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-20 left-1/3 w-[600px] h-[600px] bg-indigo-600/[0.07] rounded-full blur-[160px] pointer-events-none -z-10" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-600/[0.07] rounded-full blur-[130px] pointer-events-none -z-10" />

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
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-indigo-400 mb-4">
                            <FolderGit2 size={13} className="text-indigo-400" />
                            <span>COMPREHENSIVE ARCHIVE</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gradient-micro1">
                            Engineered Projects & Systems
                        </h1>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground max-w-sm leading-relaxed">
                        A curated catalog of deployed applications, intelligent platforms, and interactive interfaces built between 2022 and 2026.
                    </p>
                </div>

                {/* Search & Filter Bar */}
                <div className="glass-card rounded-2xl p-4 md:p-5 border border-white/[0.08] mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Search Input */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                        <input
                            type="text"
                            placeholder="Search projects by keyword or tech..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.05] transition-all"
                        />
                    </div>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                                    filter === cat
                                        ? 'bg-white text-black shadow-md'
                                        : 'bg-white/[0.03] text-muted-foreground border border-white/[0.06] hover:text-white hover:border-white/20'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Result Info */}
                <div className="flex items-center justify-between mb-8 text-xs text-muted-foreground">
                    <span>Showing <strong className="text-white">{filteredProjects.length}</strong> project{filteredProjects.length === 1 ? '' : 's'}</span>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className="glass-card rounded-2xl border border-white/[0.08] overflow-hidden group hover:border-white/20 flex flex-col justify-between transition-all duration-500"
                        >
                            <Link to={`/project/${project.id}`} className="block">
                                <div className="aspect-[16/10] overflow-hidden relative bg-black/40">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-80" />

                                    {project.status && (
                                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-[10px] font-semibold">
                                            {project.status}
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 space-y-4">
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tags.slice(0, 3).map(tag => (
                                            <span
                                                key={tag}
                                                className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-muted-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                        {project.desc}
                                    </p>
                                </div>
                            </Link>

                            <div className="px-6 pb-6 pt-2 border-t border-white/[0.04] flex items-center justify-between text-xs text-muted-foreground">
                                <span>{project.year || '2025'}</span>
                                <Link
                                    to={`/project/${project.id}`}
                                    className="inline-flex items-center gap-1.5 font-semibold text-indigo-400 hover:text-white transition-colors"
                                >
                                    <span>Case Study</span>
                                    <ArrowUpRight size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="py-24 text-center glass-card rounded-2xl border border-white/[0.06] space-y-4">
                        <div className="w-12 h-12 rounded-full bg-white/[0.04] flex items-center justify-center mx-auto text-muted-foreground">
                            <Search size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-white">No projects found</h3>
                        <p className="text-xs text-muted-foreground">Try adjusting your keyword search or selected tech filter.</p>
                        <button
                            onClick={() => { setFilter('All'); setSearchQuery(''); }}
                            className="btn-pill-outline text-xs mt-2"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default AllProjects;

