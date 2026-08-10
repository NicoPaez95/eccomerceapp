## 🧥 E-commerce de Ropa Masculina

Bienvenido a mi tienda online de ropa masculina. Esta aplicacion web permite a los usuarios explorar distintas categorias de productos (pantalones, remeras, zapatillas), aplicar filtros, agregar productos al carrito y realizar el proceso de compra.

## ✨ Caracteristicas principales

Navegacion por categorias y subcategorias.

Visualizacion individual de productos.

Carrito de compras funcional.

Checkout con integracion a Stripe.

Pagina de agradecimiento post-compra.

Dise�o responsive y moderno.

Animaciones con AOS y particulas interactivas con tsParticles.

Arquitectura limpia basada en capas (adapters, domain, app, etc.).

## 📁 Estructura del Proyecto

📂 public/
├── 📁 productos/
│ └── 📁 img/
│ ├── 📁 pantalones/
│ │ ├── chinos/
│ │ ├── jeans/
│ │ └── joggers/
│ ├── 📁 remeras/
│ │ ├── chombas/
│ │ ├── oversize/
│ │ └── slimfit/
│ └── 📁 zapatillas/
├── 📁 resources/
│ └── 📁 icons/ # Íconos SVG

📂 src/
├── 📁 adapters/
│ ├── api/ # Comunicación HTTP
│ ├── db/ # Simulación de base de datos
│ ├── mocks/ # Datos mockeados
│ └── payment/ # Integración con Stripe
├── 📁 app/
│ ├── carrito/ # Vista del carrito
│ ├── checkout/ # Proceso de pago
│ │ └── exito/ # Página de éxito post-compra
│ ├── gracias/
│ ├── productos/ # Ruta dinámica de productos
│ │ └── [categoria]/[subcategoria]/[id]/page.tsx
│ ├── testboton/
│ ├── layout.tsx
│ ├── providers.tsx
│ ├── page.tsx
│ ├── error.tsx
│ └── not-found.tsx
├── 📁 components/ # Componentes reutilizables
│ └── data/ # Datos estáticos de categorías
├── 📁 config/ # Configuración de la API
├── 📁 context/ # Contextos globales
├── 📁 domain/ # Lógica de negocio
│ ├── entities/
│ ├── errors/
│ ├── repositories/
│ └── services/
├── 📁 hooks/ # Custom hooks
├── 📁 lib/ # Utilidades
├── 📁 styles/ # Estilos globales
├── 📁 types/ # Tipados TypeScript
├── .env.local
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── package-lock.json

🧩 Tecnologias utilizadas

Next.js

TypeScript

TailwindCSS

AOS (animaciones)

tsParticles (fondos animados)

Stripe (pagos)

Axios (consumo de APIs)

React Context API

Arquitectura limpia por capas (Domain, Adapters, etc.)

## 🚀 Scripts

npm run dev # Levanta la app en modo desarrollo
npm run build # Compila para produccion
npm run start # Inicia el servidor en produccion
npm run lint # Lint del proyecto

---

## 📘 Disponible en Ingles

Este proyecto está disponible también en Ingles. Podés leer la versión en [README.md](README.md)

---

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Sos libre de usarlo, modificarlo y compartirlo.

---

> ⚠️ Nota: Aunque el archivo `stripe.ts` está presente en el repositorio, el sistema de pagos está simulado (mock) para fines de presentación. La integración real con Stripe está planeada pero no implementada en esta versión.

---

## 🙌 Nota final

Desarrollé este proyecto como parte de mi portafolio, para demostrar mi capacidad para trabajar con tecnologías modernas, aplicar buenas prácticas de arquitectura limpia, y crear experiencias atractivas y funcionales desde el backend hasta el frontend.
