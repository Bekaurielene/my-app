import { useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      id: 1,
      title: "iPhone 15",
      price: 3000,
      category: "Electronics",
    },
    {
      id: 2,
      title: "T-Shirt",
      price: 50,
      category: "Clothing",
    },
    {
      id: 3,
      title: "Laptop",
      price: 4500,
      category: "Electronics",
    },
    {
      id: 4,
      title: "Shoes",
      price: 200,
      category: "Clothing",
    },
  ];

  function addToCart() {
    setCartCount(cartCount + 1);
  }

  return (
    <>
      <h1>კალათა: {cartCount} ნივთი</h1>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          category={product.category}
          addToCart={addToCart}
        />
      ))}
    </>
  );
}

export default App;