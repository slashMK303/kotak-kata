"use client";

import { useEffect, useState } from "react";
import { doc, getDocs, collection, query, where } from "firebase/firestore";
import { db, auth } from "../lib/firebase";
import { updateReaction } from "../actions";

export default function PostCard({ post, showAlert }) {
    const reactionEmojis = ["❤️", "😂", "😢", "🔥", "👍"];
    const [reactions, setReactions] = useState(post.reactions || {});
    const [userReactions, setUserReactions] = useState([]);

    useEffect(() => {
        const fetchUserReactions = async () => {
            const user = auth.currentUser;
            if (!user) return;
            const userReactionsRef = collection(db, 'userReactions');
            const q = query(userReactionsRef, where('postId', '==', post.id), where('userId', '==', user.uid));
            const querySnapshot = await getDocs(q);
            const userReactionsArray = querySnapshot.docs.map(doc => doc.data().emoji);
            setUserReactions(userReactionsArray);
        };

        fetchUserReactions();
    }, [post.id]);

    const formatDate = (timestamp) => {
        if (!timestamp) return "Baru saja";
        const date = new Date(timestamp.seconds * 1000);
        return date.toLocaleString();
    };

    const handleReaction = async (emoji) => {
        const user = auth.currentUser;
        if (!user) return;

        const isUserReaction = userReactions.includes(emoji);
        const updatedReactions = { ...reactions };

        if (isUserReaction) {
            updatedReactions[emoji] = (updatedReactions[emoji] || 1) - 1;
            setUserReactions(userReactions.filter(e => e !== emoji));
        } else {
            updatedReactions[emoji] = (updatedReactions[emoji] || 0) + 1;
            setUserReactions([...userReactions, emoji]);
        }
        setReactions(updatedReactions);

        const result = await updateReaction(post.id, user.uid, emoji);

        if (result.success) {
            showAlert(`Reaksi ${emoji} berhasil ${result.action}!`, 'success');
        } else {
            console.error(result.error);
            setReactions(post.reactions || {});
            setUserReactions(userReactions);
            showAlert('Gagal memberikan reaksi.', 'error');
        }
    };

    return (
        <div className="p-4 rounded-lg shadow-sm bg-gray-800">
            <p className="text-gray-200">{post.text}</p>
            <div className="mt-2 text-xs text-gray-400 flex justify-between items-center">
                <span>{formatDate(post.createdAt)}</span>
                <div className="flex space-x-2">
                    {reactionEmojis.map((emoji) => (
                        <button
                            key={emoji}
                            onClick={() => handleReaction(emoji)}
                            className={`p-1 rounded-md transition-colors
                ${userReactions.includes(emoji) ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'} hover:cursor-pointer`}
                        >
                            {emoji}
                            <span className="ml-1 text-gray-700 dark:text-gray-300">
                                {reactions[emoji] || 0}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}