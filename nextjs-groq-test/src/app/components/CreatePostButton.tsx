'use client'

import { createPost } from "@/sanity/mutations";

export const CreatePostButton = () => {
    return <button onClick={() => createPost({ title: "Test", slug: "test", content: "test", publishedAt: new Date().toISOString() })}>Create Post</button>;
};
