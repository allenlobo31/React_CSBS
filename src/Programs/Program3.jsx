import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col items-center m-80 gap-4">
      <h1 className="text-2xl font-bold">Simple Counter</h1>
      <h2 className="text-2xl">Count: {count}</h2>
      <div className="flex items-center gap-2">
        <label>Step:</label>
        <input 
          type="number" value={step} min="1"
          onChange={(e) => setStep(Number(e.target.value))}
          className="border p-1 w-16 text-center"
        />
      </div>
      <div className="flex gap-2">
        <button onClick={() => setCount(count + step)} 
                className="px-4 py-2 border rounded">Increase</button>
        <button onClick={() => setCount(Math.max(0, count - step))} 
                className="border px-4 py-2 rounded">Decrease</button>
        <button onClick={() => setCount(0)} 
                className="border px-4 py-2 rounded">Reset</button>
      </div>
    </div>
  );
}