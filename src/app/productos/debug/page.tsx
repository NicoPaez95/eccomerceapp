'use client';

import { mockVisualProducts } from '@/adapters/mocks/mockVisualProducts';

export default function DebugProducts() {
  console.log('mockVisualProducts:', mockVisualProducts);

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl mb-4">Debug Productos</h1>
      {mockVisualProducts.length === 0 ? (
        <p>No hay productos en mockVisualProducts</p>
      ) : (
        <ul className="space-y-3">
          {mockVisualProducts.map((p) => (
            <li key={p.id} className="border p-3 rounded bg-gray-800">
              <strong>{p.name}</strong> - {p.category}/{p.subcategory} (${p.price})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
