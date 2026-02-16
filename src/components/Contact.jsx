import { Send, ArrowUpRight, Github, Linkedin, Mail, Twitter, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const subject = encodeURIComponent(`Inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

        window.location.href = `mailto:hiruyadane@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="py-24 md:py-48 bg-background relative overflow-hidden border-t border-border/50">
            {/* Background Branding Elements */}
            <div className="absolute bottom-0 right-0 text-[15rem] font-black text-foreground/[0.02] dark:text-foreground/[0.01] select-none pointer-events-none uppercase leading-none">
                Connect.
            </div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-24 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/60 mb-12 flex items-center gap-4">
                            <div className="w-12 h-[1px] bg-muted-foreground/40"></div> Available for Projects
                        </h2>
                        <h3 className="text-5xl md:text-7xl font-black mb-16 tracking-tighter uppercase leading-[0.8] text-foreground">
                            Let’s build <br />
                            <span className="text-muted-foreground/40 dark:text-muted-foreground/25 italic">Greatness.</span>
                        </h3>

                        <div className="space-y-12">
                            <div className="group">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-4">Inquiries</p>
                                <a href="mailto:hiruyadane@gmail.com" className="text-2xl md:text-4xl font-black tracking-tighter hover:text-muted-foreground transition-all flex items-center gap-6">
                                    hiruyadane@gmail.com <ArrowUpRight className="text-muted-foreground group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                                </a>
                            </div>

                            <div className="flex gap-12 pt-8">
                                {[
                                    { icon: <Github size={24} />, href: "https://github.com/hiruy72", label: 'Github' },
                                    { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/hiruy-legesse", label: 'Linkedin' },
                                    { icon: <Mail size={24} />, href: "mailto:hiruyadane@gmail.com", label: 'Email' }
                                ].map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-foreground transition-all group flex flex-col items-center gap-3"
                                    >
                                        <div className="w-14 h-14 border border-border rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                                            {item.icon}
                                        </div>
                                        <span className="text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">{item.label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="w-full lg:max-w-md bg-muted/50 dark:bg-muted/20 p-12 md:p-16 rounded-[4rem] border border-border/80 shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/5 rounded-full blur-3xl -z-10 group-hover:bg-foreground/10 transition-colors duration-1000"></div>

                        <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Information</label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="YOUR NAME"
                                    required
                                    className="w-full bg-transparent border-b border-border/100 py-4 font-black uppercase tracking-widest text-xs focus:border-foreground outline-none transition-all placeholder:text-muted-foreground/60 text-foreground"
                                />
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="EMAIL ADDRESS"
                                    required
                                    className="w-full bg-transparent border-b border-border/100 py-4 font-black uppercase tracking-widest text-xs focus:border-foreground outline-none transition-all placeholder:text-muted-foreground/60 text-foreground"
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Brief</label>
                                <textarea
                                    name="message"
                                    placeholder="HOW CAN I HELP?"
                                    rows={4}
                                    required
                                    className="w-full bg-transparent border-b border-border/100 py-4 font-black uppercase tracking-widest text-xs focus:border-foreground outline-none transition-all placeholder:text-muted-foreground/60 text-foreground resize-none"
                                />
                            </div>

                            <button type="submit" className="w-full h-20 bg-foreground text-background rounded-2xl flex items-center justify-center font-black uppercase tracking-[0.2em] text-xs gap-4 group hover:scale-[1.02] transition-all shadow-xl active:scale-95">
                                Initialize Dispatch <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
