import React, { useState } from 'react';

export default function App() {
  const [text, setText] = useState("Type something..."); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <input 
        type="text" 
        placeholder="Type something..." 
        className="border rounded"
        onChange={(e) => setText(e.target.value)} 
      />
      <h1 className="text-3xl font-bold">{text}</h1>
    </div>
  );
}