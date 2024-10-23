import { useState, useEffect } from 'react';
import Variable from '../variable/variable';

import './temperatures.css';

function Temperatures() {

    const [Cel, setCel] = useState(25);
    const [Fah, setFah] = useState((Cel * 1.8) + 32);
    const [Kel, setKel] = useState(Cel + 273.15);

    useEffect(() => {
        setFah((Cel * 1.8) + 32);
        setKel(Cel + 273.15);
    }, [Cel]);

    useEffect(() => {
        setCel((Fah - 32) / 1.8);
    }, [Fah]);

    useEffect(() => {
        setCel(Kel - 273.15);
    }, [Kel]);

    return (
        <div className="containerx">

            <div>
                <h3>Temperatures</h3>
            </div>

            <div className="container-badges">
                <span className='badge bg-primary'>{Cel.toFixed(2)} °C</span>
                <span className='badge bg-primary'>{Fah.toFixed(2)} °F</span>
                <span className='badge bg-primary'>{Kel.toFixed(2)} °K</span>
            </div>

            <div className="temperatures">
                <Variable className="variable" name="Celsius" count={Cel} setCount={setCel} />
                <Variable className="variable" name="Fahrenheit" count={Fah} setCount={setFah} />
                <Variable className="variable" name="Kelvin" count={Kel} setCount={setKel} />
            </div>

        </div>

    );
}

export default Temperatures;