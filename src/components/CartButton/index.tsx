"use client"

import { ButtonHTMLAttributes } from "react"
import { CartButtonWrapper } from "./styles"
import Image from "next/image"

import iconCart from "../../../public/icons/cart.svg";

type CartButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    withIcon?: boolean,
    onClick?: () => void;
}

export const CartButton = ({children, disabled, withIcon, onClick}: CartButtonProps) => {
    return (
        <CartButtonWrapper disabled={disabled} onClick={onClick}>
            <div>
                {withIcon && (
                    <Image 
                        src={iconCart}
                        width={13.6}
                        height={13.6}
                        alt="Cart icon"
                    />
                )}
                {disabled ? 1 : 0}
            </div>
            <p>{children}</p>
        </CartButtonWrapper>
    )
}