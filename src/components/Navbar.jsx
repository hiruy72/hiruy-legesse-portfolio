import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
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
        { name: 'Home', href: '/', isPage: true },
        { name: 'About', href: '/about', isPage: true },
        { name: 'Tech Stack', href: '/tech-stack', isPage: true },
        { name: 'Projects', href: '/projects', isPage: true },
        { name: 'Experience', href: '/experience', isPage: true },
        { name: 'Certificates', href: '/credentials', isPage: true },
        { name: 'Contact', href: '/contact', isPage: true },
    ];

    const isHome = location.pathname === '/';

    return (
        <nav
            className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled
                ? 'py-4 bg-background/80 backdrop-blur-xl border-b border-border'
                : 'py-6 bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-foreground flex items-center justify-center rounded-sm">
                        <span className="text-background font-bold text-lg">H</span>
                    </div>
                    <span className="font-bold text-xl tracking-tight hidden sm:block">Hiruy.</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            !link.isPage ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all duration-300"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all duration-300"
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </div>

                    <div className="h-4 w-[1px] bg-border mx-2"></div>

                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted transition-all duration-300"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </div>

                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/50"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-foreground focus:outline-none"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-2xl z-[90] flex flex-col p-8 gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
                    {navLinks.map((link) => (
                        !link.isPage ? (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-4xl font-black tracking-tighter uppercase hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-4xl font-black tracking-tighter uppercase hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
