"use client"

import { ProductCounterWrapper } from "./styles"

import MinusIcon from "../../../../../public/icons/minus.svg";
import PlusIcon from "../../../../../public/icons/plus.svg";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { CartContext } from "@/context/cart-context";

type IProductProps = { 
    quantity: number,
    id: number
}

export const ProductCounter = ({ quantity, id }: IProductProps) => {
    const { updateQuantityProductCart, removeProductToCart } = useContext(CartContext);

    const handleUpdatePlus = () => {
        updateQuantityProductCart(id, 'increase');
    }

    const handleUpdateMinus = () => {
        updateQuantityProductCart(id, 'decrease');

        if(quantity == 0) {
            removeProductToCart(id);
        }
    }

    return (
        <ProductCounterWrapper>
            <span onClick={handleUpdateMinus}>
                <Image 
                    src={MinusIcon}
                    alt="Minus product icon"
                    width={18}
                    height={18}
                />
            </span>

            <p>{quantity}</p>
            
            <span onClick={handleUpdatePlus}>
                <Image 
                    src={PlusIcon}
                    alt="Plus product icon"
                    width={18}
                    height={18}
                />
            </span>
        </ProductCounterWrapper>
    )
}