// src/components/NavBar.js
import React from 'react';

const pages = [
  { key: 'home', label: 'Ana Sayfa' },
  { key: 'tasks', label: 'Görevler' },
  { key: 'projects', label: 'Projeler' },
  { key: 'calendar', label: 'Takvim' },
  { key: 'settings', label: 'Ayarlar' },
];

export default function NavBar({ activePage, onChange }) {
  return (
    <nav className="bg-gray-800 text-gray-100 flex space-x-4 px-4 py-3">
      {pages.map(p => (
        <button
          key={p.key}
          onClick={() => onChange(p.key)}
          className={
            `px-3 py-1 rounded-md focus:outline-none ` +
            (activePage === p.key
              ? 'border-b-2 border-red-500 font-semibold'
              : 'hover:bg-gray-700')
          }
        >
          {p.label}
        </button>
      ))}
    </nav>
  );
}
