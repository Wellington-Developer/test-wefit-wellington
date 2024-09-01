"use client"

import EmptyStateImg from "../../../public/heros/empty-state.svg";
import Image from "next/image";
import { WrapperEmptyState } from "./styles";
import { Button } from "@/components/Button";
import { useContext, useEffect } from "react";
import { CartContext } from "@/context/cart-context";
import { LoadStateScreen } from "../LoadStateScreen";
import Link from "next/link";

type EmptyStateProps = {
    title: string;
    ButtonText: string;
}


export const EmptyState = ({title, ButtonText}: EmptyStateProps) => {

    const { loading } = useContext(CartContext);
    
    const handleReloadPage = () => {
        window.location.reload()
    }

    if(loading) return <LoadStateScreen />

    return (
        <WrapperEmptyState>
            <section>
                <h1>{title}</h1>
                <div>
                    <Image
                        src={EmptyStateImg}
                        alt="Image with info to reload page"
                        width={178.63}
                        height={264}
                        priority
                    />
                </div>
                <Link href="/">
                    <Button>{ButtonText}</Button>
                </Link>
            </section>
        </WrapperEmptyState>
    )
}