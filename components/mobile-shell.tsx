"use client"

import { useState } from "react"
import { SplashScreen } from "./screens/splash-screen"
import { LoginScreen } from "./screens/login-screen"
import { RegisterScreen } from "./screens/register-screen"
import { HomeScreen } from "./screens/home-screen"
import { MapScreen } from "./screens/map-screen"
import { ReportScreen } from "./screens/report-screen"
import { RecyclingCentersScreen } from "./screens/recycling-centers-screen"
import { EcoPointsScreen } from "./screens/eco-points-screen"
import { AlertsScreen } from "./screens/alerts-screen"
import { CommunityScreen } from "./screens/community-screen"
import { ProfileScreen } from "./screens/profile-screen"
import { BottomNavigation } from "./bottom-navigation"

export type Screen = 
  | "splash"
  | "login"
  | "register"
  | "home"
  | "map"
  | "report"
  | "recycling"
  | "ecopoints"
  | "alerts"
  | "community"
  | "profile"

export function MobileShell() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("splash")
  const [showNav, setShowNav] = useState(false)

  const handleSplashComplete = () => {
    setCurrentScreen("login")
  }

  const handleLogin = () => {
    setCurrentScreen("home")
    setShowNav(true)
  }

  const handleGoToRegister = () => {
    setCurrentScreen("register")
  }

  const handleRegister = () => {
    setCurrentScreen("home")
    setShowNav(true)
  }

  const handleBackToLogin = () => {
    setCurrentScreen("login")
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case "splash":
        return <SplashScreen onComplete={handleSplashComplete} />
      case "login":
        return <LoginScreen onLogin={handleLogin} onRegister={handleGoToRegister} />
      case "register":
        return <RegisterScreen onBack={handleBackToLogin} onRegister={handleRegister} />
      case "home":
        return <HomeScreen onNavigate={setCurrentScreen} />
      case "map":
        return <MapScreen onBack={() => setCurrentScreen("home")} />
      case "report":
        return <ReportScreen onBack={() => setCurrentScreen("home")} />
      case "recycling":
        return <RecyclingCentersScreen onBack={() => setCurrentScreen("home")} />
      case "ecopoints":
        return <EcoPointsScreen onBack={() => setCurrentScreen("home")} />
      case "alerts":
        return <AlertsScreen onBack={() => setCurrentScreen("home")} />
      case "community":
        return <CommunityScreen onBack={() => setCurrentScreen("home")} />
      case "profile":
        return <ProfileScreen onBack={() => setCurrentScreen("home")} />
      default:
        return <HomeScreen onNavigate={setCurrentScreen} />
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-[390px] h-[844px] bg-card rounded-[3rem] shadow-2xl overflow-hidden relative border-8 border-foreground/10">
        {/* Phone notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-foreground/10 rounded-b-2xl z-50" />
        
        {/* Screen content */}
        <div className="h-full overflow-hidden relative">
          <div className={`h-full ${showNav ? "pb-20" : ""} overflow-y-auto`}>
            {renderScreen()}
          </div>
          
          {/* Bottom Navigation */}
          {showNav && currentScreen !== "splash" && (
            <BottomNavigation 
              currentScreen={currentScreen} 
              onNavigate={setCurrentScreen} 
            />
          )}
        </div>
      </div>
    </div>
  )
}
