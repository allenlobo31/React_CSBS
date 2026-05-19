import React, { useState } from "react";

const ProfileCard = ({ name, bio, image, bgColor }) => (
  <div style={{ backgroundColor: bgColor }} className="p-8 rounded-2xl text-center max-w-sm">
    <img src={image} className="w-32 h-32 rounded-full border-4 border-white mx-auto mb-4 object-cover" alt="Profile" />
    <h2 className="text-2xl font-bold">{name}</h2>
    <p className=" mt-2">{bio}</p>
  </div>
);

export default function App() {
  const [bgColor, setBgColor] = useState("#fafafa");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-2xl font-bold">User Profile</h1>
      <ProfileCard 
        name="Monkey D. Luffy" 
        bio="Captain of Straw Hat Pirates." 
        image="https://i.pinimg.com/1200x/2e/a6/54/2ea65480fdfcc30d57e84cda93e2f30f.jpg" 
        bgColor={bgColor} 
      />
      <div className="flex gap-2">
        <button onClick={() => setBgColor("#fafafa")} className="bg-gray-300 px-4 py-2 rounded">Light</button>
        <button onClick={() => setBgColor("#e0f7fa")} className="bg-cyan-100 px-4 py-2 rounded">Blue</button>
        <button onClick={() => setBgColor("#ffe0b2")} className="bg-orange-100 px-4 py-2 rounded">Orange</button>
      </div>
    </div>
  );
}