import { getProductById } from "@/db/products";
import UpdateProductForm from "./updateForm";
import { notFound } from "next/navigation";

export default async function updateProduct({params}: {params: Promise<{id: string}>}) {
    const { id } = await params;
    const productToEdit = await getProductById(parseInt(id));

    if (!productToEdit) return notFound();

    return <UpdateProductForm product={productToEdit}/>
}