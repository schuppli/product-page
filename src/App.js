import { useState, useEffect } from 'react'
import Products from "./components/Products";


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

  //DeleteProduct
  const deleteProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
    })
    res.status === 200
      ? setProducts(products.filter((product) => product.id != id))
      : alert('Error Deleting This Task')
  }

  return (
    <div className="App">
      <Products products={products} onDelete={deleteProduct} />
    </div>
  );
}

export default App;
