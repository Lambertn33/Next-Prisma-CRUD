"use server"

import { deleteProduct, saveProduct, updateProduct } from "@/db/products"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type Errors = {
    name? : string;
    description?: string;
    price?: string;
}

export type FormState = {
    errors: Errors;
}

export async function createProduct(prevState: FormState, formData: FormData) {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = formData.get("price") as string;

    const errors: Errors = {};

    if(!name) errors.name = "Please fill out the title";
    if (!description) errors.description = "Please fill out the description";
    if (!price) errors.price = "Please fill out the price";

    if (Object.keys(errors).length > 0) {
        return { errors }
    }

    await saveProduct({ name, description, price: +price});
    redirect("/products");
}

export async function editProduct(id: string, prevState: FormState, formData: FormData) {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = formData.get("price") as string;

    const errors: Errors = {};

    if(!name) errors.name = "Please fill out the title";
    if (!description) errors.description = "Please fill out the description";
    if (!price) errors.price = "Please fill out the price";

    if (Object.keys(errors).length > 0) {
        return { errors }
    }

    await updateProduct(+id, { name, description, price: +price});
    redirect("/products");
}

export async function removeProduct(id: string) {
    await deleteProduct(+id);
    revalidatePath('/products');
}

