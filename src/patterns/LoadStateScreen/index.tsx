"use client"

import Image from "next/image";
import LoadStateImg from "../../../public/icons/loader.png";
import { LoaderWrapper } from "./styles";

export const LoadStateScreen = () => {
    return (
        <LoaderWrapper>
            <Image 
                src={LoadStateImg}
                alt="Load state image"
            />
        </LoaderWrapper>
    )
}