import React, { useState } from 'react';
import './App.css'; 

function Calculator() {
    const [inputValue, setInputValue] = useState("0");

    const handleButtonClick = (e) => {
        const buttonValue = e.target.innerText;

        switch (buttonValue) {
            case 'AC':
                setInputValue("0");
                break;
            case 'DEL':
                setInputValue(prevValue => {
                    if (prevValue.length === 1) {
                        return "0";
                    }
                    return prevValue.slice(0, -1);
                });
                break;
            case '=':
                try {
                    setInputValue(eval(inputValue).toString());
                } catch (error) {
                    setInputValue("Error");
                }
                break;
            default:
                setInputValue(prevValue => prevValue === "0" ? buttonValue : prevValue + buttonValue);
                break;
        }
    };

    return (
        <div className="container">
            <div className="calc-input">
                <p name="user-input" id="userinput">{inputValue}</p>
            </div>

            <div className="calc-keys" onClick={handleButtonClick}>
                <button type="button" className="otherKeys operations">AC</button>
                <button type="button" className="otherKeys operations">DEL</button>
                <button type="button" className="otherKeys operations">%</button>
                <button type="button" className="operations">/</button>
                <button type="button" className="numbers">7</button>
                <button type="button" className="numbers">8</button>
                <button type="button" className="numbers">9</button>
                <button type="button" className="operations">*</button>
                <button type="button" className="numbers">4</button>
                <button type="button" className="numbers">5</button>
                <button type="button" className="numbers">6</button>
                <button type="button" className="operations">-</button>
                <button type="button" className="numbers">1</button>
                <button type="button" className="numbers">2</button>
                <button type="button" className="numbers">3</button>
                <button type="button" className="operations">+</button>
                <button type="button" className="key-zero numbers">0</button>
                <button type="button" className="numbers">.</button>
                <button type="button" className="operations operations">=</button>
            </div>
        </div>
    );
}

export default Calculator;
