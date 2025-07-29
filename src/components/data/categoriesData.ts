//src/components/data/categoriesData.ts
//aqui agrego las imagenes de las categorias en miniatura


// src/components/data/categoriesData.ts
export const categories = [
  {
    label: 'remeras',
    subcategories: [
      { name: 'Chombas', href: '/productos/remeras/chombas', imageSrc: '/productos/img/remeras/chombas/catchombas.png' },
      { name: 'Overzize', href: '/productos/remeras/oversize', imageSrc: '/productos/img/remeras/oversize/catoversize.png' },
      { name: 'Slim', href: '/productos/remeras/slim', imageSrc: '/productos/img/remeras/slimfit/catslim.png' },
    ],
  },
  {
    label: 'pantalones',
    subcategories: [
      { name: 'Chinos', href: '/productos/pantalones/chinos', imageSrc: '/productos/img/pantalones/chinos/catchinos.png' },
      { name: 'Jeans', href: '/productos/pantalones/jeans', imageSrc: '/productos/img/pantalones/jeans/catjeans.png' },
      { name: 'Joggers', href: '/productos/pantalones/joggers', imageSrc: '/productos/img/pantalones/joggers/catjoggers.png' },
    ],
  },
  {
    label: 'zapatillas',
    subcategories: [
      { name: 'tenis', href: '/productos/zapatillas/tenis', imageSrc: '/productos/img/zapatillas/tenis/cattenis.png' },
      { name: 'trekking', href: '/productos/zapatillas/trekking', imageSrc: '/productos/img/zapatillas/trekking/cattrekking.png' },
      { name: 'urbana', href: '/productos/zapatillas/urbana', imageSrc: '/productos/img/zapatillas/urbana/caturbana.png' },
    ],
  },
];
