import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EnvironmentProvider, useEnvironment } from "./libs/EnvironmentContext";
import Sidebar from "./components/Sidebar";
import routes from "./routes";
import ThemeToggle from "./components/ThemeToggle";
const AppRoutes = () => {
  const { environment, data } = useEnvironment();

  return (
    <Routes>
      {routes.map((route, index) => {
        if (route.component) {
          // Dynamically inject props into components
          return (
            <Route
              key={index}
              path={route.path}
              element={React.cloneElement(<route.component />, {
                environment,
                data,
              })}
            />
          );
        }
        return <Route key={index} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
};

const App = () => {
  return (
    <EnvironmentProvider>
      <Router>
        <div className='flex bg-gray-900'>
          <Sidebar />
          <AppRoutes />
          <div className='absolute right-0 z-index-0 bg-white dark:bg-gray-900 text-black dark:text-white transition-all'>
            <ThemeToggle />
          </div>
        </div>
      </Router>
    </EnvironmentProvider>
  );
};

export default App;
