"use client"

import Image from "next/image";
import Thrash from "../../../../../public/icons/thrash.svg";
import { ProductPriceWrapper } from "./styles";
import { formatPrice } from "@/utils/formatPrice";
import { CartContext } from "@/context/cart-context";
import { useContext } from "react";

type IProductPriceProps = {
    price: number,
    quantity: number,
    id: number,
}

export const ProductPrice = ({price, quantity, id}: IProductPriceProps) => {
    const { removeProductToCart } = useContext(CartContext);;

    return (
        <ProductPriceWrapper>
            <h1>
                <span>SUBTOTAL</span>
                {formatPrice.format(price * quantity)}
            </h1>
            <span onClick={() => removeProductToCart(id)}>
                <Image
                    src={Thrash}
                    alt="Thrash icon"
                    width={18}
                    height={18}
                />
            </span>
        </ProductPriceWrapper>
    )
}