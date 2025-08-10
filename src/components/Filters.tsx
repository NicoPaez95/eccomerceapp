'use client';
// src/components/Filters.tsx
//this script is used to show the filters/este script se usa para mostrar los filtros
interface Props {
  priceRange: { min: string; max: string };
  setPriceRange: (range: { min: string; max: string }) => void;
  setSortOrder: (order: 'asc' | 'desc' | '') => void;
}

export default function Filters({ priceRange, setPriceRange, setSortOrder }: Props) {
  return (
    <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-4 rounded-xl shadow-md shadow-yellow-900/20">
      <select
        className="bg-neutral-900 text-yellow-200 border border-yellow-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 transition"
        onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
      >
        <option value="">Ordenar por</option>
        <option value="asc">Menor precio</option>
        <option value="desc">Mayor precio</option>
      </select>

      <div className="flex gap-3 items-center">
        <input
          type="number"
          placeholder="Desde"
          className="bg-neutral-900 text-yellow-200 border border-yellow-700 p-2 rounded-lg w-24 focus:outline-none focus:ring-2 focus:ring-yellow-600 transition"
          value={priceRange.min}
          onChange={(e) =>
            setPriceRange({ ...priceRange, min: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Hasta"
          className="bg-neutral-900 text-yellow-200 border border-yellow-700 p-2 rounded-lg w-24 focus:outline-none focus:ring-2 focus:ring-yellow-600 transition"
          value={priceRange.max}
          onChange={(e) =>
            setPriceRange({ ...priceRange, max: e.target.value })
          }
        />
      </div>
    </div>
  );
}

