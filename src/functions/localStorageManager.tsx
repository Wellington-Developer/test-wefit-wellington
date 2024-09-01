const localStorageProductsKey = 'cart-itens'

export const saveLocalStorage = (value: any) =>
  localStorage.setItem(localStorageProductsKey, JSON.stringify(value))

export const loadLocalStorage = () => {
  if (typeof window === 'undefined') return []

  const storedCartItems = localStorage.getItem(localStorageProductsKey)

  if (storedCartItems && storedCartItems !== 'undefined')
    return JSON.parse(storedCartItems)

  return []
}