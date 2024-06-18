import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

export function Cart() {

  const { cart, total, addItemToCart, removeItemCart, } = useContext(CartContext);

  return (
    <div className="w-full max-w-7xl mx-auto border-4 border-slate-200 min-h-screen p-4">
      <h1 className="font-medium text-2xl text-center my-4 ">Carrinho de Compras🐶🐱🐤</h1>

      {cart.length === 0 && (
        <div className='flex flex-col items-center justify-center'>
          <p className='font-medium'>Ops, o seu carrinho está vazio...</p>
          <Link
            to="/"
            className='bg-slate-600 my-3 px-3 py-1 text-white font-medium rounded'
          >
            Acessar Produtos
          </Link>
        </div>
      )}

      {cart.map((item) => (
        <section key={item.id} className="flex items-center justify-between border-b-2 border-gray-300">
          <div>
            <img
              src={item.cover}
              alt={item.title}
              className="w-28"
            />
            <p className='w-10 py-3 text-center text-nowrap text-sm'>{item.title}</p>

          </div>
          <strong className='text-center'>Preço Un: <br />
            {item.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            })}
          </strong>

        <div className="flex items-center justify-center gap-3">
          <button
            className="bg-slate-600 w-6 h-6 rounded text-white font-medium flex items-center justify-center"
            onClick={ () => removeItemCart(item) }
          >
            -
          </button>
          <span className="font-normal text-center">
            {item.amount}
          </span>
          <button
            className="bg-slate-600 w-6 h-6 rounded text-white font-medium flex items-center justify-center"
            onClick={ () => addItemToCart(item) }
          >
            +
          </button>
        </div>

        <strong className="float-right text-justify">
          <span className='float-right'>SubTotal:</span><br />
          {item.total.toLocaleString("pr-BR",{
            style: "currency",
            currency: "BRL"
          })}
        </strong>

      </section>
      ))}

      {cart.length !== 0 && <p className="font-extrabold mt-8">Total: {total}</p>}
    </div>
  )
}