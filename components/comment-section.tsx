"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { formatDistanceToNow } from "@/lib/utils"
import type { Comment } from "@/lib/types"
import { addComment } from "@/lib/data"

interface CommentSectionProps {
  tripId: string
  initialComments: Comment[]
}

export default function CommentSection({ tripId, initialComments }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [newComment, setNewComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!newComment.trim()) return

    setIsSubmitting(true)

    // Gerçek bir uygulamada, bu bir API'ye gönderilirdi
    const comment: Comment = {
      id: Date.now().toString(),
      text: newComment,
      author: "Mevcut Kullanıcı",
      authorInitials: "MK",
      createdAt: new Date().toISOString(),
    }

    setTimeout(() => {
      addComment(tripId, comment)
      setComments([comment, ...comments])
      setNewComment("")
      setIsSubmitting(false)
    }, 500)
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-[#1A535C] border-b-2 border-[#FF6B6B] pb-2 inline-block">
        Yorumlar
      </h2>

      <form onSubmit={handleSubmit} className="mb-6">
        <Textarea
          placeholder="Bu seyahat hakkındaki düşüncelerinizi paylaşın..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-2 border-[#4ECDC4] focus-visible:ring-[#4ECDC4]"
          rows={3}
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isSubmitting || !newComment.trim()}
            className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] hover:from-[#FF5252] hover:to-[#FF8E53] transition-all duration-300"
          >
            {isSubmitting ? "Gönderiliyor..." : "Yorum Yap"}
          </Button>
        </div>
      </form>

      {comments.length === 0 ? (
        <div className="text-center py-6 text-muted-foreground bg-gradient-to-r from-[#F7FFF7] to-white dark:from-[#1A535C]/10 dark:to-background rounded-lg border border-dashed border-[#4ECDC4]">
          <p className="text-muted-foreground">Henüz yorum yok. Düşüncelerinizi paylaşan ilk kişi olun!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-gradient-to-r from-[#F7FFF7] to-white dark:from-[#1A535C]/5 dark:to-background rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4">
                <Avatar className="border-2 border-[#FF6B6B]">
                  <AvatarImage src={`/placeholder-user.jpg`} alt={comment.author} />
                  <AvatarFallback className="bg-[#FF6B6B] text-white">{comment.authorInitials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-[#1A535C]">{comment.author}</h4>
                    <span className="text-xs text-muted-foreground bg-[#4ECDC4]/10 px-2 py-1 rounded-full">
                      {formatDistanceToNow(comment.createdAt)}
                    </span>
                  </div>
                  <p className="mt-1">{comment.text}</p>
                </div>
              </div>
              <Separator className="mt-4 bg-[#4ECDC4]/20" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

