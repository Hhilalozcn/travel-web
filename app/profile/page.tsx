'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState({
    name: 'Hilal Özcan',
    email: 'hilalozcan@example.com',
    totalTrips: 3,
    lastTrip: {
      title: "Bali'de Yaz",
      location: 'Bali, Endonezya',
      date: '2023-07-15',
    },
    avatar: '/images/avatar.jpeg',
  });

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      setUser((prev) => ({ ...prev, ...JSON.parse(stored) }));
    }
  }, []);

  const handleLogout = () => {
    alert('Çıkış yapıldı');
  };

  const handleEdit = () => {
    router.push('/profile/edit');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm text-center">
        <Image
          src={user.avatar}
          alt="Profil Fotoğrafı"
          width={100}
          height={100}
          className="rounded-full mx-auto"
        />
        <h2 className="text-2xl font-bold mt-4 text-purple-700">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>

        <div className="mt-6 text-left text-sm">
          <p>
            <span className="font-semibold">Toplam Seyahat:</span>{' '}
            <span className="text-teal-600">{user.totalTrips}</span>
          </p>
          <p className="mt-2">
            <span className="font-semibold">En Son Seyahatin:</span>{' '}
            <span className="text-purple-700 font-semibold">{user.lastTrip.title}</span>
            <br />
            <span className="text-gray-500">{user.lastTrip.location} - {user.lastTrip.date}</span>
          </p>
        </div>

        <div className="mt-6 space-y-3">
          <button
            onClick={handleEdit}
            className="w-full py-2 bg-teal-400 hover:bg-teal-500 text-white font-semibold rounded"
          >
            Profili Düzenle
          </button>
          <button
            onClick={handleLogout}
            className="w-full py-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded"
          >
            Çıkış Yap
          </button>
        </div>
      </div>
    </div>
  );
}
