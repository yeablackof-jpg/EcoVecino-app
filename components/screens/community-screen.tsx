"use client"

import { useState } from "react"
import { 
  ChevronLeftIcon, 
  UsersIcon, 
  MessageIcon,
  HeartIcon,
  LeafIcon,
  TrophyIcon,
  PlusIcon
} from "../icons"

interface CommunityScreenProps {
  onBack: () => void
}

export function CommunityScreen({ onBack }: CommunityScreenProps) {
  const [activeTab, setActiveTab] = useState<"feed" | "ranking" | "events">("feed")

  const posts = [
    {
      id: 1,
      author: "María López",
      avatar: "ML",
      time: "Hace 30 min",
      content: "¡Hoy recogimos 15 bolsas de basura en el parque central! Gracias a todos los voluntarios que participaron. 🌳♻️",
      likes: 24,
      comments: 8,
      image: true
    },
    {
      id: 2,
      author: "Juan Pérez",
      avatar: "JP",
      time: "Hace 2 horas",
      content: "¿Alguien sabe dónde puedo reciclar baterías usadas? Tengo varias y no sé dónde llevarlas.",
      likes: 5,
      comments: 12,
      image: false
    },
    {
      id: 3,
      author: "EcoVecino Oficial",
      avatar: "EV",
      time: "Hace 5 horas",
      content: "🎉 ¡Felicidades a nuestra comunidad! Este mes hemos reportado y limpiado 47 puntos de basura. ¡Seguimos adelante!",
      likes: 89,
      comments: 23,
      image: false,
      official: true
    },
  ]

  const ranking = [
    { id: 1, name: "Ana Martínez", points: 5420, avatar: "AM", rank: 1 },
    { id: 2, name: "Carlos García", points: 4890, avatar: "CG", rank: 2 },
    { id: 3, name: "María López", points: 4350, avatar: "ML", rank: 3 },
    { id: 4, name: "Tu Posición", points: 2450, avatar: "TU", rank: 15, isUser: true },
  ]

  const events = [
    { id: 1, title: "Jornada de Reciclaje", date: "Sáb 28 Jun", participants: 45, color: "bg-primary" },
    { id: 2, title: "Limpieza del Río", date: "Dom 29 Jun", participants: 32, color: "bg-accent" },
    { id: 3, title: "Taller de Compostaje", date: "Mié 2 Jul", participants: 18, color: "bg-primary/80" },
  ]

  return (
    <div className="h-full bg-background flex flex-col">
      {/* Header */}
      <div className="bg-card pt-12 pb-4 px-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button 
              onClick={onBack}
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
              aria-label="Volver"
            >
              <ChevronLeftIcon className="w-5 h-5 text-foreground" />
            </button>
            <h1 className="text-xl font-bold text-foreground">Comunidad Vecinal</h1>
          </div>
          <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <PlusIcon className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          {[
            { id: "feed", label: "Publicaciones" },
            { id: "ranking", label: "Ranking" },
            { id: "events", label: "Eventos" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === "feed" && (
          <div className="p-4 space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-card rounded-2xl p-4 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                    post.official ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                  }`}>
                    {post.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">{post.author}</span>
                      {post.official && (
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">Oficial</span>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{post.time}</span>
                  </div>
                </div>
                <p className="text-sm text-foreground mb-3">{post.content}</p>
                {post.image && (
                  <div className="h-40 bg-muted rounded-xl mb-3 flex items-center justify-center">
                    <LeafIcon className="w-12 h-12 text-muted-foreground/30" />
                  </div>
                )}
                <div className="flex items-center gap-4 pt-3 border-t border-border">
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <HeartIcon className="w-5 h-5" />
                    <span className="text-sm">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <MessageIcon className="w-5 h-5" />
                    <span className="text-sm">{post.comments}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "ranking" && (
          <div className="p-4 space-y-3">
            {/* Top 3 Podium */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-4 mb-4">
              <div className="flex items-end justify-center gap-4 mb-4">
                {ranking.slice(0, 3).map((user, index) => {
                  const heights = ["h-20", "h-28", "h-16"]
                  const positions = [1, 0, 2]
                  return (
                    <div key={user.id} className="flex flex-col items-center" style={{ order: positions[index] }}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold mb-2 ${
                        index === 0 ? "bg-yellow-500 text-white" : "bg-secondary text-secondary-foreground"
                      }`}>
                        {user.avatar}
                      </div>
                      <div className={`${heights[positions[index]]} w-16 rounded-t-xl flex flex-col items-center justify-end pb-2 ${
                        index === 0 ? "bg-primary" : index === 1 ? "bg-primary/80" : "bg-primary/60"
                      }`}>
                        <TrophyIcon className={`w-5 h-5 ${index === 0 ? "text-yellow-400" : "text-white/70"}`} />
                        <span className="text-xs text-white font-bold">{user.rank}°</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Rest of ranking */}
            {ranking.map((user) => (
              <div 
                key={user.id}
                className={`flex items-center gap-3 p-3 rounded-xl ${
                  user.isUser ? "bg-primary/10 border border-primary/20" : "bg-card"
                }`}
              >
                <span className={`w-8 text-center font-bold ${user.rank <= 3 ? "text-primary" : "text-muted-foreground"}`}>
                  {user.rank}°
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                  user.isUser ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }`}>
                  {user.avatar}
                </div>
                <div className="flex-1">
                  <p className={`font-medium ${user.isUser ? "text-primary" : "text-foreground"}`}>{user.name}</p>
                </div>
                <span className="font-semibold text-foreground">{user.points.toLocaleString()} pts</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "events" && (
          <div className="p-4 space-y-3">
            {events.map((event) => (
              <div key={event.id} className="bg-card rounded-2xl p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className={`w-14 h-14 ${event.color} rounded-xl flex flex-col items-center justify-center text-white`}>
                    <span className="text-xs">{event.date.split(" ")[0]}</span>
                    <span className="text-lg font-bold">{event.date.split(" ")[1]}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{event.title}</h3>
                    <div className="flex items-center gap-1 mt-1 text-muted-foreground">
                      <UsersIcon className="w-4 h-4" />
                      <span className="text-sm">{event.participants} participantes</span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-3 py-2 bg-primary/10 text-primary rounded-xl text-sm font-medium active:scale-95 transition-transform">
                  Unirme al evento
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
