'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import TripList from "@/components/trip-list";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">
            Seyahat Günlüğüm
          </h1>
          <p className="text-muted-foreground mt-1">
            Dünya çapındaki maceralarınızı takip edin ve paylaşın
          </p>
        </div>
        <Link href="/trips/new">
          <Button className="bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 transition-all duration-300">
            <PlusCircle className="mr-2 h-4 w-4" />
            Yeni Seyahat Ekle
          </Button>
        </Link>
      </div>

      {/* Ekstra Navigasyon Butonları */}
      <div className="flex gap-4 mb-8">
        <Link href="/login">
          <Button className="bg-purple-500 hover:bg-purple-600">Giriş Yap</Button>
        </Link>
        <Link href="/profile">
          <Button className="bg-pink-500 hover:bg-pink-600">Profilim</Button>
        </Link>
      </div>

      {/* Trip listesi */}
      <TripList />
    </div>
  );
}
