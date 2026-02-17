import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const experiences = [
    {
        company: 'Riftronix',
        role: 'AI and Software Developer',
        duration: 'Dec 2025 – Present',
        location: 'Addis Ababa, Ethiopia',
        desc: 'Building AI-driven and full-stack software solutions using Python, React, Node.js, and Next.js. Working across backend systems, frontend interfaces, and intelligent features that support real-world applications.'
    },
    {
        company: 'iCog Labs',
        role: 'AI Intern (MOSES Team)',
        duration: 'Jan 2026 – Present',
        location: 'Addis Ababa, Ethiopia',
        desc: 'Contributing to AI research and development within the MOSES team. Gaining hands-on experience in machine learning systems, optimization techniques, and scalable software design.'
    },
    {
        company: 'Eyoha Digitals',
        role: 'UI/UX Designer Intern',
        duration: 'Aug 2025 – Jan 2026',
        location: 'Addis Ababa, Ethiopia',
        desc: 'Designed user-centered interfaces for web and mobile products. Created wireframes, prototypes, and improved usability through iterative testing and feedback.'
    },
    {
        company: 'Shalops',
        role: 'UI/UX Intern',
        duration: 'Sep 2025 – Dec 2025',
        location: 'Addis Ababa, Ethiopia',
        desc: 'Supported UI design and user experience improvements for digital products. Collaborated closely with developers to ensure smooth design-to-development handoff.'
    },
    {
        company: 'Addis Ababa University',
        role: 'Robotics Team Member',
        duration: 'Feb 2025 – Nov 2025',
        location: 'Addis Ababa, Ethiopia',
        desc: 'Designed and programmed robotic systems using Python and control algorithms. Worked on logic design, hardware integration, and system testing.'
    },
    {
        company: 'Independent Developer',
        role: 'Full Stack Developer',
        duration: 'Jan 2022 – Present',
        location: 'Remote',
        desc: 'Developing personal and academic projects using React, Node.js, Next.js, and Python. Focused on building complete systems from idea to deployment.'
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 md:py-32 bg-background relative">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl"
                    >
                        <h2 className="text-sm font-black uppercase tracking-[0.3em] text-muted-foreground/60 mb-6">Career Path</h2>
                        <h3 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase flex flex-wrap mb-12">
                            EXPER <br /> <span className="text-muted-foreground/40 dark:text-muted-foreground/25 italic">IENCE.</span>
                        </h3>
                        <Link
                            to="/experience"
                            className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-foreground transition-all group"
                        >
                            Full Career Timeline <Clock size={14} className="group-hover:rotate-12 transition-transform" />
                        </Link>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-sm mt-8 md:mt-0 font-medium leading-relaxed"
                    >
                        A roadmap of my professional evolution, working at the intersection of AI, Design, and Scalable Code.
                    </motion.p>
                </div>

                <div className="space-y-0 border-t border-border">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="group border-b border-border py-8 md:py-16 hover:bg-muted/30 transition-all duration-700 relative overflow-hidden"
                        >
                            <div className="grid md:grid-cols-[0.8fr_1.2fr] items-start gap-12 relative z-10">
                                <div className="space-y-4">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                                        {exp.duration}
                                    </div>
                                    <h4 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none group-hover:pl-4 transition-all duration-500">
                                        {exp.company}
                                    </h4>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-widest text-foreground">
                                        <span className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                                            <Briefcase size={12} /> {exp.role}
                                        </span>
                                        <span className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                                            <MapPin size={12} /> {exp.location}
                                        </span>
                                    </div>
                                    <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                                        {exp.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-foreground/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out -z-0"></div>
                        </motion.div>
                    ))}
                    <div className="mt-24 flex justify-center">
                        <a
                            href="/Hiruy-Legesse-Adane-FlowCV-Resume-20260215 (1).pdf"
                            download="Hiruy-Legesse-Resume.pdf"
                            className="group relative flex items-center gap-10 text-xl md:text-2xl font-black uppercase tracking-[0.2em] text-foreground"
                        >
                            Official Resume Repository
                            <div className="w-16 h-16 border border-foreground rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500 shadow-2xl">
                                <Briefcase size={28} className="group-hover:rotate-12 transition-transform" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
