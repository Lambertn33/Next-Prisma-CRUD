import PostAuthor from "@/components/posts/postAuthor";
import { Suspense } from "react";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default async function PostsPage() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Array<Post> = await response.json();
    const filteredPosts = posts.filter((post) => post.id % 10 === 1);

    return <div className="space-y-4 p-16">
        <h2 className="text-center text-2xl font-bold">Posts List</h2>

        <div className="grid grid-cols-1 md:grid-cols-2">
            {
                filteredPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-md shadow-md m-4 p-8 flex flex-col gap-4">
                        <div className="text-gray-800 font-bold text-xl">{post.title}</div>
                        <div className="text-gray-600">{post.body}</div>
                        <Suspense fallback={<div className="text-gray-800">Fetch author details...</div>}>
                        <PostAuthor authorId={post.userId} />
                        </Suspense>
                    </div>
                ))
            }
        </div>
    </div>
}