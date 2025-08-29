"use server";

import { adminDb } from "./lib/firebase-admin";
import { FieldValue } from 'firebase-admin/firestore';

export async function updateReaction(postId, userId, emoji) {
    try {
        const userReactionsRef = adminDb.collection("userReactions");
        const postRef = adminDb.collection("posts").doc(postId);

        const existingReactionQuery = await userReactionsRef
            .where('postId', '==', postId)
            .where('userId', '==', userId)
            .where('emoji', '==', emoji)
            .limit(1)
            .get();

        if (!existingReactionQuery.empty) {
            
            const docToDelete = existingReactionQuery.docs[0].ref;
            await docToDelete.delete();

            await postRef.set(
                {
                    reactions: {
                        [emoji]: FieldValue.increment(-1),
                    },
                },
                { merge: true }
            );

            return { success: true, action: 'removed' };
        } else {
            
            await userReactionsRef.add({
                postId,
                userId,
                emoji,
                createdAt: FieldValue.serverTimestamp()
            });

            await postRef.set(
                {
                    reactions: {
                        [emoji]: FieldValue.increment(1),
                    },
                },
                { merge: true }
            );

            return { success: true, action: 'added' };
        }
    } catch (error) {
        console.error("Error updating reactions on server:", error);
        return { success: false, error: error.message };
    }
}