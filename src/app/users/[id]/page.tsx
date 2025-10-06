type User = {
    id: number;
    name: string;
    username: string
}

type Album = {
    userId: number;
    id: number;
    title: string;
}

interface Post extends Album {
    body: string;
}

async function getUserAlbums(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`);
    return response.json();
}

async function getUserPosts(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
    return response.json();
}

export default async function UserDetails({ params}: {params: Promise<{id: string}>}) {
    const { id } = await params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user: User = await response.json();

    const [albums, posts] = await Promise.all([getUserAlbums(id), getUserPosts(id)]);

    return(
         <div key={user.id} className="bg-white rounded-md shadow-md m-4 p-8 flex flex-col gap-4">
            <div className="text-gray-800 font-bold text-xl">{user.name}</div>
            <div className="text-gray-600">{user.username}</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black p-8 rounded-md flex-1">
                    <span className="text-3xl font-bold">{user.name}'s posts</span>
                    <div className="mt-8">
                        {
                            posts.map((post: Post) => (
                                <div className="bg-white mt-8 rounded-sm p-8" key={post.id}>
                                    <h2 className="text-black text-xl font-bold">{post.title}</h2>
                                    <p className="text-black">{post.body}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="bg-black p-8 rounded-md flex-1">
                    <span className="text-3xl font-bold">{user.name}'s Albums</span>
                    <div className="mt-8">
                        {
                            albums.map((album: Album) => (
                                <div className="bg-white mt-8 rounded-sm p-8" key={album.id}>
                                    <h2 className="text-black text-xl font-bold">{album.title}</h2>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}