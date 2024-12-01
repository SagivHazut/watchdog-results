import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import routes from "./routes";
import ThemeToggle from "./components/ThemeToggle.jsx";

function App() {
  return (
    <Router>
      <div className='flex bg-gray-900'>
        <Sidebar />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
        <header className='absolute right-0 z-index-0 bg-white dark:bg-gray-900 text-black dark:text-white transition-all'>
          <ThemeToggle />
        </header>
      </div>
    </Router>
  );
}

export default App;
