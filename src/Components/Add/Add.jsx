//import componpents
import Variable from "../Variable/Variable";

//import styles
import "./Add.css";

import { useEffect, useState } from "react";
function Add({ name, aValue, bValue }) {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  useEffect(() => {
    setA(aValue);
    setB(bValue);
  }, [aValue, bValue]);

  return (
    <div className="add-container">
      <h2 className="add-title">{name || "Add"}</h2>
      <h3 className="add-display">
        <span className="badge bg-primary">A = {a}</span>
        <span className="badge bg-success">A + B = {a + b}</span>
        <span className="badge bg-primary">B = {b}</span>
      </h3>
      <div className="add-variables">
        <Variable type={"int"} name={"A"} value={a} setValue={setA} />
        <Variable type={"int"} name={"B"} value={b} setValue={setB} />
      </div>
    </div>
  );
}

export default Add;
