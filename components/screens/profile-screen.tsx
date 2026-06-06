"use client"

import { 
  ChevronLeftIcon,
  ChevronRightIcon,
  SettingsIcon,
  TrophyIcon,
  CameraIcon,
  RecycleIcon,
  BellIcon,
  LeafIcon,
  StarIcon
} from "../icons"

interface ProfileScreenProps {
  onBack: () => void
}

export function ProfileScreen({ onBack }: ProfileScreenProps) {
  const user = {
    name: "Carlos García",
    email: "carlos.garcia@email.com",
    level: "Árbol",
    points: 2450,
    reports: 127,
    recycled: 45,
    memberSince: "Enero 2024"
  }

  const stats = [
    { label: "Reportes", value: user.reports, icon: CameraIcon, color: "bg-primary" },
    { label: "Reciclados", value: user.recycled, icon: RecycleIcon, color: "bg-accent" },
    { label: "Puntos", value: user.points.toLocaleString(), icon: StarIcon, color: "bg-primary/80" },
  ]

  const achievements = [
    { id: 1, name: "Primer Reporte", icon: "🏆", unlocked: true },
    { id: 2, name: "Eco Guerrero", icon: "🌿", unlocked: true },
    { id: 3, name: "100 Reportes", icon: "💯", unlocked: true },
    { id: 4, name: "Reciclador Pro", icon: "♻️", unlocked: false },
    { id: 5, name: "Líder Comunitario", icon: "👑", unlocked: false },
    { id: 6, name: "Guardián Verde", icon: "🛡️", unlocked: false },
  ]

  const menuItems = [
    { id: 1, label: "Configuración de Alertas", icon: BellIcon },
    { id: 2, label: "Mis Reportes", icon: CameraIcon },
    { id: 3, label: "Historial de Reciclaje", icon: RecycleIcon },
    { id: 4, label: "Configuración", icon: SettingsIcon },
  ]

  return (
    <div className="h-full bg-background flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-accent/70 pt-12 pb-8 px-4 rounded-b-[2rem]">
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
            aria-label="Volver"
          >
            <ChevronLeftIcon className="w-5 h-5 text-primary-foreground" />
          </button>
          <h1 className="text-xl font-bold text-primary-foreground">Mi Perfil</h1>
          <button 
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
            aria-label="Configuración"
          >
            <SettingsIcon className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>

        {/* Profile Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold text-primary-foreground">
            CG
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary-foreground">{user.name}</h2>
            <p className="text-primary-foreground/80 text-sm">{user.email}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg">🌳</span>
              <span className="text-primary-foreground/90 text-sm">Nivel {user.level}</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between bg-white/10 backdrop-blur-sm rounded-2xl p-4">
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

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 -mt-4 space-y-4">
        {/* Achievements */}
        <div className="bg-card rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-foreground">Logros</h3>
            <span className="text-sm text-muted-foreground">
              {achievements.filter(a => a.unlocked).length}/{achievements.length}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id}
                className={`aspect-square rounded-xl flex flex-col items-center justify-center ${
                  achievement.unlocked 
                    ? "bg-primary/10 border border-primary/20" 
                    : "bg-muted opacity-50"
                }`}
              >
                <span className="text-2xl mb-1">{achievement.icon}</span>
                <span className="text-[10px] text-center text-muted-foreground px-1 line-clamp-1">
                  {achievement.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-card rounded-2xl overflow-hidden shadow-sm">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            return (
              <button 
                key={item.id}
                className={`w-full flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors ${
                  index !== menuItems.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="flex-1 text-left font-medium text-foreground">{item.label}</span>
                <ChevronRightIcon className="w-5 h-5 text-muted-foreground" />
              </button>
            )
          })}
        </div>

        {/* Member Since */}
        <div className="text-center py-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <LeafIcon className="w-4 h-4" />
            <span className="text-sm">Miembro desde {user.memberSince}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
