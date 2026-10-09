import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-[#050507] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
            {/* Top glow accent */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06] items-start">
                    {/* Brand & Bio */}
                    <div className="md:col-span-6 space-y-4">
                        <Link to="/" className="inline-flex items-center gap-2 group">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                                H
                            </div>
                            <span className="font-bold text-lg text-white tracking-tight">Hiruy Legesse</span>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                            Software Developer specializing in full-stack web and mobile applications, backend development, REST APIs, and AI-powered systems.
                        </p>
                    </div>

                    {/* Quick navigation */}
                    <div className="md:col-span-3 space-y-3">
                        <span className="text-xs font-semibold text-white uppercase tracking-wider block">
                            Navigation
                        </span>
                        <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                            <Link to="/about" className="hover:text-white transition-colors">About</Link>
                            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
                            <Link to="/tech-stack" className="hover:text-white transition-colors">Tech Stack</Link>
                            <Link to="/experience" className="hover:text-white transition-colors">Experience</Link>
                            <Link to="/credentials" className="hover:text-white transition-colors">Credentials</Link>
                        </div>
                    </div>

                    {/* Socials & Back to Top */}
                    <div className="md:col-span-3 space-y-3">
                        <span className="text-xs font-semibold text-white uppercase tracking-wider block">
                            Presence
                        </span>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.upwork.com/freelancers/~0191af9b1cee504214?mp_source=share"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Hire on Upwork"
                                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-muted-foreground hover:text-white hover:border-white/20 transition-all"
                            >
                                <Globe size={16} />
                            </a>
                            <a
                                href="https://github.com/hiruy72"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub"
                                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-muted-foreground hover:text-white hover:border-white/20 transition-all"
                            >
                                <Github size={16} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/hiruy-legesse-503a59354/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn"
                                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-muted-foreground hover:text-white hover:border-white/20 transition-all"
                            >
                                <Linkedin size={16} />
                            </a>
                            <a
                                href="mailto:hiruyadane@gmail.com"
                                title="Email"
                                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-muted-foreground hover:text-white hover:border-white/20 transition-all"
                            >
                                <Mail size={16} />
                            </a>
                            <button
                                onClick={scrollToTop}
                                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-muted-foreground hover:text-white hover:border-white/20 transition-all ml-auto"
                                title="Scroll to top"
                            >
                                <ArrowUp size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/80">
                    <p>© {new Date().getFullYear()} Hiruy Legesse Adane. All rights reserved.</p>
                    <div className="flex items-center gap-4 text-xs">
                        <span>Designed with Micro1 Aesthetics</span>
                        <span>•</span>
                        <span className="text-emerald-400 font-medium">Addis Ababa, ET</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

