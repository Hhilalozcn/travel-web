"use client"

import { Button } from "@/components/ui/button"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, MessageSquare } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Trip } from "@/lib/types"
import { getTripData } from "@/lib/data"

export default function TripList() {
  const [trips, setTrips] = useState<Trip[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Gerçek bir uygulamada, bu bir API'den veri çekerdi
    const data = getTripData()
    setTrips(data)
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <div className="h-48 bg-muted rounded-t-lg" />
            <CardHeader>
              <div className="h-6 bg-muted rounded w-3/4 mb-2" />
              <div className="h-4 bg-muted rounded w-1/2" />
            </CardHeader>
            <CardContent>
              <div className="h-4 bg-muted rounded w-full mb-2" />
              <div className="h-4 bg-muted rounded w-5/6" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (trips.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium mb-2">Henüz seyahat yok</h3>
        <p className="text-muted-foreground mb-6">İlk maceranızı ekleyerek başlayın</p>
        <Link href="/trips/new">
          <Button>İlk Seyahatinizi Ekleyin</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {trips.map((trip) => (
        <Link href={`/trips/${trip.id}`} key={trip.id}>
          <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow border-t-4 border-t-[#FF6B6B] hover:scale-[1.02] transition-all duration-300">
            <div className="relative h-48 w-full">
              <Image 
                src={trip.coverImage || "/images/default.jpg"} 
                alt={trip.title || "Seyahat Görseli"}
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-2 right-2">
                <Badge className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white">{trip.tripType}</Badge>
              </div>
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-[#4ECDC4]">{trip.title}</h3>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1 text-[#FF6B6B]" />
                <span>{trip.location}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-2 text-muted-foreground">{trip.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between text-sm text-muted-foreground bg-gradient-to-r from-[#F7FFF7]/10 to-[#4ECDC4]/10 p-3">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-[#4ECDC4]" />
                <span>{trip.date}</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-1 text-[#FF6B6B]" />
                <span>{trip.comments.length} yorum</span>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

