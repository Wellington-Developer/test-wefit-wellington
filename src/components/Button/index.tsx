"use client"

import { ButtonHTMLAttributes } from "react";
import { ButtonWrapper } from "./styles"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({children}: ButtonProps) => {
    return (
        <ButtonWrapper>{children}</ButtonWrapper>
    )
}