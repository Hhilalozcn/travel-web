import type { Trip, Comment } from "./types"

// Demo amaçlı bellek içi veri deposu
// Gerçek bir uygulamada, bu bir veritabanı olurdu
let trips: Trip[] = [
  {
    id: "1",
    title: "Bali'de Yaz",
    location: "Bali, Endonezya",
    date: "2023-07-15",
    tripType: "Beach",
    description:
      "Bali'nin plajlarını ve kültürünü keşfederek iki harika hafta geçirdim. Ubud, Seminyak ve Uluwatu'yu ziyaret ettim. Yemekler inanılmazdı ve insanlar çok cana yakındı. Öne çıkan anlar arasında Tanah Lot tapınağında gün batımını izlemek ve gün doğumunda Mount Batur'a tırmanmak vardı.\n\nAyrıca bir yemek kursu aldım ve geleneksel Bali yemeklerini yapmayı öğrendim. Geri dönmek için sabırsızlanıyorum!",
    coverImage: "/placeholder.svg?height=400&width=600&text=Bali+Plajı&fontColor=ffffff&backgroundColor=FF6B6B",
    photos: [
      "/placeholder.svg?height=400&width=400&text=Tapınak&fontColor=ffffff&backgroundColor=4ECDC4",
      "/placeholder.svg?height=400&width=400&text=Pirinç+Terasları&fontColor=ffffff&backgroundColor=FF6B6B",
      "/placeholder.svg?height=400&width=400&text=Şelale&fontColor=ffffff&backgroundColor=1A535C",
      "/placeholder.svg?height=400&width=400&text=Plaj+Günbatımı&fontColor=ffffff&backgroundColor=FF8E53",
    ],
    comments: [
      {
        id: "101",
        text: "Bali benim yapılacaklar listemde! Fotoğraflarınız harika görünüyor.",
        author: "Sarah Johnson",
        authorInitials: "SJ",
        createdAt: "2023-07-20T14:30:00Z",
      },
      {
        id: "102",
        text: "Maymun ormanını ziyaret ettiniz mi? Ubud'daki en sevdiğim yerdi!",
        author: "Michael Chen",
        authorInitials: "MC",
        createdAt: "2023-07-21T09:15:00Z",
      },
    ],
  },
  {
    id: "2",
    title: "New York'ta Hafta Sonu",
    location: "New York City, ABD",
    date: "2023-09-22",
    tripType: "City",
    description:
      "Büyük Elma'ya hızlı bir hafta sonu kaçamağı. Times Meydanı, Central Park ve Met gibi klasik yerleri ziyaret ettim. Little Italy'de en iyi pizzayı yedim ve bir Broadway gösterisi izledim.",
    coverImage: "/placeholder.svg?height=400&width=600&text=NYC+Silüeti&fontColor=ffffff&backgroundColor=1A535C",
    photos: [
      "/placeholder.svg?height=400&width=400&text=Central+Park&fontColor=ffffff&backgroundColor=4ECDC4",
      "/placeholder.svg?height=400&width=400&text=Times+Meydanı&fontColor=ffffff&backgroundColor=FF6B6B",
      "/placeholder.svg?height=400&width=400&text=Brooklyn+Köprüsü&fontColor=ffffff&backgroundColor=FF8E53",
    ],
    comments: [
      {
        id: "201",
        text: "Hangi Broadway gösterisini izlediniz? Gelecek ay oraya bir gezi planlıyorum!",
        author: "Emma Wilson",
        authorInitials: "EW",
        createdAt: "2023-09-25T18:45:00Z",
      },
    ],
  },
  {
    id: "3",
    title: "İsviçre Alpleri'nde Yürüyüş",
    location: "Interlaken, İsviçre",
    date: "2023-06-10",
    tripType: "Mountain",
    description:
      "Nefes kesici İsviçre Alpleri'nde yürüyüş yaparak bir hafta geçirdim. Manzaralar kesinlikle inanılmazdı, her yerde karla kaplı dağlar ve kristal berraklığında göller vardı.",
    coverImage: "/placeholder.svg?height=400&width=600&text=İsviçre+Alpleri&fontColor=ffffff&backgroundColor=4ECDC4",
    photos: [
      "/placeholder.svg?height=400&width=400&text=Dağ+Manzarası&fontColor=ffffff&backgroundColor=1A535C",
      "/placeholder.svg?height=400&width=400&text=Alp+Gölü&fontColor=ffffff&backgroundColor=4ECDC4",
      "/placeholder.svg?height=400&width=400&text=Yürüyüş+Yolu&fontColor=ffffff&backgroundColor=FF6B6B",
      "/placeholder.svg?height=400&width=400&text=Dağ+Kulübesi&fontColor=ffffff&backgroundColor=FF8E53",
    ],
    comments: [],
  },
]

export function getTripData(): Trip[] {
  return [...trips]
}

export function getTripById(id: string): Trip | undefined {
  return trips.find((trip) => trip.id === id)
}

export function addTrip(trip: Trip): void {
  trips = [trip, ...trips]
}

export function addComment(tripId: string, comment: Comment): void {
  const tripIndex = trips.findIndex((trip) => trip.id === tripId)
  if (tripIndex !== -1) {
    trips[tripIndex].comments = [comment, ...trips[tripIndex].comments]
  }
}

