"use client";

import { useEffect, useState } from 'react';

export default function Alert({ message, type, onClose }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const timerOut = setTimeout(() => {
            setIsVisible(false); 
            const timerClose = setTimeout(() => {
                onClose(); 
            }, 200); 
            return () => clearTimeout(timerClose);
        }, 1000); 

        return () => {
            clearTimeout(timerOut);
            setIsVisible(false); 
        };
    }, [onClose]);

    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
    const icon = type === 'success';

    return (
        <div
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-3 rounded-lg shadow-lg ${bgColor} z-50
                 transition-all duration-500 ease-in-out
                 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
        >
            <div className="flex items-center space-x-2">
                <span>{icon}</span>
                <span>{message}</span>
            </div>
        </div>
    );
}