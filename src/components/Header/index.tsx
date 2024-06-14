import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export function Header() {
  return (
    <header className="w-full px-4 bg-slate-200 ">
      <nav className="flex items-center max-w-7xl h-14 justify-between px-5 mx-auto">
        <Link to="/" className="font-bold text-2xl">
          <h1>PetShop Dev</h1>
        </Link>

        <Link to="/carrinho" className="relative">
          <FiShoppingCart size={24} color="#121212" />
          <span className="absolute -top-3 -right-4 bg-green-700 rounded-full w-6 h-6 flex items-center justify-center text-white">
            12
          </span>
        </Link>

      </nav>
    </header>
  )
}