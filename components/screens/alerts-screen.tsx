"use client"

import { 
  ChevronLeftIcon, 
  BellIcon, 
  AlertTriangleIcon,
  RecycleIcon,
  LeafIcon,
  ClockIcon
} from "../icons"

interface AlertsScreenProps {
  onBack: () => void
}

export function AlertsScreen({ onBack }: AlertsScreenProps) {
  const alerts = [
    {
      id: 1,
      type: "event",
      title: "Jornada de Reciclaje",
      message: "Este sábado de 9:00 a 14:00 en la Plaza Principal. Trae tus reciclables y gana puntos extra.",
      time: "Hace 2 horas",
      icon: RecycleIcon,
      color: "bg-primary",
      unread: true
    },
    {
      id: 2,
      type: "alert",
      title: "Alerta de Calidad del Aire",
      message: "Niveles moderados de contaminación. Se recomienda limitar actividades al aire libre.",
      time: "Hace 5 horas",
      icon: AlertTriangleIcon,
      color: "bg-amber-500",
      unread: true
    },
    {
      id: 3,
      type: "update",
      title: "Reporte Resuelto",
      message: "Tu reporte de basura en Calle Principal ha sido atendido. ¡Gracias por tu colaboración!",
      time: "Ayer",
      icon: LeafIcon,
      color: "bg-accent",
      unread: false
    },
    {
      id: 4,
      type: "event",
      title: "Taller de Compostaje",
      message: "Aprende a hacer composta en casa. Próximo miércoles a las 16:00 en el Centro Comunitario.",
      time: "Hace 2 días",
      icon: LeafIcon,
      color: "bg-primary/80",
      unread: false
    },
    {
      id: 5,
      type: "reminder",
      title: "Recordatorio de Reciclaje",
      message: "Mañana es día de recolección de plásticos y metales en tu zona.",
      time: "Hace 3 días",
      icon: BellIcon,
      color: "bg-accent/80",
      unread: false
    },
  ]

  const unreadCount = alerts.filter(a => a.unread).length

  return (
    <div className="h-full bg-background flex flex-col">
      {/* Header */}
      <div className="bg-card pt-12 pb-4 px-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={onBack}
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
              aria-label="Volver"
            >
              <ChevronLeftIcon className="w-5 h-5 text-foreground" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-foreground">Alertas Ambientales</h1>
              <p className="text-sm text-muted-foreground">{unreadCount} sin leer</p>
            </div>
          </div>
          {unreadCount > 0 && (
            <button className="text-sm text-primary font-medium">
              Marcar todas
            </button>
          )}
        </div>
      </div>

      {/* Alerts List */}
      <div className="flex-1 overflow-y-auto">
        {alerts.map((alert) => {
          const Icon = alert.icon
          return (
            <div 
              key={alert.id}
              className={`p-4 border-b border-border ${alert.unread ? "bg-primary/5" : ""}`}
            >
              <div className="flex gap-3">
                <div className={`w-12 h-12 ${alert.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className={`font-semibold ${alert.unread ? "text-foreground" : "text-muted-foreground"}`}>
                      {alert.title}
                    </h3>
                    {alert.unread && (
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {alert.message}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                    <ClockIcon className="w-3 h-3" />
                    <span>{alert.time}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-card border-t border-border p-4">
        <div className="flex gap-3">
          <button className="flex-1 py-3 bg-primary/10 text-primary rounded-xl text-sm font-medium active:scale-95 transition-transform">
            Configurar alertas
          </button>
          <button className="flex-1 py-3 bg-secondary text-secondary-foreground rounded-xl text-sm font-medium active:scale-95 transition-transform">
            Ver historial
          </button>
        </div>
      </div>
    </div>
  )
}
