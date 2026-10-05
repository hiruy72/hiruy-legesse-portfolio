import { ArrowRight, ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const topCertificates = [
    {
        title: 'Next.js Proficiency',
        tags: ['Next.js', 'React', 'SSR'],
        image: '/next screen-shot.png',
        link: '/Nextjs.pdf',
        issuer: 'Professional Training',
        date: '2025'
    },
    {
        title: 'Node.js with MongoDB',
        tags: ['Node.js', 'MongoDB', 'NoSQL'],
        image: '/Screenshot 2025-11-04 142403.png',
        link: '/node js and mongog db (1).pdf',
        issuer: 'Backend Certification',
        date: '2025'
    },
    {
        title: 'Node.js with Express',
        tags: ['Node.js', 'Express', 'APIs'],
        image: '/Screenshot 2025-11-04 142318.png',
        link: '/node and expresse certificate.pdf',
        issuer: 'Full Stack Training',
        date: '2024'
    },
    {
        title: 'Cloud Computing Architecture',
        tags: ['Cloud', 'AWS', 'DevOps'],
        image: '/Screenshot 2025-11-04 142118.png',
        link: '/Coursera cloud competing.pdf',
        issuer: 'AWS Academy',
        date: '2024'
    }
];

const Certificates = () => {
    return (
        <section id="certificates" className="py-28 md:py-36 relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-indigo-400 mb-4">
                            <Award size={13} className="text-indigo-400" />
                            <span>VERIFIED CREDENTIALS</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gradient-micro1">
                            Certifications & Awards
                        </h2>
                        <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
                            Continuous learning and proven expertise verified through industry-standard credentials and specialized courses.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/credentials"
                            className="btn-pill-outline text-xs uppercase tracking-wider font-semibold"
                        >
                            All Certifications
                            <ArrowRight size={14} />
                        </Link>
                    </motion.div>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {topCertificates.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-2xl p-7 md:p-8 flex flex-col justify-between group relative overflow-hidden hover:border-white/20 transition-all duration-500"
                        >
                            {/* Subtle hover gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.04] to-violet-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10 space-y-6">
                                <div className="flex items-start justify-between">
                                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-indigo-400 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10 group-hover:scale-105 transition-all">
                                        <Award size={22} />
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-400">
                                        <CheckCircle2 size={12} /> Verified
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                                        {cert.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {cert.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="text-xs font-medium px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-muted-foreground group-hover:text-white group-hover:border-white/10 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10 mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                                <div>
                                    <span className="text-[11px] text-muted-foreground uppercase tracking-wider block font-medium">Issuer</span>
                                    <span className="text-sm font-semibold text-white/90">{cert.issuer}</span>
                                </div>

                                <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 group-hover:text-white transition-colors">
                                    <span>View PDF</span>
                                    <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                        <ExternalLink size={13} />
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-14 flex justify-center">
                    <Link
                        to="/credentials"
                        className="btn-pill"
                    >
                        <span>Explore All Credentials</span>
                        <div className="arrow-badge">
                            <ArrowRight size={14} />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Certificates;

