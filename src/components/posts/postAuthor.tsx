type PostAuthor = {
    id: number;
    name: number
}

export default async function PostAuthor({ authorId }: {authorId: number}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`);
    const author: PostAuthor = await response.json();

    return <div className="text-gray-600">
        Written By: <span className="font-bold">{author.name}</span>
    </div>
}