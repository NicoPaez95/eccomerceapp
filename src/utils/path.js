// src/utils/paths.js
export const getImagePath = (path) => {
  // Remover slash inicial duplicado
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // EN PRODUCCIÓN también necesitamos agregar /shop manualmente
  // porque Next.js no aplica basePath a imágenes estáticas en next start
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
    return `/shop${cleanPath}`;
  }
  
  return cleanPath;
};