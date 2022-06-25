export const products = [
  {
    id: "1",
    name: "Calça Cirrê Tratorada Ziper",
    price: 119.99,
    discount: 30,
    quantityAvailable: 2,
    category: "Calças",
    currentPrice: 89.99,
    sizes: ["xl", "l"],
    colors: ["#FFF"],
    images: [
      "/images/products/IMG01_CALCA-CIRRE-TRATORADA-ZIPER.png",
      "/images/products/IMG02_CALCA-CIRRE-TRATORADA-ZIPER.png",
    ],
    punctuation: {
      countOpinions: 10,
      punctuation: 5,
      votes: [
        {
          value: 1,
          count: 0,
        },
        {
          value: 2,
          count: 0,
        },
        {
          value: 3,
          count: 0,
        },
        {
          value: 4,
          count: 0,
        },
        {
          value: 5,
          count: 10,
        },
      ],
    },
    reviews: [
      {
        name: "John Doe",
        avatar: "/images/featured-1.jpg",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>",
        punctuation: 2,
      },
    ],
  },
];

export default products;
