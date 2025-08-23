import { Github, Instagram, Linkedin, LocateFixed, LocateIcon, Map, MapPin, Twitch, Twitter } from 'lucide-react'
import React from 'react'

function Footer() {
    return (
        <div className='py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col justify-center items-center gap-2'>
            <h1 className='text-3xl p-5 bg-primary/20 rounded-full font-logo font-semibold'>HD</h1>
            <h3 className='font-semibold text-lg'>Het Dhorajiya</h3>
            <p className='flex items-center gap-3 font-semibold'><MapPin size={15}/> Surat, India</p>
            <p className='text-sm text-muted-foreground'>Copyright &copy;{new Date().getFullYear()} - All right reserved</p>
            <div className="flex gap-4 pt-4 justify-center ">
                <a href="https://www.linkedin.com/in/het-dhorajiya-679aa2292/" className='flex flex-col items-center' target='blank'>
                    <span className='p-2 w-max rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                        <Linkedin size={17} />
                    </span>
                </a>
                <a href="https://github.com/Het-Dhorajiya-0305" className='flex flex-col items-center' target='blank'>
                    <span className='p-2 w-max rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                        <Github size={17} />
                    </span>
                </a>
                <a href="https://www.instagram.com/__het0305__/" className='flex flex-col items-center' target='blank'>
                    <span className='p-2 w-max rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                        <Instagram size={17} />
                    </span>
                </a>
                <a href="https://x.com/15755Het" className='flex flex-col items-center' target='blank'>
                    <span className='p-2 w-max rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                        <Twitter size={17} />
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Footer