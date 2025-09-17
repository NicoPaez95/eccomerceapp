// src/app/not-found.tsx
//this is script is used to show the 404 page/este script se usa para mostrar la pagina 404
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Página no encontrada</h1>
      <Link href="/">Volver al inicio</Link> 
    </div>
  );
}


