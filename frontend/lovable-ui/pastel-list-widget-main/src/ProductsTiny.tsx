import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

const API_BASE = import.meta.env.VITE_API_BASE || "http://127.0.0.1:4000";

const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: "Kupa", price: 45.00 },
  { id: 2, name: "Defter", price: 32.50 },
  { id: 3, name: "Kalem Seti", price: 89.90 },
  { id: 4, name: "Çanta", price: 125.00 },
];

export const ProductsTiny = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/v1/products`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.log("API erişilemedi, mock veri kullanılıyor");
        setProducts(MOCK_PRODUCTS);
        setLoading(false);
        setError(null);
      }
    };
    
    fetchProducts();
  }, []);

  if (loading) {
    return <p style={{ padding: "20px" }}>Loading…</p>;
  }

  if (error) {
    return <p style={{ padding: "20px", color: "red" }}>Error: {error}</p>;
  }

  if (products.length === 0) {
    return <p style={{ padding: "20px" }}>No products.</p>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Products</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
            <span>{product.name}</span>
            <span style={{ float: "right", fontWeight: "bold" }}>
              ${product.price.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
