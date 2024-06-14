import { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

import { api } from "../../services/api";

interface ProductsProps {
  id: string;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  
  useEffect(() => {
    async function getProducts() {
      const resposta = await api.get("/products");
      setProducts(resposta.data)
    }

    getProducts();
  }, []);

  return(
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto pb-8">
        <h1 className="text-2xl font-bold text-center mt-10 mb-7" >Seleção de produtos</h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          
          {products.map( (productItem) => (
            <section key={productItem.id} className="w-full border-2 border-slate-500 rounded-lg px-1 py-4 bg-gray-100">
            <Link to="/">
              <img
                className="w-full rounded-xl mb-2 border-2 border-gray-200/30"
                src={productItem.cover}
                alt={productItem.title}
              />
            <p className="font-medium mt-1 mb-2 text-center">{productItem.title}</p>
            </Link>

            <div className="flex gap-2 items-center justify-center">
              <strong>
                {productItem.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
              </strong>
              
              <button className="bg-green-800 rounded-xl p-1.5 border-2 border-green-500">
                <BsCart3 size={18} color="#FFF"/>
              </button>
            </div>

          </section>
          ))}
          

        </div>
      </main>
    </div>
  )
}