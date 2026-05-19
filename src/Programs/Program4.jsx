import React, { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleStatus = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t)); 
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl text-center">To-Do List</h2>
      <div className="flex gap-2 mb-4">
        <input 
          className="flex-1 p-2 border rounded" value={newTask}
          onChange={(e) => setNewTask(e.target.value)} placeholder="Enter a task..."
        />
        <button onClick={addTask} className="bg-blue-600 text-white px-4 rounded">Add</button>
      </div>

      <ul className="space-y-2">
        {tasks.map(t => (
          <li key={t.id} className="flex justify-between items-center p-2 rounded border">
            <span onClick={() => toggleStatus(t.id)} 
              className={`cursor-pointer ${t.completed ? 'line-through text-green-600 font-bold' : 'text-black'}`}>
              {t.text}
            </span>
            <button onClick={() => setTasks(tasks.filter(x => x.id !== t.id))} 
              className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}