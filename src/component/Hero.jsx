import { ArrowDown } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function Hero() {
    const sentences = [
        "Fullstack Developer",
        "Problem Solver",
        "Tech Enthusiastic"
    ]
    const [sentenceIdx, setSentenceIdx] = useState(0)
    const [typedText, setTypedText] = useState("")
    const [isErasing, setIsErasing] = useState(false)

    useEffect(() => {
        let i = isErasing ? sentences[sentenceIdx].length : 0
        const fullText = sentences[sentenceIdx]
        let typing

        if (!isErasing) {
            typing = setInterval(() => {
                setTypedText(fullText.slice(0, i + 1))
                i++
                if (i > fullText.length) {
                    clearInterval(typing)
                    setTimeout(() => setIsErasing(true), 1200)
                }
            }, 100)
        } else {
            typing = setInterval(() => {
                if (i > 0) {
                    setTypedText(fullText.slice(0, i - 1))
                    i--
                } else {
                    clearInterval(typing)
                    setTypedText("")
                    setIsErasing(false)
                    setSentenceIdx((prev) => (prev + 1) % sentences.length)
                }
            }, 50)
        }

        return () => clearInterval(typing)
    }, [sentenceIdx, isErasing])


    return (
        <div id='hero' className='flex flex-col relative min-h-screen items-center justify-center px-4'>
            <div className="container max-w-4xl mx-auto text-centerz-10">
                <div className="space-y-6">
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight'>
                        <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
                        <span className='text-primary opacity-0 animate-fade-in-delay-1'> Het</span>
                        <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'> Dhorajiya</span>
                    </h1>
                    <h1 className='text-5xl sm:text-6xl  md:text-7xl font-bold tracking-tight'>
                        <span className='text-primary'>{typedText}</span>
                        <span className="animate-pulse">_</span>
                    </h1>
                    <p className='text-[16px] md:text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                        "I am a B.Tech student in Computer Science and Engineering at IIIT Kota, driven by a strong passion for technology and innovation. I enjoy solving real-world problems through logical thinking, programming, and creative solutions."
                    </p>
                    <div className="flex gap-3 items-center justify-center pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className='cosmic-button'>
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
                <ArrowDown className='h-5 w-5 text-primary' />
            </div>
        </div>
    )
}

export default Hero