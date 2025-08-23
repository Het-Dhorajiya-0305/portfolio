import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import {cn} from '../lib/utils';

function ThemeToggle() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        }
        else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    }
    return (
        <button onClick={toggleTheme} className={cn("z-50 transition-colors duration-300 text-xl rounded-full border-2 border-gray-400 p-2 hover:cursor-pointer","focus:outlin-hidden ")}>
            {isDarkMode ? (
                <Sun className='h-6 w-6 text-yellow-300' />
            ) : (
                <Moon className='h-6 w-6 text-blue-900' />
            )}
        </button>
    )
}

export default ThemeToggle