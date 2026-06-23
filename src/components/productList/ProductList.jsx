import { useState, useEffect, useCallback  } from "react"
import { useFetch } from "../../hooks/useFetch";

export const ProductList = () => {

  const [url, setUrl] = useState("http://localhost:3000/products");

  const { data : products, loading, error } = useFetch(url);



  return (
    <>
      <button onClick={() => setUrl("http://localhost:3000/products")}>All</button>
      <button onClick={() => setUrl("http://localhost:3000/products?in_stock=true")}>Instock Only</button>
      {
        loading && <p>Loading products...</p>
      }

      {
        error && <p>{error}</p>
      }
      <section>
        {
          products && products.map((product => (
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
