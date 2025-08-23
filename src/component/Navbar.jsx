import React, { useState, useEffect } from 'react'
import { TiThMenu } from "react-icons/ti";
import {cn} from "../lib/utils.js";
import ThemeToggle from './ThemeToggle.jsx';


function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className='max-w-[1200px] fixed mx-auto px-4 left-[50%] -translate-x-[50%] z-60 gap-4 w-full flex my-3'>
            <div className={`w-full max-w-[1100px] mx-auto flex items-center justify-between px-6 rounded-r-full rounded-l-full border-[0.5px] border-gray-400 ${isScrolled ? "py-4 bg-background/80 backdrop-blur-md shadow-xs" : "py-4"}`}>
                <a
                    className="text-xl font-bold text-primary flex items-center"
                    href="#hero"
                >
                    <span className="relative z-10 sm:text-2xl text-xl">
                        <span className="text-glow text-foreground"> Het </span>{" "}
                        Dhorajiya
                    </span>
                </a>

                {/* laptop view */}

                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300 font-semibold"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* mobile view */}
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <button className={cn("sm:block md:hidden z-50 transition-colors duration-300 text-xl rounded-full border-2 border-gray-400 p-2 hover:cursor-pointer","focus:outline-hidden ")} onClick={toggleMenu}>
                        <TiThMenu></TiThMenu>
                    </button>
                </div>
            </div>
            <div
                className={cn(
                    "fixed w-full h-screen inset-0 bg-background/95 backdroup-blur-md z-20 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen
                        ? "opacity-100 pointer-events-auto top-[100%]"
                        : "opacity-0 pointer-events-none"
                )}
            >
                <div className="flex flex-col space-y-8 text-xl w-full h-full py-5 items-center justify-start">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar


// import cn from "../lib/utils.js";
// import { Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";

// const navItems = [
//     { name: "Home", href: "#hero" },
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
// ];

// export const Navbar = () => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.screenY > 10);
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);
//     return (
//         <nav
//             className={cn(
//                 "fixed w-full z-40 transition-all duration-300",
//                 isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
//             )}
//         >
//             <div className="container flex items-center justify-between">
//                 <a
//                     className="text-xl font-bold text-primary flex items-center"
//                     href="#hero"
//                 >
//                     <span className="relative z-10">
//                         <span className="text-glow text-2xl text-foreground"> Het </span>{" "}
//                         Dhorajiya
//                     </span>
//                 </a>

//                 <div className="hidden md:flex space-x-8">
//                     {navItems.map((item, key) => (
//                         <a
//                             key={key}
//                             href={item.href}
//                             className="text-foreground/80 hover:text-primary transition-colors duration-300 font-semibold"
//                         >
//                             {item.name}
//                         </a>
//                     ))}
//                 </div>


//                 <button
//                     onClick={() => setIsMenuOpen((prev) => !prev)}
//                     className="md:hidden p-2 text-foreground z-50"
//                     aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
//                 >
//                     {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
//                 </button>

//                 <div
//                     className={cn(
//                         "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
//                         "transition-all duration-300 md:hidden",
//                         isMenuOpen
//                             ? "opacity-100 pointer-events-auto"
//                             : "opacity-0 pointer-events-none"
//                     )}
//                 >
//                     <div className="flex flex-col space-y-8 text-xl">
//                         {navItems.map((item, key) => (
//                             <a
//                                 key={key}
//                                 href={item.href}
//                                 className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                                 onClick={() => setIsMenuOpen(false)}
//                             >
//                                 {item.name}
//                             </a>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;