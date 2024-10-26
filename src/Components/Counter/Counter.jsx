//import componpents
import { useState } from 'react'
import Variable from '../Variable/Variable'


//import styles
import './Counter.css'

function Counter(props){

    //      read    write                initial
    //       v        v                     v
    const [value, setValue] = useState(props.value || 0)

    function increment(){
        setValue(value + 1)
        console.log(value)
    }

    function decrement(){
        setValue(value - 1)
        console.log(value)
    }

    return(
        <div className="counter-container">
            <h2 className='counter-title'>{props.name || "Counter"}</h2>
            <button className='badge btn btn-danger' onClick={decrement}>-</button>
            <span className='counter-value'>{value}</span>
            <button className='badge btn btn-success' onClick={increment}>+</button>
        </div>
    )
}

export default Counter