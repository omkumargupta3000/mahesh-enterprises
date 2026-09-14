// For now we are using sample/temporary data instead of MongoDB.
// Later, this will be replaced with real database queries using the Product model.

const sampleProducts = [
  {
    id: 1,
    name: "Face Cream",
    category: "Cosmetics",
    price: 120,
    image: "/images/face-cream.jpg",
  },
  {
    id: 2,
    name: "Toy Car",
    category: "Toys",
    price: 250,
    image: "/images/toy-car.jpg",
  },
  {
    id: 3,
    name: "Notebook Set",
    category: "Stationery",
    price: 90,
    image: "/images/notebook-set.jpg",
  },
  {
    id: 4,
    name: "Diwali Diya Set",
    category: "Seasonal",
    price: 180,
    image: "/images/diya-set.jpg",
  },
];

// GET /api/products
export const getProducts = (req, res) => {
  res.json(sampleProducts);
};
