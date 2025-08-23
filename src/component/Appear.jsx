import React, { useRef, useEffect, useState } from 'react'

function Appear({ children, className = '' }) {
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
        <div
            ref={ref}
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
        >
            {children}
        </div>
    )
}

export default Appear