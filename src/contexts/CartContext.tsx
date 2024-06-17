import { ReactNode, createContext, useState } from 'react';
import { ProductsProps } from '../pages/Home';

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemToCart: (newItem: ProductsProps) => void;
}

interface CartProps {
  id: string;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface ProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({children}: ProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);

  function addItemToCart(newItem: ProductsProps) {
    const indexItem = cart.findIndex(item => item.id === newItem.id)

    if(indexItem !== -1){
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      return;

    }

    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price
    }

    setCart(products => [...products, data])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount: cart.length,
        addItemToCart,

      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;