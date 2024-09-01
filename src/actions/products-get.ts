"use server";

import { PRODUCTS_GET } from "@/functions/api";

type PropductProps = {
    id: number,
    title: string,
    price: number,
    image: string,
}

type ProductsResponse = {
    products: PropductProps[]
}

export default async function productsGet() {
    const { url } = PRODUCTS_GET();
    const response = await fetch(url, {
        next: {
            revalidate: 60,
        }
    });
    const data = await response.json() as ProductsResponse;
    return data;
}