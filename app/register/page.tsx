'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Kayıt olunuyor:", name, email, password);
    // Gerçek kayıt işlemi burada yapılır
    router.push('/login'); // Kayıt sonrası giriş sayfasına yönlendir
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
          Kayıt Ol
        </h1>
        <p className="text-center text-gray-500 mb-6">Yeni bir hesap oluşturun</p>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Ad Soyad"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
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
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded"
          >
            Kayıt Ol
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="/login" className="text-blue-500 font-semibold">
            Zaten bir hesabınız var mı? Giriş Yap
          </a>
        </div>
      </div>
    </div>
  );
}
