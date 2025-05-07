'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Geçici sabit kullanıcı doğrulama
    const validEmail = 'test@example.com';
    const validPassword = '123456';

    if (email === validEmail && password === validPassword) {
      console.log("Giriş başarılı:", email);

      // Kullanıcı adını localStorage'a kaydet (normalde backend'den alınır)
      localStorage.setItem('userName', 'Hilal Özcan');

      // Ana sayfaya yönlendir
      router.push('/');
    } else {
      setError('E-posta veya şifre hatalı.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Seyahat Günlüğüm
        </h1>
        <p className="text-center text-gray-500 mb-6">Hesabınıza giriş yapın</p>

        {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-teal-400 hover:bg-teal-500 text-white font-semibold rounded"
          >
            Giriş Yap
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="/register" className="text-teal-500 font-semibold">
            Hesap Oluştur
          </a>
        </div>
      </div>
    </div>
  );
}
