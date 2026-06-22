import { useState, useEffect, useCallback  } from "react"

export const ProductList = () => {

  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/products");

  const fetchProducts = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  },[url]) 

  useEffect(() =>{
  fetchProducts();
  },[fetchProducts]);

  return (
    <>
      <button onClick={() => setUrl("http://localhost:3000/products")}>All</button>
      <button onClick={() => setUrl("http://localhost:3000/products?in_stock=true")}>Instock Only</button>
      <section>
        {
          products.map((product => (
            <div key={product.id} className="card">
              <p className="id">{product.id}</p>
              <p className="name">{product.name}</p>
              <p className="info">
                <span>{product.price}</span>
                <span className={product.in_stock ? 'instock' : 'unavailable'}>${product.in_stock ? 'InStock' : 'Unavailable'}</span>
              </p>
            </div>
          )))
        }
      </section>
    </>
  )
}
