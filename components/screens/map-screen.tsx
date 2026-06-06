"use client"

import { useState } from "react"
import { 
  ChevronLeftIcon, 
  MapPinIcon, 
  RecycleIcon, 
  TrashIcon, 
  LeafIcon,
  NavigationIcon
} from "../icons"

interface MapScreenProps {
  onBack: () => void
}

type MapFilter = "all" | "trash" | "recycling" | "ecopoints"

export function MapScreen({ onBack }: MapScreenProps) {
  const [activeFilter, setActiveFilter] = useState<MapFilter>("all")

  const filters = [
    { id: "all" as MapFilter, label: "Todos", icon: MapPinIcon },
    { id: "trash" as MapFilter, label: "Basura", icon: TrashIcon },
    { id: "recycling" as MapFilter, label: "Reciclaje", icon: RecycleIcon },
    { id: "ecopoints" as MapFilter, label: "Eco Puntos", icon: LeafIcon },
  ]

  const markers = [
    { id: 1, type: "trash", label: "Basura reportada", x: 25, y: 35 },
    { id: 2, type: "recycling", label: "Centro de Reciclaje", x: 60, y: 25 },
    { id: 3, type: "ecopoints", label: "Punto Ecológico", x: 40, y: 55 },
    { id: 4, type: "trash", label: "Basura reportada", x: 70, y: 60 },
    { id: 5, type: "recycling", label: "Centro de Reciclaje", x: 30, y: 70 },
    { id: 6, type: "ecopoints", label: "Punto Ecológico", x: 55, y: 45 },
  ]

  const filteredMarkers = activeFilter === "all" 
    ? markers 
    : markers.filter(m => m.type === activeFilter)

  const getMarkerColor = (type: string) => {
    switch (type) {
      case "trash": return "bg-destructive"
      case "recycling": return "bg-primary"
      case "ecopoints": return "bg-accent"
      default: return "bg-muted"
    }
  }

  const getMarkerIcon = (type: string) => {
    switch (type) {
      case "trash": return TrashIcon
      case "recycling": return RecycleIcon
      case "ecopoints": return LeafIcon
      default: return MapPinIcon
    }
  }

  return (
    <div className="h-full bg-background flex flex-col">
      {/* Header */}
      <div className="bg-card pt-12 pb-4 px-4 border-b border-border">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
            aria-label="Volver"
          >
            <ChevronLeftIcon className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-xl font-bold text-foreground">Mapa Ambiental</h1>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {filters.map((filter) => {
            const Icon = filter.icon
            const isActive = activeFilter === filter.id
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{filter.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 relative bg-muted/30">
        {/* Simulated map background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid pattern to simulate map */}
          <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          
          {/* Decorative "streets" */}
          <div className="absolute top-1/4 left-0 right-0 h-3 bg-muted-foreground/10" />
          <div className="absolute top-2/3 left-0 right-0 h-2 bg-muted-foreground/10" />
          <div className="absolute top-0 bottom-0 left-1/4 w-3 bg-muted-foreground/10" />
          <div className="absolute top-0 bottom-0 left-2/3 w-2 bg-muted-foreground/10" />
        </div>

        {/* Markers */}
        {filteredMarkers.map((marker) => {
          const Icon = getMarkerIcon(marker.type)
          return (
            <button
              key={marker.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${getMarkerColor(marker.type)} w-10 h-10 rounded-full flex items-center justify-center shadow-lg active:scale-110 transition-transform z-10`}
              style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
              aria-label={marker.label}
            >
              <Icon className="w-5 h-5 text-white" />
            </button>
          )
        })}

        {/* Current location marker */}
        <div 
          className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
          style={{ left: "50%", top: "50%" }}
        >
          <div className="w-6 h-6 bg-accent rounded-full border-4 border-card shadow-lg" />
          <div className="absolute inset-0 bg-accent/30 rounded-full animate-ping" />
        </div>

        {/* Locate me button */}
        <button 
          className="absolute bottom-24 right-4 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center border border-border active:scale-95 transition-transform"
          aria-label="Mi ubicación"
        >
          <NavigationIcon className="w-5 h-5 text-accent" />
        </button>
      </div>

      {/* Bottom Info Card */}
      <div className="bg-card border-t border-border p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Puntos cercanos</p>
            <p className="text-lg font-bold text-foreground">{filteredMarkers.length} ubicaciones</p>
          </div>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium active:scale-95 transition-transform">
            Ver lista
          </button>
        </div>
      </div>
    </div>
  )
}
