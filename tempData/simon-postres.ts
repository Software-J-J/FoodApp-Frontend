import { DataBussiness } from '../libs/types'

export const simonPostres: DataBussiness = {
  id: 1,
  name: 'Simon Postres',
  urlTag: 'simon-postres',
  colors: [],
  logoUrl: '/logoLocal.png',
  backgroundMenu: '/alfajores.jpg',
  address: 'Av Almafuerte 1234',
  phone: '+5493435942032',
  filters: [
    {
      id: 1,
      name: 'Postres',
    },
  ],
  products: [
    {
      id: 1,
      name: 'Alfajor de Maicena',
      description:
        'Clásico alfajor argentino con dos tapas de maicena rellenas de dulce de leche y baño de chocolate',
      price: 1500,
      image: '/simpo/alfmaicena.png',
      category: 'Postres',
      status: true,
    },
    {
      id: 2,
      name: 'Chocotorta',
      description:
        'Torta fría a base de galletas de chocolate, dulce de leche, queso crema y vainillín',
      price: 2000,
      image: '/simpo/chocotor.png',
      category: 'Postres',
      status: true,
    },
    {
      id: 3,
      name: 'Mousse de Dulce de Leche',
      description: 'Delicioso mousse de dulce de leche con base de bizcochuelo',
      price: 1800,
      image: '/simpo/mousseddl.png',
      category: 'Postres',
      status: true,
    },
    {
      id: 4,
      name: 'Flan con Dulce de Leche',
      description: 'Tradicional flan casero con abundante dulce de leche',
      price: 1200,
      image: '/simpo/flan-de-dulce-de-leche-foto-prin.png',
      category: 'Postres',
      status: false,
    },
    {
      id: 5,
      name: 'Lemon Pie',
      description: 'Clásico lemon pie con merengue italiano',
      price: 1600,
      image: '/simpo/lemon-pie-clasica-con-tips-foto.png',
      category: 'Postres',
      status: false, // Ejemplo de un postre no status
    },
    {
      id: 6,
      name: 'Torta Rogel',
      description:
        'Clásica torta argentina con capas de masa filo, dulce de leche y merengue',
      price: 2500,
      image: '/simpo/torta-rogel-facil-y-sin-horno-fo.png',
      category: 'Postres',
      status: true,
    },
    {
      id: 7,
      name: 'Pastafrola',
      description: 'Tarta rellena de dulce de membrillo',
      price: 1800,
      image: '/simpo/pastafrola-foto-principal.png',
      category: 'Postres',
      status: true,
    },
    {
      id: 8,
      name: 'Budín de Pan',
      description:
        'Postre húmedo a base de pan duro, leche, huevos y frutas secas',
      price: 1500,
      image: '/simpo/budin-de-pan-tradicional-clasico.png',
      category: 'Postres',
      status: true,
    },
    {
      id: 9,
      name: 'Arroz con Leche',
      description: 'Postre cremoso a base de arroz, leche y canela',
      price: 1200,
      image: '/simpo/arroz-con-leche-me-quiero-casar.png',
      category: 'Postres',
      status: true,
    },
    {
      id: 10,
      name: 'Flan Mixto',
      description: 'Flan tradicional con una capa de dulce de leche',
      price: 1300,
      image: '/simpo/flan-de-dulce-de-leche-mixto-fot.png',
      category: 'Postres',
      status: true,
    },
  ],
}

export const business = [
  {
    id: 1,
    name: 'McDonalds',
    link: 'mc-donalds',
  },
  {
    id: 2,
    name: 'Postres Dou',
    link: 'dou-postres',
  },
]
