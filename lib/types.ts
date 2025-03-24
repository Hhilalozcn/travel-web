export interface Comment {
  id: string
  text: string
  author: string
  authorInitials: string
  createdAt: string
}

export interface Trip {
  id: string
  title: string
  location: string
  date: string
  tripType: string
  description: string
  coverImage: string
  photos: string[]
  comments: Comment[]
}

