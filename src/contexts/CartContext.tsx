import { ReactNode, createContext, useState } from 'react';
import { ProductsProps } from '../pages/Home';

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemToCart: (newItem: ProductsProps) => void;
  removeItemCart: (product: CartProps) => void;
  total: string;
  qtdProducts: number | undefined;
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
  const [total, setTotal] = useState("");
  const [qtdProducts, setQtdProducts] = useState<number>()

  function addItemToCart(newItem: ProductsProps) {
    const indexItem = cart.findIndex(item => item.id === newItem.id)

    if(indexItem !== -1){
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      totalResultCart(cartList);

      totalProducts(cartList);
      return;
    }

    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price
    }

    setCart(products => [...products, data]);
    totalResultCart([...cart, data]);

    totalProducts([...cart, data]);
  }

  function removeItemCart(product: CartProps) {
    const indexItem = cart.findIndex(item => item.id === product.id);
    
    if(cart[indexItem]?.amount > 1) {
      // Diminuir 1 amount do item
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount - 1;
      cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;

      setCart(cartList);
      totalResultCart(cartList);

      totalProducts(cartList);
      return; // para parar a execução do código, se não ele sai do if e continua removendo o o item diretamente com o código abaixo
    }

    const removeItem = cart.filter(item => item.id !== product.id);
    setCart(removeItem);
    totalResultCart(removeItem);

    totalProducts(removeItem);
  }

  function totalResultCart(items: CartProps[]) {
    let myCart = items;
    let result = myCart.reduce( (acc, obj) => { return acc + obj.total }, 0);
    const resultFormatted = result.toLocaleString("pt-BR", { style: "currency", currency: "BRL"});
    setTotal(resultFormatted);
  }

  function totalProducts(items: CartProps[]) {
    let myCart = items;
    let qtdItem = myCart.reduce( (acc, obj) => { return acc + obj.amount}, 0);
    let qtdItems = qtdItem;
    setQtdProducts(qtdItems);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount: cart.length,
        addItemToCart,
        removeItemCart,
        total,
        qtdProducts
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;