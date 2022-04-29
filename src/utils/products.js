const productos = [
  {
    id: "1",
    type: "drink",
    category:"drinks",
    name: "Café Caliente",
    price: '$100',
    description: "Descripcion del producto 1",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "2",
    type: "drink",
    category:"drinks",
    name: "Café Helado",
    price: '$200',
    description: "Descripcion del producto 2",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "3",
    type: "drink",
    category:"drinks",
    name: "Frappuccinos",
    price: '$300',
    description: "Descripcion del producto 3",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "4",
    type: "drink",
    category:"drinks",
    name: "Refreshers",
    price: '$400',
    description: "Descripcion del producto 4",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "5",
    type: "drink",
    category:"drinks",
    name: "Té",
    price: '$500',
    description: "Descripcion del producto 5",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "6",
    type: "drink",
    name: "Cold Brew",
    price: '$600',
    description: "Descripcion del producto 6",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "7",
    type: "drink",
    category:"drinks",
    name: "Chocolate",
    price: '$600',
    description: "Descripcion del producto 7",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "8",
    type: "drink",
    category:"togoout",
    name: "Parfrait Frutos Rojos",
    price: '$600',
    description: "Descripcion del producto 8",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "9",
    type: "drink",
    category:"togoout",
    name: "Limonada de Coco",
    price: '$600',
    description: "Descripcion del producto 9",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "10",
    type: "drink",
    category:"togoout",
    name: "Aloe Vera",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "11",
    type: "drink",
    category:"togoout",
    name: "Agua San Pellegrino",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "12",
    type: "drink",
    category:"togoout",
    name: "Agua Manantial con gas",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "13",
    type: "drink",
    category:"togoout",
    name: "Agua Manantial",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "14",
    type: "drink",
    category:"togoout",
    name: "Jugo de Mandarina",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "15",
    type: "drink",
    category:"togoout",
    name: "Jugo de Mandarina",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "16",
    type: "food",
    category:"bakery",
    name: "Rolo de Canela",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "17",
    type: "food",
    category:"bakery",
    name: "Pastel de Carne",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "18",
    type: "food",
    category:"bakery",
    name: "Pan de Queso",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "19",
    type: "food",
    category:"bakery",
    name: "Palmerita Roll",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "20",
    type: "food",
    category:"bakery",
    name: "Napolitana Cacao",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "21",
    type: "food",
    category:"bakery",
    name: "Muffin de Chocolate",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "22",
    type: "food",
    category:"bakery",
    name: "Muffin de Banano",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "23",
    type: "food",
    category:"bakery",
    name: "Muffin de Arándanos",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "24",
    type: "food",
    category:"bakery",
    name: "Malla Mixtao",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "25",
    type: "food",
    category:"bakery",
    name: "Donut Frutos Rojos",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "26",
    type: "food",
    category:"bakery",
    name: "Donut Caramelo",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "27",
    type: "food",
    category:"bakery",
    name: "Croissant Cereales",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "28",
    type: "food",
    category:"bakery",
    name: "Croissant Mantequilla",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "29",
    type: "food",
    category:"bakery",
    name: "Croissant Mantequilla Jamón y Queso",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "30",
    type: "food",
    category:"bakery",
    name: "Croissant Cereales Pavo",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "31",
    type: "food",
    category:"bakery",
    name: "Croissant Almendras",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "32",
    type: "food",
    category:"bakery",
    name: "Arepa con Queso",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "33",
    type: "food",
    category:"bakery",
    name: "Almojábana Tradicional",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "34",
    type: "food",
    category:"bakery",
    name: "Almojábana Tradicional",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "35",
    type: "food",
    name: "Wrap Pollo Chipotle",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "36",
    type: "food",
    category:"panini",
    name: "Panini Pavo",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "37",
    type: "food",
    category:"panini",
    name: "Panini Milano",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "38",
    type: "food",
    category:"panini",
    name: "Panini Huevo",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "39",
    type: "food",
    category:"panini",
    name: "Panini Clásico",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "40",
    type: "food",
    category:"package food",
    name: "Queso Pera",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "41",
    type: "food",
    category:"package food",
    name: "Piccato Arandanos",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "42",
    type: "food",
    category:"package food",
    name: "Moneda de Chocolate",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "43",
    type: "food",
    category:"package food",
    name: "Galleta Chocochips",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "44",
    type: "food",
    category:"package food",
    name: "Galleta Avena de Manzana",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "45",
    type: "food",
    category:"package food",
    name: "Galleta Avena",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "46",
    type: "food",
    category:"package food",
    name: "Cake Pops",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
  {
    id: "47",
    type: "food",
    category:"package food",
    name: "Brownie",
    price: '$600',
    description: "Descripcion del producto 10",
    image: "https://random.imagecdn.app/240/240",
    stock: "10"
  },
]

export default productos;