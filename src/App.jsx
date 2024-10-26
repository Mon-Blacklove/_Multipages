import { HashRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import Layout from "./Layout/Layout/Layout";
import Home from "./Page/Home/Home";
import Todo from "./Page/Todo/Todo";
import Calculator from "./Page/Calculator/Calculator";
import Component from "./Page/Component/Component";
import Products from "./Page/Products/Products";
import Carts from "./Page/Carts/Carts";

import { fecthProducts } from "./DATA/products";
import Login from "./Page/Login/Login";
//HashRouter, BrowserRouter
//localhost:5173/#/<path>
function App() {
  const [token, setToken] = useState("user");
  const [role, setRole] = useState("pass");

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  const [tab, setTab] = useState("home");

  useEffect(() => {
    setProducts(fecthProducts());
  }, []);
  useEffect(() => {
    console.log(products);
  });

  if (token === "") {
    return <Login setToken={setToken} setRole={setRole} />;
  } else {
    return (
      <div className="App-container">
        <HashRouter>
          <Routes>
            <Route
              element={
                <Layout
                  tab={tab}
                  setTab={setTab}
                  products={products}
                  carts={carts}
                  setToken={setToken}
                />
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/component" element={<Component />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/todo" element={<Todo />} />
              <Route
                path="/products"
                element={
                  <Products
                    products={products}
                    carts={carts}
                    setCarts={setCarts}
                  />
                }
              />
              <Route
                path="/carts"
                element={<Carts carts={carts} setCarts={setCarts} />}
              />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default App;
