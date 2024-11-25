import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import routes from "./routes.js";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <Router>
      <div className='App'>
        <ThemeProvider>
          <div>
            <ThemeToggle />
          </div>
        </ThemeProvider>
        <Sidebar />
        <div className='content'>
          <Routes>
            {routes.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
