"use client"

import { Button } from "@/components/Button";
import PurchasedConfirmImg from "../../../public/heros/purchased-confirmed.svg";
import Image from "next/image";
import { PurchasedConfirmationWrapper } from "./styles";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/context/cart-context";
import { theme } from "@/styles/global/Theme";
import { ThemeProvider } from "styled-components";


export const PurchasedConfirmationScreen = () => {
    const { clearCart } = useContext(CartContext);

    const handleClearCart = () => {
        clearCart();
    }
    return (
        <ThemeProvider theme={theme}>
            <PurchasedConfirmationWrapper>
                <div>
                    <h1>Compra realizada com sucesso!</h1>
                    <section>
                        <Image
                            src={PurchasedConfirmImg}
                            alt="Purchased confirmed image"
                        />
                    </section>
                    <span onClick={handleClearCart}>
                        <Link href="/">
                            <Button>VOLTAR</Button>
                        </Link>
                    </span>
                </div>
            </PurchasedConfirmationWrapper>
        </ThemeProvider>
    )
}