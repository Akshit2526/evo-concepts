import { create } from "zustand";
import { Product } from "@/types/product";

interface CheckoutStore {
  selectedProduct: Product | null;

  quantity: number;

  setProduct: (product: Product) => void;

  setQuantity: (quantity: number) => void;

  increaseQuantity: () => void;

  decreaseQuantity: () => void;

  clearProduct: () => void;
}

export const useCheckoutStore = create<CheckoutStore>((set) => ({
  selectedProduct: null,

  quantity: 1,

  setProduct: (product) =>
    set((state) => ({
      selectedProduct: product,
      quantity: state.quantity,
    })),

  setQuantity: (quantity) =>
    set({
      quantity,
    }),

  increaseQuantity: () =>
    set((state) => ({
      quantity: state.quantity + 1,
    })),

  decreaseQuantity: () =>
    set((state) => ({
      quantity: state.quantity > 1 ? state.quantity - 1 : 1,
    })),

  clearProduct: () =>
    set({
      selectedProduct: null,
      quantity: 1,
    }),
}));