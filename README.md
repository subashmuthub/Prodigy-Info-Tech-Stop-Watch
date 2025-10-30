# Prodigy-Info-Tech-Stop-Watch
ChatGPT
This is a copy of a conversation between ChatGPT & Anonymous.

Report conversation
You said:
online-store/
│
├── src/
│   ├── App.jsx
│   └── index.js
│
└── package.json give the code in 8 mark 
ChatGPT said:
Here’s a simple React Online Store App (8-mark level) with CRUD operations using an API — neatly structured for your folder layout:

📁 Folder Structure
online-store/
│
├── src/
│   ├── App.jsx
│   └── index.js
│
└── package.json
🧩 package.json
{
  "name": "online-store",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "vite"
  },
  "dependencies": {
    "axios": "^1.6.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
⚛️ src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
💻 src/App.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/posts"; // fake API for demo

export default function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ title: "", body: "" });

  useEffect(() => {
    axios.get(API).then(res => setProducts(res.data.slice(0, 5)));
  }, []);

  const addProduct = async () => {
    const res = await axios.post(API, form);
    setProducts([...products, res.data]);
    setForm({ title: "", body: "" });
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    setProducts(products.filter(p => p.id !== id));
  };

  const updateProduct = async (id) => {
    const res = await axios.put(`${API}/${id}`, form);
    setProducts(products.map(p => (p.id === id ? res.data : p)));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🛒 Simple Online Store</h2>

      <input
        placeholder="Product Title"
        value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })}
      />
      <input
        placeholder="Description"
        value={form.body}
        onChange={e => setForm({ ...form, body: e.target.value })}
      />
      <button onClick={addProduct}>Add</button>

      <ul>
        {products.map(p => (
          <li key={p.id}>
            <b>{p.title}</b> - {p.body}
            <button onClick={() => deleteProduct(p.id)}>Delete</button>
            <button onClick={() => updateProduct(p.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
⚙️ Run Instructions
npm install
npm run start
✅ Features Covered (8 Marks)

API Integration (using axios)

CRUD operations (Create, Read, Update, Delete)

React Hooks (useState, useEffect)

Simple clean UI

Would you like me to show the Express backend API version too (so it uses your own /api/products instead of JSONPlaceholder)?

You said:
api illa ma send pannu
ChatGPT said:
Okay 👍 here’s a simple React Online Store App (without API) — fully local CRUD version suitable for 8 marks.

📁 Folder Structure
online-store/
│
├── src/
│   ├── App.jsx
│   └── index.js
│
└── package.json
🧩 package.json
{
  "name": "online-store",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "vite"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
⚛️ src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
💻 src/App.jsx
import React, { useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "" });
  const [editIndex, setEditIndex] = useState(null);

  const addProduct = () => {
    if (!form.name || !form.price) return alert("Enter details!");
    if (editIndex !== null) {
      const updated = [...products];
      updated[editIndex] = form;
      setProducts(updated);
      setEditIndex(null);
    } else {
      setProducts([...products, form]);
    }
    setForm({ name: "", price: "" });
  };

  const editProduct = (i) => {
    setForm(products[i]);
    setEditIndex(i);
  };

  const deleteProduct = (i) => {
    setProducts(products.filter((_, idx) => idx !== i));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🛒 Online Store</h2>
      <input
        placeholder="Product Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Price"
        type="number"
        value={form.price}
        onChange={e => setForm({ ...form, price: e.target.value })}
      />
      <button onClick={addProduct}>{editIndex !== null ? "Update" : "Add"}</button>

      <ul>
        {products.map((p, i) => (
          <li key={i}>
            {p.name} - ₹{p.price}
            <button onClick={() => editProduct(i)}>Edit</button>
            <button onClick={() => deleteProduct(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
⚙️ Run Instructions
npm install
npm run start
✅ Marks Coverage (8 Marks):

CRUD operations (Add, Edit, Delete, Display)

Uses React state and events

Clean and minimal UI

No external API

Would you like me to add localStorage support (so data stays after refresh