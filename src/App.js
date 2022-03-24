import { useState, useEffect } from 'react'
import Products from "./components/Products";
import AddProduct from './components/AddProduct';

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

  //delete a product
  const deleteProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
    })
    res.status === 200
      ? setProducts(products.filter((product) => product.id != id))
      : alert('Error Deleting This Task')
  }

  //add a new product
  const addProduct = async (product) => {
    const res = await fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(product),
    })

    const data = await res.json()

    setProducts([...products, data])
  }

  return (
    <div className="App">
      
      <Products products={products} onDelete={deleteProduct} />
      <AddProduct onAdd={addProduct} />
    </div>
  );
}

export default App;
