"use client"

import { useState } from "react"
import { 
  ChevronLeftIcon, 
  CameraIcon, 
  MapPinIcon, 
  ImageIcon,
  CheckCircleIcon
} from "../icons"

interface ReportScreenProps {
  onBack: () => void
}

export function ReportScreen({ onBack }: ReportScreenProps) {
  const [step, setStep] = useState(1)
  const [selectedType, setSelectedType] = useState("")
  const [description, setDescription] = useState("")
  const [hasPhoto, setHasPhoto] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const trashTypes = [
    { id: "general", label: "Basura General", emoji: "🗑️" },
    { id: "recyclable", label: "Reciclables", emoji: "♻️" },
    { id: "organic", label: "Orgánica", emoji: "🍃" },
    { id: "hazardous", label: "Peligrosa", emoji: "⚠️" },
    { id: "bulky", label: "Voluminosa", emoji: "📦" },
    { id: "electronic", label: "Electrónica", emoji: "🔌" },
  ]

  const handleSubmit = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      onBack()
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="h-full bg-background flex flex-col items-center justify-center p-8">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-300">
          <CheckCircleIcon className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">¡Reporte Enviado!</h2>
        <p className="text-muted-foreground text-center">
          Gracias por ayudar a mantener limpio tu vecindario. Has ganado <span className="text-primary font-semibold">+25 puntos</span>.
        </p>
      </div>
    )
  }

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
            <h1 className="text-xl font-bold text-foreground">Reportar Basura</h1>
            <p className="text-sm text-muted-foreground">Paso {step} de 3</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex gap-2 mt-4">
          {[1, 2, 3].map((s) => (
            <div 
              key={s}
              className={`flex-1 h-1 rounded-full transition-colors ${
                s <= step ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {step === 1 && (
          <div className="space-y-4 animate-in slide-in-from-right duration-300">
            <h2 className="text-lg font-semibold text-foreground">¿Qué tipo de basura es?</h2>
            <div className="grid grid-cols-2 gap-3">
              {trashTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`p-4 rounded-2xl border-2 text-left transition-all ${
                    selectedType === type.id
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card"
                  }`}
                >
                  <span className="text-2xl mb-2 block">{type.emoji}</span>
                  <span className="text-sm font-medium text-foreground">{type.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-in slide-in-from-right duration-300">
            <h2 className="text-lg font-semibold text-foreground">Tomar foto</h2>
            
            {/* Camera/Photo area */}
            <button 
              onClick={() => setHasPhoto(true)}
              className={`w-full aspect-[4/3] rounded-2xl border-2 border-dashed flex flex-col items-center justify-center transition-colors ${
                hasPhoto 
                  ? "border-primary bg-primary/10" 
                  : "border-border bg-muted/50"
              }`}
            >
              {hasPhoto ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircleIcon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Foto capturada</p>
                  <p className="text-xs text-muted-foreground">Toca para cambiar</p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
                    <CameraIcon className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Toca para tomar foto</p>
                  <p className="text-xs text-muted-foreground">o selecciona de galería</p>
                </div>
              )}
            </button>

            <button className="w-full py-3 border border-border rounded-xl flex items-center justify-center gap-2 text-muted-foreground">
              <ImageIcon className="w-5 h-5" />
              <span className="text-sm">Seleccionar de galería</span>
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 animate-in slide-in-from-right duration-300">
            <h2 className="text-lg font-semibold text-foreground">Detalles adicionales</h2>
            
            {/* GPS Location */}
            <div className="bg-card rounded-2xl p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Ubicación detectada</p>
                  <p className="text-xs text-muted-foreground">Calle Principal #123, Colonia Centro</p>
                </div>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Descripción (opcional)
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Agrega detalles adicionales sobre el reporte..."
                className="w-full h-32 p-4 bg-muted rounded-2xl text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Summary */}
            <div className="bg-primary/5 rounded-2xl p-4 border border-primary/20">
              <h3 className="text-sm font-semibold text-foreground mb-2">Resumen del reporte</h3>
              <div className="space-y-1 text-sm">
                <p className="text-muted-foreground">
                  Tipo: <span className="text-foreground">{trashTypes.find(t => t.id === selectedType)?.label}</span>
                </p>
                <p className="text-muted-foreground">
                  Foto: <span className="text-foreground">{hasPhoto ? "Sí" : "No"}</span>
                </p>
                <p className="text-muted-foreground">
                  Puntos a ganar: <span className="text-primary font-semibold">+25</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="bg-card border-t border-border p-4 space-y-2">
        {step < 3 ? (
          <button
            onClick={() => setStep(step + 1)}
            disabled={(step === 1 && !selectedType) || (step === 2 && !hasPhoto)}
            className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] transition-transform"
          >
            Continuar
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-semibold active:scale-[0.98] transition-transform"
          >
            Enviar Reporte
          </button>
        )}
        
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="w-full py-3 text-muted-foreground text-sm"
          >
            Volver al paso anterior
          </button>
        )}
      </div>
    </div>
  )
}
