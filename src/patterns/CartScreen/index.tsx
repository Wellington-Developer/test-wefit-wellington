"use client"

import { Button } from "@/components/Button"
import { CartContentBody, CartContentFooter, CartContentHeader, CartScreenContent, CartScreenWrapper } from "./styles"
import { CartItem } from "./CartItem"
import React, { useContext } from "react"
import { CartContext } from "@/context/cart-context"
import { EmptyState } from "../EmptyState"
import Link from "next/link"
import { formatPrice } from "@/utils/formatPrice"

export const CartScreen = () => {
    const { cart, getTotalCartValue, clearCart } = useContext(CartContext);
    if(cart.length == 0 ) {
        return <EmptyState title="Parece que não há nada por aqui :(" ButtonText="Recarregar página"/>
    }
    
    return (
        <CartScreenWrapper>
            <CartScreenContent>
                <CartContentHeader>
                    <div>
                        <p>Produto</p>
                    </div>

                    <div>
                        <p>Qtd</p>
                    </div>

                    <div>
                        <p>Subtotal</p>
                    </div>
                </CartContentHeader>

                <CartContentBody>
                    <CartItem />
                </CartContentBody>

                <CartContentFooter>
                    <Link href="/purchased">
                        <Button>FINALIZAR PEDIDO</Button>
                    </Link>
                    <div>
                        <span>TOTAL</span>
                        <p>{formatPrice.format(getTotalCartValue())}</p>
                    </div>
                </CartContentFooter>
            </CartScreenContent>
        </CartScreenWrapper>
    )
}