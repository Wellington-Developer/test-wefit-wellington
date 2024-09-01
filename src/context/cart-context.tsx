"use client"

import { loadLocalStorage, saveLocalStorage } from "@/functions/localStorageManager";
import React, { useEffect, useState, useCallback } from "react";

type IProduct = {
    id: number,
    title: string,
    price: number,
    image: string,
}

export type ICartItems = {
    product: IProduct,
    quantity: number
}

type ICartContextProvider = {
    addProductToCart: (item: IProduct) => void;
    cart: ICartItems[],
    removeProductToCart: (id: number) => void,
    hasProductOnCart: (id: number) => boolean,
    updateQuantityProductCart: (id: number, type: IUpdateTypeQuantityProduct) => void,
    getTotalCartValue: () => number,
    clearCart: () => void,
    setCart: React.Dispatch<React.SetStateAction<ICartItems[]>>,
    loading: boolean
}

type IUpdateTypeQuantityProduct = 'increase' | 'decrease'

export const CartContext = React.createContext({} as ICartContextProvider);

export function CartContextProvider({children}: {children: React.ReactNode;}) {
    const [cart, setCart] = useState<ICartItems[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const localCartItems = loadLocalStorage();
        setCart(localCartItems);
        setLoading(false);
    }, []);

    const addProductToCart = useCallback((product: IProduct) => {
        setCart(prevCart => {
            const alreadyInShoppingCart = prevCart.find((item) => item.product.id === product.id);
            const cartItem = { product, quantity: 1 };

            if (alreadyInShoppingCart) {
                return prevCart;
            } else {
                return [...prevCart, cartItem];
            }
        });
    }, []);

    const removeProductToCart = useCallback((id: number) => {
        setCart(prevCart => {
            const newShoppingCart = prevCart.filter((item) => item.product.id !== id);
            if (newShoppingCart.length === 0) clearCart();
            return newShoppingCart;
        });
    }, []);

    const hasProductOnCart = useCallback((id: number) => {
        return cart.some((item) => item.product.id === id);
    }, [cart]);

    const updateQuantityProductCart = useCallback((id: number, type: IUpdateTypeQuantityProduct) => {
        setCart(prevCart => {
            return prevCart.reduce((acc, item) => {
                if (item.product.id === id) {
                    let newQuantity = item.quantity;
                    if (type === 'increase') {
                        newQuantity += 1;
                    } else if (type === 'decrease') {
                        newQuantity = Math.max(newQuantity - 1, 0);
                    }
                    if (newQuantity > 0) {
                        acc.push({ ...item, quantity: newQuantity });
                    }
                } else {
                    acc.push(item);
                }
                return acc;
            }, [] as ICartItems[]);
        });
    }, []);

    const getTotalCartValue = useCallback(() => {
        return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    }, [cart]);

    const clearCart = useCallback(() => {
        setCart([]);
        saveLocalStorage([]);
    }, []);

    useEffect(() => {
        if (!loading) {
            saveLocalStorage(cart);
        }
    }, [cart, loading]);

    return (
        <CartContext.Provider value={{ addProductToCart, hasProductOnCart, removeProductToCart, updateQuantityProductCart, getTotalCartValue, clearCart, cart, setCart, loading }}>
            {children}
        </CartContext.Provider>
    );
}
