// src/pages/Settings.jsx
import React, { useState } from 'react';

export default function Settings() {
  // İki basit toggle state’i
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Ayarlar</h1>

      {/* Bildirim Ayarları */}
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
          <span>Email Bildirimleri</span>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
            className="form-checkbox h-5 w-5 text-red-500"
          />
        </div>
        <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
          <span>Push Bildirimleri</span>
          <input
            type="checkbox"
            checked={pushNotifications}
            onChange={() => setPushNotifications(!pushNotifications)}
            className="form-checkbox h-5 w-5 text-red-500"
          />
        </div>
      </div>

      {/* Uygulama Hakkında */}
      <div className="mt-8 bg-gray-800 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Uygulama Hakkında</h2>
        <p className="text-gray-400">Sürüm: 1.0.0</p>
      </div>
    </div>
  );
}
