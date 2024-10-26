//import components
import Variabie from '../Variable/Variable'
import { useEffect, useState } from 'react'

//import styles
import './Temperatures.css'

function Temperatures({ name, initCelsius, initFahrenheit, initKelvin }) {
    const [celsius, setCelsius] = useState(initCelsius || 25);
    const [fahrenheit, setFahrenheit] = useState(initFahrenheit || 77);
    const [kelvin, setKelvin] = useState(initKelvin || 298.15);

    //function convert between celsius, fahrenheit, kelvin
    const cToF = (c) => (c * 9 / 5) + 32;
    const cToK = (c) => c + 273.15;
    const fToC = (f) => (f - 32) * 5 / 9;
    const fToK = (f) => (f + 459.67) * 5 / 9;
    const kToC = (k) => k - 273.15;
    const kToF = (k) => (k * 9 / 5) - 459.67;

    //Celsius --> Fahrenheit || Kelvin
    useEffect(() => {
        const newFahrenheit = cToF(celsius);
        const newKelvin = cToK(celsius);
        // ใช้ toFixed(2) เพื่อเปรียบเทียบค่าให้แม่นยำขึ้น
        if (fahrenheit.toFixed(2) !== newFahrenheit.toFixed(2)) setFahrenheit(newFahrenheit);
        if (kelvin.toFixed(2) !== newKelvin.toFixed(2)) setKelvin(newKelvin);
    }, [celsius]);

    //Fahrenheit --> Celsius || Kelvin
    useEffect(() => {
        const newCelsius = fToC(fahrenheit);
        const newKelvin = fToK(fahrenheit);
        if (celsius.toFixed(2) !== newCelsius.toFixed(2)) setCelsius(newCelsius);
        if (kelvin.toFixed(2) !== newKelvin.toFixed(2)) setKelvin(newKelvin);
    }, [fahrenheit]);

    //Kelvin --> Celsius || Fahrenheit
    useEffect(() => {
        const newCelsius = kToC(kelvin);
        const newFahrenheit = kToF(kelvin);
        if (celsius.toFixed(2) !== newCelsius.toFixed(2)) setCelsius(newCelsius);
        if (fahrenheit.toFixed(2) !== newFahrenheit.toFixed(2)) setFahrenheit(newFahrenheit);
    }, [kelvin]);

    return (
        <div className="temperatures-container">
            <h2 className="temperatures-title">{name || "Temperature"}</h2>
            <h3 className="temperatures-variables">
                <span className="badge bg-primary">{celsius.toFixed(2)}&deg;C </span>
                <span className="badge bg-primary">{fahrenheit.toFixed(2)}&deg;F </span>
                <span className="badge bg-primary">{kelvin.toFixed(2)}&deg;K </span>
            </h3>

            <div className="temperatures-variables">
                <Variabie name={'Celsius'} value={celsius} setValue={setCelsius} />
                <Variabie name={'Fahrenheit'} value={fahrenheit} setValue={setFahrenheit} />
                <Variabie name={'Kelvin'} value={kelvin} setValue={setKelvin} />
            </div>
        </div>
    );
}

export default Temperatures;