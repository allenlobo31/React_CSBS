import React, { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [show, setShow] = useState(false); 
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (form.password.length < 6) errs.password = "Min 6 characters";
    
    setErrors(errs);
    if (Object.keys(errs).length === 0) alert("Form Submitted Successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 p-2 border rounded space-y-4">
      <h2 className="text-xl text-center">Simple Form</h2>

      <input className="w-full border p-2 rounded" 
             placeholder="Name" 
             onChange={e => setForm({...form, name: e.target.value.trim()})} />
      {errors.name && <p className="text-red-500">{errors.name}</p>}

      <input className="w-full border p-2 rounded" 
             placeholder="Email" 
             onChange={e => setForm({...form, email: e.target.value.trim()})} />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <input type={show ? "text" : "password"} 
             className="w-full border p-2 rounded" 
             placeholder="Password" 
             onChange={e => setForm({...form, password: e.target.value.trim()})} />
      {errors.password && <p className="text-red-500">{errors.password}</p>}

      <label className="flex items-center text-sm">
        <input type="checkbox" className="mr-2" onChange={() => setShow(!show)} /> Show Password
      </label>
      
      <button className="w-full bg-green-600 text-white py-2 rounded">Submit</button>
    </form>
  );
}