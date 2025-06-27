// app/checkout/page.tsx
'use client';
import { useCart } from '../../hooks/useCart';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const handleCheckout = async () => {
    // Aquí podrías integrar Stripe u otro sistema de pago
    console.log("Procesando pago...");
    clearCart();
    router.push("/gracias");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Finalizar compra</h1>
      <p>Total a pagar: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</p>
      <button onClick={handleCheckout} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
        Confirmar pago
      </button>
    </div>
  );
}