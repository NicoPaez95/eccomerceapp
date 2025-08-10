'use client';
// src/components/BackButton.tsx
//this script is used to show the back button/este script se usa para mostrar el botón de volver
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

export default function BackButton({ fallbackUrl }: { fallbackUrl?: string }) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 2) {
      router.back();
    } else if (fallbackUrl) {
      router.push(fallbackUrl);
    } else {
      router.push('/');
    }
  };

  return (
    <button
      onClick={handleBack}
      className="fixed top-5 left-5 z-50 p-2 rounded-full bg-black bg-opacity-50 shadow-md hover:bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] transition-colors duration-200"
      aria-label="Volver"
    >
      <Image
        src="/resources/icons/btnback.svg"
        alt="Volver"
        width={40}
        height={40}
        className="invert"
      />
    </button>
  );
}
