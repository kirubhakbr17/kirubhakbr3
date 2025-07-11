import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react";

// Sample product data
const productsData = [
  { id: 1, name: "T-shirt", price: 20, image: "https://via.placeholder.com/150", description: "Comfortable cotton T-shirt." },
  { id: 2, name: "Shoes", price: 50, image: "https://via.placeholder.com/150", description: "Stylish running shoes." },
  { id: 3, name: "Hat", price: 15, image: "https://via.placeholder.com/150", description: "Cool summer hat." },
];

export default function Ecommerce() {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [orders, setOrders] = useState(() => JSON.parse(localStorage.getItem("orders")) || []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const placeOrder = () => {
    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      items: [...cart],
      total: cart.reduce((acc, item) => acc + item.price * item.qty, 0)
    };
    setOrders([newOrder, ...orders]);
    setCart([]);
  };

  return (
    <Router>
      <div className="p-4">
        <nav className="flex gap-4 mb-4 border-b pb-2">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart ({cart.length})</Link>
          <Link to="/orders">Orders</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/products/:id" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} placeOrder={placeOrder} />} />
          <Route path="/orders" element={<Orders orders={orders} />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Welcome to ShopEase!</h2>
    <p>Browse our featured products and start shopping today.</p>
  </div>
);

const Products = ({ addToCart }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {productsData.map((product) => (
      <div key={product.id} className="border p-4 rounded">
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
          <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        </Link>
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)} className="mt-2 px-4 py-1 bg-blue-500 text-white rounded">Add to Cart</button>
      </div>
    ))}
  </div>
);

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="max-w-md mx-auto border p-4 rounded">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="mt-2">{product.description}</p>
      <p className="mt-2 font-semibold">${product.price}</p>
      <button onClick={() => addToCart(product)} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">Add to Cart</button>
    </div>
  );
};

const Cart = ({ cart, removeFromCart, placeOrder }) => (
  <div>
    <h2 className="text-xl font-bold mb-4">Your Cart</h2>
    {cart.length === 0 ? (
      <p>Cart is empty.</p>
    ) : (
      <div>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b py-2">
            <div>{item.name} x {item.qty}</div>
            <div>${item.price * item.qty}</div>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
          </div>
        ))}
        <div className="mt-4 font-bold">
          Total: ${cart.reduce((acc, item) => acc + item.price * item.qty, 0)}
        </div>
        <button onClick={placeOrder} className="mt-2 px-4 py-1 bg-green-500 text-white rounded">Place Order</button>
      </div>
    )}
  </div>
);

const Orders = ({ orders }) => (
  <div>
    <h2 className="text-xl font-bold mb-4">Your Orders</h2>
    {orders.length === 0 ? (
      <p>No orders yet.</p>
    ) : (
      orders.map((order) => (
        <div key={order.id} className="border p-4 mb-4 rounded">
          <div><strong>Order ID:</strong> {order.id}</div>
          <div><strong>Date:</strong> {order.date}</div>
          <div><strong>Total:</strong> ${order.total}</div>
          <div className="mt-2">
            <strong>Items:</strong>
            <ul className="list-disc ml-6">
              {order.items.map((item) => (
                <li key={item.id}>{item.name} x {item.qty}</li>
              ))}
            </ul>
          </div>
        </div>
      ))
    )}
  </div>
);


