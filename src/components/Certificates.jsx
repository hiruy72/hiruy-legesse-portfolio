import { ArrowRight, ExternalLink, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const topCertificates = [
    {
        title: 'Next.js Proficiency',
        tags: ['Next.js'],
        image: '/next screen-shot.png',
        link: '/Nextjs.pdf',
        issuer: 'Professional Training'
    },
    {
        title: 'Node.js with MongoDB',
        tags: ['Node.js', 'MongoDB'],
        image: '/Screenshot 2025-11-04 142403.png',
        link: '/node js and mongog db (1).pdf',
        issuer: 'Backend Certification'
    },
    {
        title: 'Node.js with Express',
        tags: ['Node.js', 'Express'],
        image: '/Screenshot 2025-11-04 142318.png',
        link: '/node and expresse certificate.pdf',
        issuer: 'Full Stack Training'
    },
    {
        title: 'Cloud Computing',
        tags: ['Cloud', 'AWS'],
        image: '/Screenshot 2025-11-04 142118.png',
        link: '/Coursera cloud competing.pdf',
        issuer: 'AWS Academy'
    }
];

const Certificates = () => {
    return (
        <section id="certificates" className="py-32 md:py-48 bg-background relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start mb-24 md:mb-40 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm font-black uppercase tracking-[0.3em] text-muted-foreground/60 mb-6">Recognitions</h2>
                        <h3 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] uppercase text-foreground">
                            CERTI <br /> <span className="text-muted-foreground/40 dark:text-muted-foreground/25 italic">FICATES.</span>
                        </h3>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border mt-12 overflow-hidden shadow-2xl">
                    {topCertificates.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-background group relative p-12 md:p-20 overflow-hidden transition-colors duration-700"
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="w-16 h-16 border border-border rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-700 transform group-hover:rotate-12">
                                        <Award size={32} />
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/60 group-hover:text-foreground transition-colors duration-500">
                                        Verified Credential
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h4 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85] group-hover:translate-x-6 transition-transform duration-700 ease-out text-foreground">
                                        {cert.title}
                                    </h4>
                                    <div className="flex flex-wrap gap-4">
                                        {cert.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-black uppercase tracking-widest border border-border px-6 py-2 rounded-full bg-muted/30 group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto pt-24 flex items-center justify-between">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-muted-foreground opacity-50">Issued By</span>
                                        <span className="text-xs font-black uppercase tracking-[0.2em] text-foreground">{cert.issuer}</span>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-foreground">
                                        <ExternalLink size={20} />
                                    </div>
                                </div>
                            </div>

                            {/* Masterpiece Background Reveal */}
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 grayscale pointer-events-none">
                                <img
                                    src={cert.image}
                                    alt=""
                                    className="w-full h-full object-cover scale-150 group-hover:scale-110 transition-transform duration-[2s] ease-out"
                                />
                            </div>

                            {/* Kinetic Border */}
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                        </motion.a>
                    ))}
                </div>

                <div className="mt-32 flex justify-center">
                    <Link
                        to="/certificates"
                        className="group flex items-center gap-10 text-xl md:text-2xl font-black uppercase tracking-[0.2em] text-foreground"
                    >
                        Explore Full Archive
                        <div className="w-16 h-16 border border-foreground rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500 shadow-2xl">
                            <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
