"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CommentSection from "@/components/comment-section"
import type { Trip } from "@/lib/types"
import { getTripById } from "@/lib/data"

export default function TripDetail() {
  const params = useParams()
  const router = useRouter()
  const [trip, setTrip] = useState<Trip | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const tripId = Array.isArray(params?.id) ? params.id[0] : params?.id
    if (tripId) {
      const tripData = getTripById(tripId)
      if (tripData) {
        setTrip(tripData)
      }
    }
    setLoading(false)
  }, [params])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 animate-pulse">
        <div className="h-6 bg-muted rounded w-1/4 mb-8" />
        <div className="h-64 bg-muted rounded-lg mb-8" />
        <div className="h-8 bg-muted rounded w-1/2 mb-4" />
        <div className="h-4 bg-muted rounded w-1/4 mb-8" />
        <div className="h-4 bg-muted rounded w-full mb-2" />
        <div className="h-4 bg-muted rounded w-full mb-2" />
        <div className="h-4 bg-muted rounded w-3/4 mb-8" />
      </div>
    )
  }

  if (!trip) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Seyahat bulunamadı</h2>
        <p className="text-muted-foreground mb-6">Aradığınız seyahat mevcut değil veya kaldırılmış.</p>
        <Link href="/">
          <Button>Ana Sayfaya Dön</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        className="mb-6 text-[#4ECDC4] hover:text-[#1A535C] hover:bg-[#4ECDC4]/10"
        onClick={() => router.back()}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Geri
      </Button>

      <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
        <Image src={trip.coverImage || "/placeholder.svg"} alt={trip.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="text-3xl font-bold text-white drop-shadow-md">{trip.title}</h1>
          <div className="flex items-center mt-2 text-white/90">
            <MapPin className="h-4 w-4 mr-1 text-[#FF6B6B]" />
            <span className="mr-4">{trip.location}</span>
            <Calendar className="h-4 w-4 mr-1 text-[#4ECDC4]" />
            <span>{trip.date}</span>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <Badge className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white text-sm px-3 py-1">
            {trip.tripType}
          </Badge>
        </div>
      </div>

      <Card className="p-6 mb-8 border-l-4 border-l-[#4ECDC4] bg-gradient-to-r from-[#F7FFF7] to-white dark:from-[#1A535C]/20 dark:to-background">
        <p className="whitespace-pre-line">{trip.description}</p>
      </Card>

      {trip.photos?.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#1A535C] border-b-2 border-[#4ECDC4] pb-2 inline-block">
            Fotoğraf Galerisi
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {trip.photos.map((photo, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <Image
                  src={photo || "/placeholder.svg"}
                  alt={`Seyahat fotoğrafı ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ✅ Yorumlar kısmı görünür */}
      <CommentSection tripId={trip.id} initialComments={trip.comments || []} />
    </div>
  )
}
