"use client"

import { createGlobalStyle } from "styled-components";
import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({ subsets: ["latin"] })

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${openSans.style.fontFamily}, sans-serif;
        background-color: #2F2E41;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;
