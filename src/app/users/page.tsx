import Link from "next/link";

type User = {
    id: number;
    name: string;
    username: string
}

export default async function UsersPage() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: Array<User> = await response.json();

    return <div className="space-y-4 p-16">
        <h2 className="text-center text-2xl font-bold">Users List</h2>

        <div className="grid grid-cols-1 md:grid-cols-2">
            {
                users.map((user) => (
                    <div key={user.id} className="bg-white rounded-md shadow-md m-4 p-8 flex flex-col gap-4">
                        <Link href={`/users/${user.id}`} className="text-gray-800 font-bold text-xl">{user.name}</Link>
                        <div className="text-gray-600">{user.username}</div>
                    </div>
                ))
            }
        </div>
    </div>
}