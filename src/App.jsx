import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import AllCertificates from './components/AllCertificates';
import AboutPage from './components/AboutPage';
import TechStackPage from './components/TechStackPage';
import AllProjects from './components/AllProjects';
import ExperiencePage from './components/ExperiencePage';
import Contact from './components/Contact';
import Footer from './components/Footer';

function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }

        const titles = {
            '/': 'Hiruy Legesse | Software Developer',
            '/about': 'About | Hiruy Legesse',
            '/projects': 'Projects | Hiruy Legesse',
            '/experience': 'Experience | Hiruy Legesse',
            '/tech-stack': 'Tech Stack | Hiruy Legesse',
            '/credentials': 'Certifications & Credentials | Hiruy Legesse',
            '/contact': 'Contact | Hiruy Legesse'
        };

        if (titles[pathname]) {
            document.title = titles[pathname];
        } else if (!pathname.startsWith('/project/')) {
            document.title = 'Hiruy Legesse | Software Developer';
        }

        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', `https://www.hiruylegesse.me${pathname === '/' ? '/' : pathname}`);
    }, [pathname, hash]);

    return null;
}

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="p-8 text-center text-white">
                    <h2 className="text-xl font-bold mb-2">Section encountered an error</h2>
                    <p className="text-white/60 text-sm">{this.state.error?.message}</p>
                </div>
            );
        }
        return this.props.children;
    }
}

function App() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
                {/* Micro1-style ambient viewport glow */}
                <div className="viewport-glow"></div>

                <div className="relative z-10">
                    <Navbar theme={theme} toggleTheme={toggleTheme} />
                    <main>
                        <ErrorBoundary>
                            <Routes>
                                <Route path="/" element={
                                    <>
                                        <Hero />
                                        <About />
                                        <TechStack />
                                        <Projects />
                                        <Experience />
                                        <Certificates />
                                        <Contact />
                                    </>
                                } />
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/tech-stack" element={<TechStackPage />} />
                                <Route path="/projects" element={<AllProjects />} />
                                <Route path="/experience" element={<ExperiencePage />} />
                                <Route path="/credentials" element={<AllCertificates />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/project/:id" element={<ProjectDetail />} />
                                <Route path="*" element={
                                    <>
                                        <Hero />
                                        <About />
                                        <TechStack />
                                        <Projects />
                                        <Experience />
                                        <Certificates />
                                        <Contact />
                                    </>
                                } />
                            </Routes>
                        </ErrorBoundary>
                    </main>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
