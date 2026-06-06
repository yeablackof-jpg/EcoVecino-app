"use client"

import { 
  RecycleIcon, 
  MapPinIcon, 
  CameraIcon, 
  BellIcon, 
  UsersIcon, 
  StarIcon,
  LeafIcon,
  TrophyIcon,
  ChevronRightIcon
} from "../icons"
import type { Screen } from "../mobile-shell"

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void
  onLogout?: () => void
}

export function HomeScreen({ onNavigate, onLogout }: HomeScreenProps) {
  const quickActions = [
    { id: "report", icon: CameraIcon, label: "Reportar Basura", color: "bg-primary", screen: "report" as Screen },
    { id: "map", icon: MapPinIcon, label: "Mapa Ambiental", color: "bg-accent", screen: "map" as Screen },
    { id: "recycling", icon: RecycleIcon, label: "Centros de Reciclaje", color: "bg-primary/80", screen: "recycling" as Screen },
    { id: "alerts", icon: BellIcon, label: "Alertas", color: "bg-accent/80", screen: "alerts" as Screen },
  ]

  const stats = [
    { label: "Reportes", value: "127", icon: CameraIcon },
    { label: "Puntos Eco", value: "2,450", icon: StarIcon },
    { label: "Comunidad", value: "89", icon: UsersIcon },
  ]

  const recentActivities = [
    { id: 1, type: "report", message: "Reporte de basura resuelto en Calle Principal", time: "Hace 2h", icon: RecycleIcon },
    { id: 2, type: "points", message: "Ganaste 50 puntos ecológicos", time: "Hace 5h", icon: StarIcon },
    { id: 3, type: "alert", message: "Nueva jornada de reciclaje este sábado", time: "Ayer", icon: BellIcon },
  ]

  return (
    <div className="h-full bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-accent/70 pt-12 pb-8 px-6 rounded-b-[2rem]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-primary-foreground/80 text-sm">¡Bienvenido!</p>
            <h1 className="text-2xl font-bold text-primary-foreground">Carlos García</h1>
          </div>
          <button 
            onClick={() => onNavigate("profile")}
            className="w-12 h-12 rounded-full bg-primary-foreground/20 overflow-hidden"
          >
            <div className="w-full h-full bg-primary-foreground/30 flex items-center justify-center">
              <span className="text-primary-foreground font-semibold text-lg">CG</span>
            </div>
          </button>
        </div>

        {/* Stats Row */}
        <div className="flex justify-between bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="flex flex-col items-center">
                <Icon className="w-5 h-5 text-primary-foreground/70 mb-1" />
                <span className="text-xl font-bold text-primary-foreground">{stat.value}</span>
                <span className="text-xs text-primary-foreground/70">{stat.label}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 -mt-4">
        <div className="bg-card rounded-2xl shadow-lg p-4">
          <h2 className="text-sm font-semibold text-muted-foreground mb-3">Acciones Rápidas</h2>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action) => {
              const Icon = action.icon
              return (
                <button
                  key={action.id}
                  onClick={() => onNavigate(action.screen)}
                  className={`${action.color} rounded-xl p-4 flex flex-col items-start gap-2 active:scale-95 transition-transform`}
                >
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">{action.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Eco Points Banner */}
      <div className="px-6 mt-4">
        <button 
          onClick={() => onNavigate("ecopoints")}
          className="w-full bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-4 flex items-center justify-between border border-primary/20"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <TrophyIcon className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Puntos Ecológicos</p>
              <p className="text-sm text-muted-foreground">¡Solo 550 puntos para el siguiente nivel!</p>
            </div>
          </div>
          <ChevronRightIcon className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Recent Activity */}
      <div className="px-6 mt-4 pb-6">
        <h2 className="text-sm font-semibold text-muted-foreground mb-3">Actividad Reciente</h2>
        <div className="space-y-3">
          {recentActivities.map((activity) => {
            const Icon = activity.icon
            return (
              <div 
                key={activity.id}
                className="bg-card rounded-xl p-4 flex items-center gap-3 shadow-sm"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground line-clamp-1">{activity.message}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Floating Leaf decoration */}
      <div className="absolute top-32 right-4 opacity-10 pointer-events-none">
        <LeafIcon className="w-24 h-24 text-primary" />
      </div>
    </div>
  )
}
