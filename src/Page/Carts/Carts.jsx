import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Carts.css";

function Carts({ carts, setCarts }) {
  return (
    <div className="carts-container">
      <div className="carts-items-container">
        {carts.map((cart) => {
          return (
            <Card style={{ width: "18rem" }} key={cart.id}>
              <Card.Img variant="top" src={cart.thumbnailUrl} />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <b>{cart.title}</b>
                </Card.Title>
                <Card.Text>${cart.price.toFixed(2)}</Card.Text>
                <Button
                  className="btn btn-danger"
                  onClick={() =>
                    setCarts(carts.filter((c) => c.id !== cart.id))
                  }
                >
                  Remove From Cart
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <h4>
        items: {carts.length} items-total Price:$
        {carts
          .reduce((prev, cart) => {
            return prev + cart.price;
          }, 0)
          .toFixed(2)}
      </h4>
      <button>Chech Out</button>
    </div>
  );
}

export default Carts;
