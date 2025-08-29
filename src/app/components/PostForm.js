"use client";

import { useState } from "react";
import { auth, db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function PostForm() {
    const [postText, setPostText] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (postText.trim() === "") {
            return;
        }

        try {
            const user = auth.currentUser;
            if (!user) {
                console.error("No user signed in.");
                return;
            }

            await addDoc(collection(db, "posts"), {
                text: postText,
                authorId: user.uid,
                createdAt: serverTimestamp(),
                reactions: {},
            });

            setPostText("");
            console.log("Post submitted successfully!");
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 rounded-lg shadow-sm bg-gray-800">
            <textarea
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                placeholder="Tulis keluh kesah atau ceritamu di sini..."
                className="w-full h-24 p-2 mb-2 border rounded-md bg-gray-800 border-gray-700 text-white"
            />
            <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 hover:cursor-pointer"
            >
                Kirim
            </button>
        </form>
    );
}