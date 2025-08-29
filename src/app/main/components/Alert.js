// src/app/(main)/components/Alert.js
"use client";

import { useEffect } from 'react';

export default function Alert({ message, type, onClose }) {
    useEffect(() => {
        if (!message) return;
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // Tutup setelah 3 detik

        return () => clearTimeout(timer);
    }, [message, onClose]);

    if (!message) return null; // Jangan render jika tidak ada pesan

    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
    const icon = type === 'success';

    return (
        <div
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-3 rounded-lg shadow-lg ${bgColor} z-50
                 transition-all duration-500 ease-in-out
                 ${message ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
        >
            <div className="flex items-center space-x-2">
                <span>{icon}</span>
                <span>{message}</span>
            </div>
        </div>
    );
}