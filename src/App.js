import { useState, useEffect } from 'react'
import Products from "./components/Products";

/*
const productArray = [
  {
    name: "Shampoo",
    description: "this is a shampoo",
    stock: 12,
    price: 9.99,
  },
  {
    name: "Bodylotion",
    description: "this is a bodylotion",
    stock: 150,
    price: 4.99,
  }
]
*/

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts()
      setProducts(productsFromServer)
    }

    getProducts()
  }, [])

  //fetch products from json server
  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json()
    return data
  }



  return (
    <div className="App">
      <Products products={products} />
    </div>
  );
}

export default App;
