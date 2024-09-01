"use client"

import Image from "next/image"
import { ProductInfoWrapper } from "./styles"
import { format } from "path"
import { formatPrice } from "@/utils/formatPrice"

type IProductInfoProps = {
    image: string,
    title: string,
    price: number
}

export const ProductInfo = ({image, title, price}: IProductInfoProps) => {
    return (
        <ProductInfoWrapper>
            <Image
                src={image}
                alt="movie"
                width={91}
                height={114}
            />

            <div>
                <h1>{title}</h1>
                <p>{formatPrice.format(price)}</p>
            </div>
        </ProductInfoWrapper>
    )
}