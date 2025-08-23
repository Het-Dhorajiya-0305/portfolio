import React from 'react'
import StarBackground from '../component/StarBackground.jsx'
import Navbar from '../component/Navbar.jsx'
import Hero from '../component/Hero.jsx'
import AboutMe from '../component/AboutMe.jsx'
import Skills from '../component/Skills.jsx'
import Project from '../component/Project.jsx'
import ContactUs from '../component/ContactUs.jsx'
import Footer from '../component/Footer.jsx'

function Home() {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            <StarBackground />
            <Navbar />
            <main>
                <Hero />
                <AboutMe />
                <Skills />
                <Project />
                <ContactUs />
            </main>
            <Footer />
        </div>
    )
}

export default Home