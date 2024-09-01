"use client"

import Image from "next/image"
import whiteBagImg from "../../../public/icons/white-bag.svg"
import { HeaderContainerWrapper } from "./styles"
import Link from "next/link"
import { useContext } from "react"
import { CartContext } from "@/context/cart-context"

export const Header = () => {
    const { cart } = useContext(CartContext);
    return (
        <HeaderContainerWrapper>
            <Link href="/">
                <h1>WeMovies</h1>
            </Link>

                <Link href="/cart">
                    <div>
                            <span>
                                <h1>Meu carrinho</h1>
                                {cart.length ? (
                                    <p>{cart.length} itens</p>
                                ) : (
                                    <p>0 itens</p>
                                )}
                            </span>
                        <Image 
                            src={whiteBagImg}
                            width={40}
                            height={40}
                            alt="White bag cart"
                            />
                    </div>
                </Link>
        </HeaderContainerWrapper>
    )
}