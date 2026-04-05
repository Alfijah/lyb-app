import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    img: string;
}

interface CartStore {
    cart: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
    totalPrice: () => number;
    isCartOpen: boolean;
    setIsCartOpen: (open: boolean) => void;
    toggleCart: () => void;
    updateQuantity: (id: string, delta: number) => void;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            cart: [],
            addItem: (item) => {
                const currentCart = get().cart;
                const existingItem = currentCart.find((i) => i.id === item.id);

                if (existingItem) {
                    set({
                        cart: currentCart.map((i) =>
                            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                        ),
                    });
                } else {
                    set({ cart: [...currentCart, { ...item, quantity: 1 }] });
                }
            },
            removeItem: (id) => set({ cart: get().cart.filter((i) => i.id !== id) }),
            clearCart: () => set({ cart: [] }),
            totalPrice: () => get().cart.reduce((total, item) => total + item.price * item.quantity, 0),
            isCartOpen: false,
            setIsCartOpen: (open) => set({ isCartOpen: open }),
            toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
            updateQuantity: (id, delta) => {
                const cart = get().cart;
                const updatedCart = cart.map(item =>
                    item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
                );
                set({ cart: updatedCart });
            },
        }),
        {
            name: 'lyb-cart-storage', // Unieke naam voor de sleutel in localStorage
            storage: createJSONStorage(() => localStorage), // Gebruik de browser localStorage
        }
    )
);