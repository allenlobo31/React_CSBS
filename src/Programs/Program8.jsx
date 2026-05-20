import React, { useState } from 'react';

export default function Reminder() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [form, setForm] = useState({ name: "", dueDate: "", description: "" });

  const addTask = (e) => {
    e.preventDefault();
    if (!form.name || !form.dueDate) return;
    setTasks([...tasks, { ...form, id: Date.now(), completed: false }]);
    setForm({ name: "", dueDate: "", description: "" });
  };

  const filtered = tasks.filter(t => filter === "completed" ? t.completed : filter === "notCompleted" ? !t.completed : true);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded border">
      <h2 className="text-center mb-4">Reminder App</h2>
      <form onSubmit={addTask} className="space-y-2 mb-4">

        <input className="w-full border p-2"
               placeholder="Task" 
               name="name" 
               value={form.name} 
               onChange={e => setForm({...form, name: e.target.value})} />

        <input type="date"
               className="w-full border p-2" 
               name="dueDate" 
               value={form.dueDate} 
               onChange={e => setForm({...form, dueDate: e.target.value})} />

        <textarea className="w-full border p-2"
                  placeholder="Description" 
                  name="description" 
                  value={form.description} 
                  onChange={e => setForm({...form, description: e.target.value})} />

        <button className="w-full bg-green-600 text-white py-2 rounded">Add Task</button>

      </form>

      <div className="flex gap-2 mb-4 text-xs font-bold">
        {["all", "completed", "notCompleted"].map(f => (
          <button key={f} 
                  onClick={() => setFilter(f)} 
                  className={`flex-1 py-1 rounded ${filter === f ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>{f.toUpperCase()}</button>
        ))}
      </div>

      <ul className="space-y-2">
        {filtered.map(t => (
          <li key={t.id} className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
            <strong>{t.name}</strong> <span className="text-xs text-gray-500">- Due: {t.dueDate}</span>
            <p className="text-xs italic">{t.description}</p>
            <input type="checkbox" 
                   checked={t.completed} 
                   onChange={() => setTasks(tasks.map(x => x.id === t.id ? {...x, completed: !x.completed} : x))} /> {t.completed ? "Done" : "Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}