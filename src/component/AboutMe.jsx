import { Code } from 'lucide-react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import React, { useRef, useEffect, useState } from 'react'
import heroImage from '../../public/heroImage.jpg'

function AboutMe() {
    const [visible, setVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.2 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div id='about' className='py-24 px-4 relative'>
            <div className="container mx-auto max-w-5xl">
                <h2 className='text-4xl md:texl-5xl font-bold mb-12 text-center'>
                    About <span className='text-primary'> Me</span>
                </h2>
                <div
                    ref={ref}
                    className={`flex lg:flex-row flex-col-reverse lg:px-0 sm:px-13 gap-12 items-center transition-all duration-700
                        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                    `}
                >
                    <div className="space-y-6 text-justify max-lg:felx-1">
                        <h3 className='text-2xl font-semibold text-primary'> Hello! I'm Het Dhorajiya </h3>
                        <p className='text-muted-foreground'>I’m a B.Tech CSE student at IIIT Kota (Class of 2027) with a strong passion for turning ideas into impactful technology.What began as a simple curiosity for computers has now grown into a drive to design and build applications that solve real-world problems.</p>
                        <p className='text-muted-foreground'>Over the years, I’ve developed a keen interest in exploring how software can be structured to handle complexity, scale efficiently, and remain accessible to people.I love the process of breaking down problems, experimenting with approaches, and watching them come together as working solutions.</p>
                        <p className='text-muted-foreground'>I enjoy working across both frontend and backend, with a particular focus on scalable systems, backend development, and emerging technologies like AI/ML.For me, coding is not just about syntax or logic — it’s about creating tools and systems that genuinely make a difference.I’m currently looking for opportunities to grow, collaborate, and contribute to projects that matter.</p>
                        <div className="flex sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className='cosmic-button w-max'>Get In Touch</a>
                            <a href="https://drive.google.com/file/d/1iPk0xxU63xqtyeGBpSJPDQashps0KWI5/view?usp=drive_link" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 w-max' target='blank'>My Resume</a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center max-lg:flex-2">
                        <div className="p-6 relative">
                            <img src="https://res.cloudinary.com/dhxwyq122/image/upload/v1755978432/hero_image_f51v0a.jpg" alt="" className='rounded-full animate-float max-w-sm max-sm:max-w-80' />
                        </div>
                        <div className="flex gap-8 pt-4 justify-center ">
                            <a href="https://www.linkedin.com/in/het-dhorajiya-679aa2292/" className='flex flex-col items-center' target='blank'>
                                <span className='p-3 w-max rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                                    <FaLinkedinIn size={20}/>
                                </span>
                                <span className='text-muted-foreground'>LinkedIn</span>
                            </a>
                            <a href="https://github.com/Het-Dhorajiya-0305" className='flex flex-col items-center' target='blank'>
                                <span className='p-3 w-max rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                                    <FaGithub size={20}/>
                                </span>
                                <span className='text-muted-foreground'>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe