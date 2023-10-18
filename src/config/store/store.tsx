import { create } from 'zustand'
import axios from "axios";
import { useState, useEffect } from 'react'



interface CartItem {
    productId: number;
    quantity: number;
  }
  
  interface CartEntry {
    date: string;
    id: number;
    products: CartItem[];
  }




export const useCartStore = create((set) => ({
  cartList: [],
  successLoad:false,
  setCartList: (newCartList:any) => set(() => ({cartList: newCartList})),
  setSuccessLoad: (isSucces:boolean) => set(() => ({successLoad:isSucces}))
}))