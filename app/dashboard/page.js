/* eslint-disable react/no-unescaped-entities */

"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Dashboard() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      router.push('/signin'); 
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('username');
    router.push('../home');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hoşgeldiniz, {username}</h1>
        <button onClick={handleLogout} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Çıkış Yap
        </button>
      </nav>
      <div className="p-8">
        <h2 className="text-xl font-semibold mb-4">Mevcut Quizler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="/kiralarsın.png"
              alt="Quiz 1"
              width={500} // Görüntü genişliği
              height={300} // Görüntü yüksekliği
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Quiz 1</h3>
            <p className="text-gray-700 mb-4">&apos;Kiralarsın&apos;</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Quiz'e Başla</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="/manga.jpg"
              alt="Quiz 2"
              width={500} // Görüntü genişliği
              height={300} // Görüntü yüksekliği
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Quiz 2</h3>
            <p className="text-gray-700 mb-4">&apos;Dizi Film&apos;</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Quiz'e Başla</button>
          </div>
        </div>
      </div>
    </div>
  );
}
