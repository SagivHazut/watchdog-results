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
    component: HomePage,
    name: "Dashboard",
  },
  {
    path: "/PerformanceTrends",
    component: PerformanceTrends,
    name: "Performance",
  },
  {
    path: "/TestResultsTable",
    component: TestResultsTable,
    name: "Analyst",
  },
];

export default routes;
