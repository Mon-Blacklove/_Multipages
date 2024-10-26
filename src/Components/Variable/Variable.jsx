//import componpents

//import styles
import'./Variable.css'

function Variable({type, name, value, setValue}) {


    return(
        <div className="variable-container">
            <h3 className='variable-title'>{name || "Variable"}</h3>
            <button className='badge btn btn-danger' onClick={() => setValue(value - 1)}>-</button>
            <span className='variable-value'>{type && type === 'int' ? value : value.toFixed(2)}</span>
            <button className='badge btn btn-success' onClick={() => setValue(value + 1)}>+</button>
        </div>
    )
}

export default Variable