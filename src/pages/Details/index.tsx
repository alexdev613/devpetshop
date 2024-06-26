import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { ProductsProps } from '../Home';

import { CartContext } from '../../contexts/CartContext';

import { BsCart3 } from 'react-icons/bs';
import toast from 'react-hot-toast';

export function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductsProps>();

  const navigate = useNavigate();

  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await api.get(`/products/${id}`);
        if (response.data) {
          setProduct(response.data);
        } else {
          navigate("*");
        }
      } catch (error) {
        navigate("*")
      }
    }

    getProduct()
  }, [id]);

  function handleAddCartItem(product: ProductsProps) {
    toast.success("Produto adicionado no carrinho. 🐾", {
      style: {
        borderRadius: 10,
        backgroundColor: "rgb(0, 125, 33)",
        fontWeight: 600,
        color: "navy",
        height: 48
      }
    })
    addItemToCart(product)

    navigate("/carrinho");
  }

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto my-6">
        <h1 className='font-bold text-center text-2xl'>Detalhes do Produto {product?.id}</h1>
        
        {product && (
          <section className='w-full'>
            <div className='flex flex-col lg:flex-row'>
              <img
                className='flex-1 w-full max-h-72 object-contain'
                src={product.cover}
                alt={product.title}
              />

              <div className='flex-1'>
                <h1 className='font-bold text-xl mt-4 mb-2'>{product.title}</h1>
                <p className='my-4 text-justify'>{product.description}</p>
                <div className='gap-2 flex flex-col sm:items-start items-center'>
                  <strong >
                    {product.price.toLocaleString("pt-BR", {
                      style: "currency", currency: "BRL"
                    })}
                  </strong>
                  <button
                    className=" bg-green-900 rounded-xl px-4 py-1 border-2 border-green-300 flex items-center hover:bg-green-700"
                    onClick={ () => handleAddCartItem(product) }
                  >
                    <span className='text-white mr-2'>Adicionar</span>
                    <BsCart3 size={20} color="#FFF"/>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
        
      </main>  
    </div>
  )
}