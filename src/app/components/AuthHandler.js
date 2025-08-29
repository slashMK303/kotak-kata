"use client";

import { useEffect } from "react";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function AuthHandler() {
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                
                signInAnonymously(auth)
                    .then(() => {
                        console.log("Signed in anonymously!");
                    })
                    .catch((error) => {
                        console.error("Error signing in anonymously:", error);
                    });
            } else {
                
                console.log("User UID:", user.uid);
            }
        });

        return () => unsubscribe();
    }, []);

    return null;
}