

export const productImageStyles: Record<string, Record<string, string>> = {
  remeras: {
    Chombas: " object-contain  bg-neutral-300  hover:scale-220  transition duration-300 ease-in-out",
    Oversize: " object-contain bg-neutral-300 transform hover:scale-190 hover:-translate-y-2  transition duration-300 ease-in-out",
    Slim:" object-contain bg-neutral-300 transform hover:scale-170 hover:-translate-y-2  transition duration-300 ease-in-out"
  },
  pantalones: {
    Chinos: "object-contain bg-neutral-300 hover:scale-200 -translate-y-12 transition duration-300 ease-in-out",
    Jeans: "object-contain bg-neutral-300 scale-120  hover:scale-140  translate-y-2  transition duration-300 ease-in-out",
    Joggers: "object-contain bg-neutral-300 scale-120 hover:scale-140  translate-y-2  transition duration-300 ease-in-out"
  },
  zapatillas: {
    Tenis: "object-contain bg-neutral-300 transform hover:scale-280 hover:-translate-y-40 hover:translate-x-4  transition duration-300 ease-in-out",
    Trekking: "object-contain bg-neutral-300 transform hover:scale-190 hover:-translate-y-4  transition duration-300 ease-in-out",
    Urbana: "object-contain bg-neutral-300 scale-110 transform  translate-y-[-15px] hover:scale-140 hover:translate-y-[-15px]  transition duration-300 ease-in-out"
  },
  default: {
    default: "object-contain bg-neutral-300"
  }
};