"use client"

import { useState } from "react"
import { 
  ChevronLeftIcon, 
  RecycleIcon, 
  MapPinIcon,
  ClockIcon,
  ChevronRightIcon,
  StarIcon
} from "../icons"

interface RecyclingCentersScreenProps {
  onBack: () => void
}

export function RecyclingCentersScreen({ onBack }: RecyclingCentersScreenProps) {
  const [selectedCenter, setSelectedCenter] = useState<number | null>(null)

  const centers = [
    {
      id: 1,
      name: "Centro de Reciclaje Norte",
      address: "Av. Principal #456, Col. Norte",
      distance: "0.8 km",
      hours: "Lun-Sáb: 8:00 - 18:00",
      rating: 4.8,
      materials: ["Plástico", "Vidrio", "Papel", "Cartón"],
      color: "bg-primary"
    },
    {
      id: 2,
      name: "EcoRecicla Centro",
      address: "Calle Verde #123, Col. Centro",
      distance: "1.2 km",
      hours: "Lun-Dom: 7:00 - 20:00",
      rating: 4.6,
      materials: ["Plástico", "Metal", "Electrónicos"],
      color: "bg-accent"
    },
    {
      id: 3,
      name: "Punto Verde Sur",
      address: "Blvd. Ecológico #789, Col. Sur",
      distance: "2.1 km",
      hours: "Mar-Sáb: 9:00 - 17:00",
      rating: 4.5,
      materials: ["Orgánico", "Papel", "Vidrio"],
      color: "bg-primary/80"
    },
    {
      id: 4,
      name: "Reciclaje Comunitario",
      address: "Plaza Principal S/N",
      distance: "2.8 km",
      hours: "Lun-Vie: 8:00 - 16:00",
      rating: 4.3,
      materials: ["Plástico", "Cartón", "Textiles"],
      color: "bg-accent/80"
    },
  ]

  const selected = centers.find(c => c.id === selectedCenter)

  return (
    <div className="h-full bg-background flex flex-col">
      {/* Header */}
      <div className="bg-card pt-12 pb-4 px-4 border-b border-border">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
            aria-label="Volver"
          >
            <ChevronLeftIcon className="w-5 h-5 text-foreground" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-foreground">Centros de Reciclaje</h1>
            <p className="text-sm text-muted-foreground">{centers.length} centros cercanos</p>
          </div>
        </div>
      </div>

      {/* Centers List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {centers.map((center) => (
          <button
            key={center.id}
            onClick={() => setSelectedCenter(selectedCenter === center.id ? null : center.id)}
            className={`w-full bg-card rounded-2xl border transition-all text-left ${
              selectedCenter === center.id 
                ? "border-primary shadow-lg" 
                : "border-border"
            }`}
          >
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 ${center.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <RecycleIcon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-foreground">{center.name}</h3>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium text-foreground">{center.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-1 text-muted-foreground">
                    <MapPinIcon className="w-3 h-3" />
                    <span className="text-xs truncate">{center.address}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs text-primary font-medium">{center.distance}</span>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <ClockIcon className="w-3 h-3" />
                      <span className="text-xs">{center.hours}</span>
                    </div>
                  </div>
                </div>
                <ChevronRightIcon className={`w-5 h-5 text-muted-foreground transition-transform ${
                  selectedCenter === center.id ? "rotate-90" : ""
                }`} />
              </div>

              {/* Expanded content */}
              {selectedCenter === center.id && (
                <div className="mt-4 pt-4 border-t border-border animate-in slide-in-from-top duration-200">
                  <p className="text-sm text-muted-foreground mb-3">Materiales aceptados:</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {center.materials.map((material) => (
                      <span 
                        key={material}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-medium active:scale-95 transition-transform">
                      Cómo llegar
                    </button>
                    <button className="flex-1 py-3 bg-secondary text-secondary-foreground rounded-xl text-sm font-medium active:scale-95 transition-transform">
                      Más info
                    </button>
                  </div>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
