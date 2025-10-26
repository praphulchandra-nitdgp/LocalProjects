"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingAnimation({ onComplete }) {
    const [progress, setProgress] = useState(0)
    const [showLogo, setShowLogo] = useState(false)

    useEffect(() => {
        
        const logoTimer = setTimeout(() => {
            setShowLogo(true)
        }, 500)

        
        const interval = setInterval(() => {
            setProgress((prev) => {
                const newProgress = prev + (100 - prev) * 0.1

                if (newProgress >= 99.5) {
                    clearInterval(interval)
                    // Complete loading after the progress reaches 100%
                    setTimeout(() => {
                        onComplete()
                    }, 1000)
                    return 100
                }

                return newProgress
            })
        }, 100)

        return () => {
            clearInterval(interval)
            clearTimeout(logoTimer)
        }
    }, [onComplete])

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            }}
        >
            {/* Star field background */}
            <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 50 }).map((_, i) => {
                    // Using deterministic values based on index
                    const seed = i / 50;
                    const left = (seed * 137.5) % 100;
                    const top = (seed * 173.3) % 100;
                    const size = (seed * 2) + 1;
                    const duration = (seed * 2) + 2;
                    const delay = seed * 2;
                    
                    return (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-white"
                            style={{
                                left: `${left}%`,
                                top: `${top}%`,
                                width: `${size}px`,
                                height: `${size}px`,
                            }}
                            animate={{
                                opacity: [0.2, 0.8, 0.2],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: duration,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: delay,
                            }}
                        />
                    );
                })}
            </div>

            {/* Central logo animation */}
            <AnimatePresence>
                {showLogo && (
                    <motion.div
                        className="relative mb-16"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Orbital ring animation */}
                        <motion.div
                            className="absolute inset-0 border-2 border-orange-500/30 rounded-full"
                            style={{ width: "120%", height: "120%", top: "-10%", left: "-10%" }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        />

                        <motion.div
                            className="absolute inset-0 border border-orange-500/20 rounded-full"
                            style={{ width: "150%", height: "150%", top: "-25%", left: "-25%" }}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        />

                        {/* Logo text */}
                        <motion.div
                            className="text-5xl font-extrabold text-orange-500"
                            style={{ textShadow: "0 0 15px rgba(255,140,0,0.5)" }}
                            animate={{
                                textShadow: [
                                    "0 0 15px rgba(255,140,0,0.3)",
                                    "0 0 25px rgba(255,140,0,0.7)",
                                    "0 0 15px rgba(255,140,0,0.3)",
                                ],
                            }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        >
                            AAROHAN
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Loading progress bar */}
            <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mt-4">
                <motion.div
                    className="h-full bg-orange-500"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut" }}
                />
            </div>

            {/* Loading text */}
            <motion.div
                className="mt-4 text-orange-500 text-sm font-mono"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
                INITIALIZING SYSTEM {Math.floor(progress)}%
            </motion.div>

            {/* Tagline with typewriter effect */}
            {progress > 50 && (
                <TypewriterText
                    text="TECHNOLOGY MEETS TRADITION, INNOVATION MEETS INSPIRATION."
                    className="absolute bottom-12 text-white/70 text-sm tracking-wider font-mono"
                />
            )}
        </motion.div>
    )
}

// Typewriter effect component
function TypewriterText({ text, className }) {
    const [displayedText, setDisplayedText] = useState("")

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            if (index <= text.length) {
                setDisplayedText(text.substring(0, index))
                index++
            } else {
                clearInterval(interval)
            }
        }, 50)

        return () => clearInterval(interval)
    }, [text])

    return <div className={className}>{displayedText}</div>
}