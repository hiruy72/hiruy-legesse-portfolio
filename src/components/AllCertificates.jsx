import { ArrowLeft, Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const allCertificates = [
    {
        title: 'Next.js Proficiency',
        tags: ['Next.js', 'React', 'SSR'],
        image: '/next screen-shot.png',
        link: '/Nextjs.pdf',
        issuer: 'Vercel / Next.js Ecosystem',
        date: '2025'
    },
    {
        title: 'UI/UX Design Masterclass',
        tags: ['UI/UX', 'Figma', 'Prototyping'],
        image: '/UI.png',
        link: '/UIUX.pdf',
        issuer: 'Design Academy',
        date: '2025'
    },
    {
        title: 'Node.js with MongoDB',
        tags: ['Node.js', 'MongoDB', 'NoSQL'],
        image: '/Screenshot 2025-11-04 142403.png',
        link: '/node js and mongog db (1).pdf',
        issuer: 'Backend Systems Certification',
        date: '2025'
    },
    {
        title: 'UI/UX (Adobe & Figma)',
        tags: ['UI/UX', 'Adobe XD', 'Figma'],
        image: '/figma-adobe.png',
        link: '/figma-adobe.pdf',
        issuer: 'Adobe Certified Professionals',
        date: '2024'
    },
    {
        title: 'Node.js with Express',
        tags: ['Node.js', 'Express', 'APIs'],
        image: '/Screenshot 2025-11-04 142318.png',
        link: '/node and expresse certificate.pdf',
        issuer: 'Web Foundations',
        date: '2024'
    },
    {
        title: 'UI/UX Advanced Suite',
        tags: ['UI/UX', 'Creative Cloud'],
        image: '/adobe.png',
        link: '/adobe.pdf',
        issuer: 'Adobe Creative Cloud',
        date: '2024'
    },
    {
        title: 'Cloud Computing Architecture',
        tags: ['Cloud', 'AWS', 'DevOps'],
        image: '/Screenshot 2025-11-04 142118.png',
        link: '/Coursera cloud competing.pdf',
        issuer: 'AWS Academy / Coursera',
        date: '2024'
    }
];

const AllCertificates = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-[#050507] text-white pb-32 pt-32 relative overflow-hidden"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-20 left-1/3 w-[600px] h-[600px] bg-violet-600/[0.08] rounded-full blur-[160px] pointer-events-none -z-10" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/[0.08] rounded-full blur-[130px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Back Navigation */}
                <div className="mb-10">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-white transition-colors"
                    >
                        <ArrowLeft size={14} /> Back to Overview
                    </Link>
                </div>

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-indigo-400 mb-4">
                            <Award size={13} className="text-indigo-400" />
                            <span>CREDENTIAL REPOSITORY</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gradient-micro1">
                            Certifications & Recognitions
                        </h1>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground max-w-sm leading-relaxed">
                        Industry-recognized certifications and professional credentials validating expertise in Full-Stack development, AI, Cloud, and UI/UX design.
                    </p>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allCertificates.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-2xl p-7 flex flex-col justify-between group hover:border-white/20 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="relative z-10 space-y-6">
                                <div className="flex items-start justify-between">
                                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 group-hover:scale-105 transition-all">
                                        <Award size={22} />
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-400">
                                        <CheckCircle2 size={12} /> Verified
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                                        {cert.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-1.5">
                                        {cert.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-muted-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10 mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                                <div>
                                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider block font-medium">Issuer</span>
                                    <span className="text-xs font-semibold text-white/90">{cert.issuer}</span>
                                </div>

                                <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-indigo-400 group-hover:bg-white group-hover:text-black transition-all">
                                    <ExternalLink size={13} />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default AllCertificates;

