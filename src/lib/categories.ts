export interface Category {
    id: string;
    name: string;
    subcategories: Subcategory[];
  }
  
  export interface Subcategory {
    id: string;
    name: string;
  }
  
  export const categories: Category[] = [
    {
      id: "electronics",
      name: "Electrónica",
      subcategories: [
        { id: "smartphones", name: "Teléfonos" },
        { id: "laptops", name: "Portátiles" },
        { id: "tvs", name: "Televisores" },
      ],
    },
    {
      id: "clothing",
      name: "Ropa",
      subcategories: [
        { id: "men", name: "Hombre" },
        { id: "women", name: "Mujer" },
        { id: "kids", name: "Niños" },
      ],
    },
    {
      id: "home",
      name: "Hogar",
      subcategories: [
        { id: "furniture", name: "Muebles" },
        { id: "decor", name: "Decoración" },
        { id: "kitchen", name: "Cocina" },
      ],
    },
  ];