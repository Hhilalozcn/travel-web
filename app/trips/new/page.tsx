"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Calendar, ImagePlus, Loader2 } from "lucide-react"
import { addTrip } from "@/lib/data"
import Link from "next/link"

export default function NewTrip() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    date: "",
    tripType: "",
    description: "",
    coverImage: "/placeholder.svg?height=400&width=600",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Gerçek bir uygulamada, bu bir API'ye veri gönderirdi
    setTimeout(() => {
      addTrip({
        ...formData,
        id: Date.now().toString(),
        photos: ["/placeholder.svg?height=400&width=600"],
        comments: [],
      })
      setIsSubmitting(false)
      router.push("/")
    }, 1000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="mb-6 text-[#4ECDC4] hover:text-[#1A535C] hover:bg-[#4ECDC4]/10">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Geri
        </Button>
      </Link>

      <Card className="border-t-4 border-t-[#4ECDC4] overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-[#4ECDC4]/20 to-transparent">
          <CardTitle className="text-[#1A535C]">Yeni Seyahat Ekle</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-[#1A535C]">
                  Seyahat Başlığı
                </Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Paris'te Yaz"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="border-[#4ECDC4] focus-visible:ring-[#4ECDC4]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-[#1A535C]">
                  Konum
                </Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="Paris, Fransa"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="border-[#4ECDC4] focus-visible:ring-[#4ECDC4]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="text-[#1A535C]">
                  Tarih
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-[#FF6B6B]" />
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="pl-10 border-[#4ECDC4] focus-visible:ring-[#4ECDC4]"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tripType" className="text-[#1A535C]">
                  Seyahat Türü
                </Label>
                <Select
                  value={formData.tripType}
                  onValueChange={(value) => handleSelectChange("tripType", value)}
                  required
                >
                  <SelectTrigger id="tripType" className="border-[#4ECDC4] focus:ring-[#4ECDC4]">
                    <SelectValue placeholder="Seyahat türü seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Beach">Plaj</SelectItem>
                    <SelectItem value="Mountain">Dağ</SelectItem>
                    <SelectItem value="City">Şehir</SelectItem>
                    <SelectItem value="Road Trip">Yol Gezisi</SelectItem>
                    <SelectItem value="Backpacking">Sırt Çantalı</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-[#1A535C]">
                Açıklama
              </Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Maceranızın detaylarını paylaşın..."
                value={formData.description}
                onChange={handleChange}
                rows={6}
                required
                className="border-[#4ECDC4] focus-visible:ring-[#4ECDC4]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-[#1A535C]">Kapak Resmi</Label>
              <div className="border-2 border-dashed border-[#4ECDC4] rounded-lg p-6 text-center bg-gradient-to-r from-[#F7FFF7] to-white dark:from-[#1A535C]/10 dark:to-background">
                <ImagePlus className="h-8 w-8 mx-auto mb-2 text-[#FF6B6B]" />
                <p className="text-sm text-muted-foreground mb-2">
                  Bir resmi sürükleyip bırakın veya göz atmak için tıklayın
                </p>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#FF6B6B]/10"
                >
                  Resim Yükle
                </Button>
                <p className="text-xs text-muted-foreground mt-2">(Bu demoda yer tutucu resimler kullanıyoruz)</p>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#4ECDC4] to-[#1A535C] hover:from-[#1A535C] hover:to-[#4ECDC4] transition-all duration-300"
              >
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isSubmitting ? "Kaydediliyor..." : "Seyahati Kaydet"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

