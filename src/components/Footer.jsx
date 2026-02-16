import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="py-12 bg-background border-t border-border/40">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
                    <div className="flex items-center gap-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Hiruy Legesse</span>
                        <div className="w-1 h-1 rounded-full bg-foreground"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Portfolio v2.5</span>
                    </div>

                    <div className="flex gap-10">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] italic">Built with Precision</span>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">© 2025</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
