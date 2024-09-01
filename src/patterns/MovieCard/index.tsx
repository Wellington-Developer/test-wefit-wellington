"use client"

import Image from "next/image"
import { CartButton } from "../../components/CartButton"
import { MovieCardWrapper } from "./styles"
import { formatPrice } from "@/utils/formatPrice"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "@/context/cart-context"

type PropductProps = {
    id: number,
    title: string,
    price: number,
    image: string,
}

export const MovieCard = ({title, image, price, id}: PropductProps) => {
    const { cart, addProductToCart, hasProductOnCart } = useContext(CartContext);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setDisabled(hasProductOnCart(id));
    }, [cart, id]);
    
    const handleProductToCart = () => {
        const item = { title, image, price, id };
        addProductToCart(item);
        setDisabled(hasProductOnCart(id));
    }

    return (
        <MovieCardWrapper>
            <Image
                src={image}
                alt="movie img"
                width={147}
                height={188}
                priority
            />
            
            <span>
                <p>{title}</p>
                <h3>{formatPrice.format(price)}</h3>
            </span>

            <CartButton withIcon onClick={handleProductToCart} disabled={disabled}>ADICIONAR AO CARRINHO</CartButton>
        </MovieCardWrapper>
    )
}