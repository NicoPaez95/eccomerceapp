// src/constants/apiUrl.ts
const isServer = typeof window === "undefined";
//this is script used to show the api url/este script se usa para mostrar la url de la api
export const API_URL = isServer
  ? process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"
  : "/api";
