import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar({ tab, setTab, setToken, products, carts }) {
  return (
    <div className="navbar-container">
      <Link to={"/home"}>
        <button
          className={
            "btn " + (tab === "home" ? " btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("home")}
        >
          Home
        </button>
      </Link>
      <Link to={"/calculator"}>
        <button
          className={
            "btn " +
            (tab === "calculator" ? " btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("calculator")}
        >
          Calculator
        </button>
      </Link>
        
      <Link to={"/component"}>
        <button
          className={
            "btn " +
            (tab === "component" ? " btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("component")}
        >
          Component
        </button>
      </Link>
      <Link to={"/todo"}>
        <button
          className={
            "btn " + (tab === "todo" ? " btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("todo")}
        >
          Todo
        </button>
      </Link>
      <Link to={"/products"}>
        <button
          className={
            "btn " +
            (tab === "products" ? " btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("products")}
        >
          Products({products.length})
        </button>
      </Link>

      <Link to={"/carts"}>
        <button
          className={
            "position-relative btn " +
            (tab === "carts" ? " btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("carts")}
        >
          Carts
          {carts.length > 0 &&

            (<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {carts.length < 100 ? carts.length : "99+"}
              <span className="visually-hidden">unread messages</span>
            </span>)
          }
        </button>
      </Link>

      <button
        className="btn btn-danger"
        onClick={() => {
          setToken("");
          setRole("");
          setTab("home");
        }}
      >
        Logout
      </button>
    </div>
  );
}
export default Navbar;
