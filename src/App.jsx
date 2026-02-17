import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
            <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
                <div className="fixed inset-0 dotted-bg pointer-events-none z-0"></div>

                <div className="relative z-10">
                    <Navbar theme={theme} toggleTheme={toggleTheme} />
                    <main>
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
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
