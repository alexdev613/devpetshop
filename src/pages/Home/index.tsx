import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

export function Home() {
  return(
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto ">
        <h1 className="text-2xl font-bold text-center mt-10 mb-7" >Seleção de produtos</h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          
          <section className="w-full border-2 border-slate-500 rounded-lg px-1 py-4 bg-gray-100">
            <Link to="/">
              <img
                className="w-full rounded-xl mb-2 border-2 border-gray-200/30"
                src="https://sujeitoprogramador.com/wp-content/uploads/2023/06/racao4.png"
                alt=""
              />
            <p className="font-medium mt-1 mb-2 text-center">Ração Royal Canin 10kg</p>
            </Link>

            <div className="flex gap-2 items-center justify-center">
              <strong>R$ 21,90</strong>
              <button className="bg-green-800 rounded-xl p-1.5 border-2 border-green-500">
                <BsCart3 size={18} color="#FFF"/>
              </button>
            </div>

          </section>
          

        </div>
      </main>
    </div>
  )
}