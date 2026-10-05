import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '/about', isPage: true },
        { name: 'Projects', href: '/projects', isPage: true },
        { name: 'Experience', href: '/experience', isPage: true },
        { name: 'Tech Stack', href: '/tech-stack', isPage: true },
        { name: 'Certificates', href: '/credentials', isPage: true },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
                scrolled ? 'py-3' : 'py-5'
            }`}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className={`flex justify-between items-center transition-all duration-700 ${
                    scrolled 
                        ? 'nav-floating py-2 px-6' 
                        : 'py-0'
                }`}>
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 bg-white flex items-center justify-center rounded-lg">
                            <span className="text-black font-bold text-sm">H</span>
                        </div>
                        <span className="font-semibold text-base tracking-tight text-white/90 group-hover:text-white transition-colors hidden sm:block">
                            Hiruy Legesse
                        </span>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                                    location.pathname === link.href
                                        ? 'text-white bg-white/10'
                                        : 'text-white/50 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            to="/contact"
                            className="btn-pill text-xs"
                        >
                            Get in Touch
                            <span className="arrow-badge">
                                <ArrowUpRight size={14} />
                            </span>
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 top-0 bg-[#050507]/98 backdrop-blur-2xl z-[90] flex flex-col">
                    {/* Mobile header */}
                    <div className="flex justify-between items-center px-6 py-5">
                        <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-lg">
                                <span className="text-black font-bold text-sm">H</span>
                            </div>
                        </Link>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 text-white/70 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    
                    {/* Mobile nav links */}
                    <div className="flex flex-col px-6 pt-8 gap-2">
                        {[{ name: 'Home', href: '/' }, ...navLinks, { name: 'Contact', href: '/contact' }].map((link, i) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-3xl font-semibold tracking-tight text-white/70 hover:text-white py-3 border-b border-white/5 transition-all duration-300"
                                onClick={() => setIsOpen(false)}
                                style={{ animationDelay: `${i * 50}ms` }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile CTA */}
                    <div className="mt-auto px-6 pb-10">
                        <Link
                            to="/contact"
                            className="btn-pill w-full justify-center text-sm"
                            onClick={() => setIsOpen(false)}
                        >
                            Get in Touch
                            <span className="arrow-badge">
                                <ArrowUpRight size={14} />
                            </span>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
