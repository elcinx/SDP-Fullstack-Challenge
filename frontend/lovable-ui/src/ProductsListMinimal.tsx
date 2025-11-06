import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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

const ProductsListMinimal = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingMockData, setUsingMockData] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    setUsingMockData(false);
    
    try {
      const response = await fetch(`${API_BASE}/api/v1/products`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      // API erişilemezse mock veri kullan
      console.log("API erişilemedi, mock veri kullanılıyor");
      setProducts(MOCK_PRODUCTS);
      setUsingMockData(true);
      setError(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-muted-foreground animate-pulse">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <p className="text-destructive">Error: {error}</p>
        <Button onClick={fetchProducts} variant="outline" size="sm">
          Try Again
        </Button>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <p className="text-muted-foreground">No products.</p>
        <Button onClick={fetchProducts} variant="ghost" size="sm">
          Refresh
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-foreground">Products</h2>
          {usingMockData && (
            <p className="text-xs text-muted-foreground mt-1">Mock veri gösteriliyor</p>
          )}
        </div>
        <Button 
          onClick={fetchProducts} 
          variant="outline" 
          size="sm"
          className="transition-all hover:scale-105"
        >
          Refresh
        </Button>
      </div>
      
      <div className="space-y-3">
        {products.map((product) => (
          <Card 
            key={product.id} 
            className="p-4 flex items-center justify-between transition-all hover:shadow-lg hover:scale-[1.02]"
            style={{ boxShadow: 'var(--shadow-soft)' }}
          >
            <span className="font-medium text-foreground">{product.name}</span>
            <span className="text-lg font-semibold text-primary">
              ${product.price.toFixed(2)}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductsListMinimal;
