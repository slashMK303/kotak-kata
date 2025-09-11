"use client";

import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import PostCard from "./PostCard";
import SkeletonCard from "./SkeletonCard";

export default function PostList({ showAlert }) {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [lastKnownPostCount, setLastKnownPostCount] = useState(0);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);

        const storedCount = localStorage.getItem('lastKnownPostCount');
        if (storedCount) {
            setLastKnownPostCount(parseInt(storedCount, 10));
        }

        const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const postsArray = [];
            querySnapshot.forEach((doc) => {
                postsArray.push({ id: doc.id, ...doc.data() });
            });
            setPosts(postsArray);

            const newCount = postsArray.length || 0;
            setLastKnownPostCount(newCount);
            localStorage.setItem('lastKnownPostCount', newCount.toString());

            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (isLoading && hasMounted) {
        return (
            <div className="space-y-4">
                {[...Array(lastKnownPostCount)].map((_, index) => (
                    <SkeletonCard key={index} />
                ))}
            </div>
        );
    }

    if (!isLoading && posts.length === 0) {
        return (
            <div className="text-center py-8 text-dark-secondary">
                <p>Belum ada postingan. Jadilah yang pertama!</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} showAlert={showAlert} />
            ))}
        </div>
    );
}