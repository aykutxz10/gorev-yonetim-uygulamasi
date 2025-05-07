// src/pages/Home.jsx
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center">
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          Görev Yönetiminin Kolay Yolu
        </h1>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Basit, hızlı ve etkili bir şekilde tüm görevlerini tek bir yerden
          yönet. Takım içi koordineyi artır, projelerini zamanında tamamla!
        </p>
      </div>
    </div>
  );
}
