import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: "Kupa", price: 45.0 },
  { id: 2, name: "Defter", price: 32.5 },
  { id: 3, name: "Kalem Seti", price: 89.9 },
];

export const SDPApiPlayground = () => {
  const defaultBaseUrl = import.meta.env.VITE_API_BASE || "http://127.0.0.1:4000";
  const [baseUrl, setBaseUrl] = useState(defaultBaseUrl);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [usingMockData, setUsingMockData] = useState(false);

  const testEndpoint = async () => {
    setLoading(true);
    setError(null);
    setUsingMockData(false);

    try {
      const response = await fetch(`${baseUrl}/api/v1/products`);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.log("API erişilemedi, mock veri kullanılıyor");
      setProducts(MOCK_PRODUCTS);
      setUsingMockData(true);
      setError(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffe6f3 0%, #e5e1ff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(10px)",
          borderRadius: "24px",
          padding: "40px",
          maxWidth: "600px",
          width: "100%",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "600",
            margin: "0 0 8px 0",
            background: "linear-gradient(135deg, #c084fc 0%, #ec4899 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          SDP's API Playground
        </h1>

        <p
          style={{
            fontSize: "14px",
            color: "#9333ea",
            textAlign: "center",
            margin: "0 0 32px 0",
            fontWeight: "400",
          }}
        >
          A minimal pastel interface to test your Rails API endpoints
        </p>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontSize: "13px",
              fontWeight: "500",
              color: "#7c3aed",
              marginBottom: "8px",
            }}
          >
            Base URL
          </label>
          <input
            type="text"
            value={baseUrl}
            onChange={(e) => setBaseUrl(e.target.value)}
            placeholder="http://127.0.0.1:4000"
            style={{
              width: "100%",
              padding: "12px 16px",
              fontSize: "14px",
              border: "2px solid rgba(192, 132, 252, 0.3)",
              borderRadius: "12px",
              background: "rgba(255, 255, 255, 0.5)",
              outline: "none",
              transition: "all 0.3s ease",
              boxSizing: "border-box",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#c084fc";
              e.target.style.background = "rgba(255, 255, 255, 0.8)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "rgba(192, 132, 252, 0.3)";
              e.target.style.background = "rgba(255, 255, 255, 0.5)";
            }}
          />
        </div>

        <button
          onClick={testEndpoint}
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            fontSize: "15px",
            fontWeight: "600",
            color: "white",
            background: loading
              ? "linear-gradient(135deg, #d8b4fe 0%, #f9a8d4 100%)"
              : "linear-gradient(135deg, #c084fc 0%, #ec4899 100%)",
            border: "none",
            borderRadius: "12px",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(192, 132, 252, 0.3)",
            marginBottom: "24px",
          }}
          onMouseEnter={(e) => {
            if (!loading) {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(192, 132, 252, 0.4)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(192, 132, 252, 0.3)";
          }}
        >
          {loading ? "Loading..." : "Test Endpoint"}
        </button>

        {loading && (
          <p
            style={{
              textAlign: "center",
              color: "#9333ea",
              fontSize: "14px",
              fontStyle: "italic",
            }}
          >
            Loading...
          </p>
        )}

        {error && (
          <div
            style={{
              padding: "16px",
              background: "rgba(239, 68, 68, 0.1)",
              borderRadius: "12px",
              border: "1px solid rgba(239, 68, 68, 0.3)",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#dc2626",
                fontSize: "14px",
              }}
            >
              Error: {error}
            </p>
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <p
            style={{
              textAlign: "center",
              color: "#9333ea",
              fontSize: "14px",
              fontStyle: "italic",
            }}
          >
            No products.
          </p>
        )}

        {!loading && products.length > 0 && (
          <div
            style={{
              background: "rgba(255, 255, 255, 0.5)",
              borderRadius: "12px",
              padding: "20px",
              border: "1px solid rgba(192, 132, 252, 0.2)",
            }}
          >
            {usingMockData && (
              <p
                style={{
                  fontSize: "12px",
                  color: "#9333ea",
                  fontStyle: "italic",
                  marginTop: 0,
                  marginBottom: "16px",
                }}
              >
                Mock veri gösteriliyor
              </p>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {products.map((product) => (
                <div
                  key={product.id}
                  style={{
                    padding: "12px 16px",
                    background: "rgba(255, 255, 255, 0.6)",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.6)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#4c1d95",
                      fontWeight: "500",
                    }}
                  >
                    {product.name}
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#7c3aed",
                    }}
                  >
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SDPApiPlayground;

