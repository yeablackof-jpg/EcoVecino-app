"use client"

import { useEffect, useState } from "react"
import { RecycleIcon, LeafIcon, TrashIcon } from "../icons"

interface SplashScreenProps {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase(1), 200)
    const timer2 = setTimeout(() => setAnimationPhase(2), 600)
    const timer3 = setTimeout(() => setAnimationPhase(3), 1000)
    const timer4 = setTimeout(() => onComplete(), 2500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [onComplete])

  return (
    <div className="h-full bg-gradient-to-b from-primary/10 via-background to-accent/10 flex flex-col items-center justify-center p-8">
      {/* Logo animation */}
      <div className="relative mb-8">
        {/* Outer ring */}
        <div 
          className={`absolute inset-0 rounded-full border-4 border-primary/30 transition-all duration-700 ${
            animationPhase >= 1 ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
          style={{ width: 160, height: 160, margin: -20 }}
        />
        
        {/* Logo container */}
        <div 
          className={`relative w-32 h-32 bg-card rounded-3xl shadow-2xl flex items-center justify-center transition-all duration-500 ${
            animationPhase >= 1 ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        >
          {/* Logo image */}
          <img 
            src="/logo.jpg" 
            alt="EcoVecino Logo" 
            className="w-24 h-24 object-cover rounded-2xl"
          />
          
          {/* Floating icons */}
          <div 
            className={`absolute -top-3 -right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg transition-all duration-500 delay-200 ${
              animationPhase >= 2 ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <RecycleIcon className="w-5 h-5 text-primary-foreground" />
          </div>
          
          <div 
            className={`absolute -bottom-2 -left-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg transition-all duration-500 delay-300 ${
              animationPhase >= 2 ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <LeafIcon className="w-4 h-4 text-accent-foreground" />
          </div>
          
          <div 
            className={`absolute -bottom-3 -right-2 w-7 h-7 bg-secondary rounded-full flex items-center justify-center shadow-lg transition-all duration-500 delay-400 ${
              animationPhase >= 2 ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <TrashIcon className="w-3.5 h-3.5 text-secondary-foreground" />
          </div>
        </div>
      </div>

      {/* App name */}
      <div 
        className={`text-center transition-all duration-500 ${
          animationPhase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h1 className="text-4xl font-bold text-foreground tracking-tight">
          Eco<span className="text-primary">Vecino</span>
        </h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Reciclaje y Limpieza Comunitaria
        </p>
      </div>

      {/* Loading indicator */}
      <div 
        className={`mt-12 flex gap-2 transition-all duration-500 ${
          animationPhase >= 3 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>

      {/* Tagline */}
      <p 
        className={`absolute bottom-12 text-xs text-muted-foreground transition-all duration-500 ${
          animationPhase >= 3 ? "opacity-100" : "opacity-0"
        }`}
      >
        Juntos por un vecindario más limpio
      </p>
    </div>
  )
}
