import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import HomePage from "./components/HomePage.jsx";
// import AnalyticsPage from "./components/AnalyticsPage.jsx";
// import SettingsPage from "./components/SettingsPage.jsx";
// import DatabasePage from "./components/DatabasePage.jsx";

function App() {
  return (
    <Router>
      <div className='App'>
        <Sidebar />
        <div className='content'>
          <Routes>
            <Route path='/home/dashboard' element={<HomePage />} />
            {/* <Route path='/analytics/:tab' element={<AnalyticsPage />} />
            <Route path='/settings/:tab' element={<SettingsPage />} />
            <Route path='/database/:tab' element={<DatabasePage />} /> */}
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
