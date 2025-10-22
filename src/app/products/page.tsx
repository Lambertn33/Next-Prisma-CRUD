import { getProducts } from "@/db/products"
import Link from "next/link";

export default async function ProductsList() {
    const products = await getProducts();
    return <div className="bg-gray-200 w-full h-full p-8">
        <h2 className="text-center text-black text-4xl underline">Products List</h2>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                products.map((product) => (
                    <div className="bg-gray-600 p-4 m-4 rounded-md flex flex-col gap-8" key={product.id}>
                       <div>
                            <h2 className="text-2xl font-bold">{product.name}</h2>
                            <p>{product.description ?? ""}</p>
                       </div>
                       <div className="flex justify-between">
                         <p className="font-extrabold">${product.price}</p>
                         <div>
                            <Link href={`/products/${product.id}`}>
                                <div className="py-1 px-2 rounded-md bg-blue-600 text-white">Edit Product</div>
                            </Link>
                         </div>
                       </div>
                    </div>
                ))
            }
        </div>
    </div>
}