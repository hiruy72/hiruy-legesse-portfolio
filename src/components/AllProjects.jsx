import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Github, Globe, Search, Filter } from 'lucide-react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AllProjects = () => {
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProjects, setFilteredProjects] = useState(projects);

    const categories = ['All', ...new Set(projects.flatMap(p => p.tags))];

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
                            Project <br />
                            <span className="text-muted-foreground/40 dark:text-muted-foreground/25 italic">Archive.</span>
                        </h1>
                    </div>
                    <div className="flex flex-col items-end gap-6 w-full md:w-auto">
                        <p className="text-right text-[10px] font-black uppercase tracking-[0.4em] opacity-40 max-w-xs leading-relaxed">
                            A comprehensive registry of technical deployments and design systems engineered between 2022 and 2025.
                        </p>
                    </div>
                </div>

                {/* Search and Filters */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-20 pb-12 border-b border-border">
                    <div className="relative w-full lg:max-w-md">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <input
                            type="text"
                            placeholder="SEARCH DEPLOYMENTS"
                            className="w-full bg-muted/50 border border-border rounded-full py-6 pl-16 pr-8 font-black uppercase tracking-widest text-[10px] focus:bg-muted focus:border-foreground outline-none transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {['All', 'Next.js', 'React', 'Figma', 'Node.js', 'AI/ML'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${filter === cat ? 'bg-foreground text-background border-foreground' : 'bg-transparent border-border text-muted-foreground hover:border-foreground'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-12 flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/60">Registry Count: 0{filteredProjects.length}</span>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1px bg-border border border-border rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="bg-background group relative aspect-square md:aspect-[4/5] overflow-hidden hover:bg-muted/30 transition-all duration-700">
                            <Link to={`/project/${project.id}`} className="block h-full">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>

                                <div className="absolute bottom-0 left-0 w-full p-10 space-y-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="text-[8px] font-black uppercase tracking-widest bg-background/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-3xl font-black uppercase tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-500">
                                        {project.title}
                                    </h3>
                                    <div className="flex justify-between items-end pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                                        <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{project.year}</span>
                                        <div className="w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {project.status && (
                                <div className="absolute top-8 right-8 bg-foreground text-background text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-2xl">
                                    {project.status}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="py-40 text-center space-y-8 bg-muted/20 rounded-[3rem] border border-dashed border-border">
                        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto opacity-20">
                            <Search size={32} />
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-widest opacity-40">No Deployments Found</h3>
                        <button
                            onClick={() => { setFilter('All'); setSearchQuery(''); }}
                            className="text-xs font-black uppercase tracking-widest border-b border-foreground pb-1"
                        >
                            Reset Registry
                        </button>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default AllProjects;
