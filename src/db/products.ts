import { IProduct } from "@/interfaces/IProduct";
import prisma from "./prisma";

export const getProducts = async() => {
    return await prisma.product.findMany();
}

export const getProductById = async(id: number) => {
    return await prisma.product.findUnique({
        where: { id },
    });
}

export const saveProduct = async(product: IProduct) => {
    return await prisma.product.create({ data: product });
}

export const updateProduct = async(id: number, product: IProduct) => {
    return await prisma.product.update({ where: { id }, data: product });
}

export const deleteProduct = async(id: number) => {
    return await prisma.product.delete({ where: { id } });
}