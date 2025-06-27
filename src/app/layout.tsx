// app/layout.tsx
import "../styles/globals.css";
import { CarProvider } from "../context/CarContext";
import { UserProvider } from "../context/UserContext";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <UserProvider>
          <CarProvider>{children}</CarProvider>
        </UserProvider>
      </body>
    </html>
  );
}