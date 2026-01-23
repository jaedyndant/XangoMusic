'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

/**
 * CartItem interface voor producten in de winkelwagen
 */
interface CartItem {
  id: string
  artist: string
  title: string
  price: number
  type: string
  image: string
  quantity: number
}

/**
 * waarde berekeningen
 */
interface CartContextType {
  cart: CartItem[]
  addToCart: (item: any) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, delta: number) => void
  clearCart: () => void
  totalItems: number
  subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

/**
 * CartProvider om de winkelwagen te beheren
 */
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem('xango-cart')
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (e) {
        console.error("Fout bij het laden van winkelwagen:", e)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('xango-cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product: any) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  }

  const updateQuantity = (id: string, delta: number) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta)
        return { ...item, quantity: newQuantity }
      }
      return item
    }))
  }

  const clearCart = () => setCart([])

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart, 
      totalItems, 
      subtotal 
    }}>
      {children}
    </CartContext.Provider>
  )
}

/**
 * Kustem hoek voor winkelwachun
 */
export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
