import { CartScreen } from "@/patterns/CartScreen"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Teste Front React WeFit',
    description: 'Descrição da minha página',
};

export default async function Cart() {
    return (
        <CartScreen />
    )
}