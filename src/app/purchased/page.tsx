import { PurchasedConfirmationScreen } from "@/patterns/PurchasedConfirmationScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Teste Front React WeFit',
    description: 'Desafio tecnico =',
};

export default function Purchased() {
    return (
        <>
            <PurchasedConfirmationScreen/>
        </>
    )
}