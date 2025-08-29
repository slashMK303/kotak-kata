// src/app/(main)/components/PostForm.js
"use client";

import { useState } from "react";
import { auth, db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function PostForm({ showAlert, isAuthReady }) {
    const [postText, setPostText] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (postText.trim() === "") {
            return;
        }

        try {
            const user = auth.currentUser;
            if (!user) {
                showAlert('Anda harus login untuk membuat postingan.', 'error');
                return;
            }

            await addDoc(collection(db, "posts"), {
                text: postText,
                authorId: user.uid,
                createdAt: serverTimestamp(),
                reactions: {},
            });

            setPostText("");
            showAlert('Postingan berhasil dikirim!', 'success');
        } catch (error) {
            console.error("Error adding document: ", error);
            showAlert('Gagal membuat postingan.', 'error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
            <textarea
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                placeholder="Tulis keluh kesah atau ceritamu di sini..."
                className="w-full h-24 p-2 mb-2 border rounded-md bg-[#101827] text-[#f3f4f6] border-gray-800"
            />
            <button
                type="submit"
                disabled={!isAuthReady}
                className={`px-4 py-2 text-white rounded-md transition-colors bg-blue-600
                           ${isAuthReady ? 'bg-accent hover:bg-blue-700' : 'bg-gray-500 cursor-not-allowed'} hover:cursor-pointer`}
            >
                {isAuthReady ? 'Kirim' : 'Menghubungkan...'}
            </button>
        </form>
    );
}