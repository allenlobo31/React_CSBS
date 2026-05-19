import React, { useState } from "react";

const BasicFigure = ({ imageUrl, caption, onRemove }) => (
  <div className="w-56 h-72 p-3 border rounded hover:shadow-lg">
    <div className="overflow-hidden rounded">
      <img src={imageUrl} alt={caption} className="w-full" />
    </div>
    <figcaption className="mt-2 font-bold">{caption}</figcaption>
    <button onClick={onRemove} className="mt-2 w-full bg-red-500 text-white rounded">Remove</button>
  </div>
);

export default function App() {
  const [figures, setFigures] = useState([
    { id: 1, imageUrl: "https://i.pinimg.com/1200x/2e/a6/54/2ea65480fdfcc30d57e84cda93e2f30f.jpg", caption: "Onepiece 1" },
    { id: 2, imageUrl: "https://i.pinimg.com/1200x/2e/a6/54/2ea65480fdfcc30d57e84cda93e2f30f.jpg", caption: "Onepiece 2" }
  ]);
  const [url, setUrl] = useState("");
  const [cap, setCap] = useState("");

  const addFigure = () => {
    if (!url || !cap) return;
    setFigures([...figures, { id: Date.now(), imageUrl: url, caption: cap }]);
    setUrl(""); setCap("");
  };

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl mb-2">Figure List</h1>
      <div className="flex justify-center gap-2 mb-8">
        <input className="border p-2 rounded" placeholder="URL" value={url} onChange={e => setUrl(e.target.value)} />
        <input className="border p-2 rounded" placeholder="Caption" value={cap} onChange={e => setCap(e.target.value)} />
        <button onClick={addFigure} className="bg-blue-600 text-white px-4 rounded">Add</button>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {figures.map(f => (
          <BasicFigure key={f.id} imageUrl={f.imageUrl} caption={f.caption} 
                       onRemove={() => setFigures(figures.filter(x => x.id !== f.id))} />
        ))}
      </div>
    </div>
  );
}