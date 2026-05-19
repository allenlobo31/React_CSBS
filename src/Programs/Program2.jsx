import React from 'react';

const Header = ({ title }) => (
  <header className="bg-blue-600 p-4 text-center">
    <h1 className="text-2xl font-bold">{title}</h1>
  </header>
);

const Footer = ({ tagline }) => (
  <footer className="bg-blue-400 p-2 text-center fixed bottom-0 w-full">
    <p className="text-sm italic">{tagline}</p>
  </footer>
);

export default function App() {
  const appTitle = "My Simple React App"; // 
  const appTagline = "2025 Learn React Props Easily"; // 

  return (  
    <div className="min-h-screen">
      <Header title={appTitle} />
      <main className="p-10 text-center text-xl">
        This is the main content of the app.
      </main>
      <Footer tagline={appTagline} />
    </div>
  );
}