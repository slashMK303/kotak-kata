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
                        onAuthReady(true);
                        console.log("Signed in anonymously!");
                    })
                    .catch((error) => {
                        console.error("Error signing in anonymously:", error);
                        onAuthReady(false);
                    });
            } else {
                onAuthReady(true);
            }
        });

        return () => unsubscribe();
    }, [onAuthReady]);

    return null;
}