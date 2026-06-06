"use client"

import { useState } from "react"
import { RecycleIcon, LeafIcon } from "../icons"

interface LoginScreenProps {
  onLogin: () => void
  onRegister: () => void
}

export function LoginScreen({ onLogin, onRegister }: LoginScreenProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="h-full bg-gradient-to-b from-primary/5 via-background to-accent/5 flex flex-col relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-20 left-0 w-24 h-24 bg-accent/10 rounded-full -translate-x-1/2" />
      <div className="absolute top-1/4 left-4 opacity-20">
        <LeafIcon className="w-8 h-8 text-primary" />
      </div>
      <div className="absolute top-1/3 right-6 opacity-20">
        <RecycleIcon className="w-6 h-6 text-accent" />
      </div>
      <div className="absolute bottom-1/3 left-8 opacity-15">
        <RecycleIcon className="w-10 h-10 text-primary" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-6 py-8 relative z-10">
        {/* Logo section */}
        <div className="text-center mb-8">
          <div className="relative w-20 h-20 mx-auto mb-4">
            <div className="w-20 h-20 bg-card rounded-2xl shadow-lg flex items-center justify-center border border-border/50">
              <img 
                src="/logo.jpg" 
                alt="EcoVecino Logo" 
                className="w-14 h-14 object-cover rounded-xl"
              />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-md">
              <RecycleIcon className="w-3 h-3 text-primary-foreground" />
            </div>
            <div className="absolute -bottom-1 -left-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center shadow-md">
              <LeafIcon className="w-2.5 h-2.5 text-accent-foreground" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            Eco<span className="text-primary">Vecino</span>
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Bienvenido de vuelta
          </p>
        </div>

        {/* Login form */}
        <div className="space-y-4">
          {/* Email field */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Correo electrónico
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full h-12 px-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Password field */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Tu contraseña"
                className="w-full h-12 px-4 pr-12 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Forgot password */}
          <div className="flex justify-end">
            <button className="text-sm text-primary font-medium hover:underline">
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          {/* Login button */}
          <button
            onClick={onLogin}
            className="w-full h-12 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <LeafIcon className="w-5 h-5" />
            Iniciar Sesión
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm text-muted-foreground">o continúa con</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Google button */}
          <button className="w-full h-12 bg-card border border-border text-foreground font-medium rounded-xl hover:bg-muted/50 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continuar con Google
          </button>
        </div>

        {/* Register link */}
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            ¿No tienes una cuenta?{" "}
            <button 
              onClick={onRegister}
              className="text-primary font-semibold hover:underline"
            >
              Crear cuenta
            </button>
          </p>
        </div>
      </div>

      {/* Footer tagline */}
      <div className="text-center pb-6">
        <p className="text-xs text-muted-foreground">
          Juntos por un vecindario más limpio
        </p>
      </div>
    </div>
  )
}
