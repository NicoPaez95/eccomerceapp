import "../globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white">
        <header className="p-4 shadow-md bg-gray-100 dark:bg-gray-900">
          <nav className="flex justify-center gap-8">
            <a href="/" className="hover:underline">Home</a>
            <a href="/products" className="hover:underline">Products</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </header>
        <main className="p-8 min-h-[80vh]">{children}</main>
        <footer className="p-4 text-center text-sm border-t dark:border-gray-700">© 2025 Mi Ecommerce</footer>
      </body>
    </html>
  );
}



// src/app/products/page.tsx
export default function Products() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2">Productos</h1>
      <p>Acá iría una grilla de productos o cards.</p>
    </div>
  );
}

// src/app/about/page.tsx
export default function About() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2">Sobre Nosotros</h1>
      <p>Somos una tienda dedicada a ofrecer lo mejor para vos.</p>
    </div>
  );
}

// src/app/contact/page.tsx
export default function Contact() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2">Contacto</h1>
      <p>Escribinos a contacto@mitienda.com o completá el formulario.</p>
    </div>
  );
}
