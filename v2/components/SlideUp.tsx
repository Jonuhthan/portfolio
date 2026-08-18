"use client"
import React, { useEffect, useRef, ReactNode } from "react"

// defines any props that are passed into component and their expected types
interface Props {
    offset?: string
    children?: ReactNode
}

export default function SlideUp({ children, offset = "0px" }: Props) {
    // keeps track of values between renders
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            // if the entry enters the viewport, aka if project is scrolled down to be seen by user, apply the animation
            if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0")
                // slideUp animation from tailwind config
                entry.target.classList.add("animate-slideUpCubiBezier")
            }
            })
        },
        { rootMargin: offset }
        )

        if (ref.current) {
        observer.observe(ref.current)
        }
    }, [ref])

    return (
        <div ref={ref} className="relative opacity-0">
        {children}
        </div>
    )
}