'use client';
// /src/app/providers.tsx
import { ReactNode } from 'react';
import { CarProvider } from '@/context/CarContext';
export function Providers({ children }: { children: ReactNode }) {
  return <CarProvider>{children}</CarProvider>;
}
