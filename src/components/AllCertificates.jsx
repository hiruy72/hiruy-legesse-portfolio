import { ArrowLeft, FileText, ArrowRight, Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const allCertificates = [
    {
        title: 'Next.js Proficiency',
        tags: ['Next.js'],
        image: '/next screen-shot.png',
        link: '/Nextjs.pdf',
        issuer: 'Vercel / Next.js Specialists'
    },
    {
        title: 'UI/UX Design Masterclass',
        tags: ['UI/UX'],
        image: '/UI.png',
        link: '/UIUX.pdf',
        issuer: 'Design Academy'
    },
    {
        title: 'Node.js with MongoDB',
        tags: ['Node.js', 'MongoDB'],
        image: '/Screenshot 2025-11-04 142403.png',
        link: '/node js and mongog db (1).pdf',
        issuer: 'Backend Systems'
    },
    {
        title: 'UI/UX (Adobe & Figma)',
        tags: ['UI/UX', 'Tools'],
        image: '/figma-adobe.png',
        link: '/figma-adobe.pdf',
        issuer: 'Adobe Certified Professionals'
    },
    {
        title: 'Node.js with Express',
        tags: ['Node.js', 'Express'],
        image: '/Screenshot 2025-11-04 142318.png',
        link: '/node and expresse certificate.pdf',
        issuer: 'Web Foundations'
    },
    {
        title: 'UI/UX Advanced',
        tags: ['UI/UX'],
        image: '/adobe.png',
        link: '/adobe.pdf',
        issuer: 'Adobe Creative Cloud'
    },
    {
        title: 'Cloud Computing',
        tags: ['Cloud', 'AWS'],
        image: '/Screenshot 2025-11-04 142118.png',
        link: '/Coursera cloud competing.pdf',
        issuer: 'AWS Academy / Coursera'
    }
];

const AllCertificates = () => {
    return (
        <div className="min-h-screen bg-background pt-32 pb-32 relative overflow-hidden">
            {/* Architectural Background */}
            <div className="absolute top-0 right-0 w-1/2 h-screen bg-muted/5 -z-10 blur-3xl"></div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <motion.a
                    href="/"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-foreground transition-all mb-20 group"
                >
                    <div className="w-8 h-8 border border-border rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                        <ArrowLeft size={14} />
                    </div>
                    Back to Selection
                </motion.a>

                <div className="mb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm font-black uppercase tracking-[0.5em] text-muted-foreground/60 mb-8"
                    >
                        Credential Archive
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-7xl md:text-[12rem] font-black tracking-tighter leading-[0.8] uppercase flex flex-wrap"
                    >
                        CERTI <br /> <span className="text-muted-foreground/40 dark:text-muted-foreground/25 italic">IFICATES.</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border shadow-2xl">
                    {allCertificates.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-background group relative p-12 flex flex-col min-h-[500px] overflow-hidden transition-colors"
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-700">
                                        <Award size={24} />
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-full">
                                        <span className="w-1.5 h-1.5 rounded-full bg-foreground/20"></span>
                                        <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">Certified</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h5 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-[0.8] text-foreground group-hover:translate-x-4 transition-transform duration-700">
                                        {cert.title}
                                    </h5>
                                    <div className="flex flex-wrap gap-2">
                                        {cert.tags.map(tag => (
                                            <span key={tag} className="text-[8px] font-black uppercase tracking-[0.2em] border border-border px-3 py-1.5 rounded-full bg-muted/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto pt-16 border-t border-border/50">
                                    <div className="flex justify-between items-end">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">Credential ID-AOU</span>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-foreground">{cert.issuer}</span>
                                        </div>
                                        <div className="w-10 h-10 flex items-center justify-center translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 text-foreground">
                                            <ExternalLink size={18} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cinematic Background Reveal */}
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-1000 grayscale pointer-events-none">
                                <img
                                    src={cert.image}
                                    alt=""
                                    className="w-full h-full object-cover scale-150 group-hover:scale-110 transition-transform duration-[3s] ease-out"
                                />
                            </div>

                            {/* Kinetic Indicator */}
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllCertificates;
