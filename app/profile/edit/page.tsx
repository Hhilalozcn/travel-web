'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState({
    name: '',
    email: '',
    totalTrips: '',
    lastTrip: {
      title: '',
      location: '',
      date: '',
    },
  });

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('lastTrip.')) {
      setUser((prev) => ({
        ...prev,
        lastTrip: {
          ...prev.lastTrip,
          [name.split('.')[1]]: value,
        },
      }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    localStorage.setItem('user', JSON.stringify(user));
    router.push('/profile');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">Profili Düzenle</h2>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Ad Soyad"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="E-posta"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="number"
            name="totalTrips"
            value={user.totalTrips}
            onChange={handleChange}
            placeholder="Toplam Seyahat"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="text"
            name="lastTrip.title"
            value={user.lastTrip.title}
            onChange={handleChange}
            placeholder="Son Seyahat Başlığı"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="text"
            name="lastTrip.location"
            value={user.lastTrip.location}
            onChange={handleChange}
            placeholder="Son Seyahat Lokasyonu"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="date"
            name="lastTrip.date"
            value={user.lastTrip.date}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />

          <button
            onClick={handleSave}
            className="w-full bg-teal-500 text-white py-2 rounded font-semibold hover:bg-teal-600"
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
}
