"use client"

import { useActionState } from "react";
import { FormState, createProduct } from "@/actions/products";

export default function CreateProductForm() {
    const initiaState: FormState = {
        errors: {}
    }

    const [ state, formAction, isPending ] = useActionState(createProduct, initiaState);
    return <div className="min-h-screen bg-gray-200 flex items-center justify-center p-8">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <h2 className="text-center text-black text-2xl font-bold mb-6">Add new product</h2>

            <form action={formAction} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
                    <input name="name" type="text" placeholder="Product Name" className="w-full text-black border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    {
                        state.errors.name && <p className="text-red-500 font-bold text-xs">{state.errors.name}</p>
                    }
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Product Price</label>
                    <input name="price" type="number" placeholder="Product Price" className="w-full text-black border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    {
                        state.errors.price && <p className="text-red-500 font-bold text-xs">{state.errors.price}</p>
                    }
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Product Description</label>
                    <textarea name="description" placeholder="Product Description" className="w-full text-black border border-gray-300 rounded-md p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    {
                        state.errors.description && <p className="text-red-500 font-bold text-xs">{state.errors.description}</p>
                    }
                </div>
                <div className="flex gap-3 pt-4">
                    <button type="submit" disabled={isPending} className="flex-1 bg-blue-500 text-white rounded-md p-3 hover:bg-blue-600 transition-colors">Create Product</button>
                </div>
            </form>
        </div>
    </div>
}