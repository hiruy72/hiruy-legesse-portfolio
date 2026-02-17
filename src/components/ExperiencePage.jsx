import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, MapPin, Calendar, Terminal, ExternalLink, ChevronRight, BookOpen, Clock, Target, Award, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const experiences = [
    {
        company: 'Riftronix',
        role: 'AI and Software Developer',
        duration: 'Dec 2025 – Present',
        location: 'Addis Ababa, Ethiopia',
        type: 'Senior Deployment',
        stack: ['Next.js', 'Python', 'AI/ML', 'Node.js', 'Nest.js'],
        desc: 'Architecting and deploying AI-driven full-stack solutions. Responsible for end-to-end development of intelligent systems.',
        details: [
            'Developing low-latency voice AI interaction pipelines with real-time feedback systems.',
            'Architecting scalable backend systems for data-intensive applications using Nest.js and Django.',
            'Collaborating on high-level UI component libraries for internal tools to streamline development workflow.'
        ],
        icon: <Target size={24} />
    },
    {
        company: 'iCog Labs',
        role: 'AI Intern (MOSES Team)',
        duration: 'Jan 2026 – Present',
        location: 'Addis Ababa, Ethiopia',
        type: 'Research Internship',
        stack: ['ML Systems', 'Optimization', 'Python', 'Evolutionary Search'],
        desc: 'Contributing to world-class AI research within the MOSES (Meta-Optimizing Semantic Evolutionary Search) team.',
        details: [
            'Analyzing and optimizing large-scale evolutionary search algorithms for complex problem solving.',
            'Implementing machine learning models for predictive analysis and pattern recognition.',
            'Researching scalable software design for distributed AI systems to handle massive datasets.'
        ],
        icon: <Award size={24} />
    },
    {
        company: 'Eyoha Digitals',
        role: 'UI/UX Designer Intern',
        duration: 'Aug 2025 – Jan 2026',
        location: 'Addis Ababa, Ethiopia',
        type: 'Design Internship',
        stack: ['Figma', 'Prototyping', 'User Psychology'],
        desc: 'Pioneering design-led development for diverse digital agency clients.',
        details: [
            'Created responsive design systems for mobile and web platforms using atomic design principles.',
            'Conducted user psychology research and usability testing to improve conversion rates.',
            'Delivered high-fidelity prototypes that reduced dev handoff time by 30%.'
        ],
        icon: <Code size={24} />
    },
    {
        company: 'Shalops',
        role: 'UI/UX Intern',
        duration: 'Sep 2025 – Dec 2025',
        location: 'Addis Ababa, Ethiopia',
        type: 'Professional Internship',
        stack: ['UI Design', 'UX Research', '协作'],
        desc: 'Supported UI design and user experience improvements for industrial digital products.',
        details: [
            'Refined interface consistency across multiple legacy enterprise platforms.',
            'Collaborated closely with developers to ensure smooth design-to-development handoff.',
            'Created comprehensive documentation for newly implemented design patterns.'
        ],
        icon: <Briefcase size={24} />
    },
    {
        company: 'Addis Ababa University',
        role: 'Robotics Team Member',
        duration: 'Feb 2025 – Nov 2025',
        location: 'Addis Ababa, Ethiopia',
        type: 'Hardware & Logic',
        stack: ['Python', 'Robotics', 'Control Algorithms'],
        desc: 'Designed and programmed robotic systems using Python and advanced control logic.',
        details: [
            'Developed navigation state machines for autonomous robotic maneuvers.',
            'Worked on hardware-software integration protocols for low-latency sensory input.',
            'Participated in system testing and iterative logic debugging sessions.'
        ],
        icon: <Target size={24} />
    },
    {
        company: 'Independent Developer',
        role: 'Full Stack Developer',
        duration: 'Jan 2022 – Present',
        location: 'Remote',
        type: 'Freelance / Open Source',
        stack: ['React', 'Node.js', 'Next.js', 'Django', 'PostgreSQL'],
        desc: 'Developing personal and academic projects from initial ideation to cloud deployment.',
        details: [
            'Built and maintained multiple open-source web applications using the MERN and T3 stacks.',
            'Implemented secure authentication and database schemas for real-world user traffic.',
            'Continuously exploring new architectural patterns e.g., micro-services and serverless logic.'
        ],
        icon: <Terminal size={24} />
    }
];

const ExperiencePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-background pb-32 pt-40 overflow-hidden"
        >
            {/* Masterpiece Background Decor */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-foreground/[0.02] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-foreground/[0.02] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-40">
                    <div className="space-y-6">
                        <Link to="/" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-foreground transition-all group mb-8">
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Return Home
                        </Link>
                        <motion.h1
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.7]"
                        >
                            Career <br />
                            <span className="text-muted-foreground/40 dark:text-muted-foreground/25 italic">Timeline.</span>
                        </motion.h1>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ delay: 0.5 }}
                        className="text-right"
                    >
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] max-w-xs leading-relaxed">
                            A curated ledger of technological impact and professional evolution across multiple industries.
                        </p>
                    </motion.div>
                </div>

                {/* The Timeline Masterpiece */}
                <div className="relative space-y-32 md:space-y-48">
                    {/* Central Vertical Line */}
                    <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-border via-foreground/20 to-border opacity-30"></div>

                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className={`relative flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
                        >
                            {/* Animated Node Icon */}
                            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-background border-2 border-foreground rounded-2xl z-20 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.1)] group transition-all duration-700 hover:rotate-45 hover:rounded-full hover:bg-foreground hover:text-background">
                                <div className="group-hover:-rotate-45 transition-transform duration-700">
                                    {exp.icon}
                                </div>
                            </div>

                            {/* Info Side */}
                            <div className={`w-full md:w-1/2 space-y-8 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/60">{exp.duration}</span>
                                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none group-hover:text-muted-foreground transition-colors duration-500">
                                        {exp.company}
                                    </h3>
                                    <div className={`flex flex-wrap gap-3 mt-4 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                        <span className="text-[8px] font-black uppercase tracking-widest bg-foreground text-background px-4 py-1.5 rounded-full shadow-lg">
                                            {exp.type}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed max-w-xl ml-auto mr-0 md:mr-0 md:ml-auto">
                                    {exp.desc}
                                </p>
                                <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                    {exp.stack.map(s => (
                                        <span key={s} className="text-[7px] font-black uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity cursor-default">{s}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Details Card - The Masterpiece Touch */}
                            <div className="w-full md:w-1/2">
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="bg-muted/10 backdrop-blur-3xl border border-border/80 rounded-[3rem] p-10 md:p-14 space-y-8 shadow-2xl relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/5 rounded-full blur-3xl -z-10 group-hover:bg-foreground/10 transition-all duration-1000"></div>

                                    <div className="flex items-center gap-6 pb-8 border-b border-border/100">
                                        <div className="w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center text-background shadow-xl">
                                            <Terminal size={20} />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">{exp.role}</span>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <MapPin size={10} />
                                                <span className="text-[8px] font-black uppercase tracking-widest">{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="space-y-6">
                                        {exp.details.map((detail, i) => (
                                            <li key={i} className="flex gap-6 items-start">
                                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/40 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base font-medium text-muted-foreground leading-relaxed">
                                                    {detail}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.4em] text-muted-foreground">
                                            <Clock size={10} /> Node Registry Finalized
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Educational Infrastructure Upgrade */}
                <div className="mt-64 pt-40 border-t border-border/50 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-12 py-3 bg-background border border-border rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/60 whitespace-nowrap">
                        Infrastructural Foundation
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-16 md:p-20 bg-muted/20 rounded-[4rem] border border-border group hover:bg-muted/40 transition-all duration-700 shadow-xl"
                        >
                            <div className="flex flex-col gap-10">
                                <div className="w-24 h-24 rounded-[2rem] bg-foreground text-background flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-700">
                                    <BookOpen size={40} />
                                </div>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Addis Ababa University</h3>
                                        <span className="text-[10px] font-black bg-foreground text-background px-4 py-1.5 rounded-full">Top Tier</span>
                                    </div>
                                    <p className="text-xl font-black uppercase tracking-[0.2em] text-muted-foreground">Software Engineering Dept.</p>
                                    <p className="text-sm font-medium opacity-60 uppercase tracking-widest leading-relaxed">
                                        Specializing in back-end development, scalable architectures, and distributed AI systems. Currently rank in the top percentile of the department.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-16 md:p-20 bg-muted/10 rounded-[4rem] border border-dashed border-border group hover:border-foreground/50 transition-all duration-700"
                        >
                            <div className="flex flex-col gap-10">
                                <div className="w-20 h-20 rounded-[1.5rem] bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-700">
                                    <Award size={32} />
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">St.Gabriel School</h3>
                                    <p className="text-lg font-black uppercase tracking-[0.2em] text-muted-foreground/60">High School Diploma</p>
                                    <p className="text-sm font-medium opacity-60 uppercase tracking-widest leading-relaxed">
                                        Achieved an exceptional score of 562/700 on the Ethiopian School Leaving Examination (ESLE).
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Final Call to Action */}
                <div className="mt-48 flex flex-col items-center text-center space-y-12">
                    <div className="h-1px w-40 bg-border"></div>
                    <p className="text-sm font-black uppercase tracking-[0.5em] text-muted-foreground/40">Continuously Evolving</p>
                    <a
                        href="/Hiruy-Legesse-Adane-FlowCV-Resume-20260215 (1).pdf"
                        download="Hiruy-Legesse-Resume.pdf"
                        className="h-24 px-16 bg-foreground text-background rounded-full flex items-center justify-center font-black uppercase tracking-[0.3em] text-xs gap-6 hover:scale-105 active:scale-95 transition-all shadow-2xl group"
                    >
                        Export Official Codex / CV <Briefcase size={18} className="group-hover:rotate-12 transition-transform" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ExperiencePage;
