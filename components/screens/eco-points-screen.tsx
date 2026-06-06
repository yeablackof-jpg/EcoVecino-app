"use client"

import { 
  ChevronLeftIcon, 
  StarIcon, 
  TrophyIcon,
  LeafIcon,
  RecycleIcon,
  CameraIcon
} from "../icons"

interface EcoPointsScreenProps {
  onBack: () => void
}

export function EcoPointsScreen({ onBack }: EcoPointsScreenProps) {
  const currentPoints = 2450
  const nextLevel = 3000
  const progress = (currentPoints / nextLevel) * 100

  const levels = [
    { name: "Semilla", min: 0, max: 500, icon: "🌱" },
    { name: "Brote", min: 500, max: 1500, icon: "🌿" },
    { name: "Árbol", min: 1500, max: 3000, icon: "🌳", current: true },
    { name: "Bosque", min: 3000, max: 5000, icon: "🌲" },
    { name: "Guardián", min: 5000, max: Infinity, icon: "🏆" },
  ]

  const currentLevel = levels.find(l => l.current)

  const pointsHistory = [
    { id: 1, action: "Reporte de basura", points: "+25", date: "Hoy", icon: CameraIcon },
    { id: 2, action: "Reciclaje completado", points: "+50", date: "Ayer", icon: RecycleIcon },
    { id: 3, action: "Evento comunitario", points: "+100", date: "Hace 3 días", icon: LeafIcon },
    { id: 4, action: "Reporte verificado", points: "+35", date: "Hace 5 días", icon: CameraIcon },
    { id: 5, action: "Invitar amigo", points: "+75", date: "Hace 1 semana", icon: TrophyIcon },
  ]

  const rewards = [
    { id: 1, name: "Bolsa Ecológica", points: 500, available: true },
    { id: 2, name: "Termo Reutilizable", points: 1500, available: true },
    { id: 3, name: "Kit de Compostaje", points: 3500, available: false },
    { id: 4, name: "Bicicleta Ecológica", points: 10000, available: false },
  ]

  return (
    <div className="h-full bg-background flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-accent/70 pt-12 pb-8 px-4 rounded-b-[2rem]">
        <div className="flex items-center gap-3 mb-6">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
            aria-label="Volver"
          >
            <ChevronLeftIcon className="w-5 h-5 text-primary-foreground" />
          </button>
          <h1 className="text-xl font-bold text-primary-foreground">Puntos Ecológicos</h1>
        </div>

        {/* Points Display */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <StarIcon className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            <span className="text-5xl font-bold text-primary-foreground">{currentPoints.toLocaleString()}</span>
          </div>
          <p className="text-primary-foreground/80">puntos acumulados</p>
        </div>

        {/* Level Progress */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{currentLevel?.icon}</span>
              <span className="text-primary-foreground font-semibold">Nivel {currentLevel?.name}</span>
            </div>
            <span className="text-primary-foreground/80 text-sm">
              {nextLevel - currentPoints} pts para siguiente nivel
            </span>
          </div>
          <div className="h-3 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 -mt-4">
        {/* Rewards Section */}
        <div className="bg-card rounded-2xl p-4 shadow-sm mb-4">
          <h2 className="text-sm font-semibold text-muted-foreground mb-3">Canjear Recompensas</h2>
          <div className="space-y-3">
            {rewards.map((reward) => (
              <div 
                key={reward.id}
                className={`flex items-center justify-between p-3 rounded-xl ${
                  reward.available ? "bg-primary/5 border border-primary/20" : "bg-muted"
                }`}
              >
                <div>
                  <p className={`font-medium ${reward.available ? "text-foreground" : "text-muted-foreground"}`}>
                    {reward.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{reward.points.toLocaleString()} puntos</p>
                </div>
                <button 
                  disabled={!reward.available}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    reward.available 
                      ? "bg-primary text-primary-foreground active:scale-95" 
                      : "bg-muted-foreground/20 text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  {reward.available ? "Canjear" : "Bloqueado"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Points History */}
        <div className="bg-card rounded-2xl p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-muted-foreground mb-3">Historial de Puntos</h2>
          <div className="space-y-3">
            {pointsHistory.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{item.action}</p>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </div>
                  <span className="text-primary font-semibold">{item.points}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
