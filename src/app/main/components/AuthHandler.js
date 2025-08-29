// src/app/(main)/components/AuthHandler.js
"use client";

import { useEffect } from "react";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function AuthHandler({ onAuthReady }) {
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                signInAnonymously(auth)
                    .then(() => {
                        onAuthReady(true); // Panggil onAuthReady setelah berhasil login
                        console.log("Signed in anonymously!");
                    })
                    .catch((error) => {
                        console.error("Error signing in anonymously:", error);
                        onAuthReady(false); // Panggil onAuthReady jika gagal
                    });
            } else {
                onAuthReady(true); // Panggil onAuthReady jika user sudah ada
            }
        });

        return () => unsubscribe();
    }, [onAuthReady]);

    return null;
}