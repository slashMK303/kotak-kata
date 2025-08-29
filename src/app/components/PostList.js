"use client";

import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import PostCard from "./PostCard";

export default function PostList({ showAlert }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const postsArray = [];
            querySnapshot.forEach((doc) => {
                postsArray.push({ id: doc.id, ...doc.data() });
            });
            setPosts(postsArray);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="space-y-4">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} showAlert={showAlert} />
            ))}
        </div>
    );
}