import './Component.css'

import Add from "../../Components/Add/Add";
import Counter from "../../Components/Counter/Counter";
import Timer from "../../Components/Timer/Timer";
import Temperatures from "../../Components/Temperatures/Temperatures";
function Component() {

  return (
    <div className="components-container">
      <h1>COMPONENTS</h1>
      <div className="container">
        <div className="box01">
          <Counter className={"counter"} name={""} value={0} />
          <Timer className={"timer"} name={""} />
        </div>
        <div className="box02">
          <Add className={"add"} name={""} aValue={0} bValue={0} />
        </div>
        <div className="box03">
          <Temperatures
            className={"temperatures"}
            name={""}
            initFahrenheit={0}
          />
        </div>
      </div>
    </div>
  );
}

export default Component;