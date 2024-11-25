// routes.js
import HomePage from "./components/HomePage.jsx";
import PerformanceTrends from "./components/PerformanceTrends.jsx";
import TestResultsTable from "./components/TestRunsOverview.jsx";
import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Navigate to='/Dashboard' replace />,
  },
  {
    path: "/Dashboard",
    element: <HomePage />,
    name: "Dashboard",
  },
  {
    path: "/PerformanceTrends",
    element: <PerformanceTrends />,
    name: "Test Details",
  },
  {
    path: "/TestResultsTable",
    element: <TestResultsTable />,
    name: "Test Details",
  },
];

export default routes;
