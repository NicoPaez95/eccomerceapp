## 🧥 Men's Clothing E-commerce

Welcome to my online store for men's fashion. This web application allows users to explore various product category (pants, t-shirts, sneakers), apply filters, add items to the cart, and go through a full checkout process.

## ✨ Key Features

- Navigation by category and subcategory
- Individual product detail view
- Functional shopping cart
- Checkout integrated with Stripe (mocked)
- Post-purchase thank you page
- Modern and responsive design
- AOS animations and interactive backgrounds with tsParticles
- Clean layered architecture (adapters, domain, app, etc.)

---

## 📁 Project Structure

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
│ └── 📁 icons/ # SVG icons

📂 src/  
├── 📁 adapters/  
│ ├── api/ # HTTP communication  
│ ├── db/ # Database simulation  
│ ├── mocks/ # Mock data  
│ └── payment/ # Stripe integration (placeholder)  
├── 📁 app/  
│ ├── carrito/ # Cart view  
│ ├── checkout/ # Payment flow  
│ │ └── exito/ # Success page after purchase  
│ ├── gracias/ # Thank you page  
│ ├── productos/ # Dynamic route for products  
│ │ └── [category]/[subcategory]/[id]/page.tsx  
│ ├── testboton/  
│ ├── layout.tsx  
│ ├── providers.tsx  
│ ├── page.tsx  
│ ├── error.tsx  
│ └── not-found.tsx  
├── 📁 components/ # Reusable components  
│ └── data/ # Static category data  
├── 📁 config/ # API config  
├── 📁 context/ # Global contexts  
├── 📁 domain/ # Business logic  
│ ├── entities/  
│ ├── errors/  
│ ├── repositories/  
│ └── services/  
├── 📁 hooks/ # Custom hooks  
├── 📁 lib/ # Utilities  
├── 📁 styles/ # Global styles  
├── 📁 types/ # TypeScript typings  
├── .env.local  
├── .gitignore  
├── eslint.config.mjs  
├── next.config.ts  
├── package.json  
├── tsconfig.json  
├── postcss.config.mjs  
└── package-lock.json

---

## 🧩 Technologies Used

- **Next.js**
- **TypeScript**
- **TailwindCSS**
- **AOS (Animate on Scroll)**
- **tsParticles**
- **Stripe (mocked payment flow)**
- **Axios**
- **React Context API**
- **Layered architecture** (Domain, Adapters, etc.)

---

## 🚀 Scripts

npm run dev # Start app in development mode  
npm run build # Build for production  
npm run start # Run production server  
npm run lint # Run linting

## 📘 Available in Spanish

This project is also available in Spanish. You can read it in [README.es.md](README.es.md)

## ⚠️ Note:

Although the file stripe.ts is present in the repository, the payment system is currently mocked for demonstration purposes. Real integration with Stripe is planned but not implemented in this version.

## 🙌 Final Note

I built this project as part of my personal portfolio to showcase my ability to work with modern web technologies, apply clean architecture principles, and deliver attractive and functional experiences from backend to frontend.
