import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

import { ModalOrder } from '../../components/modal/index';

export function Cart() {

  const { cart, total, addItemToCart, removeItemCart, qtdProducts } = useContext(CartContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckout = () : void => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      
      <div className="w-full max-w-7xl mx-auto border-4 border-t-0 border-slate-200 p-4">
        <h1 className="font-medium text-2xl text-center my-4 ">Carrinho de Compras🐶🐱🐤</h1>

        <ModalOrder
          isOpen={isModalOpen}
          onClose={closeModal}
        >
        <h2 className='text-xl font-bold mb-4'>Pedido Realizado com Sucesso</h2>
        <button
          className='bg-green-500 text-slate-800 w-full px-4 py-2 mt-4 rounded'
          onClick={closeModal}
        >
          Fechar
        </button>
      </ModalOrder>

        {cart.length === 0 && (
          <div className='flex flex-col items-center justify-center min-w-7xl'>
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
              <span className='float-right'>SubTotal:</span>
              <p>
                {item.total.toLocaleString("pr-BR",{
                  style: "currency",
                  currency: "BRL"
               })}
              </p>
            </strong>

          </section>
        ))}

      </div>

      {cart.length !== 0 && (
        <div className='w-72 mt-4 border-slate-300 border-2 py-2 px-3 float-right mb-10'>
          <p className=''>Quantidade de produtos: {qtdProducts}</p>
          <p className="font-bold  mb-4">Total: {total}</p>
          <button
            onClick={handleCheckout}
            className='rounded-full bg-green-500 border-green-200 border-2 w-full py-1 mb-2'
          >
            Fechar Pedido
          </button>
        </div>
      )}

      
    </div>
  )
}