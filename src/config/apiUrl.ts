// src/constants/apiUrl.ts

const isServer = typeof window === "undefined";

export const API_URL = isServer
  ? process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"
  : "/api";
