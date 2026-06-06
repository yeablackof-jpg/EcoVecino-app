"use client"

import { HomeIcon, MapIcon, PlusIcon, UsersIcon, UserIcon } from "./icons"
import type { Screen } from "./mobile-shell"

interface BottomNavigationProps {
  currentScreen: Screen
  onNavigate: (screen: Screen) => void
}

export function BottomNavigation({ currentScreen, onNavigate }: BottomNavigationProps) {
  const navItems = [
    { id: "home" as Screen, icon: HomeIcon, label: "Inicio" },
    { id: "map" as Screen, icon: MapIcon, label: "Mapa" },
    { id: "report" as Screen, icon: PlusIcon, label: "Reportar", isMain: true },
    { id: "community" as Screen, icon: UsersIcon, label: "Comunidad" },
    { id: "profile" as Screen, icon: UserIcon, label: "Perfil" },
  ]

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-card border-t border-border px-2 py-2 safe-area-inset-bottom">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentScreen === item.id
          
          if (item.isMain) {
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="flex items-center justify-center w-14 h-14 -mt-6 bg-primary rounded-full shadow-lg active:scale-95 transition-transform"
                aria-label={item.label}
              >
                <Icon className="w-6 h-6 text-primary-foreground" />
              </button>
            )
          }
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-colors ${
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label={item.label}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
