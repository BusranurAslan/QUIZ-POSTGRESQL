'use client';

import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signin', { username, password });
      if (response.status === 200) {
        localStorage.setItem('username', username);
        router.push('/dashboard');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Giriş yapma hatası:', error);
      alert('Giriş başarısız! Bir hata oluştu.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Giriş Yap</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Kullanıcı Adı</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Şifre</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Giriş Yap
          </button>
        </form>
        <div className='mt-4 text-center'>
          <p>Bir hesabın yok mu? <Link href="../register" className='text-blue-500 hover:underline'>Kayıt Ol</Link></p>
        </div>
      </div>
    </div>
  );
}
