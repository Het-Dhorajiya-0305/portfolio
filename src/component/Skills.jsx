import React, { useState } from 'react'
import { cn, skills } from '../lib/utils';

function Skills() {


    const [activeCategory, setActiveCategory] = useState('all');

    const categories = ["all", "language", "frameworks", "database", "tools"];

    const filterSkill = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);


    return (
        <div id='skills' className='py-24 px-4 relative bg-secondary/30'>
            <div className="container mx-auto max-w-5xl">
                <h2 className='text-4xl md:text-5xl font-bold mb-12 text-center'>
                    My <span className='text-primary'>Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat, key) => (
                        <button
                            key={key}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary hover:cursor-pointer"
                            )}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-6 min-h-[30vh]">
                    {filterSkill.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover max-h-30">
                            <div className="text-left mb-4 flex items-center  gap-3">
                                <div className="">
                                    <img src={skill.loc} alt="" className='w-9' />
                                </div>
                                <h3 className='font-semibold text-lg'>
                                    {skill.name}
                                </h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{
                                        width: skill.level + '%'
                                    }}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className='text-sm text-muted-foreground'>
                                    {
                                        skill.level
                                    }%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills