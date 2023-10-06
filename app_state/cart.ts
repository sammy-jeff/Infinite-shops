"use client"
import { useEffect } from "react";
import { create } from "zustand";

export const useCart = create((set) => ({
  cartVisibility:false,
  cart: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart') || '[]') : [],
  openCart:()=>set((state:any)=>({cartVisibility:true})),
  closeCart:()=>set((state:any)=>({cartVisibility:false})),
  increment: (payload:any) =>
  set((state:any) => {
    const updatedCart = state.cart.map((item:any) => {
      if (item._id === payload._id) {
        item.quantity += 1;
        item.subTotal = item.quantity * item.price;
      }
      return item;
    });
    return {
      cart: updatedCart,
    };
  }),
decrement: (payload:any) =>
  set((state:any) => {
    const updatedCart = state.cart.map((item:any) => {
      if (item._id === payload._id) {
        item.quantity = item.quantity <= 1 ? 1 : item.quantity - 1;
        item.subTotal = item.quantity * item.price;
      }
      return item;
    });

    return {
      cart: updatedCart,
    };
  }),

  addToCart: (payload:any) =>
    set((state:any) => {
      // check if a particular product has already been added
      const checkExistingProduct = state.cart.findIndex((item:any)=>item?._id===payload?._id)
      if (checkExistingProduct===-1) {
        // product doesn't exist so it has to be added to the cart
        return {
          cart:[...state?.cart,payload]
        }
      }
      // do nothing if the product exists
      return {
        cart:[...state?.cart]
      }
    }),
  removeItem: (id:any) =>
    set((state:any) => {
      return {
        cart: state.cart.filter((item:any) => item._id !== id),
      }
    }),
  clearCart: () => {
    localStorage.removeItem('cart')
    set({ cart: [] })
  },
}));


// Persist the cart state even after page refresh
export const useCartLocalStorage = (cart:any)=>{
  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])
}