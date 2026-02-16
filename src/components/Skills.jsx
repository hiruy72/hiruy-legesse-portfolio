const skills = [
    { name: 'HTML5', icon: 'html5-original', desc: 'Semantic' },
    { name: 'CSS3', icon: 'css3-original', desc: 'Styling' },
    { name: 'JavaScript', icon: 'javascript-original', desc: 'Core' },
    { name: 'React', icon: 'react-original', desc: 'Frontend' },
    { name: 'Figma', icon: 'figma-original', desc: 'Design' },
    { name: 'TypeScript', icon: 'typescript-original', desc: 'Types' },
    { name: 'Next.js', icon: 'nextjs-original', desc: 'Fullstack', invertDark: true },
    { name: 'Tailwind CSS', icon: 'tailwindcss-plain', desc: 'Utility' },
];

const Skills = () => {
    return (
        <section id="skills" className="py-32 bg-background border-y border-border">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Technical Stack</h2>
                        <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase whitespace-nowrap">MY SKILLS</h3>
                    </div>
                    <div className="h-[1px] w-full bg-border md:mb-4 hidden md:block"></div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 bg-border border border-border">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="bg-background p-12 flex flex-col items-center justify-center text-center group hover:bg-muted/50 transition-colors duration-500"
                        >
                            <div className="w-12 h-12 mb-6 transition-all duration-500 transform group-hover:scale-110">
                                <img
                                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon.split('-')[0]}/${skill.icon}.svg`}
                                    alt={skill.name}
                                    className={skill.invertDark ? 'dark:invert' : ''}
                                />
                            </div>
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-2">{skill.name}</h4>
                            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
