import { create } from 'zustand';

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

interface CartStore {
    cart: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
    totalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
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
}));