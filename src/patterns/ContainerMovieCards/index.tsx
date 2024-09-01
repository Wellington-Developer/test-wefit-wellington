"use client"
import { useContext } from "react"
import { MovieCard } from "../MovieCard"
import { ContainerMovies } from "./styles"
import { CartContext } from "@/context/cart-context"
import { LoadStateScreen } from "../LoadStateScreen"

type PropductProps = {
    id: number,
    title: string,
    price: number,
    image: string,
}

type ProductsResponse = {
    products: PropductProps[]
}

export const ContainerMovieCards = ({ data }: {data: ProductsResponse}) => {
    const { loading } = useContext(CartContext);

    if(loading) return <LoadStateScreen />
    return (
        <ContainerMovies>
           {
                data.products &&
                data.products.map((item) => {
                    return <MovieCard key={item.id} title={item.title} image={item.image} price={item.price} id={item.id}/>
                })
            }
        </ContainerMovies>
    )
}