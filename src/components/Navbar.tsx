// src/components/NavBar.tsx
import Link from "next/link";
import { useCart } from "../hooks/useCart";
//this script is used to show the navbar/este script se usa para mostrar la barra de navegación
const NavBar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow bg-white sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold text-blue-600">
        MiTienda
      </Link>
      <div className="flex gap-4 items-center">
        <Link href="/productos" className="hover:underline">
          Productos
        </Link>
        <Link href="/carrito" className="relative">
          🛒
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
