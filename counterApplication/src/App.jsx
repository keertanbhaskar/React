import React, { useState } from 'react'

function App() {
  const [counter,setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const minValue = 0;
  
  // Increment handler
  const handleIncrement = () =>{
    setCounter(prevCounter => prevCounter + step);
  };

  // Decrement Handler
  const handleDecrement = () =>{
    if(counter - step >= minValue){
      setCounter((prevCounter) => prevCounter - step);
    }
  }

  // Reset count
  const resetHandler = () =>{
    setCounter(0);
  }

  const handleStepChange = (event) =>{
    setStep(Number(event.target.value));
  };

  return (
    <div className="text-center m-15 border rounded-2xl p-8 bg-amber-50 border-solid border-amber-300">
      <h1 className="font-bold text-red-400">Counter Application</h1>
      <div className="text-2xl m-5">
        <span>{counter}</span>
      </div>
      <div>
        <button
          onClick={handleIncrement}
          className="m-2.5 p-2 text-xl cursor-pointer border rounded-md bg-red-400"
        >
          Increase by {step}
        </button>
        <button
          onClick={handleDecrement}
          className="m-2.5 p-2 text-xl cursor-pointer border rounded-md  bg-amber-400"
        >
          Decrease by {step}
        </button>
        <button
          onClick={resetHandler}
          className="m-2.5 p-2 text-xl cursor-pointer border rounded-md bg-blue-400"
        >
          Reset
        </button>
      </div>

      <div className="mt-5 text-center">
        <label className="text-xl">
          Set Increment/Decrement step:
          <input
            type="number"
            value={step}
            onChange={handleStepChange}
            min="1"
            className="p-1.5 m-2 text-xl border rounded-md border-amber-400 "
          />
        </label>
      </div>
    </div>
  );
}

export default App