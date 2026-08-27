// src/utils/path.ts

/**
 * Retorna la ruta formateada para recursos estáticos agregando el prefijo base.
 * @param path Ruta del recurso (ej: "productos/img/remera.webp")
 * @returns Ruta normalizada con prefijo /shop
 */
export const getImagePath = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/shop${cleanPath}`;
};