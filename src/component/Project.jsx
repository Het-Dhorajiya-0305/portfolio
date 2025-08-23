import React from 'react'
import { projects } from '../lib/utils.js'
import { ExternalLink, Github } from 'lucide-react'
function Project() {
    return (
        <div id='projects' className='py-24 px-4 relative max-sm:px-2'>
            <div className="container mx-auto max-w-5xl">
                <h2 className='text-4xl md:text-5xl font-bold mb-4 text-center'>
                    My <span className='text-primary'>Project</span>
                </h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    here are some of the projects that I have worked on. I have also worked on some personal projects to improve my skills.
                </p>

                <div className="flex flex-col gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col lg:flex-row p-4" >
                            <div className="h-70 lg:min-w-sm sm:min-w-60 overflow-hidden rounded-2xl">
                                <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-2xl' />
                            </div>
                            <div className="p-6 text-start flex flex-col gap-3 max-sm:p-3">
                                <h3 className='text-3xl font-semibold mb-1 max-sm:text-2xl'>
                                    {project.title}
                                </h3>
                                <p className='text-muted-foreground text-md mb-4 max-sm:text-sm'>
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="text-xs border font-medium bg-primary/20 text-secondary-foreground px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 w-full">
                                    <a href={project.demoUrl} target='blank' className='cosmic-button flex gap-2 max-sm:text-sm max-sm:px-4'><ExternalLink /> <span>Live Demo</span></a>
                                    <a href={project.githubUrl} target='blank' className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex gap-2 max-sm:text-sm'><Github /> <span>Code</span></a>
                                </div>
                            </div>


                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Project