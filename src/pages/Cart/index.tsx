export function Cart() {
  return (
    <div className="w-full max-w-7xl mx-auto border-4 border-slate-200 min-h-screen p-4">
      <h1 className="font-medium text-2xl text-center my-4">Carrinho de Compras🐶🐱🐤</h1>

      <section className="flex items-center justify-between border-b-2 border-gray-300">
        <img src="https://sujeitoprogramador.com/wp-content/uploads/2023/06/brinq4.png" alt="logo" className="w-28"/>
        <strong>Preço: R$ 1000</strong>

        <div className="flex items-center justify-center gap-3">
          <button className="bg-slate-600 w-6 h-6 rounded text-white font-medium flex items-center justify-center">
            -
          </button>
          <span className="font-normal text-center">
            1
          </span>
          <button className="bg-slate-600 w-6 h-6 rounded text-white font-medium flex items-center justify-center">
            +
          </button>
        </div>

        <strong className="float-right">
          SubTotal: R$ 1000
        </strong>

      </section>

      <p className="font-bold mt-4">Total: R$ 1000</p>
    </div>
  )
}