// src/app/layout.tsx
import "../styles/globals.css";
import { CarProvider } from "../context/CarContext";
import { UserProvider } from "../context/UserContext";
import { ReactNode } from "react";
//this is the root layout/este es el layout principal
// src/app/layout.tsx
// src/app/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-screen h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <UserProvider>
          <CarProvider>
            <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black"> {/* ← Gradiente también aquí */}
              {children}
            </div>
          </CarProvider>
        </UserProvider>
      </body>
    </html>
  );
}