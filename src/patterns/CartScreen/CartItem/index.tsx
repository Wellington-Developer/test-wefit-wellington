"use client"

import { useContext } from "react"
import { ProductCounter } from "./ProductCounter"
import { ProductInfo } from "./ProductInfo"
import { ProductPrice } from "./ProductPrice"
import { CartItemWrapper } from "./styles"
import { CartContext } from "@/context/cart-context"

export const CartItem = () => {
    const { cart } = useContext(CartContext);
    return (
        <>
            {
                cart && cart.map((item, index) => {
                    return <CartItemWrapper key={index}>
                        <ProductInfo image={item.product.image} title={item.product.title} price={item.product.price}/>
                        <ProductCounter quantity={item.quantity} id={item.product.id}/>
                        <ProductPrice price={item.product.price} quantity={item.quantity} id={item.product.id}/>
                    </CartItemWrapper>
                })
            }
        </>
    )
}